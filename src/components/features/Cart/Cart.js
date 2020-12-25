import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { countItems, allProducts, addOne, removeOne, remove } from '../../../redux/cartRedux.js';
import styles from './Cart.module.scss';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const Component = ({ className, children, products, removeOne, addOne, remove }) => {
  const subtotal = () => {
    let sum = 0;
    for (let product of products) {
      sum = sum + product.amount * product.price;
    }
    return sum;
  };
  return (
    <div className={clsx(className, styles.root)}>
      <Typography gutterBottom variant="h4" component="p">
            Cart
      </Typography>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product._id} className={styles.product}>
            <Typography gutterBottom variant="subtitle1" component="p">
              {product.name}
            </Typography>
            <div className={styles.photo}>
              <img src={product.photos[0]} alt={product.name}></img>
            </div>
            <div className={styles.amount}>
              <div className={styles.amount_buttons}>
                <IconButton
                  onClick={() => removeOne(product._id)}
                  color="primary"
                  aria-label="remove-one"
                  component="span"
                  disabled={product.amount < 2 ? true : false}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body2">{product.amount}</Typography>
                <IconButton
                  onClick={() => addOne(product._id)}
                  color="primary"
                  aria-label="add-one"
                  component="span"
                  disabled={product.amount > 9 ? true : false}
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  onClick={() => remove(product._id)}
                  color="primary"
                  aria-label="remove"
                  component="span"
                >
                  <DeleteIcon />
                </IconButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    
      <div className={styles.buttons}>
        <div className={styles.subtotal}>
          <Typography variant="body2" color="secondary" gutterBottom>
                SUBTOTAL:
          </Typography>
          <Typography variant="body2" color="secondary" gutterBottom>
                PLN {subtotal()}
          </Typography>
        </div>
        <Button component={Link} to="/cart">
          VIEW CART
        </Button>
        <Button color="secondary" variant="outlined">
              Check out
        </Button>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  removeOne: PropTypes.func,
  addOne: PropTypes.func,
  remove: PropTypes.func,
};

const mapStateToProps = (state) => ({
  cartItems: countItems(state),
  products: allProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeOne: (arg) => dispatch(removeOne(arg)),
  addOne: (arg) => dispatch(addOne(arg)),
  remove: (arg) => dispatch(remove(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
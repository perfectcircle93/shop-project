import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import {
  allProducts,
  addOne,
  remove,
  removeOne,
  addInstruction,
} from '../../../redux/cartRedux';

import styles from './CartPage.module.scss';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const Component = ({
  className,
  children,
  products,
  removeOne,
  addOne,
  remove,
  addInstruction,
}) => {
  const subtotal = () => {
    let sum = 0;
    for (let product of products) {
      sum = sum + product.amount * product.price;
    }
    return sum;
  };
  const changeInstruction = (event) => {
    addInstruction(event.target.value);
  };
  return (
    <div className={clsx(className, styles.root)}>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product:</TableCell>
              <TableCell align="right">Price:</TableCell>
              <TableCell align="center">Qty:</TableCell>
              <TableCell align="right">Total:</TableCell>
              <TableCell align="right"> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product._id}>
                <TableCell component="th" scope="row">
                  <div className={styles.photo}>
                    <img src={product.photos[0]} alt={product.name}></img>
                    {product.name}
                  </div>
                </TableCell>
                <TableCell align="right">PLN {product.price}</TableCell>
                <TableCell align="right">
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
                      <Typography variant="h6">{product.amount}</Typography>
                      <IconButton
                        onClick={() => addOne(product._id)}
                        color="primary"
                        aria-label="add-one"
                        component="span"
                        disabled={product.amount > 9 ? true : false}
                      >
                        <AddIcon />
                      </IconButton>
                    </div>
                  </div>
                </TableCell>
                <TableCell align="right">
                  {product.amount * product.price}
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => remove(product._id)}
                    color="primary"
                    aria-label="remove"
                    component="span"
                  >
                    REMOVE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={styles.exitform}>
        <div className={styles.form}>
          <TextField
            className={styles.textarea}
            id="standard-multiline-static"
            label="Special instructions"
            multiline
            rows={4}
            onChange={changeInstruction}
          />
        </div>

        <div className={styles.info}>
          <Typography variant="h4">Subtotal: PLN {subtotal()}</Typography>
          <Typography>Shipping and taxes calculated at checkout</Typography>
          <Button color="secondary" variant="outlined">
            Check out
          </Button>
        </div>
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
  addInstruction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  products: allProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeOne: (arg) => dispatch(removeOne(arg)),
  addOne: (arg) => dispatch(addOne(arg)),
  remove: (arg) => dispatch(remove(arg)),
  addInstruction: (arg) => dispatch(addInstruction(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as CartPage,
  Container as CartPage,
  Component as CartPageComponent,
};
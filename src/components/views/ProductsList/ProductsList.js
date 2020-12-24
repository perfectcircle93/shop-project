import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';
import styles from './ProductsList.module.scss';
import { ProductBox } from '../../features/ProductBox/ProductBox.js';

import Grid from '@material-ui/core/Grid';


const Component = ({ className, children, products, category }) => (
  <div className={clsx(className, styles.root)}>
    <Grid container spacing={4}>
      {category === 'all'
        ? products.map((product) => (
          <Grid item xs={12} md={4} key={product._id}>
            <ProductBox {...product}></ProductBox>
          </Grid>
        ))
        : products
          .filter((product) => product.category === category)
          .map((product) => (
            <Grid item xs={12} md={4} key={product._id}>
              <ProductBox {...product}></ProductBox>
            </Grid>
          ))}
    </Grid>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  category: PropTypes.string,
};

const mapStateToProps = (state) => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as ProductsList,
  Container as ProductsList,
  Component as ProductsListComponent,
};
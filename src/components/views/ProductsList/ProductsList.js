import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';
import styles from './ProductsList.module.scss';
import { ProductBox } from '../../features/ProductBox/ProductBox.js';

import Grid from '@material-ui/core/Grid';


const Component = ({ className, children, products, match }) => (
  <div className={clsx(className, styles.root)}>
    <Grid container spacing={5}>
      {match.params.name === 'all'
        ? products.map((product) => (
          <Grid item xs={12} md={4} key={product._id}>
            <ProductBox {...product}></ProductBox>
          </Grid>
        ))
        : products
          .filter((product) => product.category === match.params.name)
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
  match: PropTypes.object,
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
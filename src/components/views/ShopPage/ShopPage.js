import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ShopPage.module.scss';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';

import { ProductsList } from '../ProductsList/ProductsList';
import { CategoriesNav } from '../../layout/CategoriesNav/CategoriesNav';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <Grid container spacing={0} className={styles.container}>
      <Grid item xs={12} md={9}>
        <ProductsList></ProductsList>
      </Grid>
      <Hidden smDown>
        <Grid item md>
          <Box className={styles.sideNav}>
            <CategoriesNav></CategoriesNav>
          </Box>
        </Grid>
      </Hidden>
    </Grid>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ShopPage,
  // Container as ShopPage,
  Component as ShopPageComponent,
};
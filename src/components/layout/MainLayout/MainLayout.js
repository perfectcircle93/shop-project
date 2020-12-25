import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './MainLayout.module.scss';
import { Header } from '../Header/Header';
import { CategoriesNav } from '../../layout/CategoriesNav/CategoriesNav';
import { Footer } from '../../layout/Footer/Footer';

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';


const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header></Header>
    <Grid container className={styles.container} spacing={5}>
      <Grid item xs={12} lg={9}>
        {children}
        <Footer></Footer>
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
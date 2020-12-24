import React from 'react';
import { Link as Routerlink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './Homepage.module.scss';
import { CategoriesNav } from '../../layout/CategoriesNav/CategoriesNav';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';



const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Grid container className={styles.container}>
      <Grid container item xs={12} md={9} justify="center">
        <Grid item xs={12} md={9} className={styles.splash}>
          <Link component={Routerlink} to="/collections/all">
            <img
              src="https://images.pexels.com/photos/2827263/pexels-photo-2827263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="asian plate"
            ></img>
          </Link>
          <div className={styles.header}>
            <Typography variant="h3" gutterBottom={true}>
              Free shipping
            </Typography>
            <Link
              component={Routerlink}
              variant="subtitle2"
              underline="always"
              color="secondary"
              to="/collections/all"
            >
              shop now
            </Link>
          </div>
        </Grid>
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
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
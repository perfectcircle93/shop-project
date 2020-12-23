import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PageNav } from '../PageNav/PageNav';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import { connect } from 'react-redux';
import { countItems } from '../../../redux/cartRedux.js';

import styles from './Header.module.scss';

const Component = ({ className, cartItems }) => (
  <div className={clsx(className, styles.root)}>
    <Grid
      container
      spacing={0}
      alignItems="center"
      className={styles.container}
    >
      <Grid item xs>
        <PageNav></PageNav>
      </Grid>
      <Grid item container justify="center" xs={6}>
        <Link variant="h6" component={RouterLink} to="/" underline="none">
          Food Travelers
        </Link>
      </Grid>
      <Grid item container justify="flex-end" xs alignItems="flex-end">
        <Button>Cart({cartItems})</Button>
      </Grid>
    </Grid>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cartItems: PropTypes.number,
};

const mapStateToProps = (state) => ({
  cartItems: countItems(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
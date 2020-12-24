import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { PageNav } from '../PageNav/PageNav';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import { countItems } from '../../../redux/cartRedux.js';
import styles from './Header.module.scss';
import Drawer from '@material-ui/core/Drawer';
import { Cart } from '../../features/Cart/Cart';


const Component = ({ className, cartItems }) => {
  //is the drawer open?
  const [state, setState] = React.useState(false);
  const toggleDrawer = (value) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(value);
  };
  return (
    <div className={clsx(className, styles.root)}>
      <AppBar position="fixed" elevation={0}>
        <Toolbar className={styles.toolbar}>
          <Grid
            container
            spacing={0}
            alignItems="center"
            className={styles.container}
          >
            <Grid item xs={9} md>
              <PageNav></PageNav>
            </Grid>

            <Grid item container justify="center" xs={12} md={6}>
              <Link variant="h6" component={RouterLink} to="/" underline="none">
                Asian Food Lovers
              </Link>
            </Grid>

            <Grid
              item
              container
              justify="flex-end"
              xs={3}
              md
              alignItems="flex-end"
            >
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
              >
                Cart({cartItems})
              </Button>
              <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                <div className={styles.drawer}>
                  <Cart></Cart>
                </div>
              </Drawer>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

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
import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';

const Component = ({ className, children }) => {
  const preventDefault = (e) => e.preventDefault();
  return (
    <div className={clsx(className, styles.root)}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body2"
            color="secondary"
            className={styles.listTitle}
            gutterBottom
          >
            Newsletter
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Typography
            variant="body2"
            color="secondary"
            className={styles.listTitle}
            gutterBottom
          >
            Connect
          </Typography>
          <Typography className={styles.list}>
            <Link
              href="#"
              onClick={preventDefault}
              className={styles.listItemText}
            >
              Facebook
            </Link>
            <Link
              href="#"
              onClick={preventDefault}
              className={styles.listItemText}
            >
              Instagram
            </Link>
            <Link
              href="#"
              onClick={preventDefault}
              className={styles.listItemText}
            >
              Twitter
            </Link>
            <Link
              href="#"
              onClick={preventDefault}
              className={styles.listItemText}
            >
              Pinterest
            </Link>
          </Typography>
        </Grid>
        <Hidden mdDown>
          <Grid item lg={3}>
            <Typography
              variant="body2"
              color="secondary"
              className={styles.listTitle}
              gutterBottom
            >
              Info
            </Typography>
            <Typography className={styles.list}>
              <Link
                href="#"
                onClick={preventDefault}
                className={styles.listItemText}
              >
                Shipping / Returns
              </Link>
              <Link
                href="#"
                onClick={preventDefault}
                className={styles.listItemText}
              >
                T &amp; C&apos;s
              </Link>
              <Link
                href="#"
                onClick={preventDefault}
                className={styles.listItemText}
              >
                Contact
              </Link>
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
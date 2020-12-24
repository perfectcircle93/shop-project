import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux.js';
import styles from './Product.module.scss';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const Component = ({className, children, name, photos, price}) => (
  <div className={clsx(className, styles.root)}>
    <Grid container justify="flex-end" spacing={5}>
      <Grid item xs={12} md={4} className={styles.photo}>
        <img src={photos[0]} alt={name}></img>
        <div className={styles.header}>
          <Typography variant="h3" gutterBottom={true}>
            {name}
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} md={6} className={styles.description}>
        <Typography variant="body2" color="primary" gutterBottom>
          PLN {price}
        </Typography>
      </Grid>
    </Grid>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  photos: PropTypes.array,
  price: PropTypes.number,
};

const mapStateToProps = (state, props) => {
  const product = getById(state, props.match.params.id);
  return {
    ...product,
  };
};

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
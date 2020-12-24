import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import clsx from 'clsx';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './ProductBox.module.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const Component = ({ className, children, photo, name, _id, price }) => (
  <Card square elevation={0}>
    <CardActionArea component={Link} to={`/collections/products/${_id}`}>
      <CardMedia className={styles.image} image={photo} title={name} />
      <CardContent className={styles.description}>
        <Typography gutterBottom variant="subtitle1" component="p">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2" component="p">
          PLN {price}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  photo: PropTypes.string,
  name: PropTypes.string,
  _id: PropTypes.string,
  price: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
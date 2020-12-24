import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';
import styles from './CategoriesNav.module.scss';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)}>
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          className={styles.listSubheader}
        >
          SHOP
        </ListSubheader>
      }
    >
      {['chinese', 'japanese', 'malaysian'].map((text) => (
        <ListItem
          button
          key={text}
          className={styles.listItem}
          component={NavLink}
          to={`/collections/${text}`}
          activeClassName={styles.active}
        >
          <ListItemText
            primary={text}
            classes={{ primary: styles.listItemText }}
          />
        </ListItem>
      ))}
    </List>
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
  Component as CategoriesNav,
  // Container as CategoriesNav,
  Component as CategoriesNavComponent,
};
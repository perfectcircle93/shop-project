import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';


const Component = ({ className, children }) => {
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
      <Button startIcon={<MenuIcon />} onClick={toggleDrawer(true)}>
        Menu
      </Button>
      <Button component={Link} to="/collections/all">
        Shop
      </Button>
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        <div className={styles.drawer}>

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
              >
                <ListItemText
                  primary={text}
                  classes={{ primary: styles.listItemText }}
                />
              </ListItem>
            ))}
          </List>

          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={styles.listSubheader}
              >
                NAVIGATION
              </ListSubheader>
            }
          >
            <ListItem
              button
              className={styles.listItem}
              component={NavLink}
              to="/"
            >
              <ListItemText
                primary="Home"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
            <ListItem button className={styles.listItem}>
              <ListItemText
                primary="About"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
          </List>

          <List component="nav">
            <ListItem button className={styles.smallItem}>
              <ListItemText
                primary="Log in"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
            <ListItem button className={styles.smallItem}>
              <ListItemText
                primary="Shipping / returns"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
            <ListItem button className={styles.smallItem}>
              <ListItemText
                primary="Contact"
                classes={{ primary: styles.listItemText }}
              />
            </ListItem>
          </List>
        </div>
      </Drawer>
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
  Component as PageNav,
  // Container as PageNav,
  Component as PageNavComponent,
};
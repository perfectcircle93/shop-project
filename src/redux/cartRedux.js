import axios from 'axios';

/* selectors */

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */

/* action creators */

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch(action.type) {
    default:
      return statePart;
  }
};
/* selectors */
export const countItems = ({ cart }) => cart.products.length;
export const allProducts = ({ cart }) => cart.products;

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_ONE = createActionName('REMOVE_ONE');
const ADD_ONE = createActionName('ADD_ONE');
const REMOVE = createActionName('REMOVE');
const ADD_INSTRUCTION = createActionName('ADD_INSTRUCTION');

/* action creators */
export const fetchStarted = (payload) => ({ payload, type: FETCH_START });
export const fetchSuccess = (payload) => ({ payload, type: FETCH_SUCCESS });
export const fetchError = (payload) => ({ payload, type: FETCH_ERROR });
export const addProduct = (payload) => ({ payload, type: ADD_PRODUCT });
export const removeOne = (payload) => ({ payload, type: REMOVE_ONE });
export const addOne = (payload) => ({ payload, type: ADD_ONE });
export const remove = (payload) => ({ payload, type: REMOVE });
export const addInstruction = (payload) => ({ payload, type: ADD_INSTRUCTION });

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case ADD_PRODUCT:
      if (
        statePart.products.filter(
          (product) => product._id === action.payload._id
        ).length > 0
      ) {
        return {
          ...statePart,
          products: statePart.products.map((product) => {
            if (product._id === action.payload._id) {
              return {
                ...product,
                amount: product.amount + action.payload.amount,
              };
            } else {
              return product;
            }
          }),
        };
      } else {
        return {
          ...statePart,
          products: [...statePart.products, action.payload],
        };
      }
    case REMOVE_ONE:
      return {
        ...statePart,
        products: statePart.products.map((product) => {
          if (product._id === action.payload) {
            return {
              ...product,
              amount: product.amount - 1,
            };
          } else {
            return product;
          }
        }),
      };
    case ADD_ONE:
      return {
        ...statePart,
        products: statePart.products.map((product) => {
          if (product._id === action.payload) {
            return {
              ...product,
              amount: product.amount + 1,
            };
          } else {
            return product;
          }
        }),
      };
    case REMOVE:
      return {
        ...statePart,
        products: statePart.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case ADD_INSTRUCTION:
      return {
        ...statePart,
        instruction: action.payload,
      };
    default:
      return statePart;
  }
};
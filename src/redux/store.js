import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';
import { reducer as CartReducer } from './cartRedux'
import { reducer as ProductReducer } from './productRedux'

const combinedReducers = combineReducers({
    products: ProductReducer,
    cart: CartReducer
});

export const store = createStore(
    combinedReducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './cartReducer';

// const initialStore = {
//     cartReducer: {
//         cartItems : JSON.parse(localStorage.getItem('cartItems')) ?? []
//     }
// }
 
const composeEnhancers = composeWithDevTools({});
export const store = createStore(cartReducer, composeEnhancers());

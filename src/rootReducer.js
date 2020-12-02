import { ADD_TO_CART, REMOVE_FROM_CART, APPLY_DISCOUNT } from './actionTypes';
import { calculateCartTotal } from './helpers';
import data from './data.json';

const discounts = {
  DISCOUNT10: 0.1,
  DISCOUNT20: 0.2,
  DISCOUNT30: 0.3
}

const INITIAL_STATE = {
  products: data.products,
  cartItems: {},
  cartTotal: 0.00,
  discountApplied: false,
  discountAmount: 0
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartCopy = { ...state.cartItems };
      cartCopy[action.id] = (cartCopy[action.id] || 0) + 1;
      return {
        ...state,
        cartItems: cartCopy,
        cartTotal: calculateCartTotal(
          state.products,
          cartCopy,
          state.discountAmount
        )
      };
    }

    case REMOVE_FROM_CART: {
      const cartCopy = { ...state.cartItems };
      if (!cartCopy[action.id]) return state;
      cartCopy[action.id]--;
      if (cartCopy[action.id] === 0) {
        delete cartCopy[action.id];
      }
      return {
        ...state,
        cartItems: cartCopy,
        cartTotal: calculateCartTotal(
          state.products,
          cartCopy,
          state.discountAmount
        )
      };
    }

    case APPLY_DISCOUNT: {
      if (
        state.discountApplied === false &&
        discounts[action.discount]
      ) {
        const discountAmount = discounts[action.discount];
        return {
          ...state,
          cartTotal: calculateCartTotal(
            state.products,
            state.cartItems,
            discountAmount
          ),
          discountApplied: true,
          discountAmount
        };
      }
      return state;
    }
    default:
      return state;
  }
}

export default rootReducer;
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  APPLY_DISCOUNT
} from './actionTypes';

export function addItem(id) {
  return {
    type: ADD_TO_CART,
    id
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_FROM_CART,
    id
  }
}

export function applyDiscount(discount) {
  return {
    type: APPLY_DISCOUNT,
    discount
  }
}
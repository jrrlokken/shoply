import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QTY,
  DECREASE_QTY,
  APPLY_DISCOUNT
} from './actionTypes';

export function addItem(id) {
  return {
    type: ADD_TO_CART,
    product
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}

export function applyDiscount(discount) {
  return {
    type: APPLY_DISCOUNT,
    discount
  }
}

export function increment(product) {
  return {
    type: INCREASE_QTY,
    product
  }
}

export function decrement(product) {
  return {
    type: DECREASE_QTY,
    product
  }
}
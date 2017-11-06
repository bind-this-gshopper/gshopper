import axios from 'axios'
import history from '../history'
// import { getUser } from './user'

/**
 * ACTION TYPES
 */
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
const DELETE_CART_ITEM = 'DELETE_CART_ITEM'

/**
 * ACTION CREATORS
 */
const updateCartItem = cartItem => ({ type: UPDATE_CART_ITEM, cartItem })
const deleteCartItem = cartItem => ({ type: DELETE_CART_ITEM, cartItem })

/**
 * THUNK CREATORS
 */
export const sendCartItem = (cartItemId) =>
  dispatch =>
    axios.post('/api/order-products/cart', cartItemId)
      .then(res =>
        console.log(res) // let's log for now
      )
      .catch(err => console.log(err))

export const removeCartItem = (cartItem) =>
  dispatch =>
    axios.delete('/api/order-products/' + cartItem.id)
      .then(res =>
        console.log(res) // let's log for now
      )
      .catch(err => console.log(err))

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case UPDATE_CART_ITEM:
      return action.cartItem
    case DELETE_CART_ITEM:
      return action.cartItem
    default:
      return state
  }
}

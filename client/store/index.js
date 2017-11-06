'use strict'

import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import product from './product'
import products from './products'
import categories from './categories'
import review from './review'

const reducer = combineReducers({user, product, products, categories, review})


const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './product'
export * from './products'
export * from './categories'
export * from './review'
export * from './userEdit'

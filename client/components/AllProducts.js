'use strict'

import React, { Component } from 'react'
import CardList from './CardList'
import { Card, Rating } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store'

class AllProducts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {

    const title = 'All Products'
    const products = this.props.products

    return (
      <div>
        <Card fluid>
          <h2>Filters</h2>
          <h3>Minimum rating</h3>
          <Rating maxRating={5} clearable />
          <h3>Categories</h3>
          Here will be the categories
        </Card>
        <CardList products={ products } title={ title } />
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts())
  }
}

const mapState = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapState, mapDispatch)(AllProducts)

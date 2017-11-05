import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import { fetchOrders } from '../../store'
import OrderTable from './OrderAdminTable'
import TableHeader from './TableHeader'

let total = 0

class OrderAdmin extends Component {
  componentDidMount() {
    !this.props.orders.length && this.props.fetchOrders()
  }

  render() {
    const filteredList = this.props.orders
    return (
      <div>
        {filteredList.map(order => {
          return (
            <div key={order.id}>
              <Table celled padded>
                <TableHeader order={order} />
                {order.order_products.map(orderProd => {
                  return this.props.products.map(product => {
                    if (product.id === orderProd.productId) {
                      total += orderProd.quantity * orderProd.purchasePrice
                      return (
                        <OrderTable
                          key={order.id}
                          product={product}
                          orderProd={orderProd}
                        />
                      )
                    }
                  })
                })}
              </Table>
              <h3>Order Total: ${total / 100}</h3>
              <h4>Order Status : {order.status}</h4>
              <h5>Order Placed : {order.createdAt.slice(0, 10)}</h5>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    orders: state.orders,
    products: state.products
  }
}

const mapDispatch = dispatch => {
  return {
    fetchOrders: () => dispatch(fetchOrders())
  }
}

export default connect(mapState, mapDispatch)(OrderAdmin)

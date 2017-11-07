import React, { Component } from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'
import { addProduct } from '../../store'
import { connect } from 'react-redux'

class AddProduct extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeCategories = this.handleChangeCategories.bind(this)
    this.tempProduct = {}
  }

  handleChange(evt) {
    this.tempProduct[evt.target.name] = evt.target.value
  }

  handleChangeCategories(evt) {
    this.tempProduct.categories = [evt.target.value]
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addProduct(this.tempProduct)
    this.props.hideForm()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Card.Content>
          <Grid padded>
            <Grid.Row>
              <Grid.Column width={6}>
                <div>
                  <h3>
                    Name :{' '}
                    <input
                      required="required"
                      type="text"
                      name="name"
                      placeholder="Name"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    Author :{' '}
                    <input
                      required="required"
                      type="text"
                      name="author"
                      placeholder="Author"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    Description :{' '}
                    <input
                      required="required"
                      type="text"
                      name="description"
                      placeholder="Description"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    Price :{' '}
                    <input
                      required="required"
                      type="number"
                      name="price"
                      placeholder="Price"
                      onChange={this.handleChange}
                    />
                  </h3>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div>
                  <h3>
                    Quantity :{' '}
                    <input
                      required="required"
                      type="number"
                      name="quantity"
                      placeholder="Quantity"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    img URL :
                    <input
                      type="url"
                      name="img"
                      placeholder="img URL"
                      onChange={this.handleChange}
                    />
                  </h3>
                  <h3>
                    Availability:
                    <br />
                    <select
                      name="available"
                      required="required"
                      onChange={this.handleChange}
                    >
                      <option>Available</option>
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </h3>
                  <h3>
                    Category:
                    <select
                      name="categories"
                      required="required"
                      onChange={this.handleChangeCategories}
                    >
                      <option>Select Category</option>
                      {this.props.categories.map(category => {
                        return (
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        )
                      })}
                    </select>
                  </h3>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
        <Button type="submit">Submit Info</Button>
        <br />
        <br />
      </form>
    )
  }
}

const mapState = state => {
  return {
    user: state.user,
    categories: state.categories
  }
}

const mapDispatch = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  }
}

export default connect(mapState, mapDispatch)(AddProduct)

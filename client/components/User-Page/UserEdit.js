import React from 'react'
import { Card, Button, Grid } from 'semantic-ui-react'

export const UserEdit = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Card.Content>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={6}>
              <h3>
                First Name :{' '}
                <input
                  type="text"
                  name="firstName"
                  placeholder={props.user.firstName}
                  onChange={props.handleChange}
                />
              </h3>
              <h3>
                Last Name :{' '}
                <input
                  type="text"
                  name="lastName"
                  placeholder={props.user.lastName}
                  onChange={props.handleChange}
                />
              </h3>
              <h3>
                Address :{' '}
                <input
                  type="text"
                  name="address"
                  placeholder={props.user.address.slice(0, 11) + '...'}
                  onChange={props.handleChange}
                />
              </h3>
              <h3>
                City :{' '}
                <input
                  type="text"
                  name="city"
                  placeholder={props.user.city}
                  onChange={props.handleChange}
                />
              </h3>
              <h3>
                Zip Code :{' '}
                <input
                  type="text"
                  name="zip"
                  placeholder={props.user.zip}
                  onChange={props.handleChange}
                />
              </h3>
            </Grid.Column>
            <Grid.Column width={6}>
              <h3>
                Image URL :{' '}
                <input
                  type="text"
                  name="img"
                  placeholder={props.user.img.slice(0, 19) + '...'}
                  onChange={props.handleChange}
                />
              </h3>
              <h3>
                Phone :{' '}
                <input
                  type="text"
                  name="phone"
                  placeholder={props.user.phone}
                  onChange={props.handleChange}
                />
              </h3>
              <h3>
                email :{' '}
                <input
                  type="text"
                  name="email"
                  placeholder={props.user.email}
                  onChange={props.handleChange}
                />
              </h3>
              <h3>
                password :{' '}
                <input
                  type="text"
                  name="password"
                  placeholder="*******"
                  onChange={props.handleChange}
                />
              </h3>
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

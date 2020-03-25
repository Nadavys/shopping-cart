import React from "react";
import axios from 'axios';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { loadCart, removeProduct, changeProductQuantity } from '../../services/cart/actions';
import { updateCart } from '../../services/total/actions';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  delivery: '',
  address: '',
  city: '',
  comments: '',
  synagogue: ''
}

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    console.log('event', event)
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
    // console.log("form", this.state)
  }

  async handleSubmit(event) {
    // console.log(this.state)
    let products = this.props.cartProducts.reduce((o, p) => {
      if (p.quantity) {
        o[p.id] = p.quantity;
      }
      return o;
    }, {});

    event.preventDefault();
    const customer = Object.assign(this.state);
    console.log(">>> customer", customer)
    // delete customer.requestInProgress
    let request = { data: { customer, products } };
    console.log("request", JSON.stringify(request))

    // await this.setState({ requestInProgress: true })
    console.log(">>* in progress", this.state.requestInProgress)
    if (!this.state.requestInProgress) {
      await this.setState({ requestInProgress: true });
      axios.post('https://jhl69wbaql.execute-api.us-west-2.amazonaws.com/prod', request)
        .then(res => {
          console.log(res);
          console.log(res.data);
          if (res.data.statusCode === 200) {
            const orderId = res.data.id;
            console.log("order id", orderId);
            this.clearCart();
            this.setState(initialState);
            this.props.triggerSuccessModal(orderId)
            // alert(`Thank you, your request was sent. Your Order id is: ${orderId}`)
            // window.location = "/"
          } else {
            alert("There was a problem with your order. Please verify all necessary fields were filled out, and try again. If the problem persists please contact us.")
            this.setState({ requestInProgress: false });
          }
        })
    }
  }

  clearCart() {
    const { cartProducts, updateCart } = this.props;

    cartProducts.length = 0;
    updateCart([]);
    console.log('*** userform props', this.props)
  }

  render() {
    return (
      <div className="wpforms-container-full">
        <form className="wpforms-form" onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={this.handleChange}
            required
          />

          <input
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={this.handleChange}
            required
          />


          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            name="phone"
            type="phone"
            placeholder="Phone"
            value={this.state.phone}
            onChange={this.handleChange}
            required
          />

          <br />
          <br />

          <label className="radio">
            <input type="radio" name="delivery" value="false" onChange={this.handleChange} required />
            <span className="accessible">Self Pickup</span></label>
          <label className="radio">
            <input type="radio" name="delivery" value="true" onChange={this.handleChange} required />
            <span className="accessible">Delivery($25)</span></label>
          <div className={this.state.delivery === 'false' ? 'hidden' : ''} >
            <p>Delivery is available for Bay Area locations only</p>
            <input
              name="address"
              placeholder="Delivery Address"
              value={this.state.address}
              onChange={this.handleChange}
            />

            <input
              name="city"
              placeholder="Delivery City"
              value={this.state.city}
              onChange={this.handleChange}
            />
          </div>
          <br />
          {/* <label for="comments"> Comments </label> */}
          <label htmlFor="synagogue"> Are you a synagogue member? If so, which one: </label>
          <br />
          <input
            name="synagogue"
            placeholder="My Synagogue"
            value={this.state.synagogue}
            onChange={this.handleChange}
          />
          <br />
          <textarea name="comments" placeholder="Comments" onChange={this.handleChange} value={this.state.comments}></textarea>
          <br />
          <input type="submit" value="Submit Order" />

        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartProducts: state.cart.products,
  cartTotal: state.total.data
});

export default connect(
  mapStateToProps,
  { updateCart })(UserForm);


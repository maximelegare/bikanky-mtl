import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { PropTypes } from "prop-types";
import CustomButtonMUI from "../components/buttons/material-ui/custom-button-mui.component";
import axios from 'axios'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  // eslint-disable-next-line no-undef
  const publishableKey = 'pk_test_51J1YF3BCwVrA7dUdCeXNRY3VgQ11oqTND8bvWVMSYSDJNzVPdL4ElKkMSpeKsF31pJIDxg6cCC9NxRInWxrjOvdf00qE4FiN72';

  const onToken = (token) => {
    axios({
      url:'payment',
      method:'post',
      data:{
        amount:priceForStripe,
        token
      }
    }).then(response => {
      alert('payment successfull')
    }).catch(err => {
      console.log(err.response)
      alert('There was an issue with your payment. please make sure to use the provided credit card')
    })
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      amount={priceForStripe}
      name="BIKANKY MONTRÉAL"
      description={`Your total is $${(price.toFixed(2))}`}
      label="Pay Now"
      panelLabel="Pay Now"
      image="https://svgshare.com/i/_P9.svg"
    >
      <CustomButtonMUI kind="small">Continu to Payment</CustomButtonMUI>
    </StripeCheckout>
  );
};

StripeButton.propTypes = {
  price: PropTypes.number,
};

export default StripeButton;

import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { PropTypes } from "prop-types";
import CustomButtonMUI from "../material-ui/custom-button-mui.component";
const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;

  // eslint-disable-next-line no-undef
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = (token) => {
    console.log(token);
    alert("payment successfull");
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publishableKey}
      amount={priceForStripe}
      name="BIKANKY MONTRÉAL"
      description={`Your total is $${price.toFixed(2)}`}
      label="Pay Now"
      panelLabel="Pay Now"
      shippingAddress
      billingAddress
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

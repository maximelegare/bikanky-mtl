import React from "react";
// import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import CheckoutTable from "./checkout-table/checkout-table.component";
import {
  ButtonContainer,
  CheckoutPriceContainer,
  OrderTableContainer,
  TestCreditCardContainer
} from "./checkout-price.styles";

import StripeButton from "../../../stripe-button/stripe-button.component";

import { useSelector } from "react-redux";
import {
  selectCartCount,
  selectCartTotalPrice,
} from "../../../redux/cart/cart.selectors";
import { selectShippingPricing } from "../../../redux/shipping/shipping.selector";

const CheckoutPrice = () => {
  const shippingPrice = useSelector(selectShippingPricing);
  const cartItemsCount = useSelector(selectCartCount);
  const price = useSelector(selectCartTotalPrice);

  const totalPrice = price + shippingPrice;
  return (
    <>
      <CheckoutPriceContainer>
        <ButtonContainer>
          <StripeButton price={totalPrice} />
        </ButtonContainer>
        <hr />
        <OrderTableContainer>
          <CheckoutTable
            shippingPrice={shippingPrice}
            price={price}
            itemsCount={cartItemsCount}
          />
        </OrderTableContainer>
      </CheckoutPriceContainer>
      <CheckoutPriceContainer>
        <TestCreditCardContainer>
          <h5>
            Please make sure to use this credit card for stripe testing:
          </h5>
          <h5>4242 4242 4242 4242</h5>
          <h5>expiration: any futur date</h5>
          <h5>cvc: 123</h5>
        </TestCreditCardContainer>
      </CheckoutPriceContainer>
    </>
  );
};

export default CheckoutPrice;

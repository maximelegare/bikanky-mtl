import React from "react";
// import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import CheckoutTable from "./checkout-table/checkout-table.component";
import {
  ButtonContainer,
  CheckoutPriceContainer,
  OrderTable,
} from "./checkout-price.styles";

import StripeButton from "../../buttons/stripe-button/stripe-button.component";

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
    <CheckoutPriceContainer>
      <ButtonContainer>
        <StripeButton price={totalPrice} />
      </ButtonContainer>
      <hr />
      <OrderTable>
        <CheckoutTable
          shippingPrice={shippingPrice}
          price={price}
          itemsCount={cartItemsCount}
        />
      </OrderTable>
    </CheckoutPriceContainer>
  );
};

export default CheckoutPrice;

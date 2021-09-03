import React from "react";
import CheckoutTableItem from "./checkout-table-item.component";

import { TotalContainer } from "../checkout-price.styles";

import { PropTypes } from "prop-types";

import { calculCost } from "./checkout-price.utils";

const CheckoutTable = ({ price, itemsCount, shippingPrice }) => {
  const { beforeShipping, tpsTax, tvqTax, bigTotal } = calculCost(
    price,
    shippingPrice,
    itemsCount
  );

  return (
    <>
      <tbody>
        <CheckoutTableItem price={parseInt(price.toFixed(2))}>
          Items&nbsp;({itemsCount})
        </CheckoutTableItem>
        <tr>
          <td />
          <td className="separator">
            <hr />
          </td>
        </tr>
        {/* <CheckoutTableItem title="Total before tax" price={beforeTax} /> */}
        <CheckoutTableItem price={tpsTax}>
          &nbsp;&nbsp;Estimated&nbsp;TPS
        </CheckoutTableItem>
        <CheckoutTableItem price={tvqTax}>
          &nbsp;&nbsp;Estimated&nbsp;TVQ
        </CheckoutTableItem>
        <tr>
          <td />
          <td className="separator">
            <hr />
          </td>
        </tr>
        <CheckoutTableItem price={beforeShipping}>
          Total&nbsp;before&nbsp;Shipping
        </CheckoutTableItem>
        <CheckoutTableItem price={shippingPrice}>
          &nbsp;&nbsp;Shipping
        </CheckoutTableItem>
        <tr>
          <td />
          <td className="separator">
            <hr />
          </td>
        </tr>
        <CheckoutTableItem price={bigTotal}>Total</CheckoutTableItem>
        <tr>
          {/* <td /> */}
          <td className="separator" colSpan="2">
            <hr />
          </td>
        </tr>

        <tr>
          <td>
            <TotalContainer>Order&nbsp;Total: </TotalContainer>
          </td>
          <td className="price">
            <TotalContainer>{bigTotal}&thinsp;$</TotalContainer>
          </td>
        </tr>
      </tbody>
    </>
  );
};

CheckoutTable.propTypes = {
  price: PropTypes.number,
  itemsCount: PropTypes.number,
  shippingPrice: PropTypes.number,
};

export default CheckoutTable;

import React from "react";
import CheckoutTableItem from "./checkout-table-item.component";

import { TotalContainer } from "../checkout-price.styles";

import { PropTypes } from "prop-types";

import { calculCost } from "./checkout-price.utils";

const CheckoutTable = ({ price, itemsCount, shippingPrice }) => {
  console.log(`${price} , ${itemsCount} , ${shippingPrice}`);
  const { beforeShipping, tpsTax, tvqTax, bigTotal } = calculCost(
    price,
    shippingPrice,
    itemsCount
  );

  return (
    <>
      <tbody>
        <CheckoutTableItem
          title={`Items (${itemsCount})`}
          price={price.toFixed(2)}
        />
        <tr>
          <td />
          <td className="separator">
            <hr />
          </td>
        </tr>
        {/* <CheckoutTableItem title="Total before tax" price={beforeTax} /> */}
        <CheckoutTableItem title="Estimated TPS" price={tpsTax} />
        <CheckoutTableItem title="Estimated TVQ" price={tvqTax} />
        <tr>
          <td />
          <td className="separator">
            <hr />
          </td>
        </tr>
        <CheckoutTableItem title="Total before Shipping" price={beforeShipping} />
        <CheckoutTableItem title="Shipping" price={shippingPrice} />
        <tr>
          <td />
          <td className="separator" >
            <hr />
          </td>
        </tr>
        <CheckoutTableItem title="Total" price={bigTotal} />
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
          <td>
            <TotalContainer>{bigTotal}&nbsp;$</TotalContainer>
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

import React from "react";
import CheckoutTableItem from "./checkout-table-item.component";

const CheckoutTable = () => {
  return (
    <>
      <tbody>
        <CheckoutTableItem title="Item" price={99.99} />
        <CheckoutTableItem title="Shipping" price={6.99} />
        <tr>
          <td />
          <td className="separator" >
            <hr />
          </td>
        </tr>
        <CheckoutTableItem title="Total before tax" price={107.99} />
        <CheckoutTableItem title="Estimated tax" price={5.49} />
        <tr>
          <td />
          <td className="separator" >
            <hr />
          </td>
        </tr>
        <CheckoutTableItem title="Total" price={112.99} />
      </tbody>
    </>
  );
};

export default CheckoutTable;

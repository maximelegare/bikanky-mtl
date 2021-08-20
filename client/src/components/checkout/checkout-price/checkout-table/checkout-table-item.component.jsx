import React from "react";
import { PropTypes } from "prop-types";

const CheckoutTableItem = ({ price, children }) => {
  return (
    <tr>
      <td>{children}:</td>
      <td className="price">{price}&thinsp;$</td>
    </tr>
  );
};

CheckoutTableItem.propTypes = {
  price: PropTypes.any,
  inner: PropTypes.bool,
  children: PropTypes.any,
};
export default CheckoutTableItem;

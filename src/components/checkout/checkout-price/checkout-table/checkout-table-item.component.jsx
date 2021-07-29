import React from "react";
import { PropTypes } from 'prop-types'


const CheckoutTableItem = ({title, price}) => {
  return (
    <tr>
      <td>{title}:</td>
      <td className="price">{price}&thinsp;$</td>
    </tr>
  );
};

CheckoutTableItem.propTypes = {
    title:PropTypes.string,
    price:PropTypes.any,
    inner:PropTypes.bool
}
export default CheckoutTableItem;

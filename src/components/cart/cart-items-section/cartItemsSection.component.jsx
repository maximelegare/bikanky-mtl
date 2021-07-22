/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/cart/cart.selectors';

import CartDropdownItem from '../cart-item/cart-item.component'
import { CartItemsSectionContainer, EmptyCartMessage } from './cartItemsSection.styles'

const CartItemsSection = ({sideSlider}) => {
    const cartItems = useSelector(selectCartItems);
    return (
        <CartItemsSectionContainer sideSlider={sideSlider}>
            {cartItems.length ?
            cartItems.map(({ id, ...otherProps }) => (
              <CartDropdownItem sideSlider={sideSlider} key={id} id={id}  {...otherProps} />
            ))
          :
          (<EmptyCartMessage className="empty-message" sideSlider={sideSlider}>Your Cart is empty</EmptyCartMessage>)
          }
          </CartItemsSectionContainer>
    );
};

export default CartItemsSection;
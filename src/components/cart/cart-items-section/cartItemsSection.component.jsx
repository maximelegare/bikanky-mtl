/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../redux/cart/cart.selectors';

import CartDropdownItem from '../cart-dropdown-item/cart-dropdown-item.component'
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
          (<EmptyCartMessage>Your Cart is empty</EmptyCartMessage>)
          }
          </CartItemsSectionContainer>
    );
};

export default CartItemsSection;
import React from "react";
import { useState, useEffect } from "react";

import {
  CheckoutShippingWrapper,
  RadioWrapperContainer,
} from "./checkout-shipping.styles";

import { FormControlLabel, RadioGroup } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateShippingRate } from "../../../../redux/shipping/shipping.slice";
import { selectShippingRates} from "../../../../redux/shipping/shipping.selector";

import CustomRadioMUI from "../../../buttons/material-ui/custom-radio-mui.component";

const CheckoutShipping = () => {
  const dispatch = useDispatch()




  const shippingRates = useSelector(selectShippingRates)
  
  console.log(shippingRates)
  
  const [value, setValue] = useState('canada');

  // rates defined in redux [shipping]
  const shipping = {
    canada: shippingRates.canada,
    international: shippingRates.international,
  };

  
  
  const { canada, international } = shipping;

  useEffect(() => {
    dispatch(updateShippingRate('canada'))   
  }, [])

  const handleChange = (e) => {
    // set the value in redux [shipping]
    dispatch(updateShippingRate(e.target.value))
    setValue(e.target.value)
  };


  
  return (
    <CheckoutShippingWrapper>
      <h4>Select your shipping method</h4>
      <RadioWrapperContainer>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            control={<CustomRadioMUI value="canada" />}
            label={`Shipping in Canada — ${canada} $`}
          />
          <FormControlLabel
            control={<CustomRadioMUI value="international" />}
            label={`International Shipping  — ${international} $`}
          />
        </RadioGroup>
      </RadioWrapperContainer>
    </CheckoutShippingWrapper>
  );
};

export default CheckoutShipping;

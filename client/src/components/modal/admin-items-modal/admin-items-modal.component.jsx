import React, {useState} from "react";
import { PropTypes } from 'prop-types'


import ModalComponent from "../modal.component";
import { InputSectionContainer } from "../address-modal/address-modal.styles";
import FormInput from "../../form-inputs/form-input.component"; 
import { ButtonSectionContainer } from "../address-modal/address-modal.styles";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";


const AdminItemsModal = ({item, ...otherProps}) => {

  // User address state
  
  // eslint-disable-next-line no-unused-vars
  const [itemSpecifications, setItemSpecifications] = useState({
    title: item?.title ?? "",
    price: item?.price ?? "",
    stock: item?.stock ?? "",
    shortDescription: item?.shortDescription ?? "",
    bulletPoints: item?.bulletPoints ?? [],
    // phoneNumber: userAddress?.phoneNumber ?? "",
  });

  // address errors state
  
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({
    title: null,
    price: null,
    stock: null,
    shortDescription: null,
    bulletPoints: null,
  });

  // deconstruct address
  const {
    title,
    price,
    stock,
    shortDescription,
    bulletPoints,
  } = itemSpecifications;

  ////////////////////////////////////////////////

  //   handle the submit event

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the form
    // const isValid = validate();
    // // the form is not valid, return
    // if (!isValid) return;

    // // otherwise add the shipping address
    // addShippingAddress(currentUser.id, address, currentUser);
    // // close the modal in the parent component
    // closeModal(false);
  };

  ////////////////////////////////////////////////

  // validate the form in [address-modal.utils.js]

//   const validate = () => {
//     // errors from the utils
//     const {
//       country,
//       fullName,
//       addressLine,
//       city,
//       state,
//       postalCode,
//       phoneNumber,
//     } = errMessages(address);

    // sets the errors in errors state

    // setErrors({
    //   country,
    //   fullName,
    //   addressLine,
    //   city,
    //   state,
    //   postalCode,
    //   phoneNumber,
    // });

    // if any errors, return false

    // if (
    //   country ||
    //   fullName ||
    //   addressLine ||
    //   city ||
    //   state ||
    //   postalCode ||
    //   phoneNumber
    // ) {
    //   return false;
    // }
    // return true;

//   };

  ////////////////////////////////////////////////

  //   handle change event. the key is dynamic using the name and value provided
  const handleChange = (e) => {
    // const { name, value } = e.target;
    // setAddress({ ...address, [name]: value });
  };

  ////////////////////////////////////////////////

  // removes error with onBlur event. the key is dynamic (renders the name of the input)

  const removeError = (name) => {
    // setErrors({ ...errors, [name]: null });
  };

  return (
    <ModalComponent {...otherProps}>
      <form onSubmit={handleSubmit}>
        <InputSectionContainer>
          <FormInput
            error={errors.title}
            type="text"
            label="Title"
            name="title"
            value={title}
            handleChange={handleChange}
            removeError={removeError}
            autoFocus
          />
          <FormInput
            error={errors.price}
            type="text"
            label="Price"
            name="price"
            value={price}
            handleChange={handleChange}
            removeError={removeError}
          />
          <FormInput
            error={errors.stock}
            type="text"
            label="Quantity in Stock"
            name="stock"
            value={stock}
            handleChange={handleChange}
            removeError={removeError}
          />
          <FormInput
            error={errors.shortDescription}
            type="text"
            label="Short Description"
            name="shortDescription"
            value={shortDescription}
            handleChange={handleChange}
            removeError={removeError}
          />
          <FormInput
            error={errors.bulletPoints}
            type="text"
            label="Bullet Points"
            name="bulletPoints"
            value={bulletPoints}
            handleChange={handleChange}
            removeError={removeError}
          />
          <ButtonSectionContainer>
            <CustomButtonMUI type="submit">Confirm</CustomButtonMUI>
          </ButtonSectionContainer>
        </InputSectionContainer>
      </form>
    </ModalComponent>
  );
};

AdminItemsModal.propTypes = {
    item:PropTypes.shape({
        title:PropTypes.string,
        price:PropTypes.number,
        stock:PropTypes.number,
        shortDescription:PropTypes.string,
        bulletPoints:PropTypes.array
    })
}



export default AdminItemsModal;

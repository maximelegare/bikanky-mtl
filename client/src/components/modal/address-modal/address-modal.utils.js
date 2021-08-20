export const errMessages = (shippingAddressErr) => {
  const {
    country,
    fullName,
    addressLine,
    city,
    state,
    postalCode,
    phoneNumber,
  } = shippingAddressErr;

  var messageObj = {};

  if (!country) {
    messageObj.country = "Please select your country";
  }
  if (!fullName) {
    messageObj.fullName = "Please enter your fullName";
  }
  if (!addressLine) {
    messageObj.addressLine = "Please enter your main address";
  }
  if (!city) {
    messageObj.city = "Please enter your city";
  }
  if (!state) {
    messageObj.state = "Please select your state";
  }
  if (!postalCode) {
    messageObj.postalCode = "Please enter your postal code";
  }
  if (!phoneNumber) {
    messageObj.phoneNumber = "Please enter your phone number";
  }

  return messageObj;
};

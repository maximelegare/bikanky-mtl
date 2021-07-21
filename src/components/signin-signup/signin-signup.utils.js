export const errMessages = ( email, password, confirmPassword, newUser) => {
  var messageObj = {};


//   if no email, no @, no . => error
  if (!email || !email.includes("@") || !email.includes(".")) {
    messageObj.email = "Please enter your email";
  }
// if no password => error  
  if (!password) {
    messageObj.password = "Please enter your password";
  }
// if password smaller then 6 => error  
  if (password <= 6) {
    messageObj.password = "Your password must consist of at least 6 characters";
  }
// if it's a new user (need to confirm password) && there is no confirmation or passwords don't match => error   
  if (newUser && (!confirmPassword || confirmPassword !== password)) {
    messageObj.confirmPassword =
      "Your password and password validation must match";
  }
  return messageObj;
};

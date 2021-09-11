// Section where the admin can change the role of a user => add admin role
// this section is located inside [users-page-admin.component.jsx]

import React, { useState } from "react";

import FormInput from "../../../../form-inputs/form-input.component";
import CustomButtonMUI from "../../../../buttons/material-ui/custom-button-mui.component";
import { functions } from "../../../../../firebase/firebase.utils";

const CreateAdminUsers = () => {
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState("");

  // handle submit of the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // calls the firebase function that create an admin user
    const addAdminUser = functions.httpsCallable("addAdminUser")
    const result = await addAdminUser({email:email})
    console.log(result)
    
  };

  // handle change of the input based on name
  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const removeError = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormInput
          // error={email}
          type="email"
          label="Email"
          name="email"
          value={email}
          handleChange={handleChange}
          removeError={removeError}
          autoFocus
        />
        <CustomButtonMUI kind="small" type="submit">Create Admin</CustomButtonMUI>
      </form>
    </div>
  );
};

export default CreateAdminUsers;

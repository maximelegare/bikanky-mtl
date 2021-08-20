import { useState } from "react";

const useForm = (options) => {
  const [data, setData] = useState(options?.initialValues || {});

  
  const handleChange = (key) => (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault()
    if(options?.onSubmit()){
        options.onSubmit()
    }

  }

return{
    data,
    handleChange,
    handleSubmit
}

};

export default useForm;

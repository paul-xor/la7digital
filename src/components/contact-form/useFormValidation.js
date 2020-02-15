import React from "react";
import axios from "axios";

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log(
          "my form consists of:",
          values.name,
          values.company,
          values.email,
          values.phone,
          values.message
        );
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    //TODO: it should be here something like"
    //const { name, company, email, phone, message } = this.state;

    const data = {
      // name: values.name,
      // company: values.company,
      // email: values.email,
      // phone: values.phone,
      // message: values.message
      ...values
    };

    // console.log(form.data);
    const form = await axios.post(
      "https://us-central1-cloudfun-send-emails.cloudfunctions.net/sendMail?",
      data
    );

    console.log(form.data);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  };
}

export default useFormValidation;

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

    const data = { ...values };
    const form = await axios.post(
      "https://us-central1-cloudfun-send-emails.cloudfunctions.net/sendMail?",
      data
    );

    console.log(form.data);
    if (form.data === "message sent") {
      document.querySelector(".alert").style.display = "block";

      setTimeout(function() {
        document.querySelector(".alert").style.display = "none";
      }, 8000);
      //Clear form fields
      const fields = ["name", "phone", "company", "email", "message"];
      clearForm(fields);
    }
  }
  function clearForm(fields) {
    fields.forEach(field => {
      document.getElementById(field).value = null;
    });
  }

  function showMessageSent() {
    let contact = document.querySelector(".contact");
    contact.innerHTML = "<h1>Thank you for your message.</h1>";
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

import React from "react";
import "./contact-form.css";
import styled from "styled-components";

import useFormValidation from "./useFormValidation";
import validateFields from "./validateFields";

const INITIAL_STATE = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: ""
};

const Header2 = styled.h2`
  font-size: 50px;
  color: red;
  margin: 20px;
  padding: 10px;
`;

const Header3 = styled.h3`
  font-size: 40px;
  color: white;
  margin: 20px;
  padding: 10px;
`;

const Header4 = styled.h4`
  font-size: 25px;
  line-height: 2rem;
  color: white;
  margin: 20px;
  padding: 10px;
`;

const Box = styled.div`
  font-family: "Comfortaa", cursive;

  margin: 100px 10px 100px;
  padding: 100px 40px 100px;

  background-color: rgb(45, 45, 45);
`;

const Button = styled.button`
  font-family: "Comfortaa", cursive;
  font-size: 1.5em;
`;

const Form = styled.form`
  p {
    font-family: "Comfortaa", cursive;
    color: whitesmoke;
  }
  label {
    font-size: 1.4em;
    margin-bottom: 6px;
  }
  textarea {
    font-size: 1.4em;
  }
  input {
    font-size: 1.5em;
  }
`;

export default function ContactForm(props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting
  } = useFormValidation(INITIAL_STATE, validateFields);
  // const [name, setName] = React.useState("");
  // const [company, setCompany] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [phone, setPhone] = React.useState("");
  // const [message, setMessage] = React.useState("");

  return (
    <Box>
      <div className="contact-form" id="contact-form">
        <Header2 id="contact">Contact Us</Header2>

        <div className="wrapper animated bounceInLeft">
          <div className="company-info">
            <Header3>LA7 DIGITAL</Header3>
            <Header4>
              <ul>
                <li>
                  <i className="fa fa-phone"></i> (204) 5577207
                </li>
                <li>
                  <i className="fa fa-envelope"></i> welcome@la7digital.com
                </li>
              </ul>
            </Header4>
          </div>

          <div className="contact">
            <Header3>Email Us</Header3>
            <div className="alert">Your message has been sent.</div>
            <Form onSubmit={handleSubmit}>
              <p>
                <label>Name</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && "error-input"}
                  name="name"
                  id="name"
                  value={values.name}
                  autoComplete="off"
                />
                {errors.name && <p className="error-text">{errors.name}</p>}
              </p>
              <p>
                <label>Company</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.company && "error-input"}
                  name="company"
                  id="company"
                  value={values.company}
                  autoComplete="off"
                />
                {errors.company && (
                  <p className="error-text">{errors.company}</p>
                )}
              </p>
              <p>
                <label>Email Address</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && "error-input"}
                  type="email"
                  name="email"
                  id="email"
                  value={values.email}
                  autoComplete="off"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
              </p>
              <p>
                <label>Phone Number</label>
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.phone && "error-input"}
                  type="phone"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  autoComplete="off"
                />
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </p>
              <p className="full">
                <label>Message</label>
                <textarea
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message && "error-input"}
                  type="message"
                  name="message"
                  id="message"
                  value={values.message}
                  autoComplete="off"
                  rows="5"
                />
                {errors.message && (
                  <p className="error-text">{errors.massage}</p>
                )}
              </p>
              <p className="full">
                <Button disabled={isSubmitting} type="submit">
                  Submit
                </Button>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </Box>
  );
}

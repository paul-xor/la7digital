import React from "react";
import "./contact-form.css";
import styled from "styled-components";

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

const Text = styled.h5`
  font-size: 20px;
  color: whitesmoke;
  margin: 2px 0px 2px;
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

export default function ContactForm() {
  return (
    <Box>
      <div className="contact-form">
        <Header2 id="contact">Contact Us</Header2>

        <div class="wrapper animated bounceInLeft">
          <div class="company-info">
            <Header3>LA7 DIGITAL</Header3>
            <Header4>
              <ul>
                <li>
                  <i class="fa fa-phone"></i> (204) 5577207
                </li>
                <li>
                  <i class="fa fa-envelope"></i> welcome@la7digital.com
                </li>
              </ul>
            </Header4>
          </div>

          <div class="contact">
            <Header3>Email Us</Header3>

            <Form method="POST" action="email">
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" />
              </p>
              <p>
                <label>Company</label>
                <input type="text" name="company" id="company" />
              </p>
              <p>
                <label>Email Address</label>
                <input type="email" name="email" id="email" />
              </p>
              <p>
                <label>Phone Number</label>
                <input type="text" name="phone" id="phone" />
              </p>
              <p class="full">
                <label>Message</label>
                <textarea name="message" id="message" rows="5"></textarea>
              </p>
              <p class="full">
                <Button type="submit">Submit</Button>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </Box>
  );
}

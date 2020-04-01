import React from "react";
import styled from "styled-components";
import About from "./About";
import Service from "./Service";
import ContactForm from "./contact-form/contact-form";
import Masthead from "./Masthead";
import Footer from "./Footer";

const NoLimits = styled.div`
  padding: 0;
`;

const Container = styled.main`
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Header = styled.h2`
  font-size: 70px;
  color: grey;
  margin: 20px;
  padding: 10px;
`;
const Text = styled.h5`
  font-size: 20px;
  color: whitesmoke;
  margin: 20px;
  padding: 10px;
`;

const SinglePage = props => {
  return (
    <NoLimits>
      <Masthead />
      <Container className="main">
        <About />
        <Service />
        <ContactForm />
        <Footer />
      </Container>
    </NoLimits>
  );
};

export default SinglePage;

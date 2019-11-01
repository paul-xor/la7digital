import React from "react";
import styled from "styled-components";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

const NoLimits = styled.div`
  padding: 0;
`;

const Container = styled.main`
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SinglePage = props => {
  return (
    <NoLimits>
      <div className="masthead">
        <img
          style={{
            height: "100vh",
            width: "100%"
          }}
          src={require("../assets/img/image_main_bg.jpg")}
          alt="background"
        />
      </div>
      <Container className="main">
        <About />
        {/*<Service />}
        {/*<ContactForm /> */}
      </Container>
    </NoLimits>
  );
};

export default SinglePage;

import React from "react";
import styled from "styled-components";
import "../styles/App.css";

const Container = styled.div``;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
`;

export default () => {
  return (
    <Container className="App">
      <div>
        <Logo>
          <img
            style={{
              maxWidth: "300px"
            }}
            src={require("../assets/img/logo-white.png")}
            alt="la7"
          />
        </Logo>
      </div>
    </Container>
  );
};

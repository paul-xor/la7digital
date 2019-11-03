import React from "react";
import styled from "styled-components";
import "../styles/App.css";
import NavBar from "./NavBar";
import SinglePage from "./SinglePage";

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

const Heading = styled.h1`
  color: white;
  font-size: 5em;
  margin: 40px 0px 0px 0px;
  font-family: "Comfortaa", cursive;
`;

export default () => {
  return (
    <Container className="App">
      <div>
        <NavBar />
        <SinglePage />
      </div>
    </Container>
  );
};

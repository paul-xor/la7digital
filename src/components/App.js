import React from "react";
import styled from "styled-components";
import "../styles/App.css";
import NavBar from "./NavBar";
import SinglePage from "./SinglePage";

const Container = styled.div``;

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

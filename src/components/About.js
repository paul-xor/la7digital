import React, { Component } from "react";
import styled from "styled-components";

const Text = styled.h3`
  font-family: "Comfortaa", cursive;
  font-size: 20px;
  color: white;
  margin: 20px;
  padding: 10px;
`;

export default class About extends Component {
  render() {
    return (
      <Text>
        About. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem illo
        sapiente eos earum ut voluptate explicabo, laborum est similique iste
        enim aspernatur fuga velit officiis repudiandae reprehenderit error id
        illum.
      </Text>
    );
  }
}

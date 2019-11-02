import React, { Component } from "react";
import styled from "styled-components";
import Tabletop from "tabletop";

const Header2 = styled.h2`
  font-family: "Comfortaa", cursive;
  font-size: 50px;
  color: red;
  margin: 20px;
  padding: 10px;
`;

const Header3 = styled.h3`
  font-family: "Comfortaa", cursive;
  font-size: 40px;
  color: white;
  margin: 20px;
  padding: 10px;
`;

const Text = styled.h5`
  font-family: "Comfortaa", cursive;
  font-size: 20px;
  color: whitesmoke;
  margin: 20px;
  padding: 10px;
`;

export default class About extends Component {
  constructor(props) {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const keyGoogleSheet = process.env.REACT_APP_ABOUT_KEY;

    Tabletop.init({
      key: keyGoogleSheet,
      callback: googleData => {
        this.setState({
          data: googleData
        });
      },
      simpleSheet: true
    });
  }

  render() {
    // console.log("updated state --->", this.state);
    const { data } = this.state;
    return (
      <div id="about">
        {data.map(obj => {
          return (
            <div key={obj.main_header}>
              <Header2>{obj.main_header}</Header2>
              <Text>{obj.main_text}</Text>
              <Header3>{obj.sub1_header}</Header3>
              <Text>{obj.sub1_text}</Text>
              <Header3>{obj.sub2_header}</Header3>
              <Text>{obj.sub2_text}</Text>
            </div>
          );
        })}
      </div>
    );
  }
}

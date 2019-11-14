import React, { Component } from "react";
import styled from "styled-components";
import Tabletop from "tabletop";

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

const Text = styled.h5`
  font-size: 20px;
  color: whitesmoke;
  margin: 20px;
  padding: 10px;
`;

const ImgKey = styled.img`
  height: 300px;
  width: 400px;
  margin: 20px;
  border-radius: 10%;
  &:hover {
    cursor: pointer;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 50%;
  margin: 20px 20px 20px 20px;

  @media (max-width: 976px) {
    width: 95%;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 976px) {
    flex-direction: column;
  }
`;

const Box = styled.div`
  font-family: "Comfortaa", cursive;

  margin: 100px 10px 100px;
  padding: 100px 0px 100px;
  background-color: rgb(45, 45, 45);
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
            <Box key={obj.main_header}>
              <Row>
                <Column>
                  <Header2>{obj.main_header}</Header2>
                  <Text>{obj.main_text}</Text>
                </Column>
                <Column>
                  <ImgKey alt={obj.img} src={obj.img} />
                </Column>
              </Row>
              <Row>
                <Column>
                  <Header3>{obj.sub1_header}</Header3>
                  <Text>{obj.sub1_text}</Text>
                </Column>
                <Column>
                  <Header3>{obj.sub2_header}</Header3>
                  <Text>{obj.sub2_text}</Text>
                </Column>
              </Row>
            </Box>
          );
        })}
      </div>
    );
  }
}

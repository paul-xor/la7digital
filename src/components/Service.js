import React, { Component } from "react";
import styled from "styled-components";
import Tabletop from "tabletop";

const Box = styled.div`
  font-family: "Comfortaa", cursive;

  margin: 100px 10px 100px;
  padding: 100px 25px 100px;

  background-color: rgb(45, 45, 50);
`;

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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CardBlack = styled.div`
  flex: 1;
  border-radius: 25px;
  border-left: 5px solid grey;
  background-color: black;
  box-shadow: 0 0 20px 0 rgba(71, 87, 104, 0.7);
  margin: 20px 20px 20px 0px;
`;

const CardEmpty = styled.div`
  flex: 1;
`;

const CardWhite = styled.div`
  /* flex: 1; */
  border-bottom: 10px solid red;
  background-color: #585b57;
  box-shadow: 0 0 20px 0 rgba(71, 87, 104, 0.7);
  margin: 20px 20px 20px 20px;
  &:hover {
    transform: scale(1.1);
  }
`;

class Service1 extends Component {
  constructor(props) {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    Tabletop.init({
      key: process.env.REACT_APP_SERVICE_KEY,
      callback: googleData => {
        this.setState({ data: googleData });
      },
      simpleSheet: true
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div id="new_service">
        {data.map(obj => {
          return (
            <Box key={obj.service_header}>
              <Header2>{obj.service_header}</Header2>
              <CardWrapper>
                <CardBlack>
                  <Header3>{obj.service_header}</Header3>
                  <Text>{obj.black_box_text}</Text>
                </CardBlack>
                <CardEmpty>
                  <Text>{obj.normal_text}</Text>
                </CardEmpty>
              </CardWrapper>
              <CardWrapper>
                <CardWhite>
                  <Text style={{ color: "#whitesmoke" }}>
                    {obj.box_1_header}
                  </Text>
                  <Text style={{ color: "#E8E0D9" }}>{obj.box_1_text}</Text>
                </CardWhite>
                <CardWhite>
                  <Text style={{ color: "#whitesmoke" }}>
                    {obj.box_2_header}
                  </Text>
                  <Text style={{ color: "#E8E0D9" }}>{obj.box_2_text}</Text>
                </CardWhite>
                <CardWhite>
                  <Text style={{ color: "whitesmoke" }}>
                    {obj.box_3_header}
                  </Text>
                  <Text style={{ color: "#E8E0D9" }}>{obj.box_3_text}</Text>
                </CardWhite>
              </CardWrapper>
            </Box>
          );
        })}
      </div>
    );
  }
}

export default Service1;

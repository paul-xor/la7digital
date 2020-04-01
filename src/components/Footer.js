import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Col = styled.div`
  flex: 0 1 33%;
`;

const Text6 = styled.h6`
  font-size: 2rem;
  color: whitesmoke;
  font-family: "Comfortaa", cursive;
`;

const Footer = () => {
  return (
    <div>
      <Row>
        <Col>
          <Text6>Copyright</Text6>
        </Col>
        <Col></Col>
        <Col>
          <Text6>Build Your Digital Identity</Text6>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

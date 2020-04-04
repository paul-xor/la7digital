import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Col = styled.div`
  flex: 0 1 33%;
`;

const IconWrapper = styled.div`
  margin: 10px;
`;

const Text5 = styled.h6`
  font-size: 1.5rem;
  padding: 10px;
  float: right;
  color: grey;
  font-family: "Comfortaa", cursive;
`;

const Text6 = styled.h6`
  font-size: 1rem;
  padding: 10px;
  color: whitesmoke;
  font-family: "Comfortaa", cursive;
`;
/** jshint -E015 */
const Footer = () => {
  return (
    <div>
      <Row>
        <Col>
          <Text6>Copyright© LA7digital Website 2019</Text6>
        </Col>
        <Col>
          <Row
            style={{
              color: "whitesmoke",
            }}
          >
            <IconWrapper>
              <i class="fab fa-facebook-f"></i>
            </IconWrapper>
            <IconWrapper>
              <i class="fab fa-twitter"></i>
            </IconWrapper>
            <IconWrapper>
              <i class="fab fa-instagram"></i>
            </IconWrapper>
          </Row>
        </Col>
        <Col>
          <Text5>Build Your Digital Identity</Text5>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

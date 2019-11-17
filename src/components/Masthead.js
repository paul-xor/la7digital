import React from "react";
import styled from "styled-components";
import Background from "../assets/img/image_main_bg.jpg";

const masthead = styled.div``;

const Header = styled.h2`
  font-size: 70px;
  color: grey;
  margin: 20px;
  padding: 10px;
`;

const Text = styled.h5`
  font-size: 20px;
  color: whitesmoke;
  margin: 20px;
  padding: 10px;
`;

const Box = styled.div`
  font-family: "Comfortaa", cursive;

  margin: 100px 10px 100px;
  padding: 100px 0px 100px;
`;

const ImgBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(22, 22, 22, 0.3)),
      color-stop(75%, rgba(22, 22, 22, 0.7)),
      to(#161616)
    ),
    url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  z-index: 1;
`;

export default function Masthead() {
  return (
    <ImgBackground>
      <Header>Build Your Digital Identity</Header>
      <Text>
        Your digital identity is not a logo, your message, your social media
        page or your website. It’s all together!
      </Text>
    </ImgBackground>
  );
}

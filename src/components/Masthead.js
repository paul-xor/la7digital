import React from "react";
import styled from "styled-components";
import Background from "../assets/img/image_main_bg_1000x723px.jpg";

const Header = styled.h2`
  font-size: 5rem;
  color: grey;
  margin: 10% 30% 0% 10%;
  padding: 10px;
`;

const Text = styled.h5`
  font-size: 1.7rem;
  color: whitesmoke;
  margin: 0% 30% 10% 10%;
  padding: 20px;
`;

const Box = styled.div`
  font-family: "Comfortaa", cursive;
  /* margin: 100px 30px 100px; */
  padding: 180px 0px 100px;
`;

const ImgBackground = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100vh;

  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(rgba(22, 22, 22, 0.3)),
      color-stop(95%, rgba(22, 22, 22, 0.7)),
      to(#161616)
    ),
    url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 100% 82%;
`;

export default function Masthead() {
  return (
    <ImgBackground>
      <Box>
        <Header>Build Your Digital Identity</Header>
        <Text>
          Your digital identity is not a logo, your message, your social media
          page or your website. It’s all together!
        </Text>
      </Box>
    </ImgBackground>
  );
}

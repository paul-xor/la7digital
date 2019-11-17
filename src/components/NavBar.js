import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = styled.div``;

const Container = styled.div`
  padding: 0.7rem;
  background-color: rgb(0, 0, 0);
  display: flex;
`;

const Logo = styled.img`
  height: 90px;
  width: 110px;
  &:hover {
    cursor: pointer;
  }
`;

const Links = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(255, 255, 255);
  font-family: Helvetica;
  font-size: 18px;
`;

const NavItem = styled.div`
  display: inline;
  margin-left: 4rem;
  &:hover {
    border-bottom: 5px solid red;
    cursor: pointer;
  }
`;

const NavBar = props => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const offSet = () => {
    window.onscroll = function() {
      myFunction();
    };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        navbar.classList.remove("hide");
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("hide");
      }
    }
  };

  useEffect(() => {
    offSet();
  }, []);

  return (
    <Nav id="navbar">
      <Container>
        <Logo
          src={require("../assets/img/logo-white.png")}
          alt="LA7 Logo"
          onClick={scrollToTop}
        />
        <Links>
          <NavItem>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              ABOUT
            </Link>
          </NavItem>
          <NavItem>
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              SERVICE
            </Link>
          </NavItem>
          <NavItem>
            <Link
              activeClass="active"
              to="contact-form"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CONTACT
            </Link>
          </NavItem>
        </Links>
      </Container>
    </Nav>
  );
};

export default NavBar;

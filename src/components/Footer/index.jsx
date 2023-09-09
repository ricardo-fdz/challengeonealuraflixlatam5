import React from "react";
import Logo from "../Logo";
import styled from "@emotion/styled";

const FooterStyled = styled.footer`
  background-color: #0c0c0d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: solid 3px #00a6ed;
  color: white;
  font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const Credits = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Logo />
      <Credits>
        <p>Alura Cursos/Oracle One 2023®️</p>
        <p>Ricardo Hernandez💻</p>
      </Credits>
    </FooterStyled>
  );
};

export default Footer;

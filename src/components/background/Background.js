import React from "react";
import { Container, Logo, LogoContainer } from "./styles";
import logo from "../../assets/rocketbank.svg";

export default function Background({ children }) {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      {children}
    </Container>
  );
}

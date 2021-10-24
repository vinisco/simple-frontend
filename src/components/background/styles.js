import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(to bottom right, #143752ff, #10a7d6ff);
  background-position: center;
  min-height: 100vh;
  height: auto;
  padding-bottom: 40px;
`;

export const LogoContainer = styled.div`
  position: absolute;
`;

export const Logo = styled.img`
  width: 43%;
  height: 43%;
  margin: 30px;

  @media (max-width: 480px) {
    width: 32%;
    height: 32%;
    margin: 26px;
    margin-top: 40px;
  }
`;

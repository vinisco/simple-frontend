import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/MontserratAlternates-Regular.otf";

export const theme = {
  colors: {
    main: "#126b90ff",
    default: "#e4e4e4ff",
    success: "#50a851ff",
    info: "#4fbbdbff",
    danger: "#d44a47ff",
  },
  font: Montserrat,
};

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: Montserrat;
    src: url(${Montserrat}) format('truetype');
  }


`;

export default GlobalStyle;

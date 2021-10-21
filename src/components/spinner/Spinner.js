import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Background } from "../background";
import GridContainer from "../grid/GridContainer";
import GridItem from "../grid/GridItem";
import { Container } from "./styles";

export const Spinner = (props) => {
  return (
    <Container>
      <Background />
      <GridContainer>
        <GridItem align="center" xs={12} sm={12} md={12}>
          <CircularProgress color="inherit" />
        </GridItem>
        <GridItem align="center" xs={12} sm={12} md={12}>
          <p>{props.message}</p>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default Spinner;

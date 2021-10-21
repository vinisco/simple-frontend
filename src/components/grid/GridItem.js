import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Container } from "./styles";

const GridItem = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid item {...rest}>
      <Container>{children}</Container>
    </Grid>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
};

export default GridItem;

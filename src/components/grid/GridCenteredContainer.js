import { Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import { GridContainer, GridItem } from ".";
import { Container } from "./styles";

const GridCenteredContainer = (props) => {
  const { children, ...rest } = props;

  return (
    <>
      <GridContainer {...rest}>
        <GridItem xs={1} sm={2} md={3} />
        <GridItem xs={10} sm={8} md={6}>
          <Paper>
            <Container>{children}</Container>
          </Paper>
        </GridItem>
        <GridItem xs={1} sm={2} md={3} />
      </GridContainer>
    </>
  );
};

GridCenteredContainer.propTypes = {
  children: PropTypes.node,
};

export default GridCenteredContainer;

import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

const GridContainer = (props) => {
  const { children, ...rest } = props;
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node,
};

export default GridContainer;

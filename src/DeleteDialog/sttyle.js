import { Container, Dialog, styled as styledMaterial } from "@material-ui/core";

export const StyledDialog = styledMaterial(Dialog)(() => ({
  opacity: 0.4,
}));

export const StyledContainer = styledMaterial(Container)(() => ({
  opacity: 1,
}));

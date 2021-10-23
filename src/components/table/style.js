import {
  styled as styledMaterial,
  TableCell,
  TableRow,
} from "@material-ui/core";
import styled from "styled-components";

export const StyledTableCell = styledMaterial(TableCell)(() => ({
  backgroundColor: "#126b90ff",
  color: "white",
  fontSize: "12px",
  margin: 0,
}));

export const StyledTableRow = styledMaterial(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#b6d5deff",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

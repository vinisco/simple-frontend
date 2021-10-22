import { styled, TableCell, TableRow } from "@material-ui/core";

export const StyledTableCell = styled(TableCell)(() => ({
  "&": {
    backgroundColor: "#126b90ff",
    color: "white",
    fontSize: "12px",
    margin: 0,
  },
}));

export const StyledTableRow = styled(TableRow)(() => ({
  "&": {
    color: "white",
    fontSize: "10px",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#b6d5deff",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
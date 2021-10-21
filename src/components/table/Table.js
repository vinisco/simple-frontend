import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  styled,
} from "@material-ui/core";

import { Edit, DeleteOutline } from "@material-ui/icons";
import {
  actions as routeActions,
  types as routes,
} from "../../reducers/routes.actions";
import { StyledTableCell, StyledTableRow } from "./style";

const CustomizedTables = (props) => {
  console.log("props", props);
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ maxWidth: 200, maxHeight: 20 }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {props.rowsTitle.map((row) => {
              return (
                <StyledTableCell key={row.name} align={row.align}>
                  {row.name}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <StyledTableRow key={row.nome}>
              <TableCell component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="right">
                {row.cidade}/{row.uf}
              </TableCell>
              <TableCell align="right">
                <Edit
                  onClick={() =>
                    dispatch(
                      routeActions.redirectTo(routes.USER, { id: row.id })
                    )
                  }
                />
                <DeleteOutline />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;

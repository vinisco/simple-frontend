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
} from "@material-ui/core";

import { Edit, DeleteOutline } from "@material-ui/icons";
import {
  actions as routeActions,
  types as routes,
} from "../../reducers/routes.actions";
import { StyledTableCell, StyledTableRow } from "./style";
import { calculateAge } from "../../utils/calculateAge";
import { actions } from "../../reducers/home.actions";

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
              <TableCell align="center">
                {row.cidade}/{row.uf}
              </TableCell>
              <TableCell align="center">
                {calculateAge(row.dataNascimento)}
              </TableCell>
              <TableCell align="center">
                <Edit
                  onClick={() =>
                    dispatch(
                      routeActions.redirectTo(routes.USER, { id: row.id })
                    )
                  }
                />
                <DeleteOutline
                  onClick={() =>
                    dispatch(
                      actions.deleteUser.request({
                        id: row.id,
                        data: props.rows,
                      })
                    )
                  }
                />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;

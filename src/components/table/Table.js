import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Button,
} from "@material-ui/core";

import { Edit, DeleteOutline, AddCircleOutlined } from "@material-ui/icons";
import {
  actions as routeActions,
  types as routes,
} from "../../reducers/routes.actions";
import { StyledTableCell, StyledTableRow, Container } from "./style";
import { calculateAge } from "../../utils/calculateAge";
import { actions } from "../../reducers/home/home.actions";
import { DeleteDialog } from "../DeleteDialog";

const CustomizedTables = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    setOpen(true);
  };

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
            <StyledTableRow key={row.id}>
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
                <DeleteOutline onClick={handleDelete} />
                <DeleteDialog
                  open={open}
                  title={"Excluir usuário"}
                  setOpen={setOpen}
                  deleteFunction={() =>
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
      <Container>
        <Button
          onClick={() => dispatch(routeActions.redirectTo(routes.CREATE))}
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<AddCircleOutlined />}
        >
          Adicionar usuário
        </Button>
      </Container>
    </TableContainer>
  );
};

export default CustomizedTables;

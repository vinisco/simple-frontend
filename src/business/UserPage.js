import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { actions } from "../reducers/user.actions";
import { Button } from "@material-ui/core";
import {
  ControlledTextField,
  ControlledZipCodeTextField,
} from "../components/inputs";
import { Spinner } from "../components/spinner";
import GridItem from "../components/grid/GridItem";
import { GridCenteredContainer } from "../components/grid";
import { Save } from "@material-ui/icons";
import { MainTitle } from "../components/text";

const UserPage = () => {
  const dispatch = useDispatch();
  const { loading, data, id } = useSelector((state) => state.user);
  const rules = {};
  const initialValues = {
    nome: "",
    dataNascimento: "",
    cep: "",
    cidade: "",
    uf: "",
    ...data,
  };
  const formProps = {
    ...useForm(),
    rules,
    initialValues,
  };
  const handleSubmit = (values) => {
    dispatch(actions.saveUser.request(values));
  };

  if (loading) {
    return <Spinner message={"Carregando usuários"} />;
  }

  return (
    <>
      <form onSubmit={formProps.handleSubmit(handleSubmit)}>
        <GridItem align="center" xs={12} sm={12} md={12}>
          <MainTitle>Usuário #{id}</MainTitle>
        </GridItem>
        <GridCenteredContainer>
          <GridItem xs={12} sm={12} md={12} />
          <GridItem xs={12} sm={12} md={12}>
            <ControlledTextField
              fullWidth
              label="Nome"
              name={"nome"}
              formProps={formProps}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ControlledZipCodeTextField
              fullWidth
              label="CEP"
              name={"cep"}
              formProps={formProps}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ControlledTextField
              fullWidth
              label="Cidade"
              name={"cidade"}
              formProps={formProps}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ControlledTextField
              fullWidth
              label="UF"
              name={"uf"}
              formProps={formProps}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Button
              fullWidth
              variant="contained"
              type={"submit"}
              color="primary"
              startIcon={<Save />}
            >
              GRAVAR
            </Button>
          </GridItem>
        </GridCenteredContainer>
      </form>
    </>
  );
};

export default UserPage;

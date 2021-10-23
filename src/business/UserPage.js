import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { actions } from "../reducers/user/user.actions";
import { Button } from "@material-ui/core";
import {
  ControlledDateField,
  ControlledTextField,
  ControlledZipCodeTextField,
} from "../components/inputs";
import { Spinner } from "../components/spinner";
import GridItem from "../components/grid/GridItem";
import { GridCenteredContainer } from "../components/grid";
import { Save } from "@material-ui/icons";
import { MainTitle } from "../components/text";
import { request } from "../utils/api";

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
  const handleOnBlur = async (event) => {
    const { value } = event.target;
    if (value.length !== 9) {
      return;
    }
    const data = await request({
      is_mock: false,
      url: `https://viacep.com.br/ws/${value}/json`,
      method: "GET",
    });

    formProps.setValue("cidade", data.data.localidade);
    formProps.setValue("uf", data.data.uf);
  };

  if (loading) {
    return <Spinner message={"Carregando dados do usuário"} />;
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
              required
              fullWidth
              label="Nome"
              name={"nome"}
              formProps={formProps}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ControlledZipCodeTextField
              required
              handleOnBlur={handleOnBlur}
              fullWidth
              label="CEP"
              name={"cep"}
              formProps={formProps}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ControlledTextField
              required
              fullWidth
              label="Cidade"
              name={"cidade"}
              formProps={formProps}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ControlledTextField
              required
              fullWidth
              label="UF"
              name={"uf"}
              formProps={formProps}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ControlledDateField
              required
              fullWidth
              label="Data de nascimento"
              name={"dataNascimento"}
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
              SALVAR
            </Button>
          </GridItem>
        </GridCenteredContainer>
      </form>
    </>
  );
};

export default UserPage;

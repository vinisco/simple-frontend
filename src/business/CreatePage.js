import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";
import { actions } from "../reducers/create/create.actions";
import { Button } from "@material-ui/core";
import {
  ControlledDateField,
  ControlledTextField,
  ControlledZipCodeTextField,
} from "../components/inputs";
import GridItem from "../components/grid/GridItem";
import { GridCenteredContainer } from "../components/grid";
import { Save } from "@material-ui/icons";
import { MainTitle } from "../components/text";
import { request } from "../utils/api";

const UserPage = () => {
  const dispatch = useDispatch();

  const rules = {};
  const initialValues = {
    nome: "",
    dataNascimento: new Date(),
    cep: "",
    cidade: "",
    uf: "",
  };
  const formProps = {
    ...useForm(),
    rules,
    initialValues,
  };
  const { setValue, setError, clearErrors } = formProps;

  const handleSubmit = (values) => {
    dispatch(actions.createUser.request(values));
  };
  const handleOnBlur = async (event) => {
    const { value } = event.target;
    if (value.length !== 9) {
      return;
    }
    const { data } = await request({
      is_mock: false,
      url: `https://viacep.com.br/ws/${value}/json`,
      method: "GET",
    });

    const { localidade, uf } = data;
    if (localidade && uf) {
      clearErrors("cep");
      setValue("cidade", localidade);
      setValue("uf", uf);
    } else {
      setError("cep", {
        type: "manual",
        message: "CEP inválido",
      });
      setValue("cidade", "");
      setValue("uf", "");
    }
  };

  return (
    <>
      <form onSubmit={formProps.handleSubmit(handleSubmit)}>
        <GridItem align="center" xs={12} sm={12} md={12}>
          <MainTitle>Novo usuário</MainTitle>
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

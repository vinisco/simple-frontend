import { useDispatch, useSelector } from "react-redux";
import {
  actions as routeActions,
  types as routes,
} from "../reducers/routes.actions";

import { Edit, DeleteOutline } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { actions } from "../reducers/user.actions";
import { Button } from "@material-ui/core";
import { ControlledTextField } from "../components/inputs";

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
    return <div>Carregando usuário</div>;
  }

  return (
    <>
      <h2>Usuário #{id}</h2>

      <form onSubmit={formProps.handleSubmit(handleSubmit)}>
        <ControlledTextField label="Nome" name={"nome"} formProps={formProps} />
        <ControlledTextField label="CEP" name={"cep"} formProps={formProps} />
        <ControlledTextField
          label="Cidade"
          name={"cidade"}
          formProps={formProps}
        />
        <ControlledTextField label="UF" name={"uf"} formProps={formProps} />
        <Button type={"submit"}>GRAVAR</Button>
      </form>
    </>
  );
};

export default UserPage;

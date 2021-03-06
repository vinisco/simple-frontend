import { useSelector } from "react-redux";
import GridContainer from "../components/grid/GridContainer";
import GridItem from "../components/grid/GridItem";
import { Spinner } from "../components/spinner";
import { Table } from "../components/table";
import { MainTitle } from "../components/text";
import { orderData } from "../utils/orderData";

const HomePage = () => {
  const { loading, data } = useSelector((state) => state.home);

  const rowsTitle = [
    { name: "Nome", align: "left" },
    { name: "Cidade/UF", align: "center" },
    { name: "Idade", align: "center" },
    { name: "Ações", align: "center" },
  ];

  if (loading) {
    return <Spinner message={"Carregando usuários"} />;
  }

  return (
    <GridContainer>
      <GridItem align="center" xs={12} sm={12} md={12}>
        <MainTitle>Usuários</MainTitle>
      </GridItem>
      <GridItem xs={12} sm={1} md={2} />
      <GridItem xs={12} sm={9} md={8}>
        <Table
          rowsTitle={rowsTitle}
          rows={orderData(data, Date, "dataNascimento")}
        />
      </GridItem>
      <GridItem xs={12} sm={1} md={2} />
    </GridContainer>
  );
};

export default HomePage;

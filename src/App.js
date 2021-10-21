import "./App.scss";
import { Background } from "./components/background";
import Routes from "./Routes";

const App = () => {
  return (
    <Background>
      <Routes />
    </Background>
  );
};

export default App;

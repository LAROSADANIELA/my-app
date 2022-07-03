import "./App.css";
import Cover from "./components/cover/Cover";
import Proyectos from "./components/proyectos/Proyectos";
import Agenda from "./components/agenda/Agenda";

function App() {
  return (
    <div className="App">
      <Cover />
      <Agenda />
      <Proyectos />
    </div>
  );
}

export default App;

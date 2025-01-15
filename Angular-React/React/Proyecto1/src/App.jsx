import Cabecera from "./componentes/Cabecera";
import Botones from "./componentes/Botones";
import Pie from "./componentes/Pie";

function App() {
  return (
    <div className="app-container">
      <Cabecera />
      <div className="app-titulo">
        <h1>Principal</h1>
      </div>
      <Botones />
      <Pie />
    </div>
  );
}

export default App;
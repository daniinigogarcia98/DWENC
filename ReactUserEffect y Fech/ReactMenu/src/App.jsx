import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Datos0 from "./componentes/Datos0";
import Datos1 from "./componentes/Datos1";
import Datos2 from "./componentes/Datos2";
import Datos3 from "./componentes/Datos3";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link to="/" className="navbar-brand">Listado Apis</Link>
          <Link to="/datos0" className="navbar-brand">Datos 0</Link>
          <Link to="/datos1" className="navbar-brand">Datos 1</Link>
          <Link to="/datos2" className="navbar-brand">Datos 2</Link>
          <Link to="/datos3" className="navbar-brand">Datos 3</Link>
        </nav>
          <Routes>
            <Route path="/datos0" element={<Datos0 />} /> 
            <Route path="/datos1" element={<Datos1 />} />
            <Route path="/datos2" element={<Datos2 />} />
            <Route path="/datos3" element={<Datos3 />} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;

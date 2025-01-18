import { useState } from 'react'
import EJ1 from './componentes/EJ1.jsx';
function App() {
  const [vector, setVector] = useState([]);
  const [numero, setNumero] = useState({});
  const generarVector = () => {
    const Vector = Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000));
    setVector(Vector);

    const valorMaximo = Math.max(...Vector);
    const valorMinimo = Math.min(...Vector);
    const media = Vector.reduce((item, index) => item + index, 0) / Vector.length;
    const estaDuplicado = new Set(Vector).size !== Vector.length;

    setNumero({ valorMaximo, valorMinimo, media, estaDuplicado });
  };
  return (
       <div className="container-fluid">
      <div className="row justify-content-start align-items-center">
        <div className="col-12 mt-4">
          <h1>Generar números aleatorios</h1>
        </div>
        <div className="col-12">
          <button className="btn btn-dark btn-lg" onClick={generarVector}>
            Generar Vector
          </button>
        </div>
      </div>
      {vector.length > 0 && (
        <div className="mt-4">
          <EJ1 vector={vector} numero={numero} />
        </div>
      )}
    </div>
  );

}

export default App
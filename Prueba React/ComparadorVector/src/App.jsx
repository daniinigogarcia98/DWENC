import { useState } from 'react'
import EJ1 from './componentes/EJ1.jsx';
function App() {
  const [vector1, setVector1] = useState([]);
  const [vector2, setVector2] = useState([]);
  const generarVector1 = () => {
    const obtenerVectorAleatorio = () => {
      const numeros = [];
      while (numeros.length < 6) {
        const num = Math.floor(Math.random() * 50) + 1;
        if (!numeros.includes(num)) {
          numeros.push(num);
        }
      }
    
      return numeros.sort((a, b) => a - b);
    };

    setVector1(obtenerVectorAleatorio());
  };

  const generarVector2 = () => {
    const obtenerVectorAleatorio = () => {
      const numeros = [];
      while (numeros.length < 6) {
        const num = Math.floor(Math.random() * 50) + 1;
        if (!numeros.includes(num)) {
          numeros.push(num);
        }
      }
      
      return numeros.sort((a, b) => a - b);
    };

    setVector2(obtenerVectorAleatorio());
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-start align-items-center">
        <div className="col-12 mt-4">
          <h1>Comparador de Vectores</h1>
          <button className="btn btn-dark btn-lg me-2" onClick={generarVector1}>Generar Vector 1</button>
          <button className="btn btn-dark btn-lg"onClick={generarVector2}>Generar Vector 2</button>
        </div>
      </div>

      {vector1.length > 0 && vector2.length > 0 && (
        <div className="mt-4">
          <EJ1 vector1={vector1} vector2={vector2} />
        </div>
      )}
    </div>
  );
}

export default App
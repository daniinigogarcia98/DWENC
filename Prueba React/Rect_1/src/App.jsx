import EJ1 from './componentes/EJ1.jsx';
import EJ2 from './componentes/EJ2.jsx';
import EJ3 from './componentes/EJ3.jsx';
import { useState } from 'react';

function App() {
  const [vector, setVector] = useState([]);
  const [numero, setNumero] = useState({});
  const [vector1, setVector1] = useState([]);
  const [vector2, setVector2] = useState([]);
  const colores = ["red", "green", "blue", "yellow", "pink", "orange"];
  const [color, setColor] = useState('white');
  const cambiarColor = (nuevoColor) => {
    setColor(nuevoColor);
  };

  const generarVector = () => {
    const Vector = Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000));
    setVector(Vector);

    const valorMaximo = Math.max(...Vector);
    const valorMinimo = Math.min(...Vector);
    const media = Vector.reduce((item, index) => item + index, 0) / Vector.length;
    const estaDuplicado = new Set(Vector).size !== Vector.length;

    setNumero({ valorMaximo, valorMinimo, media, estaDuplicado });
  };

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
          <h1>Generar números aleatorios</h1>
        </div>
        <div className="col-12">
          <button className="btn btn-dark btn-lg" onClick={generarVector}>
            Generar Vector
          </button>
          <h1>Comparador de Vectores</h1>
          <button className="btn btn-dark btn-lg me-2" onClick={generarVector1}>Generar Vector 1</button>
          <button className="btn btn-dark btn-lg"onClick={generarVector2}>Generar Vector 2</button>
            <div className="container text-center my-5">
           <h1>Elige Color </h1>
        <div
           style={{
              width: '300px',
              height: '300px',
              backgroundColor: color,
              margin: '20px auto',
              transition: 'background-color 0.3s ease',
              }}
                className="border rounded shadow">
      </div>
          </div>
        </div>
      </div>

      {vector.length > 0 && (
        <div className="mt-4">
          <EJ1 vector={vector} numero={numero} />
          <EJ2 vector1={vector1} vector2={vector2} />
          <EJ3 colores={colores} cambiarColor={cambiarColor} />
        </div>
      )}
    </div>
  );
}

export default App;

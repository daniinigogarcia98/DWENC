import EJ1 from './componentes/EJ1.jsx';
import { useState } from 'react';

function App() {
  const colores = ["red", "green", "blue", "yellow", "pink", "orange"];
  const [color, setColor] = useState('white');
  const cambiarColor = (nuevoColor) => {
    setColor(nuevoColor);
  };

 

  return (
    <div className="container-fluid">
      <div className="row justify-content-start align-items-center">
        <div className="col-12 mt-4">
          <div className="container justify-content-center">
           <h1>Elige Color </h1>
           </div>
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

     
        <div className="mt-4">
          <EJ1 colores={colores} cambiarColor={cambiarColor} />
        </div>
    </div>
  );
}

export default App;

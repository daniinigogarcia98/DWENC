import { useState } from "react";
import "./estilo.css"; // Asegúrate de importar los estilos

const Botones = () => {
  // Inicializamos el estado para el contador y num1 (acumulador)
  const [contador, setContador] = useState(0);
  const [num1, setNum1] = useState(0); // Estado para almacenar el valor de acumulación

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + num1); // Sumar num1 al contador
  };

  // Función para decrementar el contador
  const decrementar = () => {
    setContador(contador - num1); // Restar num1 al contador
  };

  // Función para obtener el valor del input y actualizar el estado de num1
  const obtenerNumero = (e) => {
    setNum1(Number(e.target.value)); // Captura el valor del input y lo convierte a número
  };

  return (
    <div className="app">
        <h3>Contador</h3>
    
      
      <div className="contador-display">{contador}</div>

    
      <button className="estilo_incremento" onClick={incrementar}>
        Incrementar
      </button>
      <button className="estilo_decremento" onClick={decrementar}>
        Decrementar
      </button>
      <br />
        {/* Input para establecer el valor de incremento/decremento */}
        <input
        type="number"
        value={num1}
        onChange={obtenerNumero} 
        placeholder="Incrementador"
        className="estilo-input"
      />
      <br />
    </div>
  );
};

export default Botones;

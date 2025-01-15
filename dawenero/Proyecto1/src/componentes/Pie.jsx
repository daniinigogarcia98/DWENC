import { useState } from "react";

const Pie = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);

  const generarNumeroAleatorio = () => {
    setNumeroAleatorio(Math.floor(Math.random() * 100)); // Generar número aleatorio
  };

  return (
    <footer>
      <div>
        <h3>Pie de Página</h3>
        {numeroAleatorio !== null && <p>Número Aleatorio: {numeroAleatorio}</p>}
        <button onClick={generarNumeroAleatorio} className="estilo_generar">
          Generar número aleatorio
        </button>
      </div>
    </footer>
  );
};

export default Pie;
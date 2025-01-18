/* eslint-disable react/prop-types */
import { useState } from 'react';
function EJ2 ({ vector1, vector2 }) {
  const [coincidencias, setCoincidencias] = useState(null);
  const contarCoincidencias = () => {
    const coincidencias = vector1.filter(valor => vector2.includes(valor));
    return coincidencias.length;
  };

  const Comparacion = () => {
    const coincidenciasContadas = contarCoincidencias();
    setCoincidencias(coincidenciasContadas);
  };
  return (
    <div>
         {vector1.length > 0 && vector2.length > 0 && (
        <>
          <p><b>Vector 1:</b>{vector1.join(', ')}<b>Vector 2:</b>{vector2.join(', ')}</p>
          <button className="btn btn-dark btn-lg" onClick={Comparacion}>Comparar Vectores</button>
          {coincidencias !== null && (
            <h3>Coincidencias: {coincidencias} coincidencia(s)</h3>
          )}
        </>
      )}
    </div>
  )
}

export default EJ2
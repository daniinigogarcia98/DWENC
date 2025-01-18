/* eslint-disable react/prop-types */

function EJ1({ vector, numero }) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="mb-4">
            <h2>Vector</h2>
            <p>{vector.length}{ vector.join(', ')}</p>
          </div>

          <div>
            <h5>Estadísticas</h5>
            <p>Máximo: {numero.valorMaximo}</p>
            <p>Mínimo: {numero.valorMinimo}</p>
            <p>Media: {numero.media}</p>
            <p>{numero.estaDuplicado ? 'Hay repeticiones en el vector' : 'No hay repeticiones en el vector'}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default EJ1;
  
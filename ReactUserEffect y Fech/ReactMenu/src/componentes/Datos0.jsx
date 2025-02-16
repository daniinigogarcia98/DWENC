import { useState, useEffect } from "react";

const url = "/getImagenes.php.json";  

const Datos0 = () => {
  const [imagenes, setImagenes] = useState([]);
  const [cargando, setCargando] = useState(true);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); 
        const result = await response.json();  
        setImagenes(result);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setCargando(false);  
      }
    };

    fetchData();  
  }, []); 

  if (cargando) {
    return <div>Cargando datos...</div>;  
  }

  return (
    <div>
      <h2>Datos de la API</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Texto</th>
            <th>Subtexto</th>
            <th>Activo</th>
          </tr>
        </thead>
        <tbody>
          {imagenes.map((vehiculo, index) => (
            <tr key={index}>
              <td>{vehiculo.id}</td>
              <td>
                <img src={vehiculo.imagen} alt={vehiculo.texto} style={{ width: '100px', height: 'auto' }} />
              </td>
              <td>{vehiculo.texto}</td>
              <td>{vehiculo.subtexto}</td>
              <td>{vehiculo.activo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datos0;

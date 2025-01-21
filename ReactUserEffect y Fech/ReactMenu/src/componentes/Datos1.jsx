import { useState, useEffect } from "react";

const url = "/getCiudades.php.json";  

const Datos1 = () => {
  const [ciudades, setCiudades] = useState([]);
  const [cargando, setCargando] = useState(true);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); 
        const result = await response.json();  
        setCiudades(result);
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
            <th>Nombre</th>
            <th>Poblacion</th>
            <th>Densidad</th>
            <th>Extensión</th>
          </tr>
        </thead>
        <tbody>
          {ciudades.map((ciudad, index) => (
            <tr key={index}>
                <td>{ciudad.id}</td>
                <td>{ciudad.nombre}</td>
                <td>{ciudad.poblacion}</td>
                <td>{ciudad.densidad}</td>
                <td>{ciudad.extension}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datos1;

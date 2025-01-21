import { useState, useEffect } from "react";

const url = "/getClientes.php.json";

const Datos2 = () => {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); 
        const result = await response.json();  
        setClientes(result);
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
            <th>Dni</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((clientes, index) => (
            <tr key={index}>
                <td>{clientes.dni}</td>
                <td>{clientes.nombre}</td>
                <td>{clientes.apellido}</td>
                <td>{clientes.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datos2;

import { useState, useEffect } from "react";

const url = "/getTodoPersonal.php.json";

const Datos3 = () => {
  const [personal, setPersonal] = useState([]);
  const [cargando, setCargando] = useState(true);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); 
        const result = await response.json();  
        setPersonal(result);
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
            <th>Direccion</th>
            <th>Cargo</th>
            <th>Edad</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {personal.map((personal, index) => (
            <tr key={index}>
                <td>{personal.id}</td>
                <td>{personal.nombre}</td>
                <td>{personal.direccion}</td>
                <td>{personal.cargo}</td>
                <td>{personal.edad}</td>
                <td>{personal.imagen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datos3;

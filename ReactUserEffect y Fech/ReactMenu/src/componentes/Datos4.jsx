import { useState, useEffect } from "react";

const url = "/coches.json";  

const Datos4 = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [cargando, setCargando] = useState(true);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url); 
        const result = await response.json();  
        setVehiculos(result); 
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
            <th>Color</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Consumo</th>
            <th>Precio</th>
            <th>Kms</th>
            <th>Tipo Motor</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo, index) => (
            <tr key={index}>
              <td>{vehiculo.color}</td>
              <td>{vehiculo.marca}</td>
              <td>{vehiculo.modelo}</td>
              <td>{vehiculo.consumo}</td>
              <td>{vehiculo.precio}</td>
              <td>{vehiculo.kms}</td>
              <td>{vehiculo.tipoMotor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datos4;

// src/components/Huerto.jsx
import  { useState } from 'react';
import Hortaliza from './Hortaliza';
import Frutal from './Frutal';

const Huerto = () => {
  // Estados para los mensajes y las peticiones
  const [mensajeParaHortaliza, setMensajeParaHortaliza] = useState("");
  const [mensajeParaFrutal, setMensajeParaFrutal] = useState("");
  
  const [mensajeDeHortaliza, setMensajeDeHortaliza] = useState("");
  const [mensajeDeFrutal, setMensajeDeFrutal] = useState("");
  
  const [peticionesSemilla, setPeticionesSemilla] = useState(0);
  const [peticionesPlantones, setPeticionesPlantones] = useState(0);

  const actualizaMensajeDeHortaliza = (mensaje) => {
    setMensajeDeHortaliza(mensaje);
  };

  const actualizaMensajeDeFrutal = (mensaje) => {
    setMensajeDeFrutal(mensaje);
  };

  const actualizarNumeroSemilleros = (semilleros) => {
    setPeticionesSemilla(semilleros);
  };

  const actualizarNumeroPlantones = (plantones) => {
    setPeticionesPlantones(plantones);
  };

  return (
    <div id="huerto">
      <h2>Huerto</h2>

      <span>Mensaje de huerto para Hortaliza</span>
      <input
        value={mensajeParaHortaliza}
        onChange={(e) => setMensajeParaHortaliza(e.target.value)}
      />
      <p>Hortaliza dice a huerto: {mensajeDeHortaliza}</p>
      <p>Peticiones de Hortaliza (semilleros) a huerto {peticionesSemilla}</p>
      <Hortaliza 
        mensajeDeEntradaHortaliza={mensajeParaHortaliza}
        mensajeDeSalidaHortaliza={actualizaMensajeDeHortaliza}
        nsemilleros={actualizarNumeroSemilleros}
      />

      <span>Mensaje huerto para Frutal{mensajeDeFrutal}</span>
      <input
        value={mensajeParaFrutal}
        onChange={(e) => setMensajeParaFrutal(e.target.value)}
      />
      <p>Frutal dice a huerto: </p>
      <p>Peticiones de Frutal (plantones) a huerto {peticionesPlantones}</p>
      <Frutal 
        mensajeDeEntradaFrutal={mensajeParaFrutal}
        mensajeDeSalidaFrutal={actualizaMensajeDeFrutal}
        nplantones={actualizarNumeroPlantones}
      />
    </div>
  );
};

export default Huerto;

import { useState } from 'react';
import PropTypes from 'prop-types';

const Frutal = ({ mensajeDeEntradaFrutal, mensajeDeSalidaFrutal, nplantones }) => {
  const [mensajeParaHuerto, setMensajeParaHuerto] = useState("");
  const [numeroPlantones, setNumeroPlantones] = useState(0);

  const enviaMensaje = () => {
    mensajeDeSalidaFrutal(mensajeParaHuerto);
  };

  const enviarPlantones = () => {
    const plantones = Math.round(Math.random() * 1000); 
    setNumeroPlantones(plantones);
    nplantones(plantones);
  };

  return (
    <div id="frutal">
        <h2>Frutal</h2>
      <input
        value={mensajeParaHuerto}
        onChange={(e) => setMensajeParaHuerto(e.target.value)}
        onKeyUp={enviaMensaje} 
      />
      <button onClick={enviarPlantones}>Mandar Plantones</button>
      <p>El Huerto dice: {mensajeDeEntradaFrutal}</p>
      <p>Plantones enviados: {numeroPlantones}</p>
    </div>
  );
};

Frutal.propTypes = {
  mensajeDeEntradaFrutal: PropTypes.string.isRequired,
  mensajeDeSalidaFrutal: PropTypes.func.isRequired,
  nplantones: PropTypes.func.isRequired,
};

export default Frutal;

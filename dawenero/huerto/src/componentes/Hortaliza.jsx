import { useState } from 'react';
import PropTypes from 'prop-types';

const Hortaliza = ({ mensajeDeEntradaHortaliza, mensajeDeSalidaHortaliza, nsemilleros }) => {
  const [mensajeParaHuerto, setMensajeParaHuerto] = useState("");
  const [numeroSemilleros, setNumeroSemilleros] = useState(0);

  const enviaMensaje = () => {
    mensajeDeSalidaHortaliza(mensajeParaHuerto);
  };

  const enviarSemilleros = () => {
    const semilleros = Math.round(Math.random() * 1000); 
    setNumeroSemilleros(semilleros);
    nsemilleros(semilleros);
  };

  return (
    <div id="hortaliza">
        <h2>Hortaliza</h2>
      <input
        value={mensajeParaHuerto}
        onChange={(e) => setMensajeParaHuerto(e.target.value)}
        onKeyUp={enviaMensaje}  
      />
      <button onClick={enviarSemilleros}>Mandar Semilleros</button>
      <p>El Huerto dice: {mensajeDeEntradaHortaliza}</p>
      <p>Semilleros enviados: {numeroSemilleros}</p>
    </div>
  );
};

Hortaliza.propTypes = {
  mensajeDeEntradaHortaliza: PropTypes.string.isRequired,
  mensajeDeSalidaHortaliza: PropTypes.func.isRequired,
  nsemilleros: PropTypes.func.isRequired,
};

export default Hortaliza;

/* eslint-disable react/prop-types */
function EJ1({ colores, cambiarColor }) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
          {colores.map((color, index) => (
          <button
            key={index}
            style={{
              backgroundColor: color, 
              color: 'white', 
              margin: '5px', 
              width: '100px', 
              height: '50px', 
            }}
            className="btn btn-lg"
            onClick={() => cambiarColor(color)}
          >
            {color}
          </button>
        ))}
    </div>
  )
}

export default EJ1
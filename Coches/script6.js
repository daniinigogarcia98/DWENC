const calificaciones = {
    dwec: 8,
    dwes: 7,
    diw: 9,
    ds:8,
    ie:6,
  }
  
  Object.values(calificaciones).reduce((nota,suma)=> suma += nota)
  let media=suma/calificaciones.length
  console.log("calificaciones",calificaciones)
  console.log("media",media)
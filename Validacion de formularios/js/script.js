let accion = document.getElementById("validar");
accion.onsubmit = () => {
  let avanzar = true;

  // Primer cuadro de texto: entre 3 y 5 digitos
  let exped = document.getElementById("idExpediente");
  let smExp = document.getElementById("smExpediente");
  let contExp = exped.value;
  if (contExp.length < 3 || contExp.length > 5) {
    avanzar = false;
    smExp.textContent = "* Tiene que tener entre 3 y 5 digitos*";
    smExp.style.fontSize = "20px";
  } else if (isNaN(contExp)) {
    avanzar = false;
    smExp.textContent = "*el expediente tiene que ser un valor numérico*";
    smExp.style.fontSize = "20px";
  } else {
    smExp.textContent = "";
    smExp.style.fontSize = "20px";
  }

  // Segunda validación nombre al menos 3 letras y solo letras
  let nombre = document.getElementById("idNombre").value;
  let smNom = document.getElementById("smNombre");
  if (nombre.length < 3 || nombre.indexOf("0123456789") != -1) {
    avanzar = false;
    smNom.textContent = "* los nombres de personas siempre mayor de 3 caracteres y deben ser letras*";
    smNom.style.fontSize = "20px";
  } else {
    smNom.textContent = "";
    smNom.style.fontSize = "20px";
  }

  // Tercera validación apellidos al menos 5 letras y solo letras
  let apellidos = document.getElementById("idApellidos").value;
  let smApe = document.getElementById("smApellidos");
  if (apellidos.length < 5 || apellidos.indexOf("0123456789") != -1) {
    avanzar = false;
    smApe.textContent = "*los apellidos de personas siempre mayor de 5 caracteres y deben ser letras*";
    smApe.style.fontSize = "20px";
  } else {
    smApe.textContent = "";
    smApe.style.fontSize = "20px";
  }

// Cuarta validación sge: entre 1 y 10 digitos
let sge = document.getElementById("idsge"); 
let smSGE = document.getElementById("smSGE");
let contSGE = sge.value;

// Verificar si el campo SGE está vacío o no es un valor numérico
if (contSGE === "" || contSGE === null || contSGE === undefined) {
   // No avanzar si el campo SGE está vacío
  avanzar = false;
  smSGE.textContent = "*La Nota de SGE es requerida*"; 
  smSGE.style.fontSize = "20px";
  // Verificar si el campo SGE tiene menos de 1 dígito
} else if (contSGE.length < 1) {
    // No avanzar si el campo SGE tiene menos de 1 dígito 
  avanzar = false; 
  smSGE.textContent = "*La Nota de SGE debe tener al menos 1 dígito*";
  smSGE.style.fontSize = "20px"; 
  // Verificar si el campo SGE es 0
} else if (contSGE === "0") {
    // No avanzar si el campo SGE es 0 
  avanzar = false; 
  smSGE.textContent = "*La Nota de SGE no puede ser 0*"; 
  smSGE.style.fontSize = "20px"; 
  // Verificar si el campo SGE tiene más de 10 dígitos
} else if (contSGE.length > 10) {
    // No avanzar si el campo SGE tiene más de 10 dígitos 
  avanzar = false; 
  smSGE.textContent = "*La Nota de SGE debe tener máximo 10 digitos*";
  smSGE.style.fontSize = "20px";
  // Verificar si el campo SGE no es un valor numérico 
} else if (isNaN(contSGE)) {
    // No avanzar si el campo SGE no es un valor numérico 
  avanzar = false; 
  smSGE.textContent = "*La Nota de SGE tiene que ser un valor numérico*"; 
  smSGE.style.fontSize = "20px"; 
  // Si el campo SGE es válido
} else {
    // Limpiar mensaje de error
  smSGE.textContent = ""; 
  smSGE.style.fontSize = "20px"; 
}
// Quinta validación DI: entre 1 y 10 digitos
let di = document.getElementById("iddi"); 
let smDI = document.getElementById("smDI");
let contDI = di.value;

// Verificar si el campo DI está vacío o no es un valor numérico
if (contDI === "" || contDI === null || contDI === undefined) {
   // No avanzar si el campo DI está vacío
  avanzar = false;
  smDI.textContent = "*La Nota de DI es requerida*"; 
  smDI.style.fontSize = "20px";
  // Verificar si el campo DI tiene menos de 1 dígito
} else if (contDI.length < 1) {
    // No avanzar si el campo DI tiene menos de 1 dígito 
  avanzar = false; 
  smDI.textContent = "*La Nota de DI debe tener al menos 1 dígito*";
  smDI.style.fontSize = "20px"; 
  // Verificar si el campo DI es 0
} else if (contDI === "0") {
    // No avanzar si el campo DI es 0 
  avanzar = false; 
  smDI.textContent = "*La Nota de DI no puede ser 0*"; 
  smDI.style.fontSize = "20px"; 
  // Verificar si el campo DI tiene más de 10 dígitos
} else if (contDI.length > 10) {
    // No avanzar si el campo DI tiene más de 10 dígitos 
  avanzar = false; 
  smDI.textContent = "*La Nota de DI debe tener máximo 10 digitos*";
  smDI.style.fontSize = "20px";
  // Verificar si el campo DI no es un valor numérico 
} else if (isNaN(contDI)) {
    // No avanzar si el campo DI no es un valor numérico 
  avanzar = false; 
  smDI.textContent = "*La Nota de DI tiene que ser un valor numérico*"; 
  smDI.style.fontSize = "20px"; 
  // Si el campo DI es válido
} else {
    // Limpiar mensaje de error
  smDI.textContent = ""; 
  smDI.style.fontSize = "20px"; 
}
// Sexta validación AD: entre 1 y 10 digitos
let ad = document.getElementById("idad"); 
let smAD = document.getElementById("smAD");
let contAD = ad.value;

// Verificar si el campo AD está vacío o no es un valor numérico
if (contAD === "" || contAD === null || contAD === undefined) {
   // No avanzar si el campo AD está vacío
  avanzar = false;
  smAD.textContent = "*La Nota de AD es requerida*"; 
  smAD.style.fontSize = "20px";
  // Verificar si el campo AD tiene menos de 1 dígito
} else if (contAD.length < 1) {
    // No avanzar si el campo AD tiene menos de 1 dígito 
  avanzar = false; 
  smAD.textContent = "*La Nota de AD debe tener al menos 1 dígito*";
  smAD.style.fontSize = "20px"; 
  // Verificar si el campo AD es 0
} else if (contAD === "0") {
    // No avanzar si el campo AD es 0 
  avanzar = false; 
  smAD.textContent = "*La Nota de AD no puede ser 0*"; 
  smAD.style.fontSize = "20px"; 
  // Verificar si el campo AD tiene más de 10 dígitos
} else if (contAD.length > 10) {
    // No avanzar si el campo AD tiene más de 10 dígitos 
  avanzar = false; 
  smAD.textContent = "*La Nota de AD debe tener máximo 10 digitos*";
  smAD.style.fontSize = "20px";
  // Verificar si el campo AD no es un valor numérico 
} else if (isNaN(contAD)) {
    // No avanzar si el campo AD no es un valor numérico 
  avanzar = false; 
  smAD.textContent = "*La Nota de AD tiene que ser un valor numérico*"; 
  smAD.style.fontSize = "20px"; 
  // Si el campo AD es válido
} else {
    // Limpiar mensaje de error
  smAD.textContent = ""; 
  smAD.style.fontSize = "20px"; 
}
// Septima validación PSP: entre 1 y 10 digitos
let psp = document.getElementById("idpsp"); 
let smPSP = document.getElementById("smPSP");
let contPSP = psp.value;

// Verificar si el campo PSP está vacío o no es un valor numérico
if (contPSP === "" || contPSP === null || contPSP === undefined) {
   // No avanzar si el campo PSP está vacío
  avanzar = false;
  smPSP.textContent = "*La Nota de PSP es requerida*"; 
  smPSP.style.fontSize = "20px";
  // Verificar si el campo PSP tiene menos de 1 dígito
} else if (contPSP.length < 1) {
    // No avanzar si el campo PSP tiene menos de 1 dígito 
  avanzar = false; 
  smPSP.textContent = "*La Nota de PSP debe tener al menos 1 dígito*";
  smPSP.style.fontSize = "20px"; 
  // Verificar si el campo PSP es 0
} else if (contPSP === "0") {
    // No avanzar si el campo PSP es 0 
  avanzar = false; 
  smPSP.textContent = "*La Nota de PSP no puede ser 0*"; 
  smPSP.style.fontSize = "20px"; 
  // Verificar si el campo PSP tiene más de 10 dígitos
} else if (contPSP.length > 10) {
    // No avanzar si el campo PSP tiene más de 10 dígitos 
  avanzar = false; 
  smPSP.textContent = "*La Nota de PSP debe tener máximo 10 digitos*";
  smPSP.style.fontSize = "20px";
  // Verificar si el campo PSP no es un valor numérico 
} else if (isNaN(contPSP)) {
    // No avanzar si el campo PSP no es un valor numérico 
  avanzar = false; 
  smPSP.textContent = "*La Nota de PSP tiene que ser un valor numérico*"; 
  smPSP.style.fontSize = "20px"; 
  // Si el campo PSP es válido
} else {
    // Limpiar mensaje de error
    smPSP.textContent = ""; 
    smPSP.style.fontSize = "20px"; 
}
// Octava validación PMM: entre 1 y 10 digitos
let pmm = document.getElementById("idpmm"); 
let smPMM = document.getElementById("smPMM");
let contPMM = pmm.value;

// Verificar si el campo PMM está vacío o no es un valor numérico
if (contPMM === "" || contPMM === null || contPMM === undefined) {
   // No avanzar si el campo PMM está vacío
  avanzar = false;
  smPMM.textContent = "*La Nota de PMM es requerida*"; 
  smPMM.style.fontSize = "20px";
  // Verificar si el campo PMM tiene menos de 1 dígito
} else if (contPMM.length < 1) {
    // No avanzar si el campo PMM tiene menos de 1 dígito 
  avanzar = false; 
  smPMM.textContent = "*La Nota de PMM debe tener al menos 1 dígito*";
  smPMM.style.fontSize = "20px"; 
  // Verificar si el campo PMM es 0
} else if (contPMM === "0") {
    // No avanzar si el campo PMM es 0 
  avanzar = false; 
  smPMM.textContent = "*La Nota de PMM no puede ser 0*"; 
  smPMM.style.fontSize = "20px"; 
  // Verificar si el campo PMM tiene más de 10 dígitos
} else if (contPMM.length > 10) {
    // No avanzar si el campo PMM tiene más de 10 dígitos 
  avanzar = false; 
  smPMM.textContent = "*La Nota de PMM debe tener máximo 10 digitos*";
  smPMM.style.fontSize = "20px";
  // Verificar si el campo PMM no es un valor numérico 
} else if (isNaN(contPMM)) {
    // No avanzar si el campo PMM no es un valor numérico 
  avanzar = false; 
  smPMM.textContent = "*La Nota de PMM tiene que ser un valor numérico*"; 
  smPMM.style.fontSize = "20px"; 
  // Si el campo PMM es válido
} else {
    // Limpiar mensaje de error
    smPMM.textContent = ""; 
    smPMM.style.fontSize = "20px"; 
}
  return avanzar;
};
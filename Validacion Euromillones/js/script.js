let accion = document.getElementById("validar");
accion.onsubmit = function() {
  let avanzar = true;
  //identificar n1
  let n1 = document.getElementById("idN1").value;
  let smn1 = document.getElementById("smn1");
  //llamar a la función
  let arrayNumeros = [n1, n2, n3, n4, n5, n6];
  let arrayAux = [];
  let estaR = false;
  for (let i = 0; i < arrayNumeros.length; i++) {
    if (arrayAux.includes(arrayNumeros[i])) {
      estaR = true;
      break;
    } else {
      arrayAux.push(arrayNumeros[i]);
    }
  }
  let smD = document.getElementById("smDuplicados");
  if (estaR) {
    smD.textContent = "*Error numeros Duplicados*";
    avanzar = false;
  } else {
    smD.textContent = "";
  }
  arrayNumeros.forEach(comprobar);
  function comprobar(item, text) {
    // No se utiliza esta función, pero la dejo para que no se pierda la referencia
  }
  validar(n1, smn1);
  validar(n2, smn2);
  validar(n3, smn3);
  validar(n4, smn4);
  validar(n5, smn5);
  validar(n6, smn6);
  function validar(nX, smX) {
    if (nX == "") {
      smX.textContent = "*Campo Obligatorio*";
      avanzar = false;
    } else if (isNaN(nX)) {
      smX.textContent = "*No es un número*";
      avanzar = false;
    } else if (!Number.isInteger(Number(nX))) {
      smX.textContent = "*No es un número entero*";
      avanzar = false;
    } else if (Number(nX) < 1 || Number(nX) > 50) {
      smX.textContent = "*numero fuera de rango (0-50)*";
      avanzar = false;
    } else {
      smX.textContent = "";
    }
  }
  //identificar n2
  let n2 = document.getElementById("idN2").value;
  let smn2 = document.getElementById("smn2");
  if (n2 == "") {
    smn2.textContent = "*Campo Obligatorio*";
    avanzar = false;
  } else if (isNaN(n2)) {
    smn2.textContent = "*No es un número*";
    avanzar = false;
  } else if (!Number.isInteger(Number(n2))) {
    smn2.textContent = "*No es un número entero*";
    avanzar = false;
  } else if (Number(n2) < 1 || Number(n2) > 50) {
    smn2.textContent = "*numero fuera de rango (0-50)*";
    avanzar = false;
  } else {
    smn2.textContent = "";
  }
  let n3 = document.getElementById("idN3").value;
  let smn3 = document.getElementById("smn3");
  if (n3 == "") {
    smn3.textContent = "*Campo Obligatorio*";
    avanzar = false;
  } else if (isNaN(n3)) {
    smn3.textContent = "*No es un número*";
    avanzar = false;
  } else if (!Number.isInteger(Number(n3))) {
    smn3.textContent = "*No es un número entero*";
    avanzar = false;
  } else if (Number(n3) < 1 || Number(n3) > 50) {
    smn3.textContent = "*numero fuera de rango (0-50)*";
    avanzar = false;
  } else {
    smn3.textContent = "";
  }
  let n4 = document.getElementById("idN4").value;
  let smn4 = document.getElementById("smn4");
  if (n4 == "") {
    smn4.textContent = "*Campo Obligatorio*";
    avanzar = false;
  } else if (isNaN(n4)) {
    smn4.textContent = "*No es un número*";
    avanzar = false;
  } else if (!Number.isInteger(Number(n4))) {
    smn4.textContent = "*No es un número entero*";
    avanzar = false;
  } else if (Number(n4) < 1 || Number(n4) > 50) {
    smn4.textContent = "*numero fuera de rango (0-50)*";
    avanzar = false;
    } else {
        smn4.textContent = "";
    }
    let n5 = document.getElementById("idN5").value;
    let smn5 = document.getElementById("smn5");
    if (n5 == "") {
      smn5.textContent = "*Campo Obligatorio*";
      avanzar = false;
    } else if (isNaN(n5)) {
      smn5.textContent = "*No es un número*";
      avanzar = false;
    } else if (!Number.isInteger(Number(n5))) {
      smn5.textContent = "*No es un número entero*";
      avanzar = false;
    } else if (Number(n5) < 1 || Number(n5) > 50) {
      smn5.textContent = "*numero fuera de rango (0-50)*";
      avanzar = false;
    } else {
      smn5.textContent = "";
    }
    let n6 = document.getElementById("idN6").value;
    let smn6 = document.getElementById("smn6");
    if (n6 == "") {
      smn6.textContent = "*Campo Obligatorio*";
      avanzar = false;
    } else if (isNaN(n6)) {
      smn6.textContent = "*No es un número*";
      avanzar = false;
    } else if (!Number.isInteger(Number(n6))) {
      smn6.textContent = "*No es un número entero*";
      avanzar = false;
    } else if (Number(n6) < 1 || Number(n6) > 50) {
      smn6.textContent = "*numero fuera de rango (0-50)*";
      avanzar = false;
    } else {
      smn6.textContent = "";
    }
    return avanzar;
  }
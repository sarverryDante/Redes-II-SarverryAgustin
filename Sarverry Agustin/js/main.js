function GnrNumero() {
    let numeroGenerado = Math.floor(Math.random() * 100) + 1;
    document.getElementById("NmInput").value = numeroGenerado;
  }

  function AgrNumero() {
    let numero = document.getElementById("NmInput").value;

    if (numero !== "") {
      let Table = document.getElementById("MostrarNum");
      let Fila = Table.insertRow(-1);
      let celda = Fila.insertCell(0);
      celda.innerHTML = numero;
    }
  }

//no llegue con el tiempo para realizar el promedio



// Sarverry Agustin 17.11.23 //
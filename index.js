function enviarDatos() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let grupo = document.getElementById("grupo").value;
  let sala = document.getElementById("sala").value;
  let botonEnviar = document.getElementById("submit");

  let data = {
    nombre: nombre,
    apellido: apellido,
    grupo: grupo,
    sala: sala,
  };

  botonEnviar.addEventListener("click", () => {
    fetch("https://crudcrud.com/api/f1d72dbfbe654fe1ae8e0af0c6f0228d/grupo275", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Datos enviados correctamente:\n" + JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error);
      });
  });
  fetch("https://crudcrud.com/api/f1d72dbfbe654fe1ae8e0af0c6f0228d/grupo275", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Datos enviados correctamente:\n" + JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error al enviar los datos:", error);
    });
}

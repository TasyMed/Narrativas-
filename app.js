//Seleciona el div
const image = document.getElementById("imagen-principal");
//Selecciona todos los elementos con la clase texto
const texts = document.querySelectorAll(".texto"); 
//Itera sobre cada elemento de la clase texto
texts.forEach(text => {
  //Agrega un evento mouseenter a cada elemento de la clase texto
  text.addEventListener("mouseenter", () => {
    //Cambia el src de la imagen principal por el data-img del elemento texto
    image.src = text.getAttribute("data-img");
  });
});

//Logica de los textos

function Cuento(titulo, cuento) {
  this.titulo = titulo;
  this.cuento = cuento;
}


function cargarCuentos(idSeccion, archivo) {
  fetch(archivo)
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(cuentos => {
      const seccion = document.getElementById(idSeccion);
      if (!seccion) return;

      cuentos.forEach(cuento => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${cuento.titulo}</h2><p>${cuento.cuento}</p>`;
        seccion.appendChild(div);
      });
    })
    .catch(error => console.error("Error cargando el JSON:", error));
}


cargarCuentos("amazonas", "./cuentosJson/ama.json");
cargarCuentos("andes", "./cuentosJson/and.json");

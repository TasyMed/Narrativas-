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

//Funcion para cargar los cuentos
//Recibe el id del setion html (idSeccion) el archivo JSON (archivo) de la carpeta cuentosJson
function cargarCuentos(idSeccion, archivo) {
  //Fetch para obtener el archivo JSON 
  fetch(archivo)
  //Promesa que convierte la respuesta a JSON
  .then(response => response.json())
  //Promesa que recibe el JSON y lo imprime en consola
  .then(data => {
    //Imprime el JSON en consola
    console.log("JSON recibido:", data);
    //Si el JSON tiene la propiedad cuentos y es un array, se asigna a data 
    if (data.cuentos && Array.isArray(data.cuentos)) {
      //Se asigna a data la propiedad cuentos
      data = data.cuentos;
    }
    //Si data no es un array, imprime un error en consola
    if (!Array.isArray(data)) {
      console.error("Formato incorrecto en el JSON");
      return;
    }
    //Selecciona el elemento con el id idSeccion
    const seccion = document.getElementById(idSeccion);
    //Si no existe la seccion, se retorna
    if (!seccion) return;
    //Itera sobre cada cuento en el JSON
    data.forEach(cuento => {
      //Crea un div 
      const div = document.createElement("div");
      //Asigna el innerHTML del div con el titulo y el cuento
      div.innerHTML = `<h2 id="titulo">${cuento.titulo}</h2><p id="texto">${cuento.cuentos}</p>`;
      //Agrega la clase cuento al div
      seccion.appendChild(div);
    });
  })
  //Promesa que imprime un error en consola si no se pudo cargar el JSON
  .catch(error => console.error("Error cargando el JSON:", error));

}

//Carga los cuentos en las secciones
cargarCuentos("amazonas", "/cuentosJson/ama.json");
cargarCuentos("andes", "/cuentosJson/and.json");
cargarCuentos("caribe", "/cuentosJson/car.json");
cargarCuentos("orinoquia", "/cuentosJson/ori.json");
cargarCuentos("pacifico", "/cuentosJson/pac.json");
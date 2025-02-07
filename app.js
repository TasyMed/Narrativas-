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
const image = document.getElementById("imagen-principal");
const texts = document.querySelectorAll(".texto"); // Corrige la selección

texts.forEach(text => {
  text.addEventListener("mouseenter", () => {
    image.src = text.getAttribute("data-img");
  });
});

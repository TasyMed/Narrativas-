const image = document.getElementById("image");
const texts = document.querySelectorAll(".text");

texts.forEach(text => {
  text.addEventListener("mouseenter", () => {
    image.src = text.getAttribute("data-img");
  });
});

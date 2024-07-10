document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.imagenes img');
  let index = 0;

  function loadImage() {
    if (index < images.length) {
      images[index].style.display = 'block'; // Mostrar la imagen actual
      index++;
      setTimeout(loadImage, 1000); // Cargar la siguiente imagen después de 1 segundo (1000ms)
    }
  }

  loadImage(); // Iniciar la carga de imágenes
});

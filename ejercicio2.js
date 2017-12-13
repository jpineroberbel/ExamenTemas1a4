var timer;

function ejercicio3(nuevoTitulo) {
  if (nuevoTitulo)
    document.title = nuevoTitulo;

  let numImagenes = document.images.length;
  console.log(`En la página hay un total de ${numImagenes} imágenes`);
  if (numImagenes > 0)
  {
    Array.from(document.images).forEach(element => console.log(element.src));
  }

  timer=setInterval(reloj,3000);
}

function reloj()
{
  horaActual = new Date();
  console.log(horaActual.getSeconds());
  if (horaActual == 0)
  {
    clearInterval(timer);
    let url = prompt("Indica la URL a cargar: ");
    location.href = url;
  }
}
// Obtén el elemento <canvas> por su ID "canvas"
var canvas = document.getElementById("canvas");

// Obtén el contexto de renderizado 2D del elemento <canvas>
var ctx = canvas.getContext("2d");

// Establece el color de relleno a "rgb(0, 128, 255)" (un tono azul)
ctx.fillStyle = "rgb(171, 1, 186)";

// Dibuja un rectángulo relleno en el lienzo con las siguientes especificaciones:
// Posición: 10 píxeles desde la izquierda y 10 píxeles desde la parte superior del lienzo
// Tamaño: 100 píxeles de ancho y 100 píxeles de alto
ctx.fillRect(10, 10, 100, 100);

let canvas =document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let gatoX;
let gatoY;
let comidaX;
let comidaY;
const ALTO_GATO=60;
const ANCHO_GATO=30;
const ALTO_COMIDA=30;
const ANCHO_COMIDA=30;

function iniciar(){
    graficarGato();
    graficarComida();
}

function graficarGato(){
    graficarRectangulo(canvas.width/2,canvas.height-ALTO_GATO,ANCHO_GATO,ALTO_GATO,"grey");
}

function graficarComida(){
    graficarRectangulo(0,0,ANCHO_COMIDA,ALTO_COMIDA,"brown");
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color
    ctx.fillRect(x,y,ancho,alto);
}
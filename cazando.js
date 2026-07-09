let canvas =document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
const ALTO_GATO=60;
const ANCHO_GATO=30;
const ALTO_COMIDA=30;
const ANCHO_COMIDA=30;

function iniciarJuego(){
    gatoX = canvas.width/2;
    gatoY = canvas.height/2;
    graficarGato();
    comidaX = canvas.height-ANCHO_COMIDA;
    comidaY = canvas.width-ALTO_COMIDA
    graficarComida();
}

function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"grey");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"brown");
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color
    ctx.fillRect(x,y,ancho,alto);
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

function moverIzquierda(){
    gatoX = gatoX - 10
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha(){
    gatoX = gatoX + 10
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY = gatoY - 10
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY = gatoY + 10
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if(comidaX + ANCHO_COMIDA > gatoX && comidaX < gatoX + ANCHO_GATO
        && comidaY + ALTO_COMIDA > gatoY && comidaY < gatoY + ALTO_GATO
    ){
        alert("El gato comio!")
    }
}
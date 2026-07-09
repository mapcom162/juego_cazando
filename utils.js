function genarar_Aleatorio(min,max){
    let random = Math.random();
    let numero = random*(max-min);
    let numeroEntero = Math.ceil(numero);
        numeroEntero = numeroEntero+min;
        return numeroEntero;
}

function mostrarEnSpan(idSpan,valor){
    let cmp = document.getElementById(idSpan);
        cmp.textContent = valor;
}
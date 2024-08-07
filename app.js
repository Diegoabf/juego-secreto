

let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;



function ingresarTexto(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto
    return;
}


function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if(listaNumerosSorteados.length == numeroMaximo){
        ingresarTexto("p", "Ya se sortearon todos los numeros posibles");
    }   else{
            //si el numero generado esta incluido en la lista, hacemos una operacion
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }   else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }    
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto)); //muestra los numeros en consola y el tipo de datos que son //
    //console.log(numeroSecreto === numeroDeUsuario);// compara los numero y da resultado de false o true
    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        ingresarTexto("p",`Acertaste el Número en ${intentos} ${(intentos ===1)? "vez" : "veces"} `);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //cuando el usuario no acierta
        if(numeroDeUsuario > numeroSecreto) {
            ingresarTexto("p", "El Número Secreto es Menor");
        } else {
            ingresarTexto("p", "El Número Secreto es Mayor");
        }
        
    } intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario").value = ""; // ().value = "") reemplaza a la linea siguiente
    //valorCaja.value = "";

}
function condicionesIniciales(){
    ingresarTexto("h1", "Juego de Adivinanzas");
    ingresarTexto("p", `Ingrese un Número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();

    // Generara el numero secreto
    //Indicar mensaje de intervalo de numero
    //Inicializar el numero de intentos
    //Deshabilitar en boton de nuevo juego
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();








/*

Practicas

function saludar() {
    let nombreUsuario = prompt("Ingrese su Nombre")
    console.log("Hola!"+ nombreUsuario);
}
---
function doble(numero) {
    return numero*2
}
let resultado = doble("90");
console.log(resultado);
---
function promedio(numero1, numero2, numero3) {
    return (numero1 + numero2 + numero3)/2
}

let resultado = promedio(10,10,10);
console.log(resultado);
---

function mayor(numero1,numero2) {
    if(numero1 > numero2) {
        console.log(numero1);
    } else {
        console.log(numero2);
    }
}

let comparacion = mayor(12,300);

---


function cuadrado(numero) {
    return numero*numero
}

let multiplicado = cuadrado(234234);
console.log(multiplicado); 

//Ejercicios:

//calcula el IMC

function imc(altura, peso){
    let indice = (peso/altura);
    return console.log(indice);
}

imc(1.74, 68.7);

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function factorial(numero){
    let resultado = 1
    while(numero > 1){
        resultado = (resultado * numero);
        numero--;
        
    } console.log(resultado);
}

factorial(5);

// solucion de la pagina

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);



//Crea una función que convierta un valor en dólares, pasado como 
parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, 
considera la cotización del dólar igual a S./3,80.

function convertirCambio(dolares){
    let cambio = dolares * 3.80;
    console.log(cambio)
}

convertirCambio(50.54);

//Crea una función que muestre en pantalla el área y el perímetro 
de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function area(altura, anchura){
    return altura*anchura;
}
function perimetro(altura, anchura){
    return (altura + anchura)*2
}

let altura = 10;
let anchura = 10;
let areaR = area(altura, anchura);
let perimetroR = perimetro(altura, anchura);

alert(`El Area del Rectangulo es ${areaR} y el Perimetro es ${perimetroR}`);

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function area(radio){
    return 3.14 * radio * radio
}
function perimetro(radio){
    return (((3.14)*2) * radio);
}

let radio = 5;
let areaC = area(radio);
let perimetroC = perimetro(radio);

alert(`El area del Circulo es ${areaC} y el perimetro es ${perimetroC}`);

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tabla(numero){
    let numero2 = 0;
    let resultado = 0;
    while(numero2 <= 12){
        resultado = numero * numero2
        console.log(`${numero} X ${numero2} = ${resultado}`);
        numero2++;
    } 
}

tabla(5);


EJercicios de Arrays/Listas

let listaGenerica = [];
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Python"];

lenguajesDeProgramacion.push("Java", "Ruby", "GoLang");
//console.log(lenguajesDeProgramacion);
lenguajesDeProgramacion.reverse();
console.log(lenguajesDeProgramacion);*/
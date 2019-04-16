var d = document;
// Punto
var punto = d.createElement("span");
punto.setAttribute("class","punto");
//Columna
var columna = d.createElement("div");
columna.setAttribute("class","col");

// Definicion de Caras

// Cara uno
var caraUno = "<div class='cara-uno'>" +
               "<span class='punto'></span>" +
              "</div>";

//Cara dos
var caraDos = "<div class='cara-dos'>" +
                "<span class='punto'></span>" +
                "<span class='punto'></span>" +
              "</div>";

//Cara tres
var caraTres = "<div class='cara-tres'>" +
                 "<span class='punto'></span>" +
                 "<span class='punto'></span>" +
                 "<span class='punto'></span>" +
               "</div>";

//Cara cuatro
var caraCuatro = "<div class='cara-cuatro'>" +
                   "<div class='col'>" +
                     "<span class='punto'></span>" +
                     "<span class='punto'></span>" +
                   "</div>" +
                   "<div class='col'>" +
                     "<span class='punto'></span>" +
                     "<span class='punto'></span>" +
                   "</div>" +
                 "</div>";

//Cara cinco
var caraCinco = "<div class='cara-cinco'>" +
                  "<div class='col'>" +
                    "<span class='punto'></span>" +
                    "<span class='punto'></span>" +
                  "</div>" +
                  "<span class='punto'></span>" +
                  "<div class='col'>" +
                    "<span class='punto'></span>" +
                    "<span class='punto'></span>" +
                  "</div>" +
                "</div>";

//Cara seis
var caraSeis = "<div class='cara-seis'>" +
                    "<div class='col'>" +
                        "<span class='punto'></span>" +
                        "<span class='punto'></span>" +
                        "<span class='punto'></span>" +
                    "</div>" +
                    "<div class='col'>" +
                        "<span class='punto'></span>" +
                        "<span class='punto'></span>" +
                        "<span class='punto'></span>" +
                    "</div>" +
                "</div>";

//Array con las 6 caras
var arrayCaras = [caraUno, caraDos, caraTres, caraCuatro, caraCinco, caraSeis];

//Funcion random
function random(){
    return Math.floor(Math.random() * 6);
}

var cara = d.createElement("div");
cara.setAttribute("class", "cara");

var dado1 = d.getElementById("dado-1");
var dado2 = d.getElementById("dado-2");

// Funcion lanzar
function lanzar(){

     if(!dado1.lastElementChild){
         dado1.appendChild(cara);
         dado2.appendChild(cara.cloneNode());
     }else{
        dado1.removeChild(dado1.lastChild);
         dado2.removeChild(dado2.lastChild);
        dado1.appendChild(cara.cloneNode());
         dado2.appendChild(cara.cloneNode());
     }

     for(i = 1; i <= 5; i++){
         setTimeout(function () {
             dado1.firstElementChild.innerHTML = arrayCaras[random()];
             dado2.firstElementChild.innerHTML = arrayCaras[random()];
         }, i * 100);
     }


}


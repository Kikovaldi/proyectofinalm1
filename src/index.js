console.log ("hola")
const colorChange = document.getElementById("nav1");
const colorChange2 = document.getElementById("nav2"); 
const colorChange3 = document.getElementById("nav3");
const colorChange4 = document.getElementById("nav4");
const colorChange5= document.getElementById("nav5");
const colorChange6= document.getElementById("nav6");//creo const = document seleccion elemento por id (id de nav titulo)
if (colorChange){
    colorChange.addEventListener("mouseover", function (event) {
    event.preventDefault()
    colorChange.classList.add("bg-red-300")
}); // a la variable con el id se le invoca el addeventlistener (mouseover (el evento), y funcion (cambio de color))

colorChange.addEventListener("mouseout", function (event) {
    event.preventDefault()
    colorChange.classList.remove("bg-red-300")
    console.log("esto tambien")
});}

if (colorChange2) {
    colorChange2.addEventListener("mouseover", function (event) {
    event.preventDefault()
    colorChange2.classList.add("bg-orange-300")
});
colorChange2.addEventListener("mouseout", function (event) {
    event.preventDefault()
    colorChange2.classList.remove("bg-orange-300")
});}
if (colorChange3){
    colorChange3.addEventListener("mouseover", function (event) {
    event.preventDefault()
    colorChange3.classList.add("bg-yellow-300")
});
colorChange3.addEventListener("mouseout", function (event) {
    event.preventDefault()
    colorChange3.classList.remove("bg-yellow-300")
});}

if (colorChange4) {
    colorChange4.addEventListener("mouseover", function (event) {
    event.preventDefault()
    colorChange4.classList.add("bg-green-300")
});
colorChange4.addEventListener("mouseout", function (event) {
    event.preventDefault()
    colorChange4.classList.remove("bg-green-300")
});}
if (colorChange5) {
    colorChange5.addEventListener("mouseover", function (event) {
        event.preventDefault()
        colorChange5.classList.add("bg-blue-300")
    });
    colorChange5.addEventListener("mouseout", function (event) {
        event.preventDefault()
        colorChange5.classList.remove("bg-blue-300")
    });
}
if (colorChange6) {
    colorChange6.addEventListener("mouseover", function (event) {
        event.preventDefault()
        colorChange6.classList.add("bg-violet-300")
    });
    colorChange6.addEventListener("mouseout", function (event) {
        event.preventDefault()
        colorChange6.classList.remove("bg-violet-300")
    });
}


// carousel
const carrusel = document.querySelector(".carrusel-items");
let intervalo = null;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let step = 1;

const start = () =>{
    intervalo=setInterval (function (){carrusel.scrollLeft = carrusel.scrollLeft+step
    if ( carrusel.scrollLeft === maxScrollLeft ) {step = step *-1}
    else if (carrusel.scrollLeft === 0) {step = step*-1}
    }), 10

}


const stop = () => {
    clearInterval(intervalo);

}

 carrusel.addEventListener ("mouseover", ()  => {stop ()});
 carrusel.addEventListener ("mouseout", ()  => {start ()});

start ()
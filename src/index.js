console.log("hola");
const colorChange = document.getElementById("nav1");
const colorChange2 = document.getElementById("nav2");
const colorChange3 = document.getElementById("nav3");
const colorChange4 = document.getElementById("nav4");
const colorChange5 = document.getElementById("nav5");
const colorChange6 = document.getElementById("nav6"); //creo const = document seleccion elemento por id (id de nav titulo)
if (colorChange) {
  colorChange.addEventListener("mouseover", function (event) {
    event.preventDefault();
    colorChange.classList.add("bg-red-300");
  }); // a la variable con el id se le invoca el addeventlistener (mouseover (el evento), y funcion (cambio de color))

  colorChange.addEventListener("mouseout", function (event) {
    event.preventDefault();
    colorChange.classList.remove("bg-red-300");
    console.log("esto tambien");
  });
}

if (colorChange2) {
  colorChange2.addEventListener("mouseover", function (event) {
    event.preventDefault();
    colorChange2.classList.add("bg-orange-300");
  });
  colorChange2.addEventListener("mouseout", function (event) {
    event.preventDefault();
    colorChange2.classList.remove("bg-orange-300");
  });
}
if (colorChange3) {
  colorChange3.addEventListener("mouseover", function (event) {
    event.preventDefault();
    colorChange3.classList.add("bg-yellow-300");
  });
  colorChange3.addEventListener("mouseout", function (event) {
    event.preventDefault();
    colorChange3.classList.remove("bg-yellow-300");
  });
}

if (colorChange4) {
  colorChange4.addEventListener("mouseover", function (event) {
    event.preventDefault();
    colorChange4.classList.add("bg-green-300");
  });
  colorChange4.addEventListener("mouseout", function (event) {
    event.preventDefault();
    colorChange4.classList.remove("bg-green-300");
  });
}
if (colorChange5) {
  colorChange5.addEventListener("mouseover", function (event) {
    event.preventDefault();
    colorChange5.classList.add("bg-blue-300");
  });
  colorChange5.addEventListener("mouseout", function (event) {
    event.preventDefault();
    colorChange5.classList.remove("bg-blue-300");
  });
}
if (colorChange6) {
  colorChange6.addEventListener("mouseover", function (event) {
    event.preventDefault();
    colorChange6.classList.add("bg-violet-300");
  });
  colorChange6.addEventListener("mouseout", function (event) {
    event.preventDefault();
    colorChange6.classList.remove("bg-violet-300");
  });
}

// carousel
const carrusel = document.querySelector(".carrusel-items");
if (carrusel){
let intervalo = 0;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let step = 1;

const start = () => {
  (intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  })),
    10;
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});
carrusel.addEventListener("mouseout", () => {
  start();
});

start();
}

//suma de botones
const boton1=document.querySelectorAll(".boton1")

boton1.addEventListener("click", handleClick);

if (boton1){
let suma = 0;
let result = "";
let numClicks = 0;


// document.getElementById("boton2").addEventListener("click", handleClick);
// document.getElementById("boton3").addEventListener("click", handleClick);
// document.getElementById("boton4").addEventListener("click", handleClick);
// document.getElementById("boton5").addEventListener("click", handleClick);
// document.getElementById("boton6").addEventListener("click", handleClick);


function handleClick(event) {
  if (numClicks < 3) {
    let valor = parseInt(event.target.value);
console.log(numClicks)
    suma += valor;
    numClicks++;
    document.getElementById("resultado").textContent = result;

    if (suma <= 20) {
      result = "Veo que te gustan los juegos sencillitos";
    }
    if (suma >= 20 && suma <= 30) {
      result = "Veo que te gustan los juegos sencillitos y algo más avanzados";
    }
    if (suma > 30 && suma <= 50) {
      result = "Veo que eres un jugador versátil!";
    }
    if (suma > 30 && suma <= 50) {
      result = "Veo que te gustan los juegos para destruirte el coco!";
    }
  }
  else { alert ("¡Selecciona solo tres juegos avariciose!")}
}
}


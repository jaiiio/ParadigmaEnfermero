
// //=====================Codigo de ser enfermero js==========================//




var btn = document.querySelectorAll(".btn");
var mostrar = document.querySelectorAll(".mostrar");

for (let i = 0; i < btn.length; i++) {

  document.querySelectorAll(".btn")[i].addEventListener("click", function () {

    if (btn[i].innerHTML == "Ocultar") {
      btn[i].innerHTML = "Ver respuesta";
      mostrar[i].style.display = "none";
    } else {
      btn[i].innerHTML = "Ocultar";
      mostrar[i].style.display = "inline";
    }
  });
}

// //=====================FIN Codigo de ser enfermero js==========================//


// //=====================Codigo de universidades js==========================//



var univ = document.querySelectorAll(".universidades");

for (let j = 0; 0 < univ.length; j++) {

  var prov = document.querySelectorAll(".provincia");

document.querySelectorAll(".universidades")[j].addEventListener("click", function () {

    if (prov[j].style.display === "inline") {
        prov[j].style.display = "none";
    } else {
        prov[j].style.display = "inline";
    }
  });
}

// //=====================FIN Codigo de universidades js==========================//


// //=====================INICIO Agenda de eventos.html==========================//

function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".active");


activeTabs.forEach(function(tab) {
  tab.className = tab.className.replace("active", "");
  });

  event.target.parentElement.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className += " active";

}

const element = document.getElementById("nav-tab");

element.addEventListener ("click", onTabClick, false);

// //=====================FIN Agenda de eventos.html==========================//


// //=====================INICIO Meses eventos.html==========================//

var mes = document.querySelectorAll(".titulo-mes");
var verMes = document.querySelectorAll(".sublista-mes");
var agregarClaseMes = document.querySelectorAll(".seleccion")

for (let k = 0; k < mes.length; k++) {

  document.querySelectorAll(".mes")[k].addEventListener("click", function () {

    if (verMes[k].style.display == "inline") {
      verMes[k].style.display = "none";
      mes[k].classList.remove("seleccion");
    } else {
      verMes[k].style.display = "inline";
      mes[k].classList.add("seleccion");
    }
  });
}

//VARIABLES
var botonenviar = document.getElementById("botonenviar");
var correo = document.getElementById("correo");
var radio = document.getElementById("radio1");

//FUNCTIONS

function secambiodeinput(){

    alert("BNBV");

}


function funcionenviar(){

    alert(correo.value);
}




function cargardocumento(){

    botonenviar.addEventListener("click",funcionenviar);
    correo.addEventListener("blur",secambiodeinput);

}

//Eventos y validaciones





//EVENTS

window.addEventListener("load",cargardocumento);



//1creo una variable para mi elemento

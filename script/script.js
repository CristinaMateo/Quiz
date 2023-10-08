let seleccionUno = document.querySelectorAll("#uno > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionUno[i].addEventListener("click", function(){
       seleccionUno[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionDos = document.querySelectorAll("#dos > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionDos[i].addEventListener("click", function(){
       seleccionDos[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionTres = document.querySelectorAll("#tres > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionTres[i].addEventListener("click", function(){
       seleccionTres[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionCuatro = document.querySelectorAll("#cuatro > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionCuatro[i].addEventListener("click", function(){
       seleccionCuatro[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionCinco = document.querySelectorAll("#cinco > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionCinco[i].addEventListener("click", function(){
       seleccionCinco[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionSeis = document.querySelectorAll("#seis > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionSeis[i].addEventListener("click", function(){
       seleccionSeis[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionSiete = document.querySelectorAll("#siete > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionSiete[i].addEventListener("click", function(){
       seleccionSiete[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionOcho = document.querySelectorAll("#ocho > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionOcho[i].addEventListener("click", function(){
       seleccionOcho[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionNueve = document.querySelectorAll("#nueve > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionNueve[i].addEventListener("click", function(){
       seleccionNueve[i].style.backgroundColor = "#33B1C1";
   })
}



let seleccionDiez = document.querySelectorAll("#diez > input")
 
for (let i = 0; i < seleccion.length; i++) {
   seleccionDiez[i].addEventListener("click", function(){
       seleccionDiez[i].style.backgroundColor = "#33B1C1";
   })
}




document.getElementById("quizForm").addEventListener("submit", function(event){

    event.preventDefault();
       
    const cliffhanger = event.target.cliffhanger.value 
    const masLarga = event.target.masLarga.value
    const JaneAusten = event.target.JaneAusten.value 
    const anonimos =event.target.anonimos.value 
    const policiaca =event.target.policiaca.value 
    const primeraMuestra =event.target.primeraMuestra.value 
    const jarchas =event.target.jarchas.value 
    const nobel =event.target.nobel.value 
    const mobyDick =event.target.mobyDick.value 
    const odisea =event.target.odisea.value


    let alerta ="";


    if(cliffhanger !== "serializacion"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("uno").style.borderColor= "red";

    } else if(cliffhanger === "serializacion"){
        document.getElementById("uno").style.borderColor= "lightgreen";
    }


    if(masLarga !== "proust"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("dos").style.borderColor= "red";

    } else if(masLarga === "proust"){
        document.getElementById("dos").style.borderColor= "lightgreen";
    }


    if(JaneAusten !== "persuasion" && JaneAusten !== "abadia"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("tres").style.borderColor= "red";

    } else if(JaneAusten === "persuasion" || JaneAusten === "abadia"){
        document.getElementById("tres").style.borderColor= "lightgreen";
    }


    if(anonimos !== "austen" && anonimos !== "shelley"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("cuatro").style.borderColor= "red";

    } else if(anonimos === "austen" || anonimos === "shelley"){
        document.getElementById("cuatro").style.borderColor= "lightgreen";
    }


    if(policiaca !== "galdos"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("cinco").style.borderColor= "red";

    } else if(policiaca === "galdos"){
        document.getElementById("cinco").style.borderColor= "lightgreen";
    }


    if(primeraMuestra !== "glosas"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("seis").style.borderColor= "red";

    } else if(primeraMuestra === "glosas"){
        document.getElementById("seis").style.borderColor= "lightgreen";
    }


    if(jarchas !== "liricas"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("siete").style.borderColor= "red";

    } else if(jarchas === "liricas"){
        document.getElementById("siete").style.borderColor= "lightgreen";
    }


    if(nobel !== "hemingway" && nobel !== "marquez"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("ocho").style.borderColor= "red";

    } else if(nobel === "hemingway" || nobel === "marquez"){
        document.getElementById("ocho").style.borderColor= "lightgreen";
    }


    if(mobyDick !== "verdadero"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("nueve").style.borderColor= "red";

    } else if(mobyDick === "verdadero"){
        document.getElementById("nueve").style.borderColor= "lightgreen";
    }


    if(odisea !== "falso"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("diez").style.borderColor= "red";

    } else if(odisea === "falso"){
        document.getElementById("diez").style.borderColor= "lightgreen";
    }

    
    if(alerta.length != 0){
       
         let aviso = document.createElement("span");
         let mensaje= document.createTextNode("Revisa las respuestas incorrectas y las preguntas sin respuesta.");
         aviso.style.color="#DD1C1A";
         aviso.style.fontSize = "1em"
         aviso.appendChild(mensaje);
         document.getElementById("quiz").appendChild(aviso);

    }

    if(alerta.length == 0){
       
        let aviso = document.createElement("span");
        let mensaje= document.createTextNode("10/10 correcto");
        aviso.style.color="lightgreen";
        aviso.style.fontSize = "1em"
        aviso.appendChild(mensaje);
        document.getElementById("quiz").appendChild(aviso);

   }


})

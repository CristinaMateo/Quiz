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

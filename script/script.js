

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
        document.getElementById("correctoUno").style.borderColor = "red";

    } else if(cliffhanger === "serializacion"){
        document.getElementById("uno").style.borderWidth= "thick";
        document.getElementById("uno").style.borderColor= "lightgreen";

    }


    if(masLarga !== "proust"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("dos").style.borderColor= "red";
        document.getElementById("correctoDos").style.borderColor = "red";

    } else if(masLarga === "proust"){
        document.getElementById("dos").style.borderColor= "lightgreen";
        document.getElementById("dos").style.borderWidth= "thick";
    }


    if(JaneAusten !== "persuasion" && JaneAusten !== "abadia"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("tres").style.borderColor= "red";
        document.getElementById("correctoTresA").style.borderColor = "red";
        document.getElementById("correctoTresB").style.borderColor = "red";

    } else if(JaneAusten === "persuasion" || JaneAusten === "abadia"){
        document.getElementById("tres").style.borderColor= "lightgreen";
        document.getElementById("tres").style.borderWidth= "thick";
    }


    if(anonimos !== "austen" && anonimos !== "shelley"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("cuatro").style.borderColor= "red";
        document.getElementById("correctoCuaA").style.borderColor = "red";
        document.getElementById("correctoCuaB").style.borderColor = "red";

    } else if(anonimos === "austen" || anonimos === "shelley"){
        document.getElementById("cuatro").style.borderColor= "lightgreen";
        document.getElementById("cuatro").style.borderWidth= "thick";
    }


    if(policiaca !== "galdos"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("cinco").style.borderColor= "red";
        document.getElementById("correctoCinco").style.borderColor = "red";

    } else if(policiaca === "galdos"){
        document.getElementById("cinco").style.borderColor= "lightgreen";
        document.getElementById("cinco").style.borderWidth= "thick";
    }


    if(primeraMuestra !== "glosas"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("seis").style.borderColor= "red";
        document.getElementById("correctoSeis").style.borderColor = "red";

    } else if(primeraMuestra === "glosas"){
        document.getElementById("seis").style.borderColor= "lightgreen";
        document.getElementById("seis").style.borderWidth= "thick";
    }


    if(jarchas !== "liricas"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("siete").style.borderColor= "red";
        document.getElementById("correctoSiete").style.borderColor = "red";

    } else if(jarchas === "liricas"){
        document.getElementById("siete").style.borderColor= "lightgreen";
        document.getElementById("siete").style.borderWidth= "thick";
    }


    if(nobel !== "hemingway" && nobel !== "marquez"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("ocho").style.borderColor= "red";
        document.getElementById("correctoOchoA").style.borderColor = "red";
        document.getElementById("correctoOchoB").style.borderColor = "red";

    } else if(nobel === "hemingway" || nobel === "marquez"){
        document.getElementById("ocho").style.borderColor= "lightgreen";
        document.getElementById("ocho").style.borderWidth= "thick";
    }


    if(mobyDick !== "si"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("nueve").style.borderColor= "red";
        document.getElementById("correctoNueve").style.borderColor = "red";
        let correccion = document.createElement("span");
        let respuesta= document.createTextNode("Verdadero. 'Moby-Dick', ahora considerada una obra maestra de la literatura estadounidense, fue inicialmente un fracaso tanto comercial como crítico. Herman Melville tuvo dificultades financieras durante gran parte de su vida y su obra no fue plenamente reconocida hasta muchos años después de su muerte. Hoy en día, 'Moby-Dick' es considerada una obra literaria esencial y ha sido adaptada en numerosas formas, incluyendo películas, series de televisión y adaptaciones teatrales.");
        correccion.appendChild(respuesta);
        document.getElementById("nueve").appendChild(correccion);

    } else if(mobyDick === "si"){
        document.getElementById("nueve").style.borderColor= "lightgreen";
        document.getElementById("nueve").style.borderWidth= "thick";
        let correccion = document.createElement("span");
        let respuesta= document.createTextNode("Muy bien. 'Moby-Dick', ahora considerada una obra maestra de la literatura estadounidense, fue inicialmente un fracaso tanto comercial como crítico. Herman Melville tuvo dificultades financieras durante gran parte de su vida y su obra no fue plenamente reconocida hasta muchos años después de su muerte. Hoy en día, 'Moby-Dick' es considerada una obra literaria esencial y ha sido adaptada en numerosas formas, incluyendo películas, series de televisión y adaptaciones teatrales.");
        correccion.appendChild(respuesta);
        document.getElementById("nueve").appendChild(correccion);
    }


    if(odisea !== "falso"){
        alerta+="Respuesta incorrecta!";
        document.getElementById("diez").style.borderColor= "red";
        document.getElementById("correctoDiez").style.borderColor = "red";
        let correccion = document.createElement("span");
        let respuesta= document.createTextNode("Falso. 'La Odisea' es una epopeya, no una novela. La primera novela del mundo se atribuye comúnmente a 'Don Quijote de la Mancha' de Miguel de Cervantes.");
        correccion.appendChild(respuesta);
        document.getElementById("diez").appendChild(correccion);

    } else if(odisea === "falso"){
        document.getElementById("diez").style.borderColor= "lightgreen";
        document.getElementById("diez").style.borderWidth= "thick";
        let correccion = document.createElement("span");
        let respuesta= document.createTextNode("Muy bien. 'La Odisea' es una epopeya, no una novela. La primera novela del mundo se atribuye comúnmente a 'Don Quijote de la Mancha' de Miguel de Cervantes.");
        correccion.appendChild(respuesta);
        document.getElementById("diez").appendChild(correccion);
    }

    
    if(alerta.length != 0){
       
         let aviso = document.createElement("span");
         let mensaje= document.createTextNode("Revisa las respuestas incorrectas y las preguntas sin respuesta.");
         aviso.style.color="#DD1C1A";
         aviso.style.fontSize = "1em"
         aviso.appendChild(mensaje);
         document.getElementById("quiz").appendChild(aviso);

    } else if(alerta.length == 0){
       
        let aviso = document.createElement("span");
        let mensaje= document.createTextNode("¡Genial, has acertado todo!");
        aviso.style.color="green";
        aviso.style.fontSize = "20px"
        aviso.appendChild(mensaje);
        document.getElementById("quiz").appendChild(aviso);

   }


})




const comprobarRespuesta = (pregunta, respuestaCorrecta) => {
    let respuesta = prompt (pregunta);
    while (respuesta !== "1" && respuesta !== "2") {
        alert ("Respuesta inválida, elegir entre 1 o 2");
        respuesta = prompt(pregunta);
    }
    if (respuesta === respuestaCorrecta) {
        alert ("Respuesta correcta");
    } else {
        alert ("Respuesta incorrecta");
    }
}

let pregunta;
let respuestaCorrecta;


for (let i = 0; i <= 3; i++) {
    switch(i) {
        case 1:
            pregunta = "Con respecto al riego, ¿Es mejor regarlas 1.a menudo y poco o 2.cada tanto y mucho? (Elegir entre 1 y 2)";
            respuestaCorrecta = "1";
            
            comprobarRespuesta(pregunta, respuestaCorrecta);
            
            break;
        case 2:
            pregunta = "Con respecto a la humedad del suelo, ¿El mejor metodo es 1.mirar las hojas de la planta o 2.clavar un palito en la tierra? (Elegir entre 1 y 2)";
            respuestaCorrecta = "2";
            
            comprobarRespuesta(pregunta,respuestaCorrecta)
            
            break;
        case 3:
            pregunta = "Con respecto a la exposición al sol, ¿es mejor 1.dejar la planta al sol directo durante pocas horas o 2. con abundante luz solar indirecta? (Elegir entre 1 y 2)";
            respuestaCorrecta = "2";
            
            comprobarRespuesta(pregunta,respuestaCorrecta)
            
            break;
        default:
            alert ("Cuestionario sobre el cuidado de las plantas");

        }
    }
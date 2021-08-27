'use strict'

var comment = new Object(),
    email = "",
    comment = "";

var emailBody = document.querySelector("#emailArea");
var textBody = document.querySelector("#commentArea");
var url = 'http://192.168.100.2:3700/api/saveComment';


//var comentarios = [];
var divSeccionComentarios = document.querySelector("#seccion-comments");

//let q= document.querySelector("#hola"); q.innerHTML= "hola desde xss";
//let q= document.querySelector("#hola"); q.innerHTML= "hola desde xss"; 
function getComentarios(){
    return fetch('http://192.168.100.2:3700/api/comments');
}



function sanitizarCadena(cadena) {
    let exp = RegExp(/<\/?[a-z]+/g); // '/' símbolo de que inicia o termina la expresión regular
                                     // '?' opcional
                                    //[a-z]+ cualquier combinación de letras de al menos un caracter
                                    //'g', global - que busque en toda la cadena
                                    // '\' - escape, para identificar caracteres especiales
    return cadena.replace(exp, "<&>"); //Cualquier subcadena que cumpla con la expresión regular, reemplázalo. 
}


function postComentario() {
    console.log(emailBody.value);
    console.log(textBody.value);
}

async function postData() {
    // Opciones por defecto estan marcadas con un *
    emailBody.value = sanitizarCadena(emailBody.value);
    console.log(emailBody.value);
    let data = {
        email: emailBody.value,
        comment: textBody.value
    }
    let enviar = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
       // mode: 'cors', // no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
       // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
            //},
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }
    console.log(enviar.body);
    const response = await fetch(url, enviar);
    return response.json(); // parses JSON response into native JavaScript objects
}



function listadoComentarios(comentario){
    comentario.map((user, i) => {
        let email = document.createElement('div');
        email.innerHTML = user.email;
        divSeccionComentarios.appendChild(email);
        console.log(user.email);
    })
}

getComentarios()
    .then(function (data) {
        return data.json();
    })
    .then(function (data) {
        //imprimir en pantalla
        listadoComentarios(data.comments);
        console.log(data.comments[0]);
    });
  

const $formulario = document.querySelector("#carta-santa");
let nombreDelUsuario = document.querySelector("#nombre").value;
let ciudadDelUsuario = document.querySelector("#ciudad").value;
let regaloDelUsario = document.querySelector("#descripcion-regalo").value;


function validarNombre(nombreDelUsuario) {
    if (nombreDelUsuario.length == 0) {
        return `Este campo debe tener al menos 1 caracter`;
    }
    if (nombreDelUsuario.length >= 50) {
        return `Este campo debe tener menos de 50 caracteres`;
    }
    if (!/^[a-z]+$/i.test(nombreDelUsuario)) {
        return `El campo nombre solo deberia recibir letras`;
    }
    return "";
}

function validarCiudad(ciudadDelUsuario) {
    if (ciudadDelUsuario == "") {
        return `Este campo no puede estar vacio`;
    }
    return "";
}

function validarRegalo(regaloDelUsario) {
    if (regaloDelUsario.length == 0) {
        return `Este campo no puede estar vacio`;
    }
    if (!/^[A-z0-9]+$/.test(regaloDelUsario)) {
        return `Este campo solo puede contener letras y numeros`;
    }
    return "";
}

function validarFormulario(event) {
    const $form = document.querySelector(`#carta-a-santa`);
    const nombreDelUsuario = $form.nombre.value;
    const ciudadDelUsuario = $form.ciudad.value;
    const regaloDelUsario = $form["descripcion-regalo"].value;
    const errorNombre = validarNombre(nombreDelUsuario);
    const errorCiudad = validarCiudad(ciudadDelUsuario);
    const errorRegalo = validarRegalo(regaloDelUsario);

    const errores = {
        "descripcion-regalo": errorRegalo,
        nombre: errorNombre,
        ciudad: errorCiudad,
    }
    const exito = manejarErrores(errores) === 0;
    if (exito) {
        document.querySelector("#exito").className = "";
        $form.className = "oculto";
        setTimeout(() => {
            window.location.href = "file:///C:/Users/54351/Documents/GitHub/js-xmas-edition/wishlist.html";
        }, 5000);
    }

    event.preventDefault();
}


function manejarErrores(errores) {
    borrarMensajesDeError();
    const keys = Object.keys(errores);
    let contadorErrores = 0;
    keys.forEach(function (key) {
        const error = errores[key];
        const $contenedorDescripcionDeErrores = document.querySelector("#errores");
        if (error) {
            $form[key].className = "error";
            contadorErrores++;
            let elementoLiDelError = document.createElement("li");
            elementoLiDelError.textContent = error;
            elementoLiDelError.className = "hola";
            $contenedorDescripcionDeErrores.appendChild(elementoLiDelError);
        } else {
            $form[key].className = "";
        }

    });
    return contadorErrores;
}



const $form = document.querySelector(`#carta-a-santa`);
$form.onsubmit = validarFormulario;

function borrarMensajesDeError() {
    document.querySelectorAll(".hola").forEach(function (a) {
        a.remove();
    })
}
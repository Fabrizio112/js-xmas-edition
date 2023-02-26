const $form = document.querySelector(`#carta-a-santa`);

let nombreDelUsuario = $form.nombre.value;
let ciudadDelUsuario = $form.name.value;
let comportamientoDelUsaurio = $form.comportamiento.value;
let regaloDelUsario = $form["descripcion-regalo"].value;


function validarNombre(nombreDelUsuario) {
    if (nombreDelUsuario.length == 0) {
        return `Este campo debe tener al menos 1 caracter`;
    }
    if (nombreDelUsuario.length >= 50) {
        return `Este campo debe tener menos de 50 caracteres`;
    }
    return "";
}

function validarCiudad(ciudadDelUsuario) {
    if (ciudadDelUsuario == "") {
        return `Este campo no puede estar vacio`
    }
    return "";
}

function validarRegalo(regaloDelUsario) {
    if (regaloDelUsario.length == 0) {
        return `Este campo no puede estar vacio`
    }
    return "";
}
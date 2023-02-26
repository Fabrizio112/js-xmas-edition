function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío',
    );
    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarNombre("Fabrizio") === "",
        `Validar nombre no valido  que esta es una entrada valida`
    )
}
function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === `Este campo no puede estar vacio`,
        `Validar ciudad no valido si el campo esta vacio`
    )
    console.assert(
        validarCiudad("Cordoba") === ``,
        `Validar ciudad no valida que se ingreso una ciudad valida`
    )
}
function probarValidarRegalo() {
    console.assert(
        validarRegalo("") === `Este campo no puede estar vacio`,
        `Validar Regalo no valido si el campo esta vacio`
    )
    console.assert(
        validarRegalo("Un futbol") === ``,
        `Validar Regalo no valido que se ingreso un regalo valido`
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarRegalo();
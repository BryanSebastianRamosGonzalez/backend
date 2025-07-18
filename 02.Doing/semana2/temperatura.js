//✅ Práctica en clase: Convertir grados Celsius a Fahrenheit usando boxen
//🎯 Objetivo
//Crear un módulo reutilizable (temperatura.js) que convierta grados.
//
//Usar inquirer para entrada de usuario.
//
//Mostrar el resultado con estilo usando boxen.



export  function exportCelsiusToFahrenheit(temperatura){
    let result = (temperatura * 9/5) + 32;
    return result;
}

export  function exportFahrenheitToCelsius(temperatura){
    let result = (temperatura - 32) * 5/9;
    return result;
}
export function exportKelvinToCelsius(temperatura) {
    let result = temperatura - 273.15;
    return result;
}
export function exportCelsiusToKelvin(temperatura) {
    let result = temperatura + 273.15;
    return result;
}
export function exportFahrenheitToKelvin(temperatura) {
    let result = (temperatura - 32) * 5/9 + 273.15;
    return result;
}
export function exportKelvinToFahrenheit(temperatura) {
    let result = (temperatura - 273.15) * 9/5 + 32;
    return result;
}

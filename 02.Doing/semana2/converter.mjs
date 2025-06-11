    import inquirer from "inquirer";
    import boxen from "boxen";
    import chalk from "chalk";
    import {
    exportCelsiusToFahrenheit,
    exportFahrenheitToCelsius,
    exportKelvinToCelsius,
    exportCelsiusToKelvin,
    exportFahrenheitToKelvin,
    exportKelvinToFahrenheit,
    } from "./temperatura.js";

    function iniciar() {
    inquirer
        .prompt([
        {
            type: "list",
            name: "tipo",
            message: chalk.green("¿Qué tipo de conversión quieres hacer?"),
            choices: ["celsius a fahrenheit", "fahrenheit a celsius", "kelvin a celsius", "celsius a kelvin", "fahrenheit a kelvin", "kelvin a fahrenheit"],
        },
        {
            type: "number",
            name: "grados",
            message: chalk.blue(" ingresa el valor a convertir:"),
        },
        ])
        .then((res) => {
        const { tipo, grados } = res;
        let msg = "";
        if (isNaN(grados)) {
    mostraResultado("Error: Ingresa un número válido.");
    return reanudar();
  }
        switch (tipo) {
            case "celsius a fahrenheit":
                if (grados < -273.15) {
                    msg = "Valor no válido: no puede ser menor al cero absoluto (-273.15°C)";
                } else {
                    msg = `El resultado de ${grados}°C a Fahrenheit es: ${exportCelsiusToFahrenheit(grados).toFixed(1)}°F`;
                }   break;
            case "fahrenheit a celsius":
                if (grados < -459.67) {
                    msg = "Valor no válido: no puede ser menor al cero absoluto (-459.67°F)";
                } else {
                    msg = `El resultado de ${grados}°F a Celsius es: ${exportFahrenheitToCelsius(grados).toFixed(1)}°C`;
                }
                break;
            case "kelvin a celsius":
                if (grados < 0) {
                    msg = "Valor no válido: no puede ser menor al cero absoluto (0K)";
                } else {
                    msg = `El resultado de ${grados}K a Celsius es: ${exportKelvinToCelsius(grados).toFixed(1)}°C`;
                }
                break;
            case "celsius a kelvin":
                if (grados < -273.15) {
                    msg = "Valor no válido: no puede ser menor al cero absoluto (-273.15°C)";
                } else {
                    msg = `El resultado de ${grados}°C a Kelvin es: ${exportCelsiusToKelvin(grados).toFixed(1)}K`;
                }
                break;
            case "fahrenheit a kelvin":
                if (grados < -459.67) {
                    msg = "Valor no válido: no puede ser menor al cero absoluto (-459.67°F)";
                } else {
                    msg = `El resultado de ${grados}°F a Kelvin es: ${exportFahrenheitToKelvin(grados).toFixed(1)}K`;
                }
                break;
            case "kelvin a fahrenheit":
                if (grados < 0) {
                    msg = "Valor no válido: no puede ser menor al cero absoluto (0K)";
                } else {
                    msg = `El resultado de ${grados}K a Fahrenheit es: ${exportKelvinToFahrenheit(grados).toFixed(1)}°F`;
                }
                break;
        }
        mostraResultado(msg);
        reanudar();
        });
        
    }

function mostraResultado(mensaje) {
  console.log(
    boxen(chalk.bold.bgHex("#6B6863")(mensaje), {
      padding: 1,
      borderColor: "green",
    })
  );
}
function reanudar(){
    inquirer.prompt([
        {
            type: "confirm",
            name: "reanudar",
            message: chalk.blue("¿Quieres hacer una conversión?"),
        },
        ])
        .then((res) => {
        if (res.reanudar) {
            iniciar();
        } else {
            console.log(chalk.green("¡Gracias por usar el conversor!"));
        }
        });
}
iniciar();
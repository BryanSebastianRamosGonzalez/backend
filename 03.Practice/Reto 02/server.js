import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.blue("Bienvenido al reto 2 de Node.js"));
console.log(chalk.yellow("Vamos a determinar si un número es primo o no"));

function preguntar() {
  inquirer.prompt([
    {
      type: "input",
      name: "numero",
      message: "Por favor, ingresa un número:",
        validate: (value) => {
            const valid = !isNaN(parseFloat(value)) && isFinite(value);
            return valid || "Por favor, ingresa un número válido";
        },
    }

  ])
  .then((answers) => {
    const num = parseInt(answers.numero);
    if (numeroPrimo(num)) {
      console.log(chalk.green("Es primo"));
    } else {
      console.log(chalk.red("No es primo"));
    }
    
  });

}

function numeroPrimo(numero){
   const esPrimo = (num) => {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}
    return esPrimo(numero);
}

preguntar();


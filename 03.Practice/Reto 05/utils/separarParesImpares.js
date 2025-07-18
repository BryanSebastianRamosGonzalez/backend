export const separar = (numeros) => {
    const num = numeros.map((n) => parseInt(n, 10));

    if (num.length === 0) {
        return "Dato no válido";
    } else if (num.some(isNaN)) {
        return "Dato no válido";
    } else {
        const pares = num.filter(n => n % 2 === 0);
        const impares = num.filter(n => n % 2 !== 0);
        return { pares, impares };
    }
};


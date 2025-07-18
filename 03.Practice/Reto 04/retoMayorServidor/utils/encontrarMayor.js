export const mayor = (numeros) => {
    const num = numeros.map((n) => parseInt(n, 10));

    if (num.length === 0) {
        return "Dato no válido";
    } else if (num.some(isNaN)) {
        return "Dato no válido";
    } else {
        return Math.max(...num);
    }
};

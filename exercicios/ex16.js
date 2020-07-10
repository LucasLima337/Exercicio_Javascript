let calc = (n1, sinal, n2) => {
    switch(sinal) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case 'x':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return 'Operação Inválida'
    }
}

console.log(calc(2, '+', 3))
console.log(calc(5, 'x', 2))
console.log(calc(12, '-', 8))
console.log(calc(20, '/', 10))
console.log(calc(8, '//', 4))

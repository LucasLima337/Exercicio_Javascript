let triangulo = (r1, r2, r3) => {
    if (r1 < (r2 + r3) && r2 < (r1 + r3) && r3 < (r1 + r2)) {
        if (r1 == r2 && r1 == r3) return `Triângulo Equilátero!`
        
        if (r1 != r2 && r1 != r3 && r2 != r3) return `Triângulo Escaleno!` 

        else return `Triângulo Isósceles!`
    }
    else {
        return `Não pode formar um triângulo!`
    }
}

console.log(triangulo(42, 42, 42)) // Triângulo Equilátero
console.log(triangulo(7, 5, 4)) // Triângulo Escaleno
console.log(triangulo(7, 7, 5), '\n') // Triângulo Isósceles

console.log(triangulo(4, 20, 2)) // Não pode formar triângulo

let equacao = (a, b, c) => {
    let delta = b ** 2 - 4 * a * c
    if (delta < 0) return 'Delta é negativo!'
    else {
        let x = []
        x.push((-b + Math.sqrt(delta)) / (2 * a))
        x.push((-b - Math.sqrt(delta)) / (2 * a))
        return x 
    }
}

console.log(equacao(3, -5, 12))
console.log(equacao(3, -7, 4))
console.log(equacao(5, 3, 5))
console.log(equacao(1, 5 / 2, - 3 / 2))
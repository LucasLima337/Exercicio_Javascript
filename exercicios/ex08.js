let desempenho = (array) => {
    let newarr = array.split(' ')
    let melhor = 0, cont = 0, pior = 0, pospior = 0
    let resultado = []
    newarr.forEach((pontos, i) => {
        if (i == 0) {
            melhor = pontos
            pior = pontos
        }
        else if (Number(pontos) > melhor) {
            melhor = pontos
            if (i > 0) cont += 1
        }
        else if (Number(pontos) < pior) {
            pior = pontos
            pospior = i + 1
        }
    })
    resultado.push(cont, pospior)
    return resultado
}

console.log(desempenho('10 20 20 8 25 3 0 30 1'))

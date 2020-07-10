let lanchonete = (codigos, quant) => {
    let total = 0
    let codes = [100, 200, 300, 400, 500, 600]
    let precos = [3, 4, 5.50, 7.50, 3.50, 2.80]
    if (codigos.length != quant.length) return 'Parâmetros Incorretos!'
    else{
        for (let i = 0; i < codigos.length; i++) {
            for (let j = 0; j < codes.length; j++) {
                if (codigos[i] == codes[j]) {
                    total += precos[j] * quant[i]
                }
            }
        }
        return total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    }
}

console.log(lanchonete([500, 300, 200], [2, 1, 1]))

let real = ced => {
    return ced.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

let saque = nota => {
    let ced = 100, cont = 0
    
    while (true) {
        if (nota >= ced) {
            nota -= ced
            cont += 1
        }
        else {
            if (cont != 0) console.log(`${cont} cédulas de ${real(ced)}`)
            
            cont = 0
            if (ced == 100) ced = 50
            else if (ced == 50) ced = 10
            else if (ced == 10) ced = 5
            else if (ced == 5) ced = 1
            else if (nota == 0) break
        }
    }
}

saque(227)

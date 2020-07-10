let notas = notas => {
    for (nota of notas) {
        if (nota >= 0 && nota <= 4.9) {
            console.log(`Nota ${nota} : Conceito D`)
        }
        else if (nota >= 5 && nota <= 6.9) {
            console.log(`Nota ${nota} : Conceito C`)
        }
        else if (nota >= 7 && nota <= 8.9) {
            console.log(`Nota ${nota} : Conceito B`)
        }
        else if (nota >= 9 && nota <= 10) {
            console.log(`Nota ${nota} : Conceito A`)
        }
        else {
            console.log('Notas Inválidas!')
        }
    }
}

notas([5, 8.5, 3.1, 9.8, 7.5, 6.4])

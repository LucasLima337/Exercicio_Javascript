let dia = dia => {
    switch(dia) {
        case 1:
            return 'Domingo: Fim de Semana'
        case 2:
            return 'Segunda: Dia Útil'
        case 3:
            return 'Terça: Dia Útil'
        case 4:
            return 'Quarta: Dia Útil'
        case 5:
            return 'Quinta: Dia Útil'
        case 6:
            return 'Sexta: Dia Útil'
        case 7:
            return 'Sábado: Fim de Semana'
        default:
            return 'Dia Inválido'
    }
}

console.log(dia(5))
console.log(dia(1))
console.log(dia(15))

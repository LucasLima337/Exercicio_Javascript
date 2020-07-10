let anuidade = (mes, anuidade) => {
    if (mes > 0 && mes < 13)
    return (anuidade * (1 + 5 / 100) ** (mes - 1)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    else return 'Mês inválido'
}

console.log(anuidade(8, 2500))

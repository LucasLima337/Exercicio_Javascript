let saude = idade => {
    let money = 0
    if (idade < 10) money = 180
    else if (idade >= 10 && idade <= 30) money = 150
    else if (idade > 30 && idade <= 60) money = 195
    else if (idade > 60) money = 230
    return money.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

console.log(saude(19))
console.log(saude(43))
console.log(saude(70))
console.log(saude(7))

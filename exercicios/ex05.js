let money = nota => nota.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

console.log(money(0.1 + 0.2))
console.log(money(4500))

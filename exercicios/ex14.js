let fruta = fruta => {
    switch(fruta.toLowerCase()) {
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são R$3,00 o quilo'
        default:
            return 'Fruta Inválida'
    }
}

console.log(fruta('Maçã'))
console.log(fruta('KiWi'))
console.log(fruta('meLanCIa'))
console.log(fruta('uva'))

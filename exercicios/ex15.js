let loja = carro => {
    switch(carro.toLowerCase()){
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            return 'Tem certeza que prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(loja('hatch'))
console.log(loja('sedans'))
console.log(loja('motocicletas'))
console.log(loja('caminhonetes'))
console.log(loja('BMW'))

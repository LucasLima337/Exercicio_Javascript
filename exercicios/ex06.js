function juros(c, i, t){
    this.simples = () => {
        let m = c + c * i / 100 * t
        return `Montante: ${m.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }
    this.composta = () => {
        let m = c * (1 + i / 100) ** t
        return `Montante: ${m.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`
    }
}

let obj = new juros(70000, 10.5, 145/360)
console.log(obj.simples())
console.log(obj.composta())

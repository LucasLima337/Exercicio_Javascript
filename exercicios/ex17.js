let job = (plan, salary) => {
    let per = 0
    switch(plan.toLowerCase()) {
        case 'a':
            per = 10
            break
        case 'b':
            per = 15
            break
        case 'c':
            per = 20
            break
        default:
            return 'Plano Inválido!'
                
    }
    return (salary + (per / 100 * salary)).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}

console.log(job('A', 2500))
console.log(job('B', 1350))
console.log(job('C', 950))
console.log(job('Z', 50))

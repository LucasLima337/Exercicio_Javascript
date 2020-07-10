let pa = (n, a1, r) => {
    let soma = 0
    let x = a1
    for (let i = 0; i < n; i++) {
        console.log(x)
        x += r
        soma += x
    }
    console.log(`Soma total: ${soma}`)
}
pa(4, 2, 2)

let pg = (n, a1, q) => {
    let soma = 0
    let x = a1
    for (let i = 0; i < n; i++) {
        console.log(x)
        x *= q
        soma += x
    }
    console.log(`Soma total: ${soma}`)
}
pg(5, 1, 10)

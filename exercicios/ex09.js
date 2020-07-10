let media = (nota = 0) => {
    if (nota < 38) return 'Reprovado'
    else {
        let cont = 0
        while (nota % 5 != 0) {
            cont += 1
            nota += 1
        }
        if (cont >= 3) nota -= cont
        return nota
    }
}

console.log(media(84))

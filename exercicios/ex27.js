let crescimento = (h1, h2, i1, i2) => {
    if (h1 != h2) {
        let children = [h1, h2].sort((a, b) => a - b)
        if (children[0] == h1) {
            let cont = 0
            if (i1 > i2) {
                while (h1 < h2) {
                    h1 *= i1
                    h2 *= i2
                    cont += 1
                }
                console.log(`A criança menor irá ultrapassar a maior em ${cont} anos`)
            }
            else {
                console.log('A criança menor não irá ultrapassar a maior')
            }
        }
        else if (children[0] == h2) {
            let cont = 0
            if (i2 > i1) {
                while (h2 < h1) {
                    h2 *= i2
                    h1 *= i1
                    cont += 1
                }
                console.log(`A criança menor irá ultrapassar a maior em ${cont} anos`)
            }
            else {
                console.log('A criança menor não irá ultrapassar a maior')
            }
        }
    }
    else {
        console.log('As crianças tem a mesma idade!')
    }
}

crescimento(174, 255, 0.80, 0.60)
let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10, 16, 18, 16]

let add = (arraypilha, arrayadd) => {
    console.log(`Vetor a ser adicionado: ${arrayadd}`)
    console.log(`Vetor Completo: ${arraypilha.concat(arrayadd)}`)
}

add(vetorPilha, vetorAdiciona)

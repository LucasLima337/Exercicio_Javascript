let numeros = array => {
    let pares = array.filter((par) => par % 2 == 0)
    let impares = array.filter((impar) => impar % 2 == 1)
    console.log(`Pares: ${pares.length}`)
    console.log(`Ímpares: ${impares.length}`)
}

numeros([5, 4, 3, 2, 7, 9, 6, 18, 16])

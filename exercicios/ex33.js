vetorInteiro = [1, 2, 3, 4]
vetorString = ['lucas', 'lima', 'python', 'seginfo']
vetorDouble = [9.8, 8.6, 7.4, 9.999]

function concatt() {
    let newarr = []
    for (let d of arguments) {
        newarr = newarr.concat(d)
    }
    return newarr
}
console.log(concatt(vetorString, vetorInteiro, vetorDouble))

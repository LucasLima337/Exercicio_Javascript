let array = array => {
    let newarr = array.sort((x, y) => x - y)
    console.log(`Menor: ${newarr[0]}`)
    console.log(`Maior: ${newarr[newarr.length - 1]}`)
}

array([5, 7, 6, 5, 6, 3, 14, 4, 5])

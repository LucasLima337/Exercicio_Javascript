let func = (array1, array2) => {
    let len = array1.length
    for (let i = 0; i < len; i++) {
        array1.push(array2[i])
        array2.push(array1[i])
    }
    array1.splice(0, len)
    array2.splice(0, len)
    console.log(`Array1: ${array1}`)
    console.log(`Array2: ${array2}`)
}

func([2, 4, 5, 10, 87], [6, 4, 8, 78, 30])

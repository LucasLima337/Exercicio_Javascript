let func1 = (array, num) => {
    let newarr = []
    for (let n of array) {
        n *= num
        newarr.push(n)
    }
    return newarr
}

console.log(func1([2, 5, 4, 6], 5))

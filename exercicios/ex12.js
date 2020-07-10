let fat = num => {
    let cont = 0, multi = 1
    while (cont < num) {
        cont += 1
        multi *= cont
    }
    return multi
}

console.log(fat(4))
console.log(fat(5))
console.log(fat(0))

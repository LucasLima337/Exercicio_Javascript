let inter = array => {
    let dezvinte = array.filter(num => num >= 10 && num <= 20)
    let fora = array.filter(num => num < 10 || num > 20)
    console.log(dezvinte)
    console.log(fora)
}

inter([7, 5, 60, 75, 19, 13, 37, 20, 17, 3, 98, 10])
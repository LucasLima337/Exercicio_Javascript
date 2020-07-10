let func = (i=0, f=100) => {
    if (i > f) {
        let aux = i
        i = f
        f = aux
    }
    for (let init = i; init <= f; init++) {
        if (init % 2 == 1) console.log(init)
    }
}

func(1, 10)

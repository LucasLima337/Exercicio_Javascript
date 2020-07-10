let strings = (str1, str2) => {
    for (let l of str1) {
        if (str2.toLowerCase().indexOf(l.toLowerCase()) == -1) {
            return false
        }
    }
    for (let l of str2) {
        if (str1.toLowerCase().indexOf(l.toLowerCase()) == -1) {
            return false
        }
    }
    return true
}

console.log(strings('lucasbav', 'LUCASbvLq'))

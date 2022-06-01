const isValidNumber = (s) => {
    let num = false
    ex = false,
        dec = false,
        sign = false
    for (let char of s)
        if (char >= '0' && char <= '9') num = true
        else if (char === 'e' || char === 'E')
            if (ex || !num) return false
            else ex = true, sign = false, num = false, dec = false
        else if (char === '+' || char === '-')
            if (sign || num || dec) return false
            else sign = true
        else if (char === '.')
            if (dec || ex) return false
            else dec = true
        else return false
    return num
};


console.log(isValidNumber("+6e-1"))
console.log(isValidNumber("1e"))
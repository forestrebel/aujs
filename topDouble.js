function topDouble(value, top) {
    console.log(`top = ${top}`)
    while (value*2 < top) {
        console.log(`---`)
        console.log(`initial_value=${value}`)
        value = value * 2;
        console.log(`ending_value:${value}`)
    }
    return value;
}

result = topDouble(2, 100)
console.log(`RESULT:${result}`)
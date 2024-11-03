function splitAtX(string) {
    let xIdx = string.indexOf("x")
    console.log(xIdx)
    let firstHalf = string.slice(0, xIdx)
    console.log(firstHalf)
    let secondHalf = string.slice(xIdx+1)
    console.log(secondHalf)
}

input = "george wax anonymous"
splitAtX(input)

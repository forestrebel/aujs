function greaterThanFive(array) {
    for(let i = array.length - 1; i >= 0; i--) {
        console.log(`idx=${i}; val=${array[i]}`)
        if(array[i] > 5) {
            array.splice(i, 1);
        }
    }
    return array
}

let array = [1, 10, 7, 3, 88]
console.log(`initial=${array}`)
let res = greaterThanFive(array)
console.log(`after:${array}`)
// working as intended

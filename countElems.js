function countElements(elements) {
    counts = {}

    // if undefined, define
    // if defined, increment
    for (i=0; i < elements.length; i++) {
        console.log(counts[elements[i]]) // start undefined
        if (isNaN(counts[elements[i]])) {
            counts[elements[i]] = 1;
        } else {
            counts[elements[i]] += 1;
        }
        
    }
    return counts;

}

module.exports = countElements;

input1=["e", "a", "d", "g", "b", "e"]

console.log(countElements(input1));
function unique(array) {
    let uniques = []
    // loop through each elem
    for (i=0; i<array.length; i++) {
        let thisElem = array[i]
        console.log("---")
        console.log(thisElem)
        if (uniques.indexOf(thisElem) == -1) {
            uniques.push(thisElem)
        }
    }
    return uniques;
}

let u = unique([1,4,2,4,4,5,3,5]);
console.log(u);
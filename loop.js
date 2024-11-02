function summation(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        console.log(`iter${i}`)
        console.log(`initial sum: ${sum}`)
        console.log(`value of i: ${i}`)
        sum = sum + i;
        console.log(`sum becomes: ${sum}`)
    }

    return sum;
}

result = summation(2)
console.log(`final result: ${result}`)
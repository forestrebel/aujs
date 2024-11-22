function reverse(string) {
    chars = []
    for (i=string.length; i>-1; i--) {
        chars.push(string[i])
    }
    console.log(chars)
    return chars.join('')
}

a = reverse("hello")
console.log(a)
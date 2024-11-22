# notes

"&&" as "Guard clause":
```
function friendName(friend) {
    return friend && friend.name;
}
```
- if `friend` is undefined, we will just return that instead of trying the lookup of .name which would throw error


- useful syntax overview: [destructuring, rest, spread](https://university.alchemy.com/course/js/md/614b9f3e7e426a001019bee0)


```function sum() {
    return this.a + this.b;
}```

If we were to run sum() directly, this would be set from the global scope and likely neither a nor b would be defined.

We could instead, call the function with a specific context:
`const result = sum.call({ a: 2, b: 4 });`

The method call is available on all JavaScript functions. The first argument we pass to call becomes this inside the function.

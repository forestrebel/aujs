# notes

"&&" as "Guard clause":
```
function friendName(friend) {
    return friend && friend.name;
}
```
- if `friend` is undefined, we will just return that instead of trying the lookup of .name which would throw error
const ORDER_TYPES = {
    PIZZA: 0,
    WINGS: 1,
}

const orders = [
    { pizzas: 3, type: ORDER_TYPES.PIZZA },
    { wings: 12, type: ORDER_TYPES.WINGS },
];

function numberOfPizzas(orders) {
    //console.log(orders.length)
    totalCount = 0
    for (i=0; i<orders.length; i++) {
        if (orders[i].type == ORDER_TYPES["PIZZA"]) {
            //console.log(orders[i].type);
            totalCount += orders[i].pizzas;
        }
    }
    return totalCount;
}

c = numberOfPizzas(orders)
console.log(c)
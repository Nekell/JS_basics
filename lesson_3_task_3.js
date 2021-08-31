function countBasketPrice(stocks) {
    let totalPrice = 0;
    for (const stock of stocks) {
        totalPrice += stock.price * stock.amount;
    }
    return totalPrice;
}

const stocks = [
    {
        price: 15,
        amount: 45,
    },
    {
        price: 5,
        amount: 65,
    },
    {
        price: 100,
        amount: 5,
    },
];

console.log(countBasketPrice(stocks));
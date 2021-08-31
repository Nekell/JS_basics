function calculateBasketPrice(basket) {
    let price = 0;
    for (let item of basket.items) {
        price += item.price * item.amount;
    }
    return price;
}

const basket = {
    items: [
        {
            name: 'cup',
            price: 10,
            amount: 6,
        },
        {
            name: 'mug',
            price: 15,
            amount: 6,
        },
        {
            name: 'pot',
            price: 25,
            amount: 1,
        },
    ],
};

console.log(calculateBasketPrice(basket));
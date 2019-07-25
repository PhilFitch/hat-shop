
export function getLineTotal(quantity, price) {
    return Number((quantity * price).toFixed(2));
}

export function findHat(hats, code) {
    for(let i = 0; i < hats.length; i++) {
        const hat = hats[i];

        if(hat.code === code) {
            return hat;
        }
    }
    return null;
}

export function getOrderTotal(hats, cart) {
    let orderTotal = 0;
    for(let i = 0; i < cart.length; i++) {
        const hat = findHat(hats, cart[i].code);
        const lineTotal = getLineTotal(cart[i].quantity, hat.price);
        orderTotal += lineTotal;
    }
    const usd = orderTotal.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return usd;
}
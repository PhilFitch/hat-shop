// getLineTotal(quantity, price)
// findProduct(products[], code)
// getOrderTotal(cart[code, quantity], products[]) using above functions

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
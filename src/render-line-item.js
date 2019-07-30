
export function renderLineItem(cart, hat) {
    const tr = document.createElement('tr');

    const itemCell = document.createElement('td');
    itemCell.textContent = hat.name;
    tr.appendChild(itemCell);

    const qtyCell = document.createElement('td');
    qtyCell.textContent = cart.quantity;
    tr.appendChild(qtyCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = hat.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    const total = (cart.quantity * hat.price);
    totalCell.textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    tr.appendChild(totalCell);

    return tr;    
}
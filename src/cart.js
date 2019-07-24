
import cart from './order.js';
import hats from './hats.js';
import { renderLineItem } from './render-line-item.js';
import { findHat, getOrderTotal } from './register.js';

const tbody = document.querySelector('tbody');

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const hat = findHat(hats, lineItem.code);
    const dom = renderLineItem(lineItem, hat);
    tbody.appendChild(dom);
}

const orderTotal = document.querySelector('#order-total');

const total = getOrderTotal(hats, cart);

orderTotal.textContent = total;

import store from './store.js';
import { renderLineItem } from './render-line-item.js';
import { findHat, getOrderTotal } from './register.js';

const tbody = document.querySelector('tbody');
const cart = store.getCart();
const hats = store.listHats();

for(let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const hat = store.getHat(lineItem.code);
    const dom = renderLineItem(lineItem, hat);
    tbody.appendChild(dom);
}

const orderTotal = document.querySelector('#order-total');

const total = getOrderTotal(hats, cart);

orderTotal.textContent = total;

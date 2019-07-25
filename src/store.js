import hats from '../src/hats.js';
import { findHat } from '../src/register.js';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const gotItem = JSON.parse(json);
        return gotItem;
    },
    listHats() {
        let gotHats = store.get('hats');
        if(!gotHats) {
            store.save('hats', hats);
            gotHats = hats;
        }
        return gotHats;
    },
    getCart() {
        let gotCart = store.get('cart');
        if(!gotCart) {
            gotCart = [];
        }
        return gotCart;
    },
    orderHat(code) {
        let cart = this.getCart();

        let check = findHat(cart, code);

        if(check) {
            check.quantity++;
        } else {
            const order = {
                code: code,
                quantity: 1,
            };
            cart.push(order);
        }
        this.save('cart', cart);
        
        return cart;
    },

};

export default store;
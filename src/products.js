
import renderHats from './render-hats.js';
import store from './store.js';

const hats = store.listHats();
const list = document.getElementById('hats');

for(let i = 0; i < hats.length; i++) {
    const hat = hats[i];
    const dom = renderHats(hat);
    list.appendChild(dom);
}
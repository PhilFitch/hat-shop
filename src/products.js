
import hats from './hats.js';
import renderHats from './render-hats.js';

const list = document.getElementById('hats');

for(let i = 0; i < hats.length; i++) {
    const hat = hats[i];
    const dom = renderHats(hat);
    list.appendChild(dom);
}
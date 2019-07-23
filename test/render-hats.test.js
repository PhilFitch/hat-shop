import renderHats from '../src/render-hats.js';

const test = QUnit.test;

QUnit.module('Render Hats');

test('renders a hat', assert => {

    const fedora = {
        code: 'fedora',
        name: 'Fedora',
        image: 'assets/fedora.jpg',
        description: 'Classic Noir',
        category: 'felt',
        price: 75,
        cost: 40,
    };

    const expected = '<li class="fedora" title="Classic Noir"><h3>Fedora</h3><img src="assets/fedora.jpg"><p class="price">$75<button value="fedora">Add</button></p></li>';

    const dom = renderHats(fedora);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
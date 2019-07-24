//import { getLineTotal } from '../src/register.js';
import { findHat } from '../src/register.js';
import hats from '../src/hats.js';

const test = QUnit.test;

QUnit.module('Register');

test ('finds product', assert => {
    const code = 'fedora';
    const expected = {
        code: 'fedora',
        name: 'Fedora',
        image: 'assets/fedora.jpg',
        description: 'Classic Noir',
        category: 'felt',
        price: 75,
        cost: 40,
    };

    const foundHat = findHat(hats, code);

    assert.deepEqual(foundHat, expected);
});
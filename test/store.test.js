import store from '../src/store.js';
import hats from '../src/hats.js';

const test = QUnit.test;

QUnit.module('Module Name');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});


test('storage is sessionStorage', assert => {
    assert.equal(store.storage === window.sessionStorage, true);
});

test('saves and gets', assert => {
    // arrange
    const car = { model: 'toyota' };
    const key = 'car';
    // act
    store.save(key, car);
    const gotCar = store.get('car');
    // assert
    assert.deepEqual(car, gotCar);
});

test('gets bootstrapped default hats', assert => {
    const gotHats = store.listHats();
    const expected = hats;
    
    assert.deepEqual(gotHats, expected);
});

test('returns empty array for cart', assert => {
    const gotCart = store.getCart();

    assert.deepEqual(gotCart, []);
});

test('orderHat updates cart in storage', assert => {
    //const order = store.orderHat();
    const order = store.orderHat('fedora');
    const expected = [{
        code: 'fedora',
        quantity: 1,
    }];

    assert.deepEqual(order, expected);
});
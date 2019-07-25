import store from '../src/store.js';


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
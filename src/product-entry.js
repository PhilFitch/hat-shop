import store from './store.js';

const form = document.getElementById('new-hat');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const newHat = {
        code: formData.get('code'),
        name: formData.get('name'),
        image: formData.get('image'),
        description: formData.get('description'),
        category: formData.get('category'),
        price: +formData.get('price'),
        cost: +formData.get('cost'),
    };
    store.addHat(newHat);
    alert('Hat Added!');
    form.reset();
});
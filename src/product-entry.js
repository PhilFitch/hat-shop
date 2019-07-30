import store from './store.js';

const form = document.getElementById('new-hat');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(form);
    const image = formData.get('image');
    
    getBase64(image, (base64Url) => {
        
        const newHat = {
            code: formData.get('code'),
            name: formData.get('name'),
            image: base64Url,
            description: formData.get('description'),
            category: formData.get('category'),
            price: +formData.get('price'),
            cost: +formData.get('cost'),
        };
        
        store.addHat(newHat);
        alert('Hat Added!');
        form.reset();

    });
});

function getBase64(file, callback) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        callback(reader.result);
    };
}
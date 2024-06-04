document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const catalogLink = document.getElementById('catalog-link');
    const categoryList = document.getElementById('category-list');
    const content = document.getElementById('content');

    // Запит на отримання даних про категорії з JSON
    function fetchCategories() {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => {
                // Створюємо посилання "Specials"
                const specialsLink = document.createElement('a');
                specialsLink.href = '#';
                specialsLink.textContent = 'Specials';
                specialsLink.addEventListener('click', fetchRandomCategory);
                categoryList.appendChild(specialsLink);
                categoryList.appendChild(document.createElement('br'));

                // Виводимо категорії на сторінку
                data.forEach(category => {
                    const link = document.createElement('a');
                    link.href = '#';
                    link.textContent = category.name;
                    link.addEventListener('click', () => fetchProducts(category.shortname));
                    categoryList.appendChild(link);
                    categoryList.appendChild(document.createElement('br'));
                });
            })
            .catch(error => console.error('Помилка:', error));
    }

    // Запит на отримання даних про продукти з JSON
    function fetchProducts(categoryShortname) {
        fetch(categoryShortname + '.json')
            .then(response => response.json())
            .then(data => {
                // Виводимо вміст категорії на сторінку
                content.innerHTML = ''; // Очищаємо попередній вміст
                const title = document.createElement('h2');
                title.textContent = categoryShortname;
                content.appendChild(title);
                data.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.classList.add('product');
                    const image = document.createElement('img');
                    image.src = 'https://place-hold.it/200x200';
                    const name = document.createElement('h3');
                    name.textContent = product.name;
                    const description = document.createElement('p');
                    description.textContent = product.description;
                    const price = document.createElement('p');
                    price.textContent = 'Ціна: ' + product.price + ' грн';
                    productDiv.appendChild(image);
                    productDiv.appendChild(name);
                    productDiv.appendChild(description);
                    productDiv.appendChild(price);
                    content.appendChild(productDiv);
                });
            })
            .catch(error => console.error('Помилка:', error));
    }

    // Функція для отримання випадкової категорії
    function fetchRandomCategory() {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => {
                const randomIndex = Math.floor(Math.random() * data.length);
                const randomCategory = data[randomIndex];
                fetchProducts(randomCategory.shortname);
            })
            .catch(error => console.error('Помилка:', error));
    }

    // Обробники подій для посилань
    homeLink.addEventListener('click', () => {
        categoryList.innerHTML = '';
        content.innerHTML = '';
        fetchCategories();
    });
    catalogLink.addEventListener('click', () => {
        categoryList.innerHTML = '';
        content.innerHTML = '';
        fetchCategories();
    });

    // Завантажуємо категорії при запуску
    fetchCategories();
});

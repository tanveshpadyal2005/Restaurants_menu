// This code assumes that the menu items are stored in an array called "menuItems"

const menuContainer = document.querySelector('.menu-container');

menuItems.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.name;

    const name = document.createElement('h3');
    name.textContent = item.name;

    const description = document.createElement('p');
    description.textContent = item.description;

    const price = document.createElement('span');
    price.textContent = `$${item.price.toFixed(2)}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';

    menuItem.appendChild(img);
    menuItem.appendChild(name);
    menuItem.appendChild(description);
    menuItem.appendChild(price);
    menuItem.appendChild(addButton);

    menuContainer.appendChild(menuItem);
});

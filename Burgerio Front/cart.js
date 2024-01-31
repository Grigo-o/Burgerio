function openSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '0';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.right = '-300px';
}

let total = 0;

function updateTotal() {
    const totalElement = document.querySelector('.total');
    totalElement.textContent = `Total : $${total.toFixed(2)}`;

    totalElement.style.color = 'orange';
    totalElement.style.fontSize = '20px';
}

function addBurger1() {
    const addList = document.querySelector('.added');
    const item1Name = document.querySelector('#productOne .burgerName').innerHTML;
    const item1Price = document.querySelector('#productOne .price').innerHTML;
    const burgerPriceNumber = parseFloat(item1Price.replace('$', ''));
    total += burgerPriceNumber;
    updateTotal();

    const cartCard = document.createElement('div');
    cartCard.classList.add('cartCard');
    cartCard.innerHTML = `
      <div><img src="Images/product-1.png" alt="Burger Image" class="images"></div>
      <div class="addedName">${item1Name}</div>
      <p class="addedSymbol">-</p>
      <div class="addedPrice">${item1Price}</div>
      <i class="fa-solid fa-circle-minus"></i>
    `;

    const deleteIcon = cartCard.querySelector('.fa-circle-minus');
    deleteIcon.addEventListener('click', function () {
        cartCard.remove();
        const burgerPriceNumber = parseFloat(item1Price.replace('$', ''));
        total -= burgerPriceNumber;
        updateTotal();
    });

    addList.appendChild(cartCard);
}

function addBurger2() {
    const addList = document.querySelector('.added');
    const item2Name = document.querySelector('#productTwo .burgerName').innerHTML;
    const item2Price = document.querySelector('#productTwo .price').innerHTML;
    const burgerPriceNumber = parseFloat(item2Price.replace('$', ''));
    total += burgerPriceNumber;
    updateTotal();

    const cartCard = document.createElement('div');
    cartCard.classList.add('cartCard');
    cartCard.innerHTML = `
      <div><img src="Images/product-2.png" alt="Burger Image" class="images"></div>
      <div class="addedName">${item2Name}</div>
      <p class="addedSymbol">-</p>
      <div class="addedPrice">${item2Price}</div>
      <i class="fa-solid fa-circle-minus"></i>
    `;

    const deleteIcon = cartCard.querySelector('.fa-circle-minus');
    deleteIcon.addEventListener('click', function () {
        cartCard.remove();
        const burgerPriceNumber = parseFloat(item2Price.replace('$', ''));
        total -= burgerPriceNumber;
        updateTotal();
    });

    addList.appendChild(cartCard);
}

function addBurger3() {
    const addList = document.querySelector('.added');
    const item3Name = document.querySelector('#productThree .burgerName').innerHTML;
    const item3Price = document.querySelector('#productThree .price').innerHTML;
    const burgerPriceNumber = parseFloat(item3Price.replace('$', ''));
    total += burgerPriceNumber;
    updateTotal();

    const cartCard = document.createElement('div');
    cartCard.classList.add('cartCard');
    cartCard.innerHTML = `
      <div><img src="Images/product-3.png" alt="Burger Image" class="images"></div>
      <div class="addedName">${item3Name}</div>
      <p class="addedSymbol">-</p>
      <div class="addedPrice">${item3Price}</div>
      <i class="fa-solid fa-circle-minus"></i>
    `;

    const deleteIcon = cartCard.querySelector('.fa-circle-minus');
    deleteIcon.addEventListener('click', function () {
        cartCard.remove();
        const burgerPriceNumber = parseFloat(item3Price.replace('$', ''));
        total -= burgerPriceNumber;
        updateTotal();
    });

    addList.appendChild(cartCard);
}

function addBurger4() {
    const addList = document.querySelector('.added');
    const item4Name = document.querySelector('#productFour .burgerName').innerHTML;
    const item4Price = document.querySelector('#productFour .price').innerHTML;
    const burgerPriceNumber = parseFloat(item4Price.replace('$', ''));
    total += burgerPriceNumber;
    updateTotal();

    const cartCard = document.createElement('div');
    cartCard.classList.add('cartCard');
    cartCard.innerHTML = `
      <div><img src="Images/product-4.png" alt="Burger Image" class="images"></div>
      <div class="addedName">${item4Name}</div>
      <p class="addedSymbol">-</p>
      <div class="addedPrice">${item4Price}</div>
      <i class="fa-solid fa-circle-minus"></i>
    `;

    const deleteIcon = cartCard.querySelector('.fa-circle-minus');
    deleteIcon.addEventListener('click', function () {
        cartCard.remove();
        const burgerPriceNumber = parseFloat(item4Price.replace('$', ''));
        total -= burgerPriceNumber;
        updateTotal();
    });

    addList.appendChild(cartCard);
}

function addBurger5() {
    const addList = document.querySelector('.added');
    const item5Name = document.querySelector('#productFive .burgerName').innerHTML;
    const item5Price = document.querySelector('#productFive .price').innerHTML;
    const burgerPriceNumber = parseFloat(item5Price.replace('$', ''));
    total += burgerPriceNumber;
    updateTotal();

    const cartCard = document.createElement('div');
    cartCard.classList.add('cartCard');
    cartCard.innerHTML = `
      <div><img src="Images/product-5.png" alt="Burger Image" class="images"></div>
      <div class="addedName">${item5Name}</div>
      <p class="addedSymbol">-</p>
      <div class="addedPrice">${item5Price}</div>
      <i class="fa-solid fa-circle-minus"></i>
    `;

    const deleteIcon = cartCard.querySelector('.fa-circle-minus');
    deleteIcon.addEventListener('click', function () {
        cartCard.remove();
        const burgerPriceNumber = parseFloat(item5Price.replace('$', ''));
        total -= burgerPriceNumber;
        updateTotal();
    });

    addList.appendChild(cartCard);
}

function addBurger6() {
    const addList = document.querySelector('.added');
    const item6Name = document.querySelector('#productSix .burgerName').innerHTML;
    const item6Price = document.querySelector('#productSix .price').innerHTML;
    const burgerPriceNumber = parseFloat(item6Price.replace('$', ''));
    total += burgerPriceNumber;
    updateTotal();

    const cartCard = document.createElement('div');
    cartCard.classList.add('cartCard');
    cartCard.innerHTML = `
      <div><img src="Images/product-6.png" alt="Burger Image" class="images"></div>
      <div class="addedName">${item6Name}</div>
      <p class="addedSymbol">-</p>
      <div class="addedPrice">${item6Price}</div>
      <i class="fa-solid fa-circle-minus"></i>
    `;

    const deleteIcon = cartCard.querySelector('.fa-circle-minus');
    deleteIcon.addEventListener('click', function () {
        cartCard.remove();
        const burgerPriceNumber = parseFloat(item6Price.replace('$', ''));
        total -= burgerPriceNumber;
        updateTotal();
    });

    addList.appendChild(cartCard);
}

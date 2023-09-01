const userboxTemplate = document.querySelector("[data-user-boxs-template]");
  const userboxContainer = document.querySelector("[data-user-boxs-container]");
  



  const boxElements = []; // Array to hold cloned card elements
  // const productListContainer = document.getElementById('product-list');
 
  document.addEventListener('DOMContentLoaded', function () {
    // Get the category from the URL
    const categoryParam = (new URLSearchParams(window.location.search)).get("category");

    // Check if categoryParam is empty
    if (!categoryParam) {
        // If categoryParam is empty, show all products
        displayProducts(products);
    } else {
        // Split the category parameter into words
        const categoryWords = categoryParam.toLowerCase().split(" ");

        // Filter products based on whether any word in the category matches
        const filteredProducts = products.filter(product => {
            const productCategory = product.category.toLowerCase();
            return categoryWords.some(word => productCategory.includes(word));
        });

        // Display the filtered products
        displayProducts(filteredProducts);
    }
});

function displayProducts(products) {
    const productList = document.querySelectorAll('.product-list');

    // Clear the existing product lists
    productList.forEach(list => {
        list.innerHTML = '';
    });

    // Create and append product elements to each list
    productList.forEach(list => {
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            const productName = document.createElement('h2');
            productName.textContent = product.name;

            const productLink = document.createElement('a');
            productLink.href = product.link;
      
            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('add-to-cart');
            addToCartButton.textContent = 'Add to Cart';
            addToCartButton.setAttribute('data-name', product.name);
            addToCartButton.setAttribute('data-price', product.price);

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name; // Set an alt attribute for accessibility

            productDiv.appendChild(productImage);
            productDiv.appendChild(productLink);
        
            productLink.appendChild(productName);
            productDiv.appendChild(productPrice);
            productDiv.appendChild(addToCartButton);

            list.appendChild(productDiv);

            addToCartButton.addEventListener('click', () => {
                addToCart(product);
            });
        });
    });
}

function addToCart(product) {
    const productName = product.name;
    const productPrice = parseFloat(product.price);

    // Get cart items from local storage
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Check if the product is already in the cart
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({
            name: productName,
            price: productPrice,
            quantity: 1
        });
    }

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
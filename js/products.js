const userboxTemplate = document.querySelector("[data-user-boxs-template]");
  const userboxContainer = document.querySelector("[data-user-boxs-container]");
  



  const boxElements = []; // Array to hold cloned card elements
  // const productListContainer = document.getElementById('product-list');


  addEventListener('load', () => 
 {
    // products.forEach(product => {
    //   console.log("Loaded");
    //     const box = userboxTemplate.content.cloneNode(true).children[0];
    //     const productheader = box.querySelector("[productdata-header]");
    //     const productsearch_image = box.querySelector("[productdata-image]");
    //     const productbody = box.querySelector("[productdata-body]");
    //     const productprice = box.querySelector("[productdata-price]");
    //     let productquantity = box.querySelector("[productdata-quantity]");
    //     productheader.textContent = product.name;
    //     productsearch_image.src = product.image;
    //     productbody.textContent = product.category;
    //     productprice.textContent = product.price + " kr";
    //     userboxContainer.appendChild(box);
    //     productquantity.numb = product.quantity;
    //     boxElements.push({ name: product.name, category: product.category, price: product.price,
    //        quantity: product.quantity, element: box });
    // }); 
    const productListContainer = document.getElementById('product-list');

    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
    
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
    
      const productName = document.createElement('h2');
      productName.textContent = product.name;
    
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price}`;
    
      const addToCartButton = document.createElement('button');
      addToCartButton.classList.add('add-to-cart');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.setAttribute('data-name', product.name);
      addToCartButton.setAttribute('data-price', product.price);
    
      productDiv.appendChild(productImage);
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(addToCartButton);
    
      productListContainer.appendChild(productDiv);
    
      addToCartButton.addEventListener('click', () => {
        addToCart(product);
      });
      console.log("Bu bää haha");
    });
    

  }
  )
  
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


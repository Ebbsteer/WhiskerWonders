const titles =
{
  dog: "Dog accessories are essential items that can enhance the comfort, safety, and style of your furry friend.",
  cat: "Cat accessories are essential items that can enhance the comfort, well-being, and entertainment of your feline companion",
  hamster: "When selecting accessories for your gnagare pet, it's essential to consider their species-specific needs, cage size, and preferences.",
  treats: "Give your beloved pet the nutrition they deserve with our premium pet food, crafted for their health and happiness.",
  toys: "Elevate playtime for your furry friend with our exciting selection of pet toys – the perfect way to keep them entertained and active",
};
//create const for each category that adds text





document.addEventListener('DOMContentLoaded', function () {
  
  const categoryParam = (new URLSearchParams(window.location.search)).get("category");// Get the category from the URL
  const titleName = document.getElementById('title1');      
  const titleText = document.getElementById('titleText');    // two const for the name and undertext of productPage

  if (categoryParam) {
    const imageURL = `../img/welcome${categoryParam}.jpg`;
    document.getElementById('bigImage').src = (imageURL);
    titleName.textContent = categoryParam; 

    const categoryTitle = titles[categoryParam] || "Unknown Category";
    titleText.textContent = categoryTitle;                              // change img,title and text depending on category
  }
  else {
    document.getElementById('bigImage').src = "../img/welcomeAll.jpg"
    titleName.textContent = "All Products";
    titleText.textContent = "have a look at our stock of items with varitey from dogs toys to hamster treats :)";
  //if no category then go to default
  }





  if (!categoryParam) { // Check if categoryParam is empty
    
    
    displayProducts(products); // If categoryParam is empty, show all products
  } else {
    
    const categoryWords = categoryParam.toLowerCase().split(" "); // Split the category parameter into words

    
    const filteredProducts = products.filter(product => {
      const productCategory = product.category.toLowerCase();
      return categoryWords.some(word => productCategory.includes(word));  // Filter products based on whether any word in the category matches
    });

    
    displayProducts(filteredProducts);  // Display the filtered products
  }
});


let productNumb = 0;
const outputElement = document.getElementById("prodnumber");    // to count how many products on page



function displayProducts(products) {
  const productList = document.querySelector('.product-list');

  
  productList.innerHTML = '';  // Clear the existing product list

  let row = document.createElement('div');
  row.className = 'row justify-content-center';   // Create a row for the product cards

  products.forEach(product => {
    productNumb++;       // add one per product

    
    const productCol = document.createElement('div');   // Create a column for each product card
    productCol.className = 'col-lg-3 col-md-4 col-sm-6 col-8 mb-3 ';  // Adjust this for responsiveness

    const productCard = document.createElement('div');
    productCard.className = 'card card-products';
    productCard.style = 'height: 100%';                            // make the card 


    const productImage = document.createElement('img');
    productImage.className = 'card-img card-products-image';
    productImage.src = product.image;
    productImage.alt = product.name;                       // create img and add class

    const productLink = document.createElement('a');
    productLink.href = product.link;
    productLink.className = 'card-link';                     // create link

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';                   //mave div

    const productName = document.createElement('h5');
    productName.className = 'card-title';
    productName.textContent = product.name;                // name of prducts

    const productPrice = document.createElement('p');
    productPrice.className = 'card-text';
    productPrice.textContent = `${product.price} kr`;           // make product price from list the price text

    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'btn btn-primary';
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.setAttribute('data-name', product.name);
    addToCartButton.setAttribute('data-price', product.price);        // create button to add to cart

    cardBody.appendChild(productLink);
    cardBody.appendChild(productName);
    cardBody.appendChild(productPrice);    
    cardBody.appendChild(addToCartButton);  // connect items to cardbody to view

    productCard.appendChild(productImage);    // image to card

    productCard.appendChild(cardBody);  // cardbody to card product

    productLink.appendChild(productImage);
    productLink.appendChild(productName);      // make links
    productCol.appendChild(productCard);      

    row.appendChild(productCol);

    addToCartButton.addEventListener('click', () => {
      addToCart(product); 
    });                                        // when button pressed then make this function
  });


  productList.appendChild(row);    // connect to row




  outputElement.textContent = productNumb + " / 12"; // write out product number
}



function addToCart(product) {
  const productName = product.name;
  const productPrice = parseFloat(product.price);

 
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];  // Get cart items from local storage


  const existingItem = cartItems.find(item => item.name === productName);   // Check if the product is already in the cart

  if (existingItem) {
    existingItem.quantity++;   // just add more to quantity and dont make new id
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      link: product.link,
      image: product.image,
      category: product.category,
      price: product.price,
      quantity: 1,
      description: product.description,  // make new card in cart to show bought item
    });
  }

  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  const cartCounter = document.getElementById("cart-number");
  cartCounterNumber = 0;
  cartItems.forEach(item => {
    cartCounterNumber += item.quantity;       // Update local storage
  });
  cartCounter.textContent = cartCounterNumber;         
}
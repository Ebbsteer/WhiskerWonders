const titles =
{  dog: "Dog accessories are essential items that can enhance the comfort, safety, and style of your furry friend.",
cat: "Cat accessories are essential items that can enhance the comfort, well-being, and entertainment of your feline companion",
hamster:"When selecting accessories for your gnagare pet, it's essential to consider their species-specific needs, cage size, and preferences.",
treats: "Give your beloved pet the nutrition they deserve with our premium pet food, crafted for their health and happiness.",
toys: "Elevate playtime for your furry friend with our exciting selection of pet toys – the perfect way to keep them entertained and active",
}
;




const userboxTemplate = document.querySelector("[data-user-boxs-template]");
  const userboxContainer = document.querySelector("[data-user-boxs-container]");
  



  const boxElements = []; // Array to hold cloned card elements
  // const productListContainer = document.getElementById('product-list');
 
  document.addEventListener('DOMContentLoaded', function () {
    // Get the category from the URL
    const categoryParam = (new URLSearchParams(window.location.search)).get("category");
    const titleName = document.getElementById('title1') ;
    const titleText = document.getElementById('titleText') ;
    
    if(categoryParam){
    const imageURL = `../img/welcome${categoryParam}.jpg`;
    document.getElementById('bigImage').src=(imageURL);
    titleName.textContent = categoryParam;

    const categoryTitle = titles[categoryParam] || "Unknown Category";
    titleText.textContent = categoryTitle;
    }
    else{
      document.getElementById('bigImage').src="../img/welcomeAll.jpg"
      titleName.textContent = "All Products";
      titleText.textContent = "have a look at our stock of items with varitey from dogs toys to hamster treats :)";
    }

 
   


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
let productNumb = 0;
const outputElement = document.getElementById("prodnumber");



function displayProducts(products) {
  const productList = document.querySelector('.product-list');

  // Clear the existing product list
  productList.innerHTML = '';

  // Create a row for the product cards
  let row = document.createElement('div');
  row.className = 'row justify-content-center';

  products.forEach(product => {
      productNumb++;

      // Create a column for each product card
      const productCol = document.createElement('div');
      productCol.className = 'col-lg-3 col-md-4 col-sm-6 col-8 mb-3 ';  // Adjust this for responsiveness
    
      const productCard = document.createElement('div');
      productCard.className = 'card';
      productCard.style = 'height: 100%';
      const productImage = document.createElement('img');
      productImage.className = 'card-img-top';
      productImage.src = product.image;
      productImage.alt = product.name;

      const productLink = document.createElement('a');
        productLink.href = product.link;
        productLink.className = 'card-link';

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const productName = document.createElement('h5');
      productName.className = 'card-title';
      productName.textContent = product.name;

      const productPrice = document.createElement('p');
      productPrice.className = 'card-text';
      productPrice.textContent = `${product.price} kr`;

      const addToCartButton = document.createElement('button');
      addToCartButton.className = 'btn btn-primary';
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.setAttribute('data-name', product.name);
      addToCartButton.setAttribute('data-price', product.price);

      cardBody.appendChild(productLink);
      cardBody.appendChild(productName);
      cardBody.appendChild(productPrice);
      
      cardBody.appendChild(addToCartButton);

      productCard.appendChild(productImage);
      
      productCard.appendChild(cardBody);
     
      productLink.appendChild(productImage);
      productLink.appendChild(productName);
      productCol.appendChild(productCard);

      row.appendChild(productCol);

      addToCartButton.addEventListener('click', () => {
          addToCart(product);
      });
  });


  productList.appendChild(row);


// Rest of your code...

    outputElement.textContent = productNumb + " / 12"  ;
}


console.log(productNumb);


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
          id: product.id,
          name: product.name,
          link: product.link,
          image: product.image,
          category: product.category,
          price: product.price,
          quantity: 1,
          description: product.description,
        });
    }

    // Update local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    const cartCounter = document.getElementById("cart-number");
  cartCounterNumber = 0;
  cartItems.forEach(item => {
      cartCounterNumber += item.quantity; 
  });
  cartCounter.textContent = cartCounterNumber;
}
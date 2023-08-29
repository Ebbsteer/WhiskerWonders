

let products = [{

  name: "Bounce & Fetch Buddy",
  image: "../img/products/B&FB.avif",
  category: "Dog Toys",
  price: "149.95",
  quantity: 0
  },{
  name: "PuzzlePaws Interactive Toy",
  image: "../img/products/PIT.avif",
  category: "Dog Toys",
  price: "199.90",
  quantity: 0
  },{
  name: "TastyTidbits Training Treats",
  image: "img/puppy.jpg",
  category: "Dog Treats",
  price: "84.99",
  quantity: 0
  },{
  name: "NutriChomp Dental Chews",
  image: "img/puppy.jpg",
  category: "Dog Treats",
  price: "119.90",
  quantity: 0
  },{
  name: "FeatherFrenzy Interactive Wand",
  image: "img/puppy.jpg",
  category: "Cat Toys",
  price: "129.95",
  quantity: 0
  },{
  name: "Purrfect Pouncing Plaything",
  image: "img/puppy.jpg",
  category: "Cat Toys",
  price: "99.99",
  quantity: 0
  },{
  name: "WhiskerWholesome Cat Treats",
  image: "img/puppy.jpg",
  category: "Cat Treats",
  price: "64.90",
  quantity: 0
  },{
  name: "NutriMews Crunchy Dental Bites",
  image: "img/puppy.jpg",
  category: "Cat Treats",
  price: "79.99",
  quantity: 0
  },{
  name: "Rolling Retreat Hamster Ball",
  image: "img/puppy.jpg",
  category: "Hamster Toys",
  price: "69.90",
  quantity: 0
  },{
  name: "MiniMaze Adventure Playset",
  image: "img/puppy.jpg",
  category: "Hamster Toys",
  price: "84.90",
  quantity: 0
  },{
  name: "TinyTreats Hamster Delights",
  image: "img/puppy.jpg",
  category: "Hamster Treats",
  price: "49.99",
  quantity: 0
  },{
  name: "NutriNest Hamster Food Mix",
  image: "img/puppy.jpg",
  category: "Hamster Treats",
  price: "79.90",
  quantity: 0
  }
];                                              // Product list
localStorage.setItem("products", JSON.stringify(products));
var product = products[131];
var id = "0";
  const storedQuantities = JSON.parse(localStorage.getItem("quantities")); // quantity localstorage
  if (storedQuantities) {
    products.forEach((product, index) => {
      product.quantity = storedQuantities[index];
    });                                                  // 
  }                                          
  
  
  window.onload = (event) => {
    products.forEach((product, index) => {
      const buttonId = index + 1;
      const buttonElement = document.getElementById(buttonId.toString());
  
      if (product.quantity > 0) 
      {
      buttonElement.innerHTML = `${product.name} (Price: ${product.price} kr) - Quantity: ${product.quantity} st`;                         
      } else 
      {
      buttonElement.innerHTML = "";
      const showDivs = document.getElementsByClassName("show");
      for (let i = 0; i < showDivs.length; i++) 
      {
      if (showDivs[i].id === `product-${buttonId}`) {
      const divButtons = showDivs[i].getElementsByTagName("button");
      for (let j = 0; j < divButtons.length; j++) {
          divButtons[j].style.visibility = 'hidden';                                                                           // visar producterna endast om det finns mer än 0 quantity
        }
        break; 
      }
    }
  
    }
  
    });
  
    check();
  };
  
  function buy(buttonId) {

   
    id = buttonId;
    const productIndex = parseInt(buttonId) - 1;
  
    product = products[productIndex];
  
    product.quantity += 1;
    
    const updatedQuantities = products.map(product => product.quantity);
    localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
    
  
    addLS();
  }
  
  function addLS() {
  document.getElementById(id).innerHTML = `${product.name} (Price: ${product.price} kr) - Quantity: ${product.quantity} st`;
  check();                                  
  }
                                       //writes product name, price and quantity with right id 
  
  function clearQuantity(buttonId) {  // clear all
    localStorage.removeItem("quantities");
    products.forEach(product => {
    product.quantity = 0;
    });                                // clear quantity array
  
  
    for (let i = 1; i <= products.length; i++)
    {
    document.getElementById(i.toString()).innerHTML = "";
    }
    document.getElementById("sum").innerHTML = "Total: 0";  // clear all "special" text in korg
   
    const showDivs = document.getElementsByClassName("show");
    for (let i = 0; i < showDivs.length; i++) {
    const divButtons = showDivs[i].getElementsByTagName("button");
    for (let j = 0; j < divButtons.length; j++) {
    divButtons[j].style.visibility = 'hidden';              //hides buttons for removed product
      }
    }
   
    
  }
  
  
   
  
  function Trash(buttonId) {         // clear only specifik product
  
    id = buttonId;
    const productIndex = parseInt(buttonId) - 1;
    product = products[productIndex];                  // retrieve specific product from list
  
    
      product.quantity = 0;      //reset quantity
  
      const updatedQuantities = products.map(product => product.quantity);
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities)); 
   
    document.getElementById(id).innerHTML = "";
    document.getElementById("sum").innerHTML = "Total: 0";  // clear text
  
  
  
    const showDivs = document.getElementsByClassName("show");
    for (let i = 0; i < showDivs.length; i++) {
       if (showDivs[i].id === `product-${buttonId}`) {
        const divButtons = showDivs[i].getElementsByTagName("button");
        for (let j = 0; j < divButtons.length; j++) {
          divButtons[j].style.visibility = 'hidden';                     // hide product button
        }
        break; 
      }
    }
  
    check();
    
  }
  
  
  
  
  function minusQ(buttonId) {                   //minus button
    id = buttonId;
    const productIndex = parseInt(buttonId) - 1;
    product = products[productIndex];                 // identify specific product
  
    if (product.quantity > 0) {
      product.quantity -= 1;                           // onky works if quantity is more than 0
  
      const updatedQuantities = products.map(product => product.quantity);
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));   // update quanitty localstorage
  
      addLS();
  
      if (product.quantity == 0) {
       Trash(buttonId);                // delete product if its less than 0
      }
  
    
    }
  }
  
  
  function plusQ(buttonId) {                     //add button
    id = buttonId;
    const productIndex = parseInt(buttonId) - 1;
    product = products[productIndex];
  
      product.quantity += 1;
  
      const updatedQuantities = products.map(product => product.quantity);
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));  // update quantity localstorage
  
      addLS();

    }
  
  
  
  function check() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price * products[i].quantity;
    }
    document.getElementById("sum").innerHTML = "Total: " + total;    // count price total and update total
  }
  
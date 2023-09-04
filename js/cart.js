




// localStorage.setItem("products", JSON.stringify(products));

// var id = "0";
//   const storedQuantities = JSON.parse(localStorage.getItem("quantities")); // quantity localstorage
//   if (storedQuantities) {
//     products.forEach((product, index) => {
//       product.quantity = storedQuantities[index];
//     });                                                  // 
//   }                                          
  
  
//   // window.onload = (event) => {
//   //   products.forEach((product, index) => {
//   //     const buttonId = index + 1;
//   //     const buttonElement = document.getElementById(buttonId.toString());
  
//   //     if (product.quantity > 0) 
//   //     {
//   //     buttonElement.innerHTML = `${product.name} (Price: ${product.price} kr) - Quantity: ${product.quantity} st`;                         
//   //     } else 
//   //     {
//   //     buttonElement.innerHTML = "";
//   //     const showDivs = document.getElementsByClassName("show");
//   //     for (let i = 0; i < showDivs.length; i++) 
//   //     {
//   //     if (showDivs[i].id === `product-${buttonId}`) {
//   //     const divButtons = showDivs[i].getElementsByTagName("button");
//   //     for (let j = 0; j < divButtons.length; j++) {
//   //         divButtons[j].style.visibility = 'hidden';                                                                           // visar producterna endast om det finns mer än 0 quantity
//   //       }
//   //       break; 
//   //     }
//   //   }
  
//   //   }
  
//   //   });
  
//   //   check();
//   // };
 
  
//   function addLS() {
//   document.getElementById(id).innerHTML = `${product.name} (Price: ${product.price} kr) - Quantity: ${product.quantity} st`;
//   check();                                  
//   }
//                                        //writes product name, price and quantity with right id 
  
//   function clearQuantity(buttonId) {  // clear all
//     localStorage.removeItem("quantities");
//     products.forEach(product => {
//     product.quantity = 0;
//     });                                // clear quantity array
  
  
//     for (let i = 1; i <= products.length; i++)
//     {
//     document.getElementById(i.toString()).innerHTML = "";
//     }
//     document.getElementById("sum").innerHTML = "Total: 0";  // clear all "special" text in korg
   
//     const showDivs = document.getElementsByClassName("show");
//     for (let i = 0; i < showDivs.length; i++) {
//     const divButtons = showDivs[i].getElementsByTagName("button");
//     for (let j = 0; j < divButtons.length; j++) {
//     divButtons[j].style.visibility = 'hidden';              //hides buttons for removed product
//       }
//     }
   
    
//   }
  
  
   
  
//   function Trash(buttonId) {         // clear only specifik product
  
//     id = buttonId;
//     const productIndex = parseInt(buttonId) - 1;
//     product = products[productIndex];                  // retrieve specific product from list
  
    
//       product.quantity = 0;      //reset quantity
  
//       const updatedQuantities = products.map(product => product.quantity);
//       localStorage.setItem("quantities", JSON.stringify(updatedQuantities)); 
   
//     document.getElementById(id).innerHTML = "";
//     document.getElementById("sum").innerHTML = "Total: 0";  // clear text
  
  
  
//     const showDivs = document.getElementsByClassName("show");
//     for (let i = 0; i < showDivs.length; i++) {
//        if (showDivs[i].id === `product-${buttonId}`) {
//         const divButtons = showDivs[i].getElementsByTagName("button");
//         for (let j = 0; j < divButtons.length; j++) {
//           divButtons[j].style.visibility = 'hidden';                     // hide product button
//         }
//         break; 
//       }
//     }
  
//     check();
    
//   }
  
  
  
  
//   function minusQ(buttonId) {                   //minus button
//     id = buttonId;
//     const productIndex = parseInt(buttonId) - 1;
//     product = products[productIndex];                 // identify specific product
  
//     if (product.quantity > 0) {
//       product.quantity -= 1;                           // onky works if quantity is more than 0
  
//       const updatedQuantities = products.map(product => product.quantity);
//       localStorage.setItem("quantities", JSON.stringify(updatedQuantities));   // update quanitty localstorage
  
//       addLS();
  
//       if (product.quantity == 0) {
//        Trash(buttonId);                // delete product if its less than 0
//       }
  
    
//     }
//   }
  
  
  // function plusQ(buttonId) {                     //add button
  //   id = buttonId;
  //   const productIndex = parseInt(buttonId) - 1;
  //   product = products[productIndex];
  
  //     product.quantity += 1;
  
  //     const updatedQuantities = products.map(product => product.quantity);
  //     localStorage.setItem("quantities", JSON.stringify(updatedQuantities));  // update quantity localstorage
  
  //     addLS();

  //   }
  
  
  
  // function check() {
  //   let total = 0;
  //   for (let i = 0; i < products.length; i++) {
  //     total += products[i].price * products[i].quantity;
  //   }
  //   document.getElementById("sum").innerHTML = "Total: " + total;    // count price total and update total
  // }
  
const cartItemsContainer = document.getElementById('cart-items');
const productTemplate = document.querySelector("[data-product-template]");
const productContainer = document.querySelector("[data-product-container]");
let cartCounterNumber = 0;
// const productImage = document.querySelector("[data-product-image]");

// Get cart items from local storage
// const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Display cart items with quantities greater than 0
addEventListener("load", (event) => {
  updateCartCounter();
  const productManyItems = document.querySelector("[data-product-manyItems]");
  productManyItems.textContent = cartCounterNumber + " items";
  const productSummaryCount = document.querySelector("[data-product-summary-count]");
  productSummaryCount.textContent = "Items: " + cartCounterNumber;
  const productSummaryPrice = document.querySelector("[data-product-summary-price]");
  const productSummaryTotal = document.querySelector("[data-product-summary-total]");
  let priceSummary = 0;
    
  cartItems.forEach(item => {
  if (item.quantity > 0) {
    // const cartItemDiv = document.createElement('div');
    // cartItemDiv.classList.add('cart-item');
    // cartItemDiv.textContent = item.name;
    // cartItemsContainer.appendChild(cartItemDiv);
    const productList = productTemplate.content.cloneNode(true).children[0];
    const productBreak = document.createElement("hr");

    productBreak.classList.add("my-4");
    
    const productImage = productList.querySelector("[data-product-image]");
    productImage.src = item.image;
    const productCategory = productList.querySelector("[data-product-category]");
    productCategory.textContent = item.category;
    const productName = productList.querySelector("[data-product-name]");
    productName.textContent = item.name;
    const productQuantity = productList.querySelector("[data-product-quantity]");
    productQuantity.value = item.quantity;
    const productPrice = productList.querySelector("[data-product-price]");
    productPrice.textContent = item.price + " kr";
    
    productQuantity.addEventListener("change", () => {
        item.quantity = productQuantity.value
        updateCartCounter();
        updateLocalStorage();
    });

    productContainer.append(productList);
    productContainer.append(productBreak);
    priceSummary = (priceSummary += (item.price * item.quantity));
  }
  console.log("Loaded");
})
  productSummaryPrice.textContent = priceSummary + " kr";
  let priceTotal = (parseFloat(priceSummary) + 50);
  productSummaryTotal.textContent = priceTotal + " kr";
});

  //   const itemName = document.createElement('h3');
  //   itemName.textContent = item.name;

  //   const itemPrice = document.createElement('p');
  //   itemPrice.textContent = `$${item.price.toFixed(2)}`;

  //   const quantityLabel = document.createElement('label');
  //   quantityLabel.textContent = 'Quantity:';

  //   const quantityInput = document.createElement('input');
  //   quantityInput.type = 'number';
  //   quantityInput.value = item.quantity;
  //   quantityInput.min = 1;

  //   quantityInput.addEventListener('input', () => {
  //     item.quantity = parseInt(quantityInput.value);
  //     updateLocalStorage();
  //   });

  //   const removeButton = document.createElement('button');
  //   removeButton.textContent = 'Remove';
  //   removeButton.addEventListener('click', () => {
  //     item.quantity = 0; // Set quantity to 0 to remove from cart
  //     updateLocalStorage();
  //     cartItemsContainer.removeChild(cartItemDiv);
  //   });

  //   cartItemDiv.appendChild(itemName);
  //   cartItemDiv.appendChild(itemPrice);
  //   quantityLabel.appendChild(quantityInput);
  //   cartItemDiv.appendChild(quantityLabel);
  //   cartItemDiv.appendChild(removeButton);

  //   cartItemsContainer.appendChild(cartItemDiv);
  // }

function updateLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartCounter();
}

function updateCartCounter() {
  const cartCounter = document.getElementById("cart-number");
  cartCounterNumber = 0;
  cartItems.forEach(item => {
      cartCounterNumber += item.quantity; 
  });
  cartCounter.textContent = cartCounterNumber;
}
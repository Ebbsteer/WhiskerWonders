




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

// Get cart items from local storage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Display cart items with quantities greater than 0
addEventListener("load", (event) => {
cartItems.forEach(item => {
  if (item.quantity > 0) {
    const cartItemDiv = document.createElement('div');
    cartItemDiv.classList.add('cart-item');
    cartItemDiv.textContent = item.name;
    cartItemsContainer.appendChild(cartItemDiv);
  }
  console.log("Loaded");
})});
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
}

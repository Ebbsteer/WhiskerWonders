
const productName = document.getElementById("thisProductName");
const productImage = document.getElementById("thisProductImage");
const productPrice = document.getElementById("thisProductPrice");
const productQuantity = document.getElementById("thisProductQuantity");
const productDescription = document.getElementById("thisProductDescription");
const productAdd = document.getElementById("thisProductAdd");                           // adding const for the product

const param = (new URLSearchParams(window.location.search)).get('id'); // Assuming 'id' is the query parameter name.   
let productAddVar = 0;

addEventListener('load', () => {

  products.forEach(product => {
    if (param == product.id) {

      productName.textContent = product.name;
      productImage.src = product.image;
      productPrice.textContent = product.price + " kr";
      productDescription.textContent = product.description;
      productAdd.addEventListener("click", () => {
        addToMultipleCart(product);                                             // show matching list product items with id
      });
      productQuantity.addEventListener("change", () => {
        productAddVar = productQuantity.value;                               // update product quantity
      });
    }

    function addToMultipleCart(product) {
      productAddVar = productQuantity.value;
      console.log(product.quantity);
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];                     // add quantity to local storage from product

      // Check if the product is already in the cart
      const existingItem = cartItems.find((item) => item.name === product.name);

      if (existingItem) {
        existingItem.quantity = parseInt(existingItem.quantity) + parseInt(productAddVar);   // add more to same item dont make new one
      } else {
        cartItems.push({
          id: product.id,
          name: product.name,
          link: product.link,
          image: product.image,
          category: product.category,
          price: product.price,
          quantity: 1,
          description: product.description,                    // create new item in cart
        });
      }

      // Update local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  });
});

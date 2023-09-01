
const productName = document.getElementById("thisProductName");
const productImage = document.getElementById("thisProductImage");
const productPrice = document.getElementById("thisProductPrice");
const productQuantity = document.getElementById("thisProductQuantity");
const productDescription = document.getElementById("thisProductDescription");
const productAdd = document.getElementById("thisProductAdd");  

const param = (new URLSearchParams(window.location.search)).get('id'); // Assuming 'id' is the query parameter name.
let productAddVar = 0;    

addEventListener('load', () => {

    products.forEach(product => {
        if (param == product.id) {
            // Assign values to your HTML elements here
            productName.textContent = product.name;
            productImage.src = product.image;
            productPrice.textContent = product.price + " kr";
            productDescription.textContent = product.description;
            productAdd.addEventListener("click", () => {
              addToMultipleCart(product);
            });
            productQuantity.addEventListener("change", () => {
                productAddVar = productQuantity.value;
            });
        }

        function addToMultipleCart(product) {
            productAddVar = productQuantity.value;
            console.log(product.quantity);
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

            // Check if the product is already in the cart
            const existingItem = cartItems.find((item) => item.name === product.name);

            if (existingItem) {
              existingItem.quantity = parseInt(existingItem.quantity) + parseInt(productAddVar);
            } else {
              cartItems.push({
                name: product.name,
                price: product.price,
                quantity: 1,
              });
            }

            // Update local storage
            localStorage.setItem("cartItems", JSON.stringify(cartItems));                   
        }
    });
});

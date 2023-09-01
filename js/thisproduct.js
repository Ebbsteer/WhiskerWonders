
const productName = document.getElementById("thisProductName");
const productImage = document.getElementById("thisProductImage");
console.log(productImage);
const productPrice = document.getElementById("thisProductPrice");
const productQuantity = document.getElementById("thisProductQuantity");    

const param = (new URLSearchParams(window.location.search)).get('id'); // Assuming 'id' is the query parameter name.
    
addEventListener('load', () => {

    products.forEach(product => {
        if (param == product.id) {
            console.log("Godkänd");
            // Access the properties of the matching product
            console.log(product.name); // This will print the name of the matching product
            console.log(productImage); // This will print the image of the matching product
            console.log(product.price); // This will print the image of the matching product
            // Assign values to your HTML elements here
            productName.textContent = product.name;
            productImage.src = product.image;
            productPrice.textContent = product.price + " kr";
            productQuantity.textContent = product.quantity;
        }
    });
});

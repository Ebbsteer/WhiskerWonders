addEventListener('load', () => {
    const productName = document.getElementById("thisProductName");
    const productImage = document.getElementById("thisProductImage");
    const productPrice = document.getElementById("thisProductPrice");
    const productQuantity = document.getElementById("thisProductQuantity");

    const param = (new URLSearchParams(window.location.search)).get('id'); // Assuming 'category' is the query parameter name.
    console.log(param);
    console.log(products.id);

    if (param == products.id) {
        console.log("Godkänd");
    }
 });
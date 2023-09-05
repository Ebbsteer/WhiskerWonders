//------------------Adding all viable global variabels--------------------
const cartItemsContainer = document.getElementById("cart-items");
const productTemplate = document.querySelector("[data-product-template]");
const productContainer = document.querySelector("[data-product-container]");
const promoCodeInput = document.querySelector("[data-promoCode]");
let cartCounterNumber = 0;

//------------------Adding all paths to find the elements in HTML and start creating the cart--------------------
addEventListener("load", (event) => {
  updateCartCounter();
  const productManyItems = document.querySelector("[data-product-manyItems]");
  productManyItems.textContent = cartCounterNumber + " items";
  const productSummaryCount = document.querySelector(
    "[data-product-summary-count]"
  );
  productSummaryCount.textContent = "Items: " + cartCounterNumber;
  const productSummaryPrice = document.querySelector(
    "[data-product-summary-price]"
  );
  const productSummaryTotal = document.querySelector(
    "[data-product-summary-total]"
  );
  let priceSummary = 0;

  //------------------Adding all items from localstorage and creating elements to put them in--------------------
  cartItems.forEach((item) => {
    if (item.quantity > 0) {
      const productList = productTemplate.content.cloneNode(true).children[0];
      const productBreak = document.createElement("hr");

      productBreak.classList.add("my-4");

      const productImage = productList.querySelector("[data-product-image]");
      productImage.src = item.image;
      const productCategory = productList.querySelector(
        "[data-product-category]"
      );
      productCategory.textContent = item.category;
      const productName = productList.querySelector("[data-product-name]");
      productName.textContent = item.name;
      const productQuantity = productList.querySelector(
        "[data-product-quantity]"
      );
      productQuantity.value = item.quantity;
      const productPrice = productList.querySelector("[data-product-price]");
      productPrice.textContent = item.price + " kr";

      //------------------If change in numbers or quantity, update site and localstorage--------------------
      productQuantity.addEventListener("change", () => {
        item.quantity = parseInt(productQuantity.value);
        updateCartCounter();
        updateLocalStorage();
        priceSummary = 0;
        priceSummary = priceSummary += item.price * item.quantity;
        priceTotal = parseFloat(priceSummary) + 149.99;
        location.reload(true);
      });

      productContainer.append(productList);
      productContainer.append(productBreak);
      priceSummary = priceSummary += item.price * item.quantity;
    }
    console.log("Loaded");
  });
  productSummaryPrice.textContent = priceSummary.toFixed(2) + " kr";
  let priceTotal = parseFloat(priceSummary) + 149.99;
  productSummaryTotal.textContent = priceTotal.toFixed(2) + " kr";

  //------------------Listening to if user puts in Promo codes, and executing them--------------------
  promoCodeInput.addEventListener("change", () => {
    if (promoCodeInput.value == "FREE2023") {
      alert("Code (FREE2023) has been added succesfully!");
      productSummaryPrice.textContent = "0 kr";
      productSummaryTotal.textContent = "149.99 kr";
    } else {
      alert(
        "Code (" + promoCodeInput.value + ") has NOT been added succesfully!"
      );
    }
  });
});

//------------------Updating localstorage--------------------
function updateLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  updateCartCounter();
}

//------------------Update the cart counter in header--------------------
function updateCartCounter() {
  const cartCounter = document.getElementById("cart-number");
  cartCounterNumber = 0;
  cartItems.forEach((item) => {
    cartCounterNumber += item.quantity;
  });
  cartCounter.textContent = cartCounterNumber;
}

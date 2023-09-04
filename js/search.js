const searchInput = document.querySelector("[data-search]");
const userCardTemplate = document.querySelector("[data-user-cards-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

const cardElements = []; // Array to hold cloned card elements

window.onload = (event) => {
    products.forEach(product => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const search_image = card.querySelector("[data-image]");
        const body = card.querySelector("[data-body]");
        const price = card.querySelector("[data-price]");
        const link = card.querySelector("[data-link]");
        header.textContent = product.name;
        search_image.src = product.image;
        body.textContent = product.category;
        price.textContent = product.price + " kr";
        link.href = product.link;
        userCardContainer.append(card);

        cardElements.push({ name: product.name, category: product.category, price: product.price, link: product.link, element: card });
    });
    console.log("Loaded");
    
    searchInput.addEventListener("input", (e) => {

        if (searchInput.value == "") {
            cardElements.forEach(cardInfo => {
                cardInfo.element.classList.add("hide");
            });

        }
        else {
            const value = e.target.value.toLowerCase();
            console.log(value);
            cardElements.forEach(cardInfo => {
                const isVisible =
                    cardInfo.name.toLowerCase().includes(value) ||
                    cardInfo.category.toLowerCase().includes(value);
                cardInfo.element.classList.toggle("hide", value == "" ? false : !isVisible);
            });
        }


    });

};

// document.getElementsByClassName("search-suggestion").results.forEach(element => {
//     const nagot = this.querySelector("h1").value;
// });;


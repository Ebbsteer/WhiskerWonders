const searchInput = document.querySelector("[data-search]");
const userCardTemplate = document.querySelector("[data-user-cards-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

let products = [{

    id: 1,
    name: "Bounce & Fetch Buddy",
    link: "../html/thisproduct.html?id=1",
    image: "../img/products/B&FB.avif",
    category: "Dog Toys",
    price: "149.95",
    quantity: 0
}, {
    id: 2,
    name: "PuzzlePaws Interactive Toy",
    link: "../html/products/PuzzlePawsInteractiveToy",
    image: "../img/products/PIT.avif",
    category: "Dog Toys",
    price: "199.90",
    quantity: 0
}, {
    id: 3,
    name: "TastyTidbits Training Treats",
    link: "../html/products/TastyTidbitsTrainingTreats",
    image: "../img/products/TTTT.avif",
    category: "Dog Treats",
    price: "84.99",
    quantity: 0
}, {
    id: 4,
    name: "NutriChomp Dental Chews",
    link: "../html/products/NutriChompDentalChews",
    image: "../img/products/NDC.avif",
    category: "Dog Treats",
    price: "119.90",
    quantity: 0
}, {
    id: 5,
    name: "FeatherFrenzy Interactive Wand",
    link: "../html/products/FeatherFrenzyInteractiveWand",
    image: "../img/products/FIW.avif",
    category: "Cat Toys",
    price: "129.95",
    quantity: 0
}, {
    id: 6,
    name: "Purrfect Pouncing Plaything",
    link: "../html/products/PurrfectPouncingPlaything",
    image: "../img/products/PPP.avif",
    category: "Cat Toys",
    price: "99.99",
    quantity: 0
}, {
    id: 7,
    name: "WhiskerWholesome Cat Treats",
    link: "../html/products/WhiskerWholesomeCatTreats",
    image: "../img/products/WCT.avif",
    category: "Cat Treats",
    price: "64.90",
    quantity: 0
}, {
    id: 8,
    name: "NutriMews Crunchy Dental Bites",
    link: "../html/products/NutriMewsCrunchyDentalBites",
    image: "../img/products/NCDB.avif",
    category: "Cat Treats",
    price: "79.99",
    quantity: 0
}, {
    id: 9,
    name: "Rolling Retreat Hamster Wheel",
    link: "../html/products/RollingRetreatHamsterWheel",
    image: "../img/products/RRHB.avif",
    category: "Hamster Toys",
    price: "69.90",
    quantity: 0
}, {
    id: 10,
    name: "MiniMaze Adventure Playset",
    link: "../html/products/MiniMazeAdventurePlayset",
    image: "../img/products/MMAD.avif",
    category: "Hamster Toys",
    price: "84.90",
    quantity: 0
}, {
    id: 11,
    name: "TinyTreats Hamster Delights",
    link: "../html/products/TinyTreatsHamsterDelights",
    image: "../img/products/TTHD.avif",
    category: "Hamster Treats",
    price: "49.99",
    quantity: 0
}, {
    id: 12,
    name: "NutriNest Hamster Food Mix",
    link: "../html/products/NutriNestHamsterFoodMix",
    image: "../img/products/NNHFM.avif",
    category: "Hamster Treats",
    price: "79.90",
    quantity: 0
}
];

const cardElements = []; // Array to hold cloned card elements

window.onload = (event) => {
    products.forEach(product => {
        const card = userCardTemplate.content.cloneNode(true).children[0];
        const header = card.querySelector("[data-header]");
        const search_image = card.querySelector("[data-image]");
        const body = card.querySelector("[data-body]");
        const price = card.querySelector("[data-price]");
        header.textContent = product.name;
        search_image.src = product.image;
        body.textContent = product.category;
        price.textContent = product.price + " kr";
        userCardContainer.append(card);

        cardElements.push({ name: product.name, category: product.category, price: product.price, element: card });
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


const searchInput = document.querySelector("[data-search]");
const userCardTemplate = document.querySelector("[data-user-cards-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

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


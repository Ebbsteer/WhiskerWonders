(function() {
  "use strict";
  
  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }


  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bx-menu')
    this.classList.toggle('bx-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bx-menu')
        navbarToggle.classList.toggle('bx-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }




})



  function dark() {
    document.querySelector('body').classList.toggle("dark-light-active");
  }

  var multipleCardCarousel = document.querySelector(
    "#carouselExampleControls"
  );
  if (window.matchMedia("(min-width: 768px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false,
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 4) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }



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
];                                              // Product list
  
  const storedQuantities = JSON.parse(localStorage.getItem("quantities")); // quantity localstorage
  if (storedQuantities) {
    products.forEach((product, index) => {
      product.quantity = storedQuantities[index];
    });                                                  // 
  }                                          
  localStorage.setItem("products", JSON.stringify(products));
  var product = products[131];
  var id = "0";
  
  window.onload = (event) => {
    products.forEach((product, index) => {
      const buttonId = index + 1;
      const buttonElement = document.getElementById(buttonId.toString());
  
      if (product.quantity > 0) 
      {
      buttonElement.innerHTML = `${product.name} (Price: ${product.price} kr) - Quantity: ${product.quantity} st`;                         
      } else 
      {
      buttonElement.innerHTML = "";
      const showDivs = document.getElementsByClassName("show");
      for (let i = 0; i < showDivs.length; i++) 
      {
      if (showDivs[i].id === `product-${buttonId}`) {
      const divButtons = showDivs[i].getElementsByTagName("button");
      for (let j = 0; j < divButtons.length; j++) {
          divButtons[j].style.visibility = 'hidden';                                                                           // visar producterna endast om det finns mer än 0 quantity
        }
        break; 
      }
    }
  
    }
  
    });
  
    check();
  };
  
  function buy(buttonId) {

   
    id = buttonId;
    const productIndex = parseInt(buttonId) - 1;
  
    product = products[productIndex];
  
    product.quantity += 1;
    
    const updatedQuantities = products.map(product => product.quantity);
    localStorage.setItem("quantities", JSON.stringify(updatedQuantities));
    
  
    addLS();
  }
  
  function addLS() {
  document.getElementById(id).innerHTML = `${product.name} (Price: ${product.price} kr) - Quantity: ${product.quantity} st`;
  check();                                  
  }
                                       //writes product name, price and quantity with right id 
  
  function clearQuantity(buttonId) {  // clear all
    localStorage.removeItem("quantities");
    products.forEach(product => {
    product.quantity = 0;
    });                                // clear quantity array
  
  
    for (let i = 1; i <= products.length; i++)
    {
    document.getElementById(i.toString()).innerHTML = "";
    }
    document.getElementById("sum").innerHTML = "Total: 0";  // clear all "special" text in korg
   
    const showDivs = document.getElementsByClassName("show");
    for (let i = 0; i < showDivs.length; i++) {
    const divButtons = showDivs[i].getElementsByTagName("button");
    for (let j = 0; j < divButtons.length; j++) {
    divButtons[j].style.visibility = 'hidden';              //hides buttons for removed product
      }
    }
   
    
  }
  
  
   
  
  function Trash(buttonId) {         // clear only specifik product
  
    id = buttonId;
    const productIndex = parseInt(buttonId) - 1;
    product = products[productIndex];                  // retrieve specific product from list
  
    
      product.quantity = 0;      //reset quantity
  
      const updatedQuantities = products.map(product => product.quantity);
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities)); 
   
    document.getElementById(id).innerHTML = "";
    document.getElementById("sum").innerHTML = "Total: 0";  // clear text
  
  
  
    const showDivs = document.getElementsByClassName("show");
    for (let i = 0; i < showDivs.length; i++) {
       if (showDivs[i].id === `product-${buttonId}`) {
        const divButtons = showDivs[i].getElementsByTagName("button");
        for (let j = 0; j < divButtons.length; j++) {
          divButtons[j].style.visibility = 'hidden';                     // hide product button
        }
        break; 
      }
    }
  
    check();
    
  }
  
  
  
  
  function minusQ(buttonId) {                   //minus button
    id = buttonId;
    const productIndex = parseInt(buttonId) - 1;
    product = products[productIndex];                 // identify specific product
  
    if (product.quantity > 0) {
      product.quantity -= 1;                           // onky works if quantity is more than 0
  
      const updatedQuantities = products.map(product => product.quantity);
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));   // update quanitty localstorage
  
      addLS();
  
      if (product.quantity == 0) {
       Trash(buttonId);                // delete product if its less than 0
      }
  
    
    }
  }
  
  
  function plusQ(buttonId) {                     //add button
    id = buttonId;
    const productIndex = parseInt(buttonId) - 1;
    product = products[productIndex];
  
      product.quantity += 1;
  
      const updatedQuantities = products.map(product => product.quantity);
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));  // update quantity localstorage
  
      addLS();

    }
  
  
  
  function check() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].price * products[i].quantity;
    }
    document.getElementById("sum").innerHTML = "Total: " + total;    // count price total and update total
  }
  





function dark() {
  document.querySelector('body').classList.toggle("dark-light-active");
}

// var prevScrollpos = window.scrollY;
// window.onscroll = function() {
  window.onscroll = function() {windowScrolled()};

  function windowScrolled() {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos >= 100) {
      document.getElementById("backtotop").classList.remove("hide");
      // select('.back-to-top').classList.add("hide");
    } else {
      document.getElementById("backtotop").classList.add("hide");
      // select('.back-to-top').classList.remove("hide");
    }
    // prevScrollpos = currentScrollPos;
  }
  let closeCookieBtn = document.getElementById("closeCookie");
  closeCookieBtn.addEventListener("click", closeCookies);

  function closeCookies() {
    document.getElementById("lawmsg").classList.add("hide");
  }

  (function() {
  "use strict";
  
  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  /*if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }*/

   

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
    document.getElementById("backtotop").classList.add("hide");
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



  // -------Products----------------


  
  const userboxTemplate = document.querySelector("[data-user-boxs-template]");
  const userboxContainer = document.querySelector("[data-user-boxs-container]");
  



  const boxElements = []; // Array to hold cloned card elements

  window.onload = (event) => {
    products.forEach(product => {
        const box = userboxTemplate.content.cloneNode(true).children[0];
        const productheader = box.querySelector("[productdata-header]");
        const productsearch_image = box.querySelector("[productdata-image]");
        const productbody = box.querySelector("[productdata-body]");
        const productprice = box.querySelector("[productdata-price]");
        productheader.textContent = product.name;
        productsearch_image.src = product.image;
        productbody.textContent = product.category;
        productprice.textContent = product.price + " kr";
        userboxContainer.appendChild(box);

        boxElements.push({ name: product.name, category: product.category, price: product.price, element: box });
    }); 
  }









  let selectedProductId = null;


  function prod(productId) {
    selectedProductId = productId;

    // Update the chosen product information (image, name, price)
    const product = products[productId - 1];
    document.getElementById("product-image").src = product.image;
    document.getElementById("name").textContent = product.name;
    document.getElementById("product-price").textContent = product.price + " kr";

    // Update the "Buy" button's behavior
    updateBuyButton();
}

function buySelectedProduct() {
  if (selectedProductId !== null) {
      const productIndex = selectedProductId - 1;
      const selectedProduct = products[productIndex];

      selectedProduct.quantity += 1;

      const updatedQuantities = products.map(product => product.quantity);
      localStorage.setItem("quantities", JSON.stringify(updatedQuantities));

      addLS();
  }
}


function updateBuyButton() {
  const buyButton = document.getElementById("buy-button");

  if (selectedProductId !== null) {
      buyButton.style.visibility = "visible";
  } else {
      buyButton.style.visibility = "hidden";
  }
}

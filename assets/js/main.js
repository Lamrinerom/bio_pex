var medicalProducts = ["Test Tubes", "Microscope", "Blood Pressure Monitor", "Thermometer", "Stethoscope", "Lab Glassware", "Medical Gloves"];

function autocomplete(inp, arrMedical) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);

    // Show medical products matching input value
    for (i = 0; i < arrMedical.length; i++) {
      if (arrMedical[i].toLowerCase().startsWith(val.toLowerCase())) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arrMedical[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arrMedical[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arrMedical[i] + "'>";
        b.addEventListener("click", function(e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) { // arrow down
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) { // arrow up
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) { // enter
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

// Initialize the autocomplete with medical products only
autocomplete(document.getElementById("country"), medicalProducts);

// Button trigger remains same
document.getElementById('searchButton').addEventListener('click', function() {
  var event = new Event('input');
  document.getElementById('country').dispatchEvent(event);
});
// ---------------------------------------------------------
var medicalProducts = ["Test Tubes", "Microscope", "Blood Pressure Monitor", "Thermometer", "Stethoscope", "Lab Glassware", "Medical Gloves"];

function mobileautocomplete(inp, arrMedical) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false;}
    currentFocus = -1;
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "mobile-autocomplete-list");
    a.setAttribute("class", "mobile-autocomplete-items");
    this.parentNode.appendChild(a);

    // Show medical products matching input value
    for (i = 0; i < arrMedical.length; i++) {
      if (arrMedical[i].toLowerCase().startsWith(val.toLowerCase())) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arrMedical[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arrMedical[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arrMedical[i] + "'>";
        b.addEventListener("click", function(e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "mobile-autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) { // arrow down
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) { // arrow up
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) { // enter
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("mobile-autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("mobile-autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("mobile-autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

// Initialize the autocomplete with medical products only
mobileautocomplete(document.getElementById("country"), medicalProducts);

// Button trigger remains same
document.getElementById('searchButton').addEventListener('click', function() {
  var event = new Event('input');
  document.getElementById('country').dispatchEvent(event);
});
// ---------------------------------------Baneer section

// const container = document.getElementById('carouselContainer');
//   const slides = container.children;
//   const slidesCount = slides.length;
//   let currentIndex = 0;
//   let slideInterval = null;

//   function goToSlide(index) {
//     currentIndex = index % slidesCount;
//     if (currentIndex < 0) currentIndex += slidesCount;
//     container.style.transform = `translateX(${-currentIndex * 100}%)`;
//   }

//   function nextSlide() {
//     goToSlide(currentIndex + 1);
//   }

//   function prevSlide() {
//     goToSlide(currentIndex - 1);
//   }

//   document.getElementById('nextBtn').addEventListener('click', () => {
//     nextSlide();
//     resetTimer();
//   });

//   document.getElementById('prevBtn').addEventListener('click', () => {
//     prevSlide();
//     resetTimer();
//   });

//   Array.from(slides).forEach((slide, index) => {
//     slide.style.cursor = 'pointer';
//     slide.addEventListener('click', () => {
//       const url = slide.getAttribute('data-url');
//       if (url) {
//         window.open(url, '_blank');
//       }
//     });
//     slide.addEventListener('keydown', e => {
//       if (e.key === 'Enter') {
//         slide.click();
//       }
//     });
//   });

//   function resetTimer() {
//     clearInterval(slideInterval);
//     slideInterval = setInterval(nextSlide, 5000);
//   }

//   slideInterval = setInterval(nextSlide, 5000);

//   goToSlide(0);

  // ---------------------------------------slider

  $(document).ready(function() {
    $('.slick-carousel').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        arrows: true, // Enable navigation arrows
        autoplay: true,
        autoplaySpeed: 2500, // Slide every 2.5 seconds (customize as needed)
        // prevArrow: '<button type="button" class="slick-prev" style="background: #1d297c; color: #fff; border: none; border-radius: 18px; width: 36px; height: 36px; font-size: 20px; position: absolute; top: 45%; left: -40px; z-index: 3;"></button>',
        // nextArrow: '<button type="button" class="slick-next" style="background: #1d297c; color: #fff; border: none; border-radius: 18px; width: 36px; height: 36px; font-size: 20px; position: absolute; top: 45%; right: -40px; z-index: 3;"></button>',
        responsive: [
           {
                breakpoint: 1400,
                settings: { slidesToShow: 5 }
            },
            {
                breakpoint: 1200,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});
// ---------------------------------------
$(document).ready(function() {
    $('.bfbanner-carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true, // Enable navigation arrows
        autoplay: true,
        autoplaySpeed: 2500, // Slide every 2.5 seconds (customize as needed)
        // prevArrow: '<button type="button" class="slick-prev" style="background: #1d297c; color: #fff; border: none; border-radius: 18px; width: 36px; height: 36px; font-size: 20px; position: absolute; top: 45%; left: -40px; z-index: 3;"></button>',
        // nextArrow: '<button type="button" class="slick-next" style="background: #1d297c; color: #fff; border: none; border-radius: 18px; width: 36px; height: 36px; font-size: 20px; position: absolute; top: 45%; right: -40px; z-index: 3;"></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});

// -----------------------------------add to cart modal

const cart = [];
const offcanvas = document.getElementById('offcanvas');
const offcanvasContent = document.getElementById('offcanvas-content');
const cartLabel = document.querySelector('.header-cart .dropdown-toggle');
const cartCountElems = document.querySelectorAll('.cart-count');      // All cart counts
const cartSections = document.querySelectorAll('.cart-section');      // All dropdown cart sections

function updateCartUI() {
  // Update cart count for all UI carts
  cartCountElems.forEach(elem => {
    elem.textContent = cart.length;
  });

  cartSections.forEach(cartSection => {
    // Remove all cart items
    const prevItems = cartSection.querySelectorAll('.cart-item');
    prevItems.forEach(item => item.remove());

    const emptyCartElem = cartSection.querySelector('.empty-cart');
    // Check if cart has items to adjust width accordingly
    if (cart.length === 0) {
      emptyCartElem.style.display = 'block';
      cartSection.style.width = '320px'; // Default width
    } else {
      emptyCartElem.style.display = 'none';
      cartSection.style.width = '490px'; // Wider with products
    }
    // Add cart items if any
    cart.forEach(product => {
      const li = document.createElement('p');
      li.className = 'dropdown-item cart-item';
      li.innerHTML = `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" />
          <div class="cart-item-details">
            <strong>${product.name}</strong>
            Price: $${product.price} <br />
            Quantity: ${product.quantity}
          </div>
        </div>
      `;
      cartSection.insertBefore(li, cartSection.querySelector('p.cart-list'));
    });
  });
}

function openOffcanvas(product) {
  offcanvasContent.innerHTML = `
    
    <div class="offcanvas-product">
      <img src="${product.image}" alt="${product.name}" />
      <div class="offcanvas-product-info">
        <h3>${product.name}</h3>
        <p class="priceoff">Price: $${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
      </div>
    </div>
    <div class="offcanvas-actions">
      <a href="products.html" class="button">Continue Shopping</a>
      <a href="cart.html" class="button" id="view-cart-btn">View Cart</a>
    </div>
    <div class="also-bought">
      <h4>Customers who bought this also bought</h4>
      <div class="also-bought-list row">
        <div class="also-bought-item col-lg-6" data-id="2" data-name="Fisherbrand Microcentrifuge" data-price="180.00" data-image="assets/images/dummy/centrifuges-90180031-header-image.jpg-250.jpg">
          <img src="assets/images/dummy/centrifuges-90180031-header-image.jpg-250.jpg" alt="Fisherbrand Microcentrifuge" />
          <p class="cwbtabpname">Fisherbrand Microcentrifuge</p>
          <p class="priceoff">$180.00</p>
          <a href="#" class="add-cart-btn offatc">Add to Cart</a>
        </div>
        <div class="also-bought-item col-lg-6" data-id="3" data-name="Biopex Vacuum Concentrator" data-price="140.00" data-image="assets/images/dummy/evaporators-header-image-v3.jpg-250.jpg">
          <img src="assets/images/dummy/evaporators-header-image-v3.jpg-250.jpg" alt="Biopex Vacuum Concentrator" />
          <p class="cwbtabpname">Biopex Vacuum Concentrator</p>
          <p class="priceoff">$140.00</p>
           <a href="#" class="add-cart-btn offatc">Add to Cart</a>
        </div>
        <div class="also-bought-item col-lg-6" data-id="2" data-name="Mopec Powered Hydraulic Cadaver Carrier" data-price="180.00" data-image="assets/images/dummy/assets/images/dummy/autopsy-supplies-header-image.jpg-250.jpg">
          <img src="assets/images/dummy/autopsy-supplies-header-image.jpg-250.jpg" alt="Mopec Powered Hydraulic Cadaver Carrier" />
          <p class="cwbtabpname">Mopec Powered Hydraulic Cadaver Carrier</p>
          <p class="priceoff">$180.00</p>
          <a href="#" class="add-cart-btn offatc">Add to Cart</a>
        </div>
        <div class="also-bought-item col-lg-6" data-id="3" data-name="Fisher Science Education™ Triple-Beam Balance" data-price="140.00" data-image="assets/images/dummy/balances-and-scales-90165051-header-image.jpg-250.jpg">
          <img src="assets/images/dummy/balances-and-scales-90165051-header-image.jpg-250.jpg" alt="Fisher Science Education™ Triple-Beam Balance" />
          <p class="cwbtabpname">Fisher Science Education™ Triple-Beam Balance</p>
          <p class="priceoff">$140.00</p>
           <a href="#" class="add-cart-btn offatc">Add to Cart</a>
        </div>
        <div class="also-bought-item col-lg-6" data-id="2" data-name="Fisherbrand Microcentrifuge" data-price="180.00" data-image="assets/images/dummy/centrifuges-90180031-header-image.jpg-250.jpg">
          <img src="assets/images/dummy/centrifuges-90180031-header-image.jpg-250.jpg" alt="Fisherbrand Microcentrifuge" />
          <p class="cwbtabpname">Fisherbrand Microcentrifuge</p>
          <p class="priceoff">$180.00</p>
          <a href="#" class="add-cart-btn offatc">Add to Cart</a>
        </div>
        <div class="also-bought-item col-lg-6" data-id="3" data-name="Biopex Vacuum Concentrator" data-price="140.00" data-image="assets/images/dummy/evaporators-header-image-v3.jpg-250.jpg">
          <img src="assets/images/dummy/evaporators-header-image-v3.jpg-250.jpg" alt="Biopex Vacuum Concentrator" />
          <p class="cwbtabpname">Biopex Vacuum Concentrator</p>
          <p class="priceoff">$140.00</p>
           <a href="#" class="add-cart-btn offatc">Add to Cart</a>
        </div>
      </div>
    </div>
  `;
  offcanvas.style.display = 'flex';

  // Add event listener for add to cart in also bought section
  offcanvas.querySelectorAll('.also-bought-item .add-cart-btn').forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const itemEl = button.parentElement;
      const newProduct = {
        id: itemEl.getAttribute('data-id'),
        name: itemEl.getAttribute('data-name'),
        price: itemEl.getAttribute('data-price'),
        image: itemEl.getAttribute('data-image'),
        quantity: 1,
      };
      addToCart(newProduct);
    });
  });

  // Add event listener for view cart button offcanvas
  document.getElementById('view-cart-btn').addEventListener('click', () => {
    window.location.href = 'cart.html';
  });
}

function closeOffcanvas() {
  offcanvas.style.display = 'none';
}

function addToCart(product) {
  // Check if product already in cart
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }
  updateCartUI();
  openOffcanvas(product);
}

document.addEventListener('DOMContentLoaded', () => {
  closeOffcanvas();

  // Handle Proceed to Checkout button click (dropdown)
  document.querySelector('.proceed-to-checkout-btn').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'cart.html';
  }); 
  // Add to cart button logic on main product card
  document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.pop-card');
      const product = {
        id: card.getAttribute('data-id'),
        name: card.getAttribute('data-name'),
        price: card.getAttribute('data-price'),
        image: card.getAttribute('data-image'),
        quantity: 1,
      };

      // Change button text temporarily
      button.disabled = true;
      const originalText = button.textContent;
      button.textContent = 'Added';
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 5000);

      addToCart(product);
    });
  });

  // Make overlay click close the offcanvas, but not clicks inside offcanvas content
  offcanvas.addEventListener('click', function(e) {
    if (e.target === offcanvas) {
      closeOffcanvas();
    }
  });

  // Offcanvas close button
  document.getElementById('offcanvas-close').addEventListener('click', closeOffcanvas);
});

// ------------------------------------------------Aboutcarousel

$(document).ready(function() {
    $('.banner-carousel').slick({
      slidesToShow: 1,       // Show one image at a time
      slidesToScroll: 1,
      infinite: true,
      arrows: true,          // Show arrows
      autoplay: true,
      autoplaySpeed: 2500,
      responsive: [
        {
          breakpoint: 1200,
          settings: { slidesToShow: 1 }
        },
        {
          breakpoint: 768,
          settings: { slidesToShow: 1 }
        },
        {
          breakpoint: 480,
          settings: { slidesToShow: 1 }
        }
      ]
    });
  });

  // ---------------------------------------------Action on card

  const cards = document.querySelectorAll('.pop-card');
cards.forEach(card => {
  let hideTimeout;

  card.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout);
    card.classList.add('hovered');
  });

  card.addEventListener('mouseleave', () => {
    // Hide after 3 seconds delay
    hideTimeout = setTimeout(() => {
      card.classList.remove('hovered');
    }, 3000);
  });
});


const dropdown = document.querySelector('.signingin-dropdown');
const btn = document.querySelector('#openDropdownBtn');

btn.addEventListener('click', () => {
  dropdown.classList.add('dropdown-open');
  // Remove animation after it completes so repeat on next open
  dropdown.addEventListener('animationend', function handler() {
    dropdown.classList.remove('dropdown-open');
    dropdown.removeEventListener('animationend', handler);
  });
});

// -------------------------------------------------Wishlist




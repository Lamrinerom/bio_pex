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

const container = document.getElementById('carouselContainer');
  const slides = container.children;
  const slidesCount = slides.length;
  let currentIndex = 0;
  let slideInterval = null;

  function goToSlide(index) {
    currentIndex = index % slidesCount;
    if (currentIndex < 0) currentIndex += slidesCount;
    container.style.transform = `translateX(${-currentIndex * 100}%)`;
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  // Make slides clickable
  Array.from(slides).forEach((slide, index) => {
    slide.style.cursor = 'pointer';
    slide.addEventListener('click', () => {
      const url = slide.getAttribute('data-url');
      if (url) {
        window.open(url, '_blank');
      }
    });
    // Accessibility - allow Enter key to trigger click
    slide.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        slide.click();
      }
    });
  });

  function resetTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Start automatic sliding
  slideInterval = setInterval(nextSlide, 5000);

  // Initialize to first slide
  goToSlide(0);

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
                breakpoint: 1200,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2 }
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
                settings: { slidesToShow: 2 }
            }
        ]
    });
});
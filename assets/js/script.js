

//navbar closed automatically without click navbar-toggler-icon
document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    var dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
    var bsCollapse = new bootstrap.Collapse(document.querySelector("#navbarSupportedContent"), { toggle: false });

    // Toggle the navbar slide in/out on mobile
    navbarToggler.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
            bsCollapse.hide(); // Close navbar if it's open
        } else {
            bsCollapse.show(); // Open navbar if it's closed
        }
    });

    // Close navbar when clicking any nav-link except dropdown
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            var isDropdownToggle = this.classList.contains("dropdown-toggle");
            if (!isDropdownToggle && window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });

    // Close navbar when clicking a dropdown item
    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function () {
            if (window.innerWidth < 992) {
                bsCollapse.hide();
            }
        });
    });
});

    // who-we-are-about-us buttons ----Intersection Observer to trigger animation
    document.addEventListener('DOMContentLoaded', function () {
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('animate'); // Add 'animate' class when in view
                observer.unobserve(entry.target); // Stop observing once triggered
              }
            });
          },
          { threshold: 0.2 } // Trigger when 20% of the container is in view
        );
  
        // Attach observer to elements with the 'scroll-trigger' class
        document.querySelectorAll('.scroll-trigger').forEach(el => observer.observe(el));
      });

      
      
     //business model-carousel without auto carousel moving
    //   document.addEventListener("DOMContentLoaded", () => {
    //     const carouselInner = document.querySelector(".business-model-section-carousel-container-carousel-inner");
    //     const prevBtn = document.querySelector(".prev-btn");
    //     const nextBtn = document.querySelector(".next-btn");
    
    //     const cardWidth = 220; // Fixed width of a card
    //     const visibleCards = 3; // Number of visible cards
    //     const totalCards = document.querySelectorAll(".card").length;
    
    //     let currentIndex = 0; // Start with the first card
    //     // let autoSlideInterval;
    
    //     function updateCarousel() {
    //         const offset = -(currentIndex * cardWidth);
    //         carouselInner.style.transform = `translateX(${offset}px)`;
    //     }
    
    //     function nextSlide() {
    //         if (currentIndex < totalCards - visibleCards) {
    //             currentIndex++;
    //         } else {
    //             currentIndex = 0; // Loop back to the start
    //         }
    //         updateCarousel();
    //     }

    //     function prevSlide() {
    //         if (currentIndex > 0) {
    //             currentIndex--;
    //         } else {
    //             currentIndex = totalCards - visibleCards; // Loop to the last set of visible cards
    //         }
    //         updateCarousel();
    //     }
    
    //     // // Auto-slide function
    //     // function startAutoSlide() {
    //     //     autoSlideInterval = setInterval(nextSlide, 3700); // Change slide every 3.7 seconds
    //     // }
    
    //     // // Stop auto-slide on hover
    //     // function stopAutoSlide() {
    //     //     clearInterval(autoSlideInterval);
    //     // }
    
    //     // Event Listeners for Next/Prev Buttons
    //     nextBtn.addEventListener("click", () => {
    //         nextSlide();
    //         // stopAutoSlide(); // Reset auto-slide timer when manually navigating
    //         // startAutoSlide();
    //     });
    
    //     prevBtn.addEventListener("click", () => {
    //         prevSlide();
    //         // stopAutoSlide();
    //         // startAutoSlide();
    //     });
    
    //     // Pause auto-slide when hovering over the carousel
    //     // carouselInner.addEventListener("mouseenter", stopAutoSlide);
    //     // carouselInner.addEventListener("mouseleave", startAutoSlide);
    
    //     // Initialize carousel position & start auto-sliding
    //     updateCarousel();
    //     // startAutoSlide();
    // });
   
   /*tool room machines*/
   document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("machineCarousel");
    const machineTitle = document.getElementById("machineTitle");
    const machineSize = document.getElementById("machineSize");
    const machineNames = ["EDM MACHINE-CHMER ", " GRINDING MACHINE ", "CNC MACHINE ", "GRINDING MACHINE"];
    const machineCm = ["BED SIZE—550X350 MM", "BED SIZE—450X250MM", "BED SIZE—810X510X510MM ", "BED SIZE—1000X500MM"];

    carousel.addEventListener("slid.bs.carousel", function (event) {
        machineTitle.textContent = machineNames[event.to];
        machineSize.textContent = machineCm[event.to];
    });
});


  // Show the button when scrolling down-top to button
window.onscroll = function () {
var btn = document.getElementById("backToTopBtn");
if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
  btn.classList.add("show");
} else {
  btn.classList.remove("show");
}
};

//horizontal flip-services process
function toggleCard(card) {
card.classList.toggle("horizontal");
}


// Smooth scroll to top
function scrollToTop() {
window.scrollTo({
  top: 0,
  behavior: "smooth"
});
}

/*old fade section- whole website animation */
// Initialize the Intersection Observer
// const observer = new IntersectionObserver((entries, observer) => {
// entries.forEach(entry => {
//     if (entry.isIntersecting) {
//         // Add the 'visible' class when the section enters the viewport
//         entry.target.classList.add('visible');
//         observer.unobserve(entry.target);  // Stop observing once it's visible
//     }
// });
// }, {
// threshold: 0.2  // Trigger when 20% of the section is in view
// });

// // Target all elements with the 'fade-section' class
// const fadeSections = document.querySelectorAll('.fade-section');

// // Observe each section
// fadeSections.forEach(section => {
// observer.observe(section);
// });


/*new scroll js
// document.addEventListener("DOMContentLoaded", function () {
//     let sections = document.querySelectorAll(".fade-section");
  
//     let observer = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//             observer.unobserve(entry.target); // Stop observing once visible
//           }
//         });
//       },
//       {
//         root: null, // Observe in viewport
//         threshold: 0.2, // Trigger when 20% of section is visible
//       }
//     );
  
//     sections.forEach((section) => {
//       observer.observe(section);
//     });
//   });
  

/*reverse engineering - autoplay carousel */
document.addEventListener("DOMContentLoaded", function() {
    let carousel = document.querySelector("#reverseEngineeringCarousel");
    let carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 6000, // Auto-slide every 5 seconds
      wrap: true
    });
  });

/*capabilities- lean manufacturing POPOVER*/
document.addEventListener("DOMContentLoaded", function() {
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, { sanitize: false });
    });
});

function closePopover() {
    var popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
    popovers.forEach(function (popover) {
        bootstrap.Popover.getInstance(popover).hide();
    });
}

/*popover placement space */
document.addEventListener("shown.bs.popover", function (event) {
    let popover = event.target.nextElementSibling; // Get the popover element
    let placement = popover.getAttribute("data-popper-placement"); // Get actual applied placement
  
    // Reset margin first
    popover.style.margin = "0";
  
    if (placement === "top") {
      popover.style.marginBottom = "50px";
    } else if (placement === "bottom") {
      popover.style.marginTop = "50px";
    } else if (placement === "left") {
      popover.style.marginRight = "50px";
    } else if (placement === "right") {
      popover.style.marginLeft = "50px";
    }
  });
  
  /*scrolling issues*/
  let ticking = false;
window.addEventListener("scroll", function () {
  if (!ticking) {
    window.requestAnimationFrame(function () {
      // Animation or scroll-related code
      ticking = false;
    });
    ticking = true;
  }
});

/*new fade-section scrolling*/  
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.fade-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    rootMargin: '0px',  // Adjust when sections should fade in
    threshold: 0.2      // Trigger visibility when 20% of the section is visible
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});



 /*explor-more-tooling-solutions*/
 // Optional JavaScript for scroll animations (if required)
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll('.explore-card');

  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.querySelector('.explore-content').style.transition = 'background 0.3s ease, box-shadow 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
      card.querySelector('.explore-content').style.transition = 'background 0.3s ease, box-shadow 0.3s ease';
    });
  });
});
  
      

/*business carousel-new-only click prev and next btn*/
// document.addEventListener("DOMContentLoaded", function () {
//     const prevBtn = document.querySelector(".prev-btn");
//     const nextBtn = document.querySelector(".next-btn");
//     const carouselWrapper = document.querySelector(".business-model-section-carousel-wrapper");
//     const cardWidth = document.querySelector(".business-card").offsetWidth + 30;

//     let scrollPosition = 0;

//     function updateButtonVisibility() {
//         prevBtn.style.display = "flex";
//         nextBtn.style.display = "flex";
//     }

//     nextBtn.addEventListener("click", function () {
//         scrollPosition += cardWidth;
//         carouselWrapper.style.transform = `translateX(-${scrollPosition}px)`;
//         updateButtonVisibility();
//     });

//     prevBtn.addEventListener("click", function () {
//         scrollPosition -= cardWidth;
//         carouselWrapper.style.transform = `translateX(-${scrollPosition}px)`;
//         updateButtonVisibility();
//     });

//     updateButtonVisibility();
// }); 


/*business carousel-new-both clicking prev and next-btn and by finger moving too*/
document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const carouselWrapper = document.querySelector(".business-model-section-carousel-wrapper");
  const cardWidth = document.querySelector(".business-card").offsetWidth + 30;

  let scrollPosition = 0;
  let startX = 0;
  let currentTranslate = 0;
  let isDragging = false;

  function updateButtonVisibility() {
      prevBtn.style.display = "flex";
      nextBtn.style.display = "flex";
  }

  nextBtn.addEventListener("click", function () {
      scrollPosition += cardWidth;
      carouselWrapper.style.transform = `translateX(-${scrollPosition}px)`;
      updateButtonVisibility();
  });

  prevBtn.addEventListener("click", function () {
      scrollPosition -= cardWidth;
      carouselWrapper.style.transform = `translateX(-${scrollPosition}px)`;
      updateButtonVisibility();
  });

  // Touch events for mobile swipe
  carouselWrapper.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
      currentTranslate = scrollPosition;
      isDragging = true;
  });

  carouselWrapper.addEventListener("touchmove", function (e) {
      if (!isDragging) return;
      const moveX = e.touches[0].clientX;
      const diff = startX - moveX;
      carouselWrapper.style.transform = `translateX(-${currentTranslate + diff}px)`;
  });

  carouselWrapper.addEventListener("touchend", function (e) {
      if (!isDragging) return;
      isDragging = false;
      const moveX = e.changedTouches[0].clientX;
      const diff = startX - moveX;

      // Move to next or previous card based on swipe distance
      if (diff > 50) {
          scrollPosition += cardWidth;
      } else if (diff < -50) {
          scrollPosition -= cardWidth;
      }

      // Apply final transform
      carouselWrapper.style.transform = `translateX(-${scrollPosition}px)`;
      updateButtonVisibility();
  });

  updateButtonVisibility();
});

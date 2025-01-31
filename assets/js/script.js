   //navbar closed automatically without click navbar-toggler-icon

// document.addEventListener("DOMContentLoaded", function () {
//     var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//     var dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var bsCollapse = new bootstrap.Collapse(document.querySelector("#navbarSupportedContent"), { toggle: false });

//     // Close navbar when clicking any nav-link except dropdown
//     navLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             var isDropdownToggle = this.classList.contains("dropdown-toggle");

//             // If it's not a dropdown toggle, close the navbar
//             if (!isDropdownToggle && window.innerWidth < 992) {
//                 bsCollapse.hide();
//             }
//         });
//     });

//     // Close navbar when clicking a dropdown item
//     dropdownItems.forEach(function (item) {
//         item.addEventListener("click", function () {
//             if (window.innerWidth < 992) { // Only close in mobile view
//                 bsCollapse.hide(); // Closes the navbar
//             }
//         });
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//     var dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var navbarCollapse = document.querySelector(".navbar-collapse");

//     var bsCollapse = new bootstrap.Collapse(document.querySelector("#navbarSupportedContent"), { toggle: false });

//     // Toggle the navbar slide in/out on mobile
//     navbarToggler.addEventListener("click", function () {
//         navbarCollapse.classList.toggle("show");
//     });

//     // Close navbar when clicking any nav-link except dropdown
//     navLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             var isDropdownToggle = this.classList.contains("dropdown-toggle");

//             // If it's not a dropdown toggle, close the navbar
//             if (!isDropdownToggle && window.innerWidth < 992) {
//                 navbarCollapse.classList.remove("show");
//             }
//         });
//     });

//     // Close navbar when clicking a dropdown item
//     dropdownItems.forEach(function (item) {
//         item.addEventListener("click", function () {
//             if (window.innerWidth < 992) { // Only close in mobile view
//                 navbarCollapse.classList.remove("show");
//             }
//         });
//     });
// });

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

/*now this is the code*/
// document.addEventListener("DOMContentLoaded", function () {
//     var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//     var dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var closeIcon = document.querySelector(".close-icon"); // Close icon
//     var closeButtons = document.querySelectorAll(".close-btn"); // All elements with .close-btn class
//     var bsCollapse = new bootstrap.Collapse(document.querySelector("#navbarSupportedContent"), { toggle: false });
//     var body = document.body;

//     // Function to close the navbar
//     function closeNavbar() {
//         body.classList.remove("navbar-open");
//         body.classList.remove("body-no-scroll");
//         document.querySelector(".body-overlay")?.remove(); // Remove overlay safely
//         bsCollapse.hide();
//     }

//     // Add overlay when navbar is open
//     navbarToggler.addEventListener("click", function () {
//         if (body.classList.contains("navbar-open")) {
//             closeNavbar();
//         } else {
//             body.classList.add("navbar-open");
//             body.classList.add("body-no-scroll");

//             // Add overlay to prevent body scroll
//             var overlay = document.createElement("div");
//             overlay.classList.add("body-overlay");
//             document.body.appendChild(overlay);
//         }
//     });

//     // Close navbar when clicking the close icon
//     closeIcon.addEventListener("click", closeNavbar);

//     // Close navbar when clicking any .close-btn element
//     closeButtons.forEach(function (btn) {
//         btn.addEventListener("click", closeNavbar);
//     });

//     // Close navbar when clicking any nav-link except dropdown toggle
//     navLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             var isDropdownToggle = this.classList.contains("dropdown-toggle");

//             // If it's not a dropdown toggle, close the navbar
//             if (!isDropdownToggle && window.innerWidth < 992) {
//                 closeNavbar();
//             }
//         });
//     });

//     // Close navbar when clicking a dropdown item
//     dropdownItems.forEach(function (item) {
//         item.addEventListener("click", function () {
//             if (window.innerWidth < 992) { // Only close in mobile view
//                 closeNavbar();
//             }
//         });
//     });

//     // Prevent horizontal scroll issue
//     window.addEventListener("resize", function () {
//         document.documentElement.style.overflowX = "hidden";
//         document.body.style.overflowX = "hidden";
//     });

//     // Fix navbar going up on scroll issue (optional)
//     window.addEventListener("scroll", function () {
//         if (window.scrollY > 0) {
//             document.querySelector(".navbar").classList.add("fixed-top");
//         } else {
//             document.querySelector(".navbar").classList.remove("fixed-top");
//         }
//     });
// });




// document.addEventListener("DOMContentLoaded", function () {
//     var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//     var dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var bsCollapse = new bootstrap.Collapse(document.querySelector("#navbarSupportedContent"), { toggle: false });
//     var body = document.body;

//     // Add overlay when navbar is open
//     navbarToggler.addEventListener("click", function () {
//         if (body.classList.contains("navbar-open")) {
//             body.classList.remove("navbar-open");
//             body.classList.remove("body-no-scroll");
//             document.querySelector(".body-overlay").remove(); // Remove overlay
//         } else {
//             body.classList.add("navbar-open");
//             body.classList.add("body-no-scroll");

//             // Add overlay to prevent body scroll
//             var overlay = document.createElement("div");
//             overlay.classList.add("body-overlay");
//             document.body.appendChild(overlay);
//         }
//     });

//     // Close navbar when clicking any nav-link except dropdown
//     navLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             var isDropdownToggle = this.classList.contains("dropdown-toggle");

//             // If it's not a dropdown toggle, close the navbar
//             if (!isDropdownToggle && window.innerWidth <= 991.98) {
//                 bsCollapse.hide();
//                 body.classList.remove("navbar-open");
//                 body.classList.remove("body-no-scroll");
//                 document.querySelector(".body-overlay").remove(); // Remove overlay
//             }
//         });
//     });

//     // Close navbar when clicking a dropdown item
//     dropdownItems.forEach(function (item) {
//         item.addEventListener("click", function () {
//             if (window.innerWidth <= 991.98) { // Only close in mobile view
//                 bsCollapse.hide();
//                 body.classList.remove("navbar-open");
//                 body.classList.remove("body-no-scroll");
//                 document.querySelector(".body-overlay").remove(); // Remove overlay
//             }
//         });
//     });
// });



// document.addEventListener("DOMContentLoaded", function () {
//     var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
//     var dropdownItems = document.querySelectorAll(".dropdown-menu .dropdown-item");
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var bsCollapse = new bootstrap.Collapse(document.querySelector("#navbarSupportedContent"), { toggle: false });
//     var body = document.body;

//     // Add overlay when navbar is open
//     navbarToggler.addEventListener("click", function () {
//         if (body.classList.contains("navbar-open")) {
//             body.classList.remove("navbar-open");
//             body.classList.remove("body-no-scroll");
//             document.querySelector(".body-overlay").remove(); // Remove overlay
//         } else {
//             body.classList.add("navbar-open");
//             body.classList.add("body-no-scroll");

//             // Add overlay to prevent body scroll
//             var overlay = document.createElement("div");
//             overlay.classList.add("body-overlay");
//             document.body.appendChild(overlay);
//         }
//     });

//     // Close navbar when clicking any nav-link except dropdown
//     navLinks.forEach(function (link) {
//         link.addEventListener("click", function (event) {
//             var isDropdownToggle = this.classList.contains("dropdown-toggle");

//             // If it's not a dropdown toggle, close the navbar
//             if (!isDropdownToggle && window.innerWidth <= 991.98) {
//                 bsCollapse.hide();
//                 body.classList.remove("navbar-open");
//                 body.classList.remove("body-no-scroll");
//                 document.querySelector(".body-overlay").remove(); // Remove overlay
//             }
//         });
//     });

//     // Close navbar when clicking a dropdown item
//     dropdownItems.forEach(function (item) {
//         item.addEventListener("click", function () {
//             if (window.innerWidth <= 991.98) { // Only close in mobile view
//                 bsCollapse.hide();
//                 body.classList.remove("navbar-open");
//                 body.classList.remove("body-no-scroll");
//                 document.querySelector(".body-overlay").remove(); // Remove overlay
//             }
//         });
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var navbar = document.querySelector("#navbarSupportedContent");
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var navbarIcon = navbarToggler.querySelector(".navbar-toggler-icon");
//     var dropdownToggles = document.querySelectorAll(".nav-item .dropdown-toggle");
//     var dropdownMenus = document.querySelectorAll(".dropdown-menu");
//     var bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });

//     // ✅ 1. Toggle sidebar open/close from left
//     navbarToggler.addEventListener("click", function () {
//         navbar.classList.toggle("show-left");
//         document.body.classList.toggle("navbar-open");

//         // ✅ 2. Toggle icon between hamburger and close (using CSS)
//         navbarIcon.classList.toggle("opened"); // This class will toggle between hamburger and close icon
//     });

//     // ✅ 3. Dropdown opens only on first click
//     dropdownToggles.forEach(function (toggle) {
//         toggle.addEventListener("click", function (event) {
//             var parent = this.parentElement;
//             var menu = parent.querySelector(".dropdown-menu");

//             if (!menu.classList.contains("show")) {
//                 event.preventDefault(); // Prevent immediate navigation
//                 dropdownMenus.forEach(m => m.classList.remove("show")); // Close others
//                 menu.classList.add("show");
//             }
//         });
//     });

//     // ✅ 4. Clicking outside closes navbar & dropdowns
//     document.addEventListener("click", function (event) {
//         if (!event.target.closest(".navbar") && !event.target.closest(".navbar-toggler")) {
//             bsCollapse.hide();
//             navbar.classList.remove("show-left");
//             document.body.classList.remove("navbar-open");
//             navbarIcon.classList.remove("opened");

//             dropdownMenus.forEach(menu => menu.classList.remove("show"));
//         }
//     });
//     // ✅ 5. Clicking dropdown item closes navbar (Mobile Only)
//     document.querySelectorAll(".dropdown-menu .dropdown-item").forEach(function (item) {
//         item.addEventListener("click", function () {
//             if (window.innerWidth < 992) {
//                 bsCollapse.hide();
//                 navbar.classList.remove("show-left");
//                 document.body.classList.remove("navbar-open");
//                 navbarIcon.classList.remove("opened");
//             }
//         });
//     });
// });


//new navbar close and open from left code
// document.addEventListener("DOMContentLoaded", function () {
//     var navbar = document.querySelector("#navbarSupportedContent");
//     var navbarToggler = document.querySelector(".navbar-toggler");
//     var navbarIcon = navbarToggler.querySelector(".navbar-toggler-icon");
//     var dropdownToggles = document.querySelectorAll(".nav-item .dropdown-toggle");
//     var dropdownMenus = document.querySelectorAll(".dropdown-menu");
//     var bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });

//     // ✅ 1. Toggle sidebar open/close from left
//     navbarToggler.addEventListener("click", function () {
//         navbar.classList.toggle("show-left");
//         document.body.classList.toggle("navbar-open");

//         // ✅ 2. Toggle icon between hamburger and close
//         if (navbar.classList.contains("show-left")) {
//             navbarIcon.classList.add("close-icon");
//         } else {
//             navbarIcon.classList.remove("close-icon");
//         }
//     });

//     // ✅ 3. Dropdown opens only on first click
//     dropdownToggles.forEach(function (toggle) {
//         toggle.addEventListener("click", function (event) {
//             var parent = this.parentElement;
//             var menu = parent.querySelector(".dropdown-menu");

//             if (!menu.classList.contains("show")) {
//                 event.preventDefault(); // Prevent immediate navigation
//                 dropdownMenus.forEach(m => m.classList.remove("show")); // Close others
//                 menu.classList.add("show");
//             }
//         });
//     });

//     // ✅ 4. Clicking outside closes navbar & dropdowns
//     document.addEventListener("click", function (event) {
//         if (!event.target.closest(".navbar") && !event.target.closest(".navbar-toggler")) {
//             bsCollapse.hide();
//             navbar.classList.remove("show-left");
//             document.body.classList.remove("navbar-open");
//             navbarIcon.classList.remove("close-icon");

//             dropdownMenus.forEach(menu => menu.classList.remove("show"));
//         }
//     });

//     // ✅ 5. Clicking dropdown item closes navbar (Mobile Only)
//     document.querySelectorAll(".dropdown-menu .dropdown-item").forEach(function (item) {
//         item.addEventListener("click", function () {
//             if (window.innerWidth < 992) {
//                 bsCollapse.hide();
//                 navbar.classList.remove("show-left");
//                 document.body.classList.remove("navbar-open");
//                 navbarIcon.classList.remove("close-icon");
//             }
//         });
//     });
// });


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

      //business model - carousel
      // document.addEventListener("DOMContentLoaded", () => {
      //   const carouselInner = document.querySelector(".business-model-section-carousel-container-carousel-inner");
      //   const prevBtn = document.querySelector(".prev-btn");
      //   const nextBtn = document.querySelector(".next-btn");
      
      //   const cardWidth = 220; // Fixed width of a card
      //   const visibleCards = 3; // Number of visible cards
      //   const totalCards = document.querySelectorAll(".card").length;
      
      //   let currentIndex = 0; // Start with the first card (fixes the issue)
      
      //   function updateCarousel() {
      //     const offset = -(currentIndex * cardWidth);
      //     carouselInner.style.transform = `translateX(${offset}px)`;
      //   }
      
      //   nextBtn.addEventListener("click", () => {
      //     if (currentIndex < totalCards - visibleCards) {
      //       currentIndex++;
      //       updateCarousel();
      //     }
      //   });
      
      //   prevBtn.addEventListener("click", () => {
      //     if (currentIndex > 0) {
      //       currentIndex--;
      //       updateCarousel();
      //     }
      //   });
      
      //   // Initialize carousel position
      //   updateCarousel();
      // });
      
     //business model-carousel with auto carousel moving
      document.addEventListener("DOMContentLoaded", () => {
        const carouselInner = document.querySelector(".business-model-section-carousel-container-carousel-inner");
        const prevBtn = document.querySelector(".prev-btn");
        const nextBtn = document.querySelector(".next-btn");
    
        const cardWidth = 220; // Fixed width of a card
        const visibleCards = 3; // Number of visible cards
        const totalCards = document.querySelectorAll(".card").length;
    
        let currentIndex = 0; // Start with the first card
        // let autoSlideInterval;
    
        function updateCarousel() {
            const offset = -(currentIndex * cardWidth);
            carouselInner.style.transform = `translateX(${offset}px)`;
        }
    
        function nextSlide() {
            if (currentIndex < totalCards - visibleCards) {
                currentIndex++;
            } else {
                currentIndex = 0; // Loop back to the start
            }
            updateCarousel();
        }
    
        function prevSlide() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalCards - visibleCards; // Loop to the last set of visible cards
            }
            updateCarousel();
        }
    
        // // Auto-slide function
        // function startAutoSlide() {
        //     autoSlideInterval = setInterval(nextSlide, 3700); // Change slide every 3.7 seconds
        // }
    
        // // Stop auto-slide on hover
        // function stopAutoSlide() {
        //     clearInterval(autoSlideInterval);
        // }
    
        // Event Listeners for Next/Prev Buttons
        nextBtn.addEventListener("click", () => {
            nextSlide();
            // stopAutoSlide(); // Reset auto-slide timer when manually navigating
            // startAutoSlide();
        });
    
        prevBtn.addEventListener("click", () => {
            prevSlide();
            // stopAutoSlide();
            // startAutoSlide();
        });
    
        // Pause auto-slide when hovering over the carousel
        // carouselInner.addEventListener("mouseenter", stopAutoSlide);
        // carouselInner.addEventListener("mouseleave", startAutoSlide);
    
        // Initialize carousel position & start auto-sliding
        updateCarousel();
        // startAutoSlide();
    });
   
    /*dummy bsuiness carousel script**/
//     document.addEventListener("DOMContentLoaded", () => {
//         const carouselInner = document.querySelector(".business-model-section-carousel-container-carousel-inner");
//         const prevBtn = document.querySelector(".prev-btn");
//         const nextBtn = document.querySelector(".next-btn");
        
//         const totalCards = document.querySelectorAll(".card").length;
// const cards = document.querySelectorAll('.card');
// let cardWidth = cards[0].offsetWidth + 10; // Card width + margin
// let totalWidth = cardWidth * cards.length;

// carouselInner.style.width = totalWidth + 'px'; // Set the total width for the carousel inner container

// let index = 0;

// function moveCarousel() {
//     if (index < cards.length - 1) {
//         index++;
//     } else {
//         index = 0; // Reset to first card
//     }

//     carouselInner.style.transform = `translateX(-${index * cardWidth}px)`;
// }

// setInterval(moveCarousel, 3000); // Moves the carousel every 3 seconds

    
//         let currentIndex = 0; // Start with the first card
//         let autoSlideInterval;
        
//         function getCardWidth() {
//             // Dynamically adjust card width based on screen size and visible cards
//             const width = window.innerWidth;
    
//             if (width < 576) {
//                 return 220; // xs
//             } else if (width < 768) {
//                 return 220; // sm
//             } else if (width < 992) {
//                 return 220; // md
//             } else if (width < 1200) {
//                 return 220; // lg
//             } else {
//                 return 220; // xl
//             }
//         }
    
//         function updateCarousel() {
//             const cardWidth = getCardWidth();
//             const offset = -(currentIndex * cardWidth);
//             carouselInner.style.transform = `translateX(${offset}px)`;
//         }
    
//         function nextSlide() {
//             const totalCards = document.querySelectorAll(".card").length;
//             const visibleCards = Math.floor(window.innerWidth / getCardWidth());
//             if (currentIndex < totalCards - visibleCards) {
//                 currentIndex++;
//             } else {
//                 currentIndex = 0; // Loop back to the start
//             }
//             updateCarousel();
//         }
    
//         function prevSlide() {
//             const visibleCards = Math.floor(window.innerWidth / getCardWidth());
//             if (currentIndex > 0) {
//                 currentIndex--;
//             } else {
//                 currentIndex = totalCards - visibleCards; // Loop to the last set of visible cards
//             }
//             updateCarousel();
//         }
    
//         // Auto-slide function
//         function startAutoSlide() {
//             autoSlideInterval = setInterval(nextSlide, 3700); // Change slide every 3.7 seconds
//         }
    
//         // Stop auto-slide on hover
//         function stopAutoSlide() {
//             clearInterval(autoSlideInterval);
//         }
    
//         // Event Listeners for Next/Prev Buttons
//         nextBtn.addEventListener("click", () => {
//             nextSlide();
//             stopAutoSlide(); // Reset auto-slide timer when manually navigating
//             startAutoSlide();
//         });
    
//         prevBtn.addEventListener("click", () => {
//             prevSlide();
//             stopAutoSlide();
//             startAutoSlide();
//         });
    
//         // Pause auto-slide when hovering over the carousel
//         carouselInner.addEventListener("mouseenter", stopAutoSlide);
//         carouselInner.addEventListener("mouseleave", startAutoSlide);
    
//         // Initialize carousel position & start auto-sliding
//         updateCarousel();
//         startAutoSlide();
//     });
    /*business model  carousel**/
// document.addEventListener("DOMContentLoaded", function () {
//     const carouselInner = document.querySelector(".business-model-section-carousel-container-carousel-inner");
//     const prevBtn = document.querySelector(".prev-btn");
//     const nextBtn = document.querySelector(".next-btn");
  
//     function getCardWidth() {
//       return document.querySelector(".card").offsetWidth + 30; // Include left/right margins
//     }
  
//     let scrollAmount = 0;
//     let autoPlayInterval;
  
//     function moveNext() {
//       let cardWidth = getCardWidth();
//       if (scrollAmount < carouselInner.scrollWidth - carouselInner.clientWidth) {
//         scrollAmount += cardWidth;
//       } else {
//         scrollAmount = 0; // Loop back to start
//       }
//       carouselInner.style.transform = `translateX(-${scrollAmount}px)`;
//     }
  
//     function movePrev() {
//       let cardWidth = getCardWidth();
//       if (scrollAmount > 0) {
//         scrollAmount -= cardWidth;
//       } else {
//         scrollAmount = carouselInner.scrollWidth - carouselInner.clientWidth;
//       }
//       carouselInner.style.transform = `translateX(-${scrollAmount}px)`;
//     }
  
//     function startAutoPlay() {
//       autoPlayInterval = setInterval(moveNext, 3000);
//     }
  
//     function stopAutoPlay() {
//       clearInterval(autoPlayInterval);
//     }
  
//     prevBtn.addEventListener("click", function () {
//       stopAutoPlay();
//       movePrev();
//       startAutoPlay();
//     });
  
//     nextBtn.addEventListener("click", function () {
//       stopAutoPlay();
//       moveNext();
//       startAutoPlay();
//     });
  
//     window.addEventListener("resize", () => { scrollAmount = 0; });
  
//     startAutoPlay();
//   });
  
  

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

/*fade section- whole website animation */
// Initialize the Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the section enters the viewport
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);  // Stop observing once it's visible
        }
    });
}, {
    threshold: 0.2  // Trigger when 20% of the section is in view
});

// Target all elements with the 'fade-section' class
const fadeSections = document.querySelectorAll('.fade-section');

// Observe each section
fadeSections.forEach(section => {
    observer.observe(section);
});


/*reverse engineering carousel*/

// document.addEventListener("DOMContentLoaded", function () {
//   // Select all carousel containers
//   const carousels = document.querySelectorAll(".business-model-section-carousel-container");

//   // Loop through each carousel separately
//   carousels.forEach((carousel) => {
//       const carouselInner = carousel.querySelector(".business-model-section-carousel-container-carousel-inner");
//       const prevBtn = carousel.querySelector(".prev-btn");
//       const nextBtn = carousel.querySelector(".next-btn");

//       let scrollAmount = 0;
//       let autoPlayInterval;

//       function getCardWidth() {
//           return carouselInner.querySelector(".card").offsetWidth + 30; // Include left/right margins
//       }

//       function moveNext() {
//           let cardWidth = getCardWidth();
//           if (scrollAmount < carouselInner.scrollWidth - carouselInner.clientWidth) {
//               scrollAmount += cardWidth;
//           } else {
//               scrollAmount = 0; // Reset to the beginning
//           }
//           carouselInner.style.transform = `translateX(-${scrollAmount}px)`;
//       }

//       function movePrev() {
//           let cardWidth = getCardWidth();
//           if (scrollAmount > 0) {
//               scrollAmount -= cardWidth;
//           } else {
//               scrollAmount = carouselInner.scrollWidth - carouselInner.clientWidth;
//           }
//           carouselInner.style.transform = `translateX(-${scrollAmount}px)`;
//       }

//       function startAutoPlay() {
//           autoPlayInterval = setInterval(() => {
//               moveNext();
//           }, 3000); // Move every 3 seconds
//       }

//       function stopAutoPlay() {
//           clearInterval(autoPlayInterval);
//       }

//       // Event listeners for buttons
//       prevBtn.addEventListener("click", function () {
//           stopAutoPlay();
//           movePrev();
//           startAutoPlay();
//       });

//       nextBtn.addEventListener("click", function () {
//           stopAutoPlay();
//           moveNext();
//           startAutoPlay();
//       });

//       // Reset position on resize
//       window.addEventListener("resize", () => {
//           scrollAmount = 0;
//           carouselInner.style.transform = `translateX(0px)`;
//       });

//       // Start autoplay for each carousel separately
//       startAutoPlay();
//   });
// });


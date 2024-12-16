gsap.fromTo(
  ".splash-scr",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1,
    delay: 1.5,
  }
);

gsap.fromTo(
  ".landing",
  {
    y: 0,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    delay: 2,
  }
);
function downloadCV_PDF() {
    const link = document.createElement('a');
    link.href = 'Asset/Portfolio/CV-Muhammad Risya Maulana-2024.pdf';
    link.download = 'CV-Muhammad Risya Maulana-2024.pdf'; // Optional: set a custom filename
    link.click();
}

// UNDER DEVELOP -> START
/*function scrollAbout(){
  const tgt = document.querySelector('.about, .reveal, .active');
  const valueScroll = document.getElementById('about-section');
  const pos = tgt.getBoundingClientRect();
  if (tgt) {
    setTimeout(() =>{
      tgt.style.transition = "10s ease-in-out";
      window.scrollTo({ 
          top: pos.top - 150, // Adjust the offset as needed
          behavior: 'smooth'
      });
    }, 100)
  }
} */
// END

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const hoverTargetsGeneral = document.querySelectorAll('.logo, .o-bar, .c-bar, .d-cv, .links, .more-p, .c1, .c2, .c3');
    const hoverTargetProject = document.querySelectorAll('.show-card, .card-work-1, .card-work-3');
  
    // Check if the cursor element exists
    if (cursor) {
      let mouseX = 0, mouseY = 0; // Current mouse position
      let posX = 0, posY = 0; // Cursor position

      const offsetX = -5; // Horizontal offset
      const offsetY = 25; // Vertical offset
  
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX; // Update current mouse position
        mouseY = e.clientY;
      });
  
      // Animation loop
      function updateCursor() {
        posX += (mouseX - posX) * 0.1; // Interpolating the X position
        posY += (mouseY - posY) * 0.1; // Interpolating the Y position
  
        cursor.style.left = `${posX + offsetX}px`; // Update cursor position
        cursor.style.top = `${posY + offsetY}px`;
  
        requestAnimationFrame(updateCursor); // Call the function again for smooth movement
      }
  
      updateCursor(); // Start the animation loop

      hoverTargetsGeneral.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('grow'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
      });
      hoverTargetProject.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('grow-p'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('grow-p'));
      });
    }

    const textItems = document.querySelectorAll('.skills ul li');
    let index = 0;

    function revealText() {
        // Remove 'visible' class from all text items
        textItems.forEach(item => {
        item.classList.remove('visible');
        });

        // Add 'visible' class to the current index
        textItems[index].classList.add('visible');

        // Move to the next index
        index++;

        // If the index is out of bounds, reset it to 0
        if (index >= textItems.length) {
        index = 0;
        }
    }

    // Reveal text every 1 second (adjust as needed)
    setInterval(revealText, 1000); // Change text every 1 second

    let lastScrollTop = 0;
    let mouseIdleTimeout;
    let scrollTimeOut;
        const navbar = document.querySelector('.navbar');

        function showNavbar() {
          navbar.classList.remove('hidden');
        }

      // Function to hide navbar
        function hideNavbar() {
            navbar.classList.add('hidden');
        }

        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeOut);
            showNavbar();
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                hideNavbar();
            } else {
                // Scrolling up
                showNavbar();
            }
            lastScrollTop = scrollTop;
        });

        window.addEventListener('mousemove', () => {
          // Clear mouse idle timeout on movement
          clearTimeout(mouseIdleTimeout);
          // showNavbar();

          // Set timeout to hide navbar after 2 seconds of no cursor movement
          mouseIdleTimeout = setTimeout(() => {
              hideNavbar();
          }, 2000); // 2000ms = 2 seconds
      });

});
window.addEventListener('scroll', reveal);

function reveal(){
  // console.log('scroll triggered');
  var rev = document.querySelectorAll('.reveal');
  // console.log(document.querySelectorAll('.reveal'));

  for (var i = 0; i < rev.length; i++) {
    var wHeight = window.innerHeight;
    // console.log(window.innerHeight);
    var revTop = rev[i].getBoundingClientRect().top;
    // console.log(revTop);
    var revPoint = 100;

    if (revTop < wHeight - revPoint){
      rev[i].classList.add('active');
    } else {
      rev[i].classList.remove('active');
    }
  }
}



  
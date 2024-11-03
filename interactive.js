function downloadCV_PDF() {
    const link = document.createElement('a');
    link.href = 'Asset/Portfolio/CV-Muhammad Risya Maulana-2024.pdf';
    link.download = 'CV-Muhammad Risya Maulana-2024.pdf'; // Optional: set a custom filename
    link.click();
}
document.addEventListener('DOMContentLoaded', () => {

    
    const cursor = document.querySelector('.cursor');
    const hoverTargets = document.querySelectorAll('.logo, .o-bar, .c-bar, .d-cv');
  
    // Check if the cursor element exists
    if (cursor) {
      let mouseX = 0, mouseY = 0; // Current mouse position
      let posX = 0, posY = 0; // Cursor position

      const offsetX = -1; // Horizontal offset
      const offsetY = 20; // Vertical offset
  
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

      hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => cursor.classList.add('grow'));
        target.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
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

    const navbar = document.querySelector('.navbar');
    let timeout;

    navbar.addEventListener('mouseover', () => {
        clearTimeout(timeout); // Clear any existing timeout
        navbar.classList.remove('hidden'); // Show navbar
    });

    navbar.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            navbar.classList.add('hidden'); // Hide navbar after 1 second
        }, 2000); // 1000 milliseconds = 1 second
    });

});
  
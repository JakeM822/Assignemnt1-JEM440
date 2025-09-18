document.addEventListener('DOMContentLoaded', function() {
  // Grab the main carousel container once the DOM is fully loaded
  const root = document.querySelector('.carousel');
  if (root) {
    // Pull in all the slides and navigation buttons
    const items = root.querySelectorAll('.carousel-item');
    const prevBtn = root.querySelector('.carousel-btn.prev');
    const nextBtn = root.querySelector('.carousel-btn.next');

    if (items.length) {
      // Track which slide we’re on + hold a reference to the auto-play timer
      let index = 0, timer = null;

      // Helper to activate a specific slide
      function setActive(n) {
        const prev = index;
        if (n === prev) return; // Don’t bother if it’s already showing
        items[prev].classList.remove('active');
        items[n].classList.add('active');
        index = n;
      }

      // Move forward or backward through the slides
      function nextSlide() { setActive((index + 1) % items.length); }
      function prevSlide() { setActive((index - 1 + items.length) % items.length); }

      // Kick off automatic cycling every 3 seconds
      function start() { 
        stop(); // clear any previous timer first
        timer = setInterval(nextSlide, 3000); 
      }

      // Stop the auto-play loop if needed
      function stop() { 
        if (timer) { 
          clearInterval(timer); 
          timer = null; 
        } 
      }

      // Hook up the buttons so clicking also restarts the auto-play
      prevBtn.addEventListener('click', () => { prevSlide(); start(); });
      nextBtn.addEventListener('click', () => { nextSlide(); start(); });

      // Set up the carousel: mark it ready, show the first slide, and start spinning
      root.classList.add('ready');
      items[0].classList.add('active');
      start();
    }
  }

// === Scroll To Top Button Logic ===

// Listen for scroll events on the window
window.addEventListener("scroll", toggleScrollButton);

function toggleScrollButton() {
  const button = document.getElementById("scrollToTopBtn");
  if (!button) return;

  // Show button after the user scrolls down a bit
  if (window.scrollY > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

// Smooth scroll back to the top when clicked
window.scrollToTop = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};


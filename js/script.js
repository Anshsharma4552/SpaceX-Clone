// Get elements from the DOM
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

// Event listeners
btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

// Function to toggle navigation menu
function navToggle() {
  btn.classList.toggle('open'); // Toggle button open class
  overlay.classList.toggle('overlay-show'); // Show/hide overlay
  document.body.classList.toggle('stop-scrolling'); // Prevent scrolling when menu is open
  menu.classList.toggle('show-menu'); // Show/hide mobile menu
}

// Function to track scroll position and trigger counter animation
function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp(); // Start counter animation
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset(); // Reset counter when scrolling back up
    scrollStarted = false;
  }
}

// Function to animate number counting up
function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0'; // Initialize counter text to 0

    const updateCounter = () => {
      const target = +counter.getAttribute('data-target'); // Get target number
      const c = +counter.innerText; // Get current counter value
      const increment = target / 100; // Define increment step

      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`; // Increase counter value
        setTimeout(updateCounter, 75); // Call function recursively
      } else {
        counter.innerText = target; // Set final value when target is reached
      }
    };

    updateCounter(); // Start the counter animation
  });
}

// Function to reset counter values to 0
function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

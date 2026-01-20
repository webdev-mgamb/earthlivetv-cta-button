const button = document.getElementById('earthBtn');

button.addEventListener('click', function(e) {
  // 1. Detect if it is a "touch" interaction (Mobile)
  // We check if the hover state was already active or not.
  // But simplest logic: Pause navigation for 500ms to show the "active" animation state.
  
  e.preventDefault(); // Stop immediate jump
  
  // Add the class that triggers the CSS hover effects
  button.classList.add('is-active');

  // Wait 600ms (so the user sees the spin speed up and the glow grow)
  setTimeout(() => {
    // Then navigate
    window.location.href = button.href;
  }, 600);
});
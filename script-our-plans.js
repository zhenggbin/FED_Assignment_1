  // Smooth scrolling to top function 
  function scrollingTOP() {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    });
  }

  // Show or hide the scroll to top button based on scroll position
  document.addEventListener("scroll", function () {
    const scrollToTopBtn = document.getElementById("back-to-top-btn");
    if (scrollToTopBtn) {
        // Using if-else loop to check whether the scrolling position is more than 100px from the top of the page
        if (document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block"; // if true, display the button
        } else {
            scrollToTopBtn.style.display = "none"; // if false, hide the button
        }
    }
  });

  // Scrolling Animation (As user scroll down, each sections of the page start to pop out)
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scrolling-animation').forEach(section => {
      const obs = new IntersectionObserver(entries => {
        // Check whether there is intersection when entry when scrolling down
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show'); //if true, display the content.
          }
        });
      }, { threshold: 0.2 }); 

      obs.observe(section);
    });
});
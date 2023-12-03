// Form Validation
function validateForm() {
    var firstName = document.getElementById('first_name').value;
    var lastName = document.getElementById('last_name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Check whether have empty input for email, phone, etc.
    if (firstName === '' || lastName === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Check email format, such as whether have "@".
    var validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validEmail.test(email)) {
        alert('Please enter a valid email address with a "@".');
        return false;
    }

    // Check phone format whether it has 8 digits, and starts with either 9 or 8.
    var validPhone = /^[89]\d{7}$/;
    if (validPhone.test(phone)) {
        alert('Please enter a valid phone number with 8 digits, starting with either number "9" or "8".');
        return false;
    }

    // Show successful message when all inputs are valid
    successMessage();
    return true;
  }

    function successMessage() {
    alert('Form submitted successfully! Thank you!');
}

  // Smooth scroll to top function 
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
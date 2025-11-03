// Mobile nav toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  const spans = mobileToggle.querySelectorAll('span');
  if (navMenu.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translateY(8px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
});

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    const spans = mobileToggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  });
});

// --- Contact Form Simulation ---
const form = document.getElementById('contactForm');
const formStatus = document.querySelector('.form-status');
const submitButton = form.querySelector('.btn-submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  submitButton.classList.add('loading');
  submitButton.disabled = true;
  formStatus.style.display = 'none';

  // Sending Data
  setTimeout(() => {
    try {
      // Simulate success
      formStatus.className = 'form-status success';
      formStatus.textContent = 'Thank you for your message! I\'ll get back to you soon.';
      formStatus.style.display = 'block';
      form.reset();

    } catch (error) {
      // Simulate an error
      console.error('Error:', error);
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Oops! Something went wrong. Please try again.';
      formStatus.style.display = 'block';
    } finally {
      // Re-enable the button
      submitButton.classList.remove('loading');
      submitButton.disabled = false;
    }
  }, 1000); // Delay of 1 sec for seeing functionality of loader
});

// Section Fade-in-on-Scroll Animation using API: Intersecction Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }  // Gives you fade and slide up effect
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Scroll listener for Utility Button
let lastScroll = 0;
const scrollUtilityBtn = document.getElementById('scrollUtilityBtn');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Scroll Utility Button logic
  if (currentScroll > 200) { 
    // Show 'Scroll to Top' (Up Arrow)
    scrollUtilityBtn.classList.add('show-up');
    scrollUtilityBtn.href = '#home';
    scrollUtilityBtn.setAttribute('aria-label', 'Scroll back to top');
  } else {
    // Show 'Scroll to Next' (Down Arrow)
    scrollUtilityBtn.classList.remove('show-up');
    scrollUtilityBtn.href = '#footer';
    scrollUtilityBtn.setAttribute('aria-label', 'Scroll to next section');
  }

  lastScroll = currentScroll;
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

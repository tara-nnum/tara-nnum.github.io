// ===== Mobile Menu Toggle =====
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu').querySelector('ul');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
      navMenu.classList.remove('show');
    }
  });
});

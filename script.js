const res_nav = document.getElementById('mobile-menu-button');
const navbar = document.getElementById('navbar');

// Responsive Nav
let state = 1;
function showNav() {
  if(state == 1) {
    navbar.style.width='100%';
    state = 0;
  } else {
    navbar.style.width='0%';
    state = 1;
  }
}

// Loading Animations
window.onload =  function () {
  let element = document.querySelector('.animated-element');
  gsap.set(element, { opacity: 0, y: 20 });
  let tl = gsap.timeline({ defaults: { duration: 0.5 } });
  tl.to(element, { opacity: 1, y: 0 });
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        tl.play();
        observer.unobserve(element);
      }
    });
  });
  observer.observe(element);
};
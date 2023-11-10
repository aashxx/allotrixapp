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

const navHome = document.getElementById("home");
const navAbout = document.getElementById("why-choose-allotrix");
const features = document.getElementById("allotrix-features");
const navPricing = document.getElementById("pricing");
const navContact = document.getElementById("contact");
const download = document.getElementById("download");



navHome.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector(".hero");
  targetSection.scrollIntoView({ behavior: "smooth" });
})

navAbout.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector(".why-choose");
  targetSection.scrollIntoView({ behavior: "smooth" });
})

navPricing.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector(".features");
  targetSection.scrollIntoView({ behavior: "smooth" });
})

navPricing.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector("#pricing");
  targetSection.scrollIntoView({ behavior: "smooth" });
})


navContact.addEventListener("click", (e)=>{
  e.preventDefault();
  const targetSection = document.querySelector(".contact-container");
  targetSection.scrollIntoView({ behavior: "smooth" });
})

download.addEventListener("click", (e)=>{
  e.preventDefault();
})
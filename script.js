
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


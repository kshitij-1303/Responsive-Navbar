const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll('.nav-links li');
  //toggle
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    //animate
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      }
      else {
        link.style.animation = `navAnimate 0.5s forwards ease ${index / 7 + 1.5}s`;

      }
    });
  });


}
navSlide();

const menuButton = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
const cross = document.querySelector('.cross');

menuButton.addEventListener('click', (event) => {
  event.stopPropagation(); 
  navbar.classList.toggle('open');
});

document.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
    navbar.classList.remove('open');
  }
});
cross.addEventListener('click', (event) => {
    event.stopPropagation(); 
    navbar.classList.remove('open'); 
});

const scrollToSection = (triggerId, targetClass) => {
  const trigger = document.getElementById(triggerId);
  const target = document.querySelector(`.${targetClass}`);
  
  if (trigger && target) {
    trigger.addEventListener('click', () => {
      target.scrollIntoView({ behavior: 'smooth' });
    });
  }
};

scrollToSection('a', 'container1');
scrollToSection('b', 'classes');
scrollToSection('c', 'languages');
scrollToSection('d', 'about');
scrollToSection('e', 'Contactme');

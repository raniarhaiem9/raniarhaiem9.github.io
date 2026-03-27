// ===== Scroll-triggered animations =====
const sections = document.querySelectorAll('.section');
const staggerElements = document.querySelectorAll('.animate-stagger');
const skillBars = document.querySelectorAll('.skill-bar .fill');
const projectCards = document.querySelectorAll('.project-card');
const timelineItems = document.querySelectorAll('.timeline-item');
const eduCards = document.querySelectorAll('.edu-card');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  // Sections
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if(top < triggerBottom){
      section.classList.add('show');
    }
  });

  // Stagger elements (skills)
  staggerElements.forEach((el, i) => {
    const top = el.getBoundingClientRect().top;
    if(top < triggerBottom){
      setTimeout(() => el.classList.add('show'), i * 150);
    }
  });

  // Project cards stagger
  projectCards.forEach((card, i) => {
    const top = card.getBoundingClientRect().top;
    if(top < triggerBottom){
      setTimeout(() => card.classList.add('show'), i * 150);
    }
  });

  // Timeline items
  timelineItems.forEach((item, i) => {
    const top = item.getBoundingClientRect().top;
    if(top < triggerBottom){
      setTimeout(() => item.classList.add('show'), i * 150);
    }
  });

  // Education cards
  eduCards.forEach((card, i) => {
    const top = card.getBoundingClientRect().top;
    if(top < triggerBottom){
      setTimeout(() => card.classList.add('show'), i * 150);
    }
  });

  // Skill bars fill animation
  skillBars.forEach(bar => {
    const top = bar.getBoundingClientRect().top;
    if(top < triggerBottom){
      const percent = bar.dataset.percent;
      bar.style.width = percent;
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// ===== Hero typing effect =====
const heroHeader = document.querySelector('#hero h1');
const heroText = heroHeader.textContent; // Use existing h1 text
heroHeader.textContent = ''; // clear for typing
let index = 0;

function typeHero() {
  if(index < heroText.length){
    heroHeader.innerHTML += heroText.charAt(index) === '\n' ? '<br>' : heroText.charAt(index);
    index++;
    setTimeout(typeHero, 50);
  }
}

window.addEventListener('load', () => {
  setTimeout(typeHero, 500);
});
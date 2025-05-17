// Animate skill bars on page load
window.addEventListener('DOMContentLoaded', () => {
  const skills = [
  { selector: '.sql', level: 80 },
  { selector: '.excel', level: 80 },
  { selector: '.powerbi', level: 70 },
  { selector: '.python', level: 60 },
  { selector: '.cloud', level: 40 }
];


  skills.forEach(skill => {
    const bar = document.querySelector(skill.selector);
    if (bar) {
      bar.style.width = skill.level + '%';
    }
  });
});




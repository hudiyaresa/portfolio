// script.js
document.addEventListener('DOMContentLoaded', () => {
  const exploreBtn = document.getElementById('explore-btn');
  const readMoreBtn = document.getElementById('read-more-btn');
  const hiddenProjects = document.querySelectorAll('.project-card.hidden');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('#navbar nav ul');

  // Smooth scroll to About section
  exploreBtn.addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });

  // Expand hidden projects
  readMoreBtn.addEventListener('click', () => {
    hiddenProjects.forEach(project => project.classList.remove('hidden'));
    readMoreBtn.style.display = 'none';
  });

  // Highlight active navbar link
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Toggle hamburger menu
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
});

function openImage(src, alt) {
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>${alt}</title>
    <style>
      body { margin: 0; background-color: #f0f0f0; display: flex; justify-content: center; align-items: center; min-height: 100vh;}
      .expanded-image {
        max-width: 90vw;
        max-height: 90vh;
        object-fit: contain;
        display: block;
        margin: 0 auto;
      }
    </style>
    </head>
    <body>
      <img src="${src}" alt="${alt}" class="expanded-image">
    </body>
    </html>
  `);
  newWindow.document.close();
}
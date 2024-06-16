function toggleMenu() {
    document.getElementById('menu').classList.toggle('hidden');
  }

  document.addEventListener("DOMContentLoaded", function() {
    const tabLinks = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content] > div');
  
    tabLinks.forEach(link => {
      link.addEventListener('click', () => {
        const target = document.querySelector(link.getAttribute('data-tab-target'));
  
        tabLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => {
          content.classList.add('hidden');
          content.classList.remove('block');
        });
  
        link.classList.add('active');
        target.classList.remove('hidden');
        target.classList.add('block');
      });
    });
  });
  
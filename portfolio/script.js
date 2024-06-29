document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
  
    for (const link of links) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed navbar
          behavior: 'smooth'
        });
  
        // Add active class to the clicked link and remove from others
        links.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    }
  });
  
document.addEventListener('DOMContentLoaded', function() {
    function updateCursorClasses() {
      const cursorOutline = document.querySelector('.cursor-outline');
      const cursorDot = document.querySelector('.cursor-dot');
      
      if (window.innerWidth < 900) {
        cursorOutline.classList.remove('cursor-outline');
        cursorDot.classList.remove('cursor-dot');
      } else {
        cursorOutline.classList.add('cursor-outline');
        cursorDot.classList.add('cursor-dot');
      }
    }
  
    // Initial check
    updateCursorClasses();
  
    // Listen for resize events
    window.addEventListener('resize', updateCursorClasses);
});


// navbar three  dot button script
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');
  const closeMenu = document.getElementById('close-menu');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    menuList.classList.toggle('active');
  });

  closeMenu.addEventListener('click', function() {
    menuToggle.classList.remove('active');
    menuList.classList.remove('active');
  });
});
  
  
function clickMenu() {
    var nav = document.querySelector('.nav-links');
    var burguerIcon = document.getElementById('burguer');
    
    // Alterna a visibilidade do menu
    nav.classList.toggle('active');
    
    // Alterna entre o ícone "menu" e "close"
    if (burguerIcon.textContent === 'menu') {
      burguerIcon.textContent = 'close';
    } else {
      burguerIcon.textContent = 'menu';
    }
  }
  


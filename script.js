const navbarEl = document.querySelector('.navbar'),
  togglerEl = document.querySelector('.navbar-toggler')

togglerEl.addEventListener('click', (e) => navbarEl.classList.toggle('active'))

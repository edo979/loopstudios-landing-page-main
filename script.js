const navbarEl = document.querySelector('.navbar'),
  togglerEl = document.querySelector('.navbar-toggler'),
  closeBtn = document.querySelector('.navbar-close')

togglerEl.addEventListener('click', (e) => navbarEl.classList.toggle('active'))

closeBtn.addEventListener('click', (e) => navbarEl.classList.toggle('active'))

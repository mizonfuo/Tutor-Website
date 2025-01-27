document.addEventListener('DOMContentLoaded', function(){
  const navbar = document.querySelector('nav');
  const toggler = document.querySelector('.fa-bars')
  const mobileNav = document.querySelector('.nav-menu-mobile');

  document.addEventListener('scroll', function(){
    if (window.scrollY > 0) {
      navbar.classList.add('colored-nav')
    } else {
      navbar.classList.remove('colored-nav')
    }
  });

  toggler.addEventListener('click', function(){
    mobileNav.classList.toggle('swipe-in')
  })
})
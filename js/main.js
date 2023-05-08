var navbar = document.querySelector('.navigation')
// var nav = document.getElementsByClassName('.navItem')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 90) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  
};
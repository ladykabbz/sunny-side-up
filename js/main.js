var navbar = document.querySelector(".navigation");
// var nav = document.getElementsByClassName('.navItem')

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 90) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

document.getElementById("book").addEventListener("click", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;

  alert("Thank you " + name + ", we will get back to you soon❤");
});

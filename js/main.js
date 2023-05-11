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
  event.preventDefault(); // Prevents the form from being submitted

  // Get the value of the name input field
  var name = document.getElementById("name").value;

  // Display an alert message including the name
  alert("Thank you, " + name + ", we will get back to you soon❤");

  // Optionally, you can add code here to perform additional actions or submit the form data to a server
});

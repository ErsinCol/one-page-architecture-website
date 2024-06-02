const pageUp = document.getElementById("pageUp");

window.onscroll = scrollFunction;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    pageUp.style.display = "block";
  } else {
    pageUp.style.display = "none";
  }
}

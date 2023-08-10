var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
document.addEventListener("DOMContentLoaded", () => {
  navCate();
})
function navCate() {
  const menuCategories = document.querySelector(".category-menu");
  const dropdownCategories = document.querySelector(".list-category");
  let isOpen = false;
  menuCategories.addEventListener("click", () => {
    if (!isOpen) {
      console.log(isOpen)
      dropdownCategories.style.height = "480px";
      isOpen = true;
    } else {
      dropdownCategories.style.height = "0";
      isOpen = false;
    }
  });

  document.addEventListener("click", (event) => {
    if (!menuCategories.contains(event.target)) {
      dropdownCategories.style.height = "0";
      isOpen = false;
    }
  });
}




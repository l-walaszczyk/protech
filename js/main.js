var iframe = document.querySelector("iframe");
var imgLogo = document.querySelector("div.logo img");
var menuItems = document.querySelectorAll("button");

var offset = 46;
iframe.width = iframe.parentElement.offsetWidth;
iframe.height = iframe.parentElement.offsetHeight + offset;
iframe.style.top = "-" + offset + "px";

var moveToSection = function moveToSection() {
  var sectionClass = this.dataset.section;
  sectionElement = document.getElementsByClassName(sectionClass);
  $("body, html").animate({
    scrollTop: $(sectionElement).offset().top - imgLogo.offsetHeight * 1.5,
  });
};

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", moveToSection);
}

imgLogo.addEventListener("click", moveToSection);

const navLinks = document.querySelectorAll(".navigation__link")
const navToggle = document.querySelector("#nav-toggle")
const listLength = navLinks.length

for (let i = 0; i < listLength; ++i) {
  navLinks[i].addEventListener("click", function () {
    navToggle.checked = false
  })
}

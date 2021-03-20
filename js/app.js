const navLinks = document.querySelectorAll(".navigation__link")
const navToggle = document.querySelector("#nav-toggle")

const nodeListForEach = function (list, callback) {
  listLength = list.length
  for (let i = 0; i < listLength; i++) {
    callback(list[i], i)
  }
}

nodeListForEach(navLinks, function (current) {
  current.addEventListener("click", function () {
    navToggle.checked = false
  })
})

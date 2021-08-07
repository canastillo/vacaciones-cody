// Change navbar background color. Show and hide shade
let menuButton = document.querySelector('#menu-btn')

menuButton.addEventListener('change', () => {
    if (menuButton.checked) {
        let nav = document.querySelector('nav')
        nav.style.backgroundColor = "#fd63d5"

        let shade = document.querySelector('#shade')
        shade.classList.remove("shade--hidden")
        shade.classList.add("shade--showing")
    } else {
        let nav = document.querySelector('nav')
        nav.style.backgroundColor = "rgba(250, 250, 250, .9)"

        let shade = document.querySelector('#shade')
        shade.classList.remove("shade--showing")
        shade.classList.add("shade--hidden")
    }
})


// Close navbar when clicking on shade
let shade = document.querySelector('#shade')

shade.addEventListener('click', () => {
    let menuButton = document.querySelector('#menu-btn')
    let change = new Event('change');

    menuButton.checked = false
    menuButton.dispatchEvent(change)
})


// Change nav background color on scrolling
window.onscroll = function () {
    if (window.scrollY != 0) {
        header = document.querySelector('#main-header')
        header.style.borderBottom = "2px solid black"
    } else {
        header = document.querySelector('#main-header')
        header.style.borderBottom = "none"
    }
}

// Change navbar background color depending on window width
window.onresize = function () {
    let menuButton = document.querySelector('#menu-btn')
    let shade = document.querySelector('#shade')

    if (window.outerWidth >= 768) {
        nav = document.querySelector('nav')
        nav.style.backgroundColor = "rgba(250, 250, 250, .9)"
        shade.style.display = "none"
    } else if (menuButton.checked) {
        nav = document.querySelector('nav')
        nav.style.backgroundColor = "#fd63d5"
        shade.style.display = "block"
    }
}
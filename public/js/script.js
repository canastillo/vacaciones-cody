let menuButton = document.querySelector('#menu-btn')

menuButton.addEventListener('change', () => {
    if (menuButton.checked) {
        let nav = document.querySelector('nav')
        nav.style.backgroundColor = "#fd63d5"

        let shade = document.querySelector('#shade')
        shade.classList.remove("hidden")
        shade.classList.add("showing")
    } else {
        let nav = document.querySelector('nav')
        nav.style.backgroundColor = "rgba(250, 250, 250, .9)"

        let shade = document.querySelector('#shade')
        shade.classList.remove("showing")
        shade.classList.add("hidden")
    }
})


let shade = document.querySelector('#shade')

shade.addEventListener('click', () => {
    let menuButton = document.querySelector('#menu-btn')
    let change = new Event('change');
    menuButton.checked = false
    menuButton.dispatchEvent(change)
})


window.onscroll = function () {
    if (window.scrollY != 0) {
        header = document.querySelector('#main-header')
        header.style.borderBottom = "1px solid black"
    } else {
        header = document.querySelector('#main-header')
        header.style.borderBottom = "none"
    }
}


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
let leftArrow = document.querySelector('#indicator--left')
let rightArrow = document.querySelector('#indicator--right')
let interval

window.onload = function () {
    startProgressBar()
}

function startProgressBar() {
    let porcentage = 0;

    if (porcentage == 0) {
        let bar = document.getElementById("myBar")
        let barWidth = 1
        
        porcentage = 1
        interval = setInterval(frame, 40)

        function frame() {
            if (barWidth >= 100) {
                clearInterval(interval)
                porcentage = 0

                let click = new Event('click');
                rightArrow.dispatchEvent(click)
            } else {
                barWidth++
                bar.style.width = barWidth + "%"
            }
        }
    }
}

// Show picture on the right
rightArrow.addEventListener('click', () => {
    let carousel = document.querySelector('#carousel')
    carousel.scrollLeft += carousel.offsetWidth

    checkRightLimit()
    clearInterval(interval)
    startProgressBar()
})

// Show picture on the left
leftArrow.addEventListener('click', () => {
    let carousel = document.querySelector('#carousel')
    carousel.scrollLeft -= carousel.offsetWidth

    checkLeftLimit()
    clearInterval(interval)
    startProgressBar()
})

// Verify if limits have been reached
function checkLeftLimit() {
    let limit = carousel.scrollWidth - carousel.clientWidth

    if (carousel.scrollLeft == 0) {
        carousel.scrollLeft = limit
    }
}

function checkRightLimit() {
    let limit = carousel.scrollWidth - carousel.clientWidth

    if (carousel.scrollLeft == limit) {
        carousel.scrollLeft = 0
    }
}
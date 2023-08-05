const slider = document.querySelector('.bow-row')
const prev = document.querySelector('.prev-button')
const next = document.querySelector('.next-button')

let elWidth = 0;
next.addEventListener('click', () => {
    let goTo = 273
    elWidth += goTo
    console.log(elWidth)
    slider.style.transform = `translate(-${elWidth}px)`
    slider.style.transition = 'all 0.5s'
    if (elWidth > 1092) {
        next.disabled = true
        next.classList.add('hidden-button')
    }
    prev.classList.remove('hidden-button')
})

prev.addEventListener('click', () => {
    let fromTo = 273
    next.disabled = false
    next.classList.remove('hidden-button')
    elWidth -= fromTo
    console.log(elWidth)
    if (elWidth < 273) {
        elWidth = 0
        prev.classList.add('hidden-button')
    }
    slider.style.transform = `translate(-${elWidth}px)`
    slider.style.transition = 'all 0.5s'
})
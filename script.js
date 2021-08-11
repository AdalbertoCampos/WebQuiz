const display = document.getElementById('display')
const buttons = document.getElementById('container')
const main = document.querySelector('main')
const next = document.getElementById('next')

function rightAnswer() {
    display.innerHTML = '<b>Congratulations, that is correct!<b>'
    buttons.innerHTML = ''
    next.style.background = 'white'
    next.style.color = '#4F963C'
    next.style.borderStyle = 'solid'
    next.style.borderColor = '#4F963C'
    next.disabled = false
    next.style.cursor = 'pointer'
    next.addEventListener('mouseenter', () => {
        next.style.background = '#4F963C'
        next.style.color = 'white'
    })
    next.addEventListener('mouseleave', () => {
        next.style.background = 'white'
        next.style.color = '#4F963C'
    })
}

function wrongAnswer() {
    display.innerHTML = '<b>Wrong answer :(<b>'
    buttons.innerHTML = ''
    next.style.background = 'white'
    next.style.color = '#4F963C'
    next.style.borderStyle = 'solid'
    next.style.borderColor = '#4F963C'
    next.disabled = false
    next.style.cursor = 'pointer'
    next.addEventListener('mouseenter', () => {
        next.style.background = '#4F963C'
        next.style.color = 'white'
    })
    next.addEventListener('mouseleave', () => {
        next.style.background = 'white'
        next.style.color = '#4F963C'
    })
}
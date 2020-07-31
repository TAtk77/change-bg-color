//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['black', 'green', 'blue', 'yellow', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length+1)
body.style.backgroundColor = colors[colorIndex]
}

const menuContainer = document.querySelector('.btn-group-vertical')
const menuButton = Array.from(menuContainer.children)
const headerContainer = document.querySelector('.jumbotron')
const cardElement = document.querySelector('.col-lg-3 + .col-lg-3')
const buttonCardElement = cardElement.querySelector('.card-body a')
const listitems = document.getElementsByClassName('list-group-item')

const forListItem = document.createElement('li')
forListItem.appendChild(document.createTextNode('Quarto item'))

const fiveListItem = document.createElement('li')
fiveListItem.appendChild(document.createTextNode('Quinto item'))

menuContainer.style.flexDirection = 'row'
menuContainer.style.gap = '6px'
menuContainer.style.whiteSpace = 'nowrap'

menuButton.forEach(button => {
  button.style.borderRadius = '4px'
})

buttonCardElement.style.background = '#2a9134'
buttonCardElement.style.borderColor = '#2a9134'

headerContainer.style.textAlign = 'right'
headerContainer.style.color = 'white'
headerContainer.style.background = '#6c757d'

listitems[0].classList.remove('active')

document
  .querySelector('.list-group')
  .appendChild(forListItem)
  .classList.add('list-group-item', 'active')

document
  .querySelector('.list-group')
  .appendChild(fiveListItem)
  .classList.add('list-group-item')

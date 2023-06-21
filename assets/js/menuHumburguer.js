const menuIcon = document.querySelector('.menu__humburguer-icon')
const menuIconFechar = document.querySelector('.menu-fechar')
const menuNav = document.querySelector('.menu__nav')

menuIcon.addEventListener('click', () => {
    menuNav.style.display = 'block'
})

menuIconFechar.addEventListener('click', () => {
    menuNav.style.display = 'none'
})
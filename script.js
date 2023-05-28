const burgerMenu = document.querySelector('.toggle-box')
const navigation = document.querySelector('.navigation')
const menuOpen = document.querySelector('.menu')
const menuClose = document.querySelector('.close')

function showMenu() {
    navigation.classList.toggle('active')
    menuOpen.classList.toggle('hide')
    menuClose.classList.toggle('show')
}

burgerMenu.addEventListener('click', () => {
    showMenu()
})

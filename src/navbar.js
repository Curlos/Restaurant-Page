import { displayHome } from './home'
import { displayMenu } from './menu'
import { displayContactInfo } from './contact'

const displayNavbar = () => {
    const content = document.getElementById('content')
    removeAllDivs(content)

    const topNav = document.createElement('div')
    topNav.classList.add('topnav')

    const header = document.createElement('div')
    header.classList.add('header')

    const headerLink = document.createElement('a')
    headerLink.classList.add('active')
    headerLink.setAttribute('href', '#home')
    headerLink.textContent = 'Baratie'


    const homeNav = document.createElement('a')
    homeNav.setAttribute('id', 'homeNav')
    homeNav.textContent = 'Home'

    const menuNav = document.createElement('a')
    menuNav.setAttribute('id', 'menuNav')
    menuNav.textContent = 'Menu'

    const contactNav = document.createElement('a')
    contactNav.setAttribute('id', 'contactNav')
    contactNav.textContent = 'Contact Us'

    homeNav.addEventListener('click', displayHome)
    menuNav.addEventListener('click', displayMenu)
    contactNav.addEventListener('click', displayContactInfo)


    header.append(headerLink)
    topNav.append(header)
    topNav.append(homeNav)
    topNav.append(menuNav)
    topNav.append(contactNav)
    content.append(topNav)
}

const removeAllDivs = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

export { displayNavbar }
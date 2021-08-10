import { displayNavbar } from "./navbar"
import { displayMenu } from './menu'

const displayHome = () => {
    const content = document.getElementById('content')
    displayNavbar()

    const homeElements = document.createElement('div')
    homeElements.classList.add('homeElements')

    const home = document.createElement('div')
    home.classList.add('home')

    const description = document.createElement('div')
    description.classList.add('description')

    const address = document.createElement('div')
    address.classList.add('address')

    const hours = document.createElement('div')
    hours.classList.add('hours')

    const orderNow = document.createElement('div')
    orderNow.classList.add('orderNow')

    const addressHeader = document.createElement('h3')
    addressHeader.textContent = 'Location'

    const hoursHeader = document.createElement('h3')
    hoursHeader.textContent = 'Hours'

    const orderNowLink = document.createElement('a')
    orderNowLink.setAttribute('href', '#menu')
    orderNowLink.textContent = 'Order now'
    orderNow.addEventListener('click', displayMenu)

    description.textContent = restaurantDescription
    address.append(addressHeader)
    hours.append(hoursHeader)
    address.textContent = addressText
    orderNow.append(orderNowLink)

    home.append(description)
    home.append(address)
    home.append(hours)
    home.append(orderNow)
    homeElements.append(home)
    content.append(homeElements)
}

const restaurantDescription = "The One Piece themed-restaurant Baratie is dedicated the recreating the magical world of One Piece for anime fanatics. Based on the sea restaurant from the popular manga, Baratie is where Straw Hat Pirates member Sanji worked as a substitute head chef. Located on the rooftop garden of Fuji TV's building in Tokyo's Odaiba area, the restaurant is a can't miss for fans who've always wanted to try Sanji's cooking. There's also a life-size Sanji statue holding his latest dish for you to enjoy at the restaurant, so have your cameras and appetite ready!"

const addressText = "Japan, 〒135-0091 Tokyo, Minato City, 港区Daiba, 2 Chome−4−4番8号 フジテレビ本社屋"

export { displayHome }
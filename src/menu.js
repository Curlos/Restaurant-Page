import { displayNavbar } from "./navbar"

const displayMenu = () => {
    displayNavbar()
    const content = document.getElementById('content')

    const menuElements = document.createElement('div')
    menuElements.classList.add('menuElements')

    const lunchAndDinnerHeader = document.createElement('h3')
    lunchAndDinnerHeader.textContent = 'Lunch and Dinner'

    const dessertHeader = document.createElement('h3')
    dessertHeader.textContent = 'Dessert'

    const drinksHeader = document.createElement('h3')
    drinksHeader.textContent = 'Drinks'

    const alcoholicDrinksHeader = document.createElement('h3')
    alcoholicDrinksHeader.textContent = 'Alcoholic Drinks'

    const lunchAndDinnerImages = getImagesLunchAndDinner()
    const dessertImages = getImagesDessert()
    const drinksImages = getImagesDrinks()
    const alcoholicDrinksImages = getImagesAlcoholicDrinks()

    const lunchAndDinner = createImagesElem('lunchAndDinner', lunchAndDinnerImages)
    const dessert = createImagesElem('dessert', dessertImages)
    const drinks = createImagesElem('drinks', drinksImages)
    const alcoholicDrinks = createImagesElem('drinks', alcoholicDrinksImages)

    console.log(dessertHeader)
    menuElements.append(lunchAndDinnerHeader)
    menuElements.append(lunchAndDinner)
    menuElements.append(dessertHeader)
    menuElements.append(dessert)
    menuElements.append(drinksHeader)
    menuElements.append(drinks)
    menuElements.append(alcoholicDrinksHeader)
    menuElements.append(alcoholicDrinks)

    content.append(menuElements)
}

const createImagesElem = (elemClass, images) => {
    const elem = document.createElement('div')
    elem.classList.add('menuContainer')
    elem.classList.add(elemClass)

    for (let image of images) {
        const div = document.createElement('div')
        div.classList.add('menuItem')

        const img = document.createElement('img')
        img.setAttribute('src', image.src)
        const description = document.createTextNode(image.description)

        div.append(img)
        div.append(description)
        elem.append(div)
    }

    return elem

}

const getImagesLunchAndDinner = () => {
    return [
        {
            'src': './menu/lunchAndDinner/east-blue-salad.png',
            'description': `Receive the Blessing of East Blue`
        },
        {
            'src': './menu/lunchAndDinner/tomodachi-wo-taskeru-tame.png',
            'description': `In Order to Save My Friends: The Vow with Shanks`
        },
        {
            'src': './menu/lunchAndDinner/one-piece-curry-1.png',
            'description': `"In the Name of Absolute Justice": The Birth of a Man Becoming a Marine Officer`
        },
        {
            'src': './menu/lunchAndDinner/one-piece-curry-2.png',
            'description': `"In the Name of Absolute Justice": The Birth of a Man Becoming a Marine Officer (kids' menu item)`
        },
        {
            'src': './menu/lunchAndDinner/yasashii-usotsuki-usopp-pasta.png',
            'description': `"Honorable Liar": Proud Warrior's Departure`
        },
        {
            'src': './menu/lunchAndDinner/onaji-yume-wo-daita-tatakau-kokku.png',
            'description': `The Fighting Cook who Had the Same Dream: The Pirate and the Little Eggplant`
        },
        {
            'src': './menu/lunchAndDinner/dai-sensou-buns-beef.png',
            'description': `The One Spear that Comes from the Gut: Courage that Sticks to its Convictions`
        },
        {
            'src': './menu/lunchAndDinner/cocoyasi-mura-dish.png',
            'description': `The Day of Freedom from Control: The Happy Celebration at the End`
        },
    ]
}

const getImagesDessert = () => {
    return [
        {
            'src': './menu/Dessert/bara-bara-fruit-mousse.png',
            'description': `Red Nose's Great Adventure: "Raspberry Mousse" Garnished with Bara-Bara (Chop-Chop) Fruit`
        },
        {
            'src': './menu/Dessert/beautiful-lady-creme-brulee.png',
            'description': `Beautiful Lady: Glossy and Smooth Creme Brulee`
        },
        {
            'src': './menu/Dessert/shinshi-no-tashinami-mikan-sauce.png',
            'description': `A Gentleman's Taste: Apology Panna Cotta and Macedonia Combination with Orange Sauce`
        },
        {
            'src': './menu/Dessert/kakigoori.png',
            'description': `Sparks Fall: Moku Moku (Plume-Plume) Shaved Ice`
        },
        {
            'src': './menu/Dessert/mikan-jelly.png',
            'description': `Nami's Orange Jelly`
        },

    ]
}

const getImagesDrinks = () => {
    return [
        {
            'src': './menu/Drinks/luffy-drink.png',
            'description': `Luffy: "I'm going to become King of the Pirates!" Berry Berry Squash`
        },
        {
            'src': './menu/Drinks/zoro-drink.png',
            'description': `Zoro: "Thank you. I can still become stronger." Kiwi Lassi`
        },
        {
            'src': './menu/Drinks/nami-drink.png',
            'description': `Cocoyasi Village: "Never forget the strength to continue laughing." Bellemere's Orange Juice`
        },
        {
            'src': './menu/Drinks/sanji-drink.png',
            'description': `Sanji: "Do you know All Blue?" Blue Ocean`
        },
        {
            'src': './menu/Drinks/scurvy-drink.png',
            'description': `Scurvy: "Almost had him!" Lime Juice to Save Yosaku`
        },

    ]
}

const getImagesAlcoholicDrinks = () => {
    return [
        {
            'src': './menu/Alcoholic Drinks/going-merry-drink.png',
            'description': `Going Merry: "Yes! It's complete! With this, the pirate ship Going Merry is ready!" Milky Cocktail with a Black Currant Aroma`
        },
        {
            'src': './menu/Alcoholic Drinks/usopp-drink.png',
            'description': `Usopp: "For the sake of becoming a true warrior of the sea" Mixed Vegetable Juice Red Eye Kiwi Lassi`
        },
    ]
}

export { displayMenu }
import { displayNavbar } from "./navbar";
import { Loader } from "@googlemaps/js-api-loader";

function initMap() {
    let map;
    const center = { lat: 35.62768988248756, lng: 139.7741834153436 };
    const zoom = 14;
    const url = "https://maps.googleapis.com/maps/api/staticmap";
    const loader = new Loader({
    apiKey: "AIzaSyDrPzt5NV97OINBuDaBH_4NR2CzNXg5E10",
    version: "weekly",
    });

    const mapDiv = document.getElementById('map')
    mapDiv.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=YOUR_API_KEY)`;

    const wrapper = document.getElementById("wrapper");
    wrapper.style.backgroundImage = `url(${url}?center=${center.lat},${center.lng}&zoom=${zoom}&scale=2&size=${wrapper.clientWidth}x${wrapper.clientHeight}&key=YOUR_API_KEY)`;
    wrapper.addEventListener("click", () => {
        wrapper.remove();
        loader.load().then(() => {
        map = new google.maps.Map(document.getElementById("map"), {
            center,
            zoom,
        });
        });
    });
}

const displayContactInfo = () => {
    const content = document.getElementById('content')
    displayNavbar()

    const contactElements = document.createElement('div')
    contactElements.classList.add('contactElements')

    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contactContainer')

    const contactContainerInfo = document.createElement('div')
    contactContainerInfo.classList.add('contactContainerInfo')

    const contactLeft = document.createElement('div')
    contactLeft.classList.add('contactLeft')

    const contactRight = document.createElement('div')
    contactRight.classList.add('contactRight')

    const locationDiv = createContactInfoDiv('Location', locationText)
    const hoursDiv = createContactInfoDiv('Hours', hoursText)
    const phoneNumberDiv = createContactInfoDiv('Phone Number', phoneNumberText)

    contactLeft.append(locationDiv)
    contactLeft.append(hoursDiv)
    contactLeft.append(phoneNumberDiv)

    const mapDiv = document.createElement('div')
    mapDiv.setAttribute('id', 'map')

    contactRight.append(mapDiv)

    console.log(mapDiv)

    contactContainerInfo.append(contactLeft)
    contactContainerInfo.append(contactRight)
    contactContainer.append(contactContainerInfo)
    contactElements.append(contactContainer)
    content.append(contactElements)

    initMap()

}

const createContactInfoDiv = (contactType, contactDetails) => {
    const div = document.createElement('div')
    div.classList.add('contactInfo')
    div.textContent = `${contactType}: ${contactDetails}`

    return div
}

const locationText = 'Japan, 〒135-0091 Tokyo, Minato City, 港区Daiba, 2 Chome−4−4番8号 フジテレビ本社屋'

const hoursText = 'Mon-Sun 10:30AM-8PM'

const phoneNumberText = '+81 3-5500-5843'


export { displayContactInfo }
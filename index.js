// Wrapping up our Dashboard
// 1. Create All the other interfaces you think are needed for this board
// 2. Using the Class, visually show the main Image above the review button.
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews, } from '././utils.js';
import { Permissions, LoyaltyUser } from '././enums.js';
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector('.footer');
let isLoggedIn;
// Reviews
const reviews = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021',
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021',
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
const you = {
    firstName: 'Elena',
    lastName: 'Glizzard',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};
// Array of Properties
const properties = [
    {
        image: 'images/colombia-property.jpeg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia',
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true,
    },
    {
        image: 'images/poland-property.jpeg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland',
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false,
    },
    {
        image: 'images/london-property.jpeg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true,
    },
];
// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
populateUser(you.isReturning, you.firstName);
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    showDetails(you.permissions, card, properties[i].price);
    propertyContainer && propertyContainer.appendChild(card);
}
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = getTopTwoReviews(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            reviewContainer && reviewContainer.appendChild(card);
        }
        container && button && container.removeChild(button);
    }
}
button && button.addEventListener('click', () => addReviews(reviews));
let currentLocation = ['London', '11.03', 17];
if (footer) {
    footer.innerHTML =
        currentLocation[0] +
            ' ' +
            currentLocation[1] +
            ' ' +
            currentLocation[2] +
            '°';
}
// Classes
class MainProperty {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
let yourMainProperty = new MainProperty('images/italian-property.jpeg', 'Italian House', [
    {
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021',
    },
]);
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
mainImageContainer && mainImageContainer.appendChild(image);

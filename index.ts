const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

// Function do display total number of reviews
function showReviewTotal (reviewTotal: number, lastReviewer: string, loyaltyUser: boolean) {
	if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = "Total Number of Reviews: " + reviewTotal.toString() + " | Last Reviewer: " + lastReviewer + (loyaltyUser ? '⭐' : '');    
    }
}

showReviewTotal(reviews.length, "Andrzej", true);

const you = {
    userName: 'Bobby',
    isReturning: true,
}


function populateUser(isReturning : boolean, userName : string ) {
    if (isReturning && returningUserDisplay){
        returningUserDisplay.innerHTML = 'back'
    }
    if (userNameDisplay) userNameDisplay.innerHTML = userName;
    
}

populateUser(you.isReturning, you.userName)
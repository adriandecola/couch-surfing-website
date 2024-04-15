var reviewTotalDisplay = document.querySelector('#reviews');
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviews = [
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
];
// Function do display total number of reviews
function showReviewTotal(reviewTotal, lastReviewer, loyaltyUser) {
    reviewTotalDisplay.innerHTML = "Total Number of Reviews: " + reviewTotal.toString() + " | Last Reviewer: " + lastReviewer + (loyaltyUser ? '⭐' : '');
}
showReviewTotal(reviews.length, "Andrzej", true);
var you = {
    userName: 'Bobby',
    isReturning: true,
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.userName);

const reviewTotalDisplay = document.querySelector('#reviews')

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
function showReviewTotal (reviewTotal: number, lastReviewer: string) {
	reviewTotalDisplay.innerHTML = "Total Number of Reviews: " + reviewTotal.toString() + " | Last Reviewer: " + lastReviewer;
}

showReviewTotal(reviews.length, "Andrzej");

const quotes = [
    "Stay Connected. Follow My Journey.",
    "Discover My Adventures.",
    "Join Me on Social Media.",
    "Explore My World."
];

let currentQuoteIndex = 0;

function changeQuote() {
    const quoteElement = document.querySelector('.animated-quotes');
    quoteElement.style.opacity = 0;

    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteElement.textContent = quotes[currentQuoteIndex];
        quoteElement.style.opacity = 1;
    }, 1000); // Duration should match the CSS opacity transition
}

setInterval(changeQuote, 5000); // Change quote every 5 seconds

const quotes = [
    "Stay Connected. Follow My Journey.",
    "Discover My Adventures.",
    "Join Me on Social Media.",
    "Explore My World."
];

let currentQuoteIndex = 0;

function changeQuote() {
    const quoteElement = document.querySelector('.animated-quotes');
    quoteElement.classList.add('fade-out');

    setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        quoteElement.textContent = quotes[currentQuoteIndex];
        quoteElement.classList.remove('fade-out');
        quoteElement.classList.add('fade-in');
    }, 1000); // Duration should match the CSS opacity transition
}

setInterval(changeQuote, 7000); // Change quote every 7 seconds

// QUOTES
let quotes = [
    'Love For All, Hatred For None.',
    'Change the world by being yourself.',
    'Every moment is a fresh beginning',
    'Never regret anything that made you smile',
    'Die with memories, not dreams.'
];

// TICK TIMER
document.getElementById('quotes-results').innerHTML = quotes[4];
var ticking = window.setInterval(tick, 2000);
let currentIndex = -1;
function tick() {
    currentIndex++;
    if (currentIndex >= quotes.length) {
        currentIndex = 0;
    }
    console.log(quotes[currentIndex]);
    document.getElementById('quotes-results').innerHTML = '';
    document.getElementById('quotes-results').innerHTML = quotes[currentIndex];
}

function showRainbow() {
    let pRainbow = document.createElement('p');
    let pRainbowInnerHTML = pRainbow.innerHTML;
    let addText = (pRainbowInnerHTML += 'k');
    pRainbowInnerHTML += 'k';
    let log = console.log('working');
    setTimeout(addText, 1000);
}

let btnRainbow = document.getElementById('btn-rainbow');
btnRainbow.onclick = showRainbow;

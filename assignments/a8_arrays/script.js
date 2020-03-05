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

let p = new Array(10);
for (var i = 0; i < p.length; i++) {
    p[i] = [];
}
let count = 0;
/*function showRainbow() {
    for (let i = 0; i < 100; i++) {
        setTimeout(showRainbow, 15000);
        console.log('working ' + i);
    }
}*/

//let btnRainbow = document.getElementById('btn-rainbow');
//btnRainbow.onclick = showRainbow;

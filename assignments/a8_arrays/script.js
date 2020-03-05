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
function showRainbow() {
    let pDraw = document.createElement('p');
    let pDraw2 = document.getElementById('rainbow');
    for (var i = 0; i < p.length; i++) {
        for (var j = 0; j < p[1].length; j++) {
            pDraw.innerHTML += 'L';
            pDraw2.append(pDraw);
        }
    }
}

window.addEventListener('load', function() {
    var elements = document.getElementsByClassName('rainbowText');
    for (let i = 0; i < elements.length; i++) {
        generateRainbowText(elements[i]);
    }
});

function generateRainbowText(element) {
    var text = element.innerText;
    element.innerHTML = '';
    for (let i = 0; i < p.length; i++) {
        let charElem = document.createElement('span');
        charElem.style.color = 'hsl(' + (360 * i) / text.length + ',80%,50%)';
        charElem.innerHTML = p[i];
        element.append(charElem);
    }
}

let btnRainbow = document.getElementById('btn-rainbow');
btnRainbow.onclick = generateRainbowText(document.getElementById('rainbow'));

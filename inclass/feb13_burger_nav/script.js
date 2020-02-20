let width = 100;

function displayEmotion() {
    //gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;
    
    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    //clear all errors before

    //validate data
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    //display results
    displayP.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());
}

function isBlank(data, errorSpanId){
    if(data.trim() == "") {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function isNotValidNum(data, errorSpanId){
    if(isNaN(data)) {
        let errorSpan = document.getElementById(errorSpanId);
        errorSpan.classList.remove("hidden");
        return true;
    }

    return false;
}

function getEmoji(emotion){
    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy")
    {
        return ":)"
    }
    else if(emoCI == "sad"){
        return ":(";
    }
    else if(emoCI == "silly"){
        return ":p";
    }
    else if(emoCI == "angry"){
        return ">:|";
    }

    return "";
}

function toggleNav() {

    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");
}

function displayCount()
{

    let startNum = parseInt(document.getElementById("txt-start").value);
    let endNum = parseInt(document.getElementById("txt-end").value);
    //let resultDiv = document.getElementById("ex3-result");

    // Clear both error spns by setting html to blank
    document.getElementById("error-start").classList.add("hidden");
    document.getElementById("error-end").classList.add("hidden"); 
    
    // If either number is not a number show error appropriately
    if(isNotValidNum(startNum, "error-start") | isNotValidNum(endNum, "error-end"))
    {
        return;
    } 

    //If endNum is <= startNum show an error appropriately
    if(startNum>=endNum)
    {
        resultDiv.innerHTML = "End number must be larger than start number!";
        return;
    }

    // Version 1
    /*
    resultDiv.innerHTML = "Counting:<ul>";
    for(let i=startNum; i<=endNum; i++)
    {
        resultDiv.innerHTML += `<li>${i}</li>`;
    }
    resultDiv.innerHTML += "</ul>All done";
    */

    //Version 2
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = "Counting...";
    let ulElem = document.createElement("ul");
    btnCount.after(ulElem);
    for(let i=startNum; i<=endNum; i++)
    {
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.after(liElem);
    }
}

function displayStuff()
{
    let cookieTitle = document.createElement("h3");
    let ulElem = document.createElement("ul");
    let endTitle = document.createElement("p");

    cookieTitle.textContent = "I Love Cookies";
    endTitle.textContent = "Cookie Time";
    ulElem.classList.add("cookie-list");

    // Add items to the Document Object Model
    this.after(cookieTitle);
    cookieTitle.after(ulElem);
    ulElem.after(endTitle);

    // Populate the numerical list
    for(let i=5; i>=1; i--)
    {
        let liElem = document.createElement("li");
        liElem.textContent = i;
        ulElem.append(liElem);

    }
}

function growBox(){
    width += 10;
    document.getElementById("box").style.setProperty('--dim', width + "px");
}
function shrinkBox(){
    width -= 10;
    document.getElementById("box").style.setProperty('--dim', width + "px");
}

const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;

const btnCount = document.getElementById("btn-go");
btnCount.onclick = displayCount;

const btnStuff = document.getElementById("do-stuff");
btnStuff.onclick = displayStuff;

const btnGrowBox = document.getElementById("btn-grow-box");
btnGrowBox.onclick = growBox;

const btnShrinkBox = document.getElementById("btn-shrink-box");
btnShrinkBox.onclick = shrinkBox;
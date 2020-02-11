function displayEmotion() {
    //  gather all 3 pieces of information & write to console
    const firstName = document.getElementById("txt-first-name").value;
    const favColor = document.getElementById("txt-fav-color").value;
    const emotion = document.getElementById("txt-emotion").value;

    /*
    let price = parseFloat(document.getElementById("txt-price").value)
    parseInt(...)
    let tax = document.getElementById("tax-span").textContent() --maybe parsens--
    
    let displayP = document.getElementById("ex1-result");
    displayP.innerHTML = `${firstName} your fav color is ${favColor}`;
    */

    let displayP = document.getElementById("ex1-result");
    let displayEmotion = document.getElementById("ex1-emotion");

    // CLEAR ALL ERRORS BEFORE
    


    // VALIDATE DATA
    const firstError = isBlank(firstName, "error-name");
    const secondError = isBlank(favColor, "error-fav-color");
    const thirdError = isBlank(emotion, "error-emotion");

    if(firstError || secondError || thirdError) return;

    // DISPLAY RESULTS
    displayP.innerHTML = `Welcome ${firstName}!<br>You are ${emotion} today`;
    displayEmotion.innerHTML = `${getEmoji(emotion)}`;
    displayEmotion.classList.remove("red", "green", "yellow", "blue");
    displayEmotion.classList.add(favColor.toLowerCase());

}

function isBlank(data, errorSpanID) {

    let errorSpan = document.getElementById(errorSpanID);

    if(data.trim() == "")
    {
        errorSpan.classList.remove("hidden");
        return true;
    }
    return false;
}

function getEmoji(emotion) {

    const emoCI = emotion.toLowerCase();

    if(emoCI == "happy")
    {
        return ":)";
    }
    else if(emoCI == "sad")
    {
        return ":(";
    }
    else if(emoCI == "silly")
    {
        return ":P";
    }
    else if(emoCI == "angry")
    {
        return ">:(";
    }
    return "";

}


const btnDisplay = document.getElementById("btn-display");
btnDisplay.onclick = displayEmotion;


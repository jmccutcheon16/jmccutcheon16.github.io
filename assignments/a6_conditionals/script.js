function displayCompareAge(){
    const name1 = document.getElementById("txt-name-1").value;
    const name2 = document.getElementById("txt-name-2").value;
    const name3 = document.getElementById("txt-name-3").value;
    const age1 = document.getElementById("txt-age-1").value;
    const age2 = document.getElementById("txt-age-2").value;
    const age3 = document.getElementById("txt-age-3").value;

    let displayR = document.getElementById("compare-age-results");

    if(age1>age2 && age1 > age3){
        displayR.innerHTML = `${name1} is the oldest`;  
    }
    else if(age2>age1 && age2>age3){
        displayR.innerHTML = `${name2} is the oldest`;
    }
    else if(age3>age1 && age3>age2){
        displayR.innerHTML = `${name3} is the oldest`;
    }
}

function toggleNav(){
    let navItems = document.getElementById("main-nav-items");
    navItems.classList.toggle("hidden");

}

const btnDisplay = document.getElementById("compare-age-btn");
btnDisplay.onclick = displayCompareAge;

const navToggle = document.getElementById("nav-toggle");
navToggle.onclick = toggleNav;
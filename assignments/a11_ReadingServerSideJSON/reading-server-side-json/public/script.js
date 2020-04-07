async function getBands() {
    let response = await fetch("http://localhost:3000/api/bands");
    let bandsJSON = await response.json();

    let bandsDiv = document.getElementById("bands-list");
    for (i in bandsJSON) {
        let band = bandsJSON[i];
        bandsDiv.append(getBandItem(band));
    }
}
function getBandItem(band) {
    let bandSection = document.createElement("section");

    let bandImg = document.createElement("img");
    bandImg.src = band.img;
    bandSection.append(bandImg);
    let bandName = document.createElement("h1");
    bandName.textContent = band.name;
    bandSection.append(bandName);

    let bandTopSong = document.createElement("h4");
    bandTopSong.textContent = band.topSong;
    bandSection.append(bandTopSong);

    let bandGenre = document.createElement("h4");
    bandGenre.textContent = band.genre;
    bandSection.append(bandGenre);

    let bandYear = document.createElement("h4");
    bandYear.textContent = band.years;
    bandSection.append(bandYear);

    let memberSection = document.createElement("section");

    for (i in band.members) {
        let memberElem = document.createElement("h4");
        memberElem.innerText = band.members[i].name;
        memberSection.append(memberElem);

        let memberAgeElem = document.createElement("h4");
        memberAgeElem.innerText = band.members[i].age;
        memberSection.append(memberAgeElem);
    }

    bandSection.append(memberSection);

    return bandSection;
}

window.onload = function () {
    getBands();
};

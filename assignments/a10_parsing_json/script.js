async function showMovie() {
    let response = await fetch(
        "https://portiaportia.github.io/csce242/json/movies.json"
    );
    let movieJSON = await response.json();
    let movieDiv = document.getElementById("movie-section");
    // Loot through the list of shoes in the json file
    for (i in movieJSON) {
        let movie = movieJSON[i];
        movieDiv.append(getMovie(movie));
    }
}

function getMovie(movie) {
    let movieSection = document.createElement("section");

    let imgElem = document.createElement("img");
    imgElem.src = movie.img;
    imgElem.classList.add("zoom");
    movieSection.append(imgElem);

    let h3Elem = document.createElement("h3");
    h3Elem.innerText = movie.title;
    movieSection.append(h3Elem);

    let ulElem = document.createElement("ul");
    movieSection.append(ulElem);

    let liTitle = document.createElement("li");
    liTitle.innerText = `Title:\t${movie.title}`;
    ulElem.append(liTitle);

    let liDirector = document.createElement("li");
    liDirector.innerText = `Director:\t${movie.director}`;
    ulElem.append(liDirector);

    let liActors = document.createElement("li");
    liActors.innerText = `Actors:\t${movie.actors.join(", ")}`;
    ulElem.append(liActors);

    let liYear = document.createElement("li");
    liYear.innerText = `Year:\t${movie.year}`;
    ulElem.append(liYear);

    let liGenre = document.createElement("li");
    liGenre.innerText = `Genre:\t${movie.genre}`;
    ulElem.append(liGenre);

    let liDescription = document.createElement("li");
    liDescription.innerText = `Description:\t${movie.description}`;
    ulElem.append(liDescription);

    return movieSection;
}

/*function getShoeItem(shoe) {
    let shoeSection = document.createElement("section");
    let h3Elem = document.createElement("h3");
    h3Elem.innerText = shoe.name;
    shoeSection.append(h3Elem);

    let ulElem = document.createElement("ul");
    shoeSection.append(ulElem);

    let liBrand = document.createElement("li");
    liBrand.innerText = `Brand: ${shoe.brand}`;
    ulElem.append(liBrand);

    let liPrice = document.createElement("li");
    liPrice.innerText = `Price: $${shoe.price}`;
    ulElem.append(liPrice);

    let liReviews = document.createElement("li");
    liReviews.innerText = `Reviews: ${shoe.reviews.join(", ")}`;
    ulElem.append(liReviews);

    return shoeSection;
}*/

window.onload = function() {
    this.showMovie();
};

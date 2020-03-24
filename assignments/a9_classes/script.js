class Toys {
    constructor(title, price, ageRange, rating, img) {
        this.title = title;
        this.price = price;
        this.ageRange = ageRange;
        this.rating = rating;
        this.img = img;
    }

    get details() {
        return `${this.title} is $${this.price} for ages ${this.ageRange} with a rating of ${this.rating} stars.`;
    }

    get toyItem() {
        let toySection = document.createElement('section');

        // Create Picture
        let imgElem = document.createElement('img');
        imgElem.src = `images/${this.img}`;
        toySection.append(imgElem);

        // Create Title
        let h3Elem = document.createElement('h3');
        h3Elem.classList.add('hidden');
        h3Elem.innerText = this.title;
        toySection.append(h3Elem);

        // Create List
        let ulElem = document.createElement('ul');

        ulElem.classList.add('hidden');
        toySection.append(ulElem);

        let liPriceElem = document.createElement('li');
        liPriceElem.innerText = `Price: $${this.price}`;
        ulElem.append(liPriceElem);

        let liAgeRange = document.createElement('li');
        liAgeRange.innerText = `Age Range: ${this.ageRange}`;
        ulElem.append(liAgeRange);

        let liRating = document.createElement('li');
        liRating.innerText = `Rating: ${this.rating} stars`;
        ulElem.append(liRating);

        if (toySection.onmouseover) {
            h3Elem.classList.remove('hidden');
        }

        return toySection;
    }
}

window.onload = function() {
    let toyListDiv = document.getElementById('toys-list');

    let doll = new Toys('American Girl Doll', 38.88, '5-7', 4, 'AGD.jpg');
    toyListDiv.append(doll.toyItem);

    let basketball = new Toys('Basketball', 15.99, '6+', 4.8, 'basketball.jpg');
    toyListDiv.append(basketball.toyItem);

    let legos = new Toys('Legos', 19.99, '5+', 4.9, 'legos.jpg');
    toyListDiv.append(legos.toyItem);

    let playhouse = new Toys('Playhouse', 49.99, '4+', 4.2, 'playhouse.jpg');
    toyListDiv.append(playhouse.toyItem);

    let shark = new Toys('Shark Coin Jar', 9.99, '2+', 3.9, 'shark.jpeg');
    toyListDiv.append(shark.toyItem);

    let tricycle = new Toys('Tricycle', 24.99, '6+', 4.3, 'tricycle.jpg');
    toyListDiv.append(tricycle.toyItem);

    console.log('Onload Function has executed.');
};

let images = document.getElementsByTagName('img');

if (images.onmouseover) {
    console.log('yes');
}

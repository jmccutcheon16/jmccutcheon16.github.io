async function displayFruits() {
    let response = await fetch("api/fruits/");
    let fruitsJSON = await response.json();
    let fruitsDiv = document.getElementById("fruit-list");
    fruitsDiv.innerHTML = "";

    for (i in fruitsJSON) {
        let fruit = fruitsJSON[i];
        fruitsDiv.append(getFruitItem(fruit));
    }
}

function getFruitItem(fruit) {
    let fruitSection = document.createElement("section");
    fruitSection.classList.add("fruit");

    let aTitle = document.createElement("a");
    aTitle.setAttribute("data-id", fruit.id);
    aTitle.href = "#";
    aTitle.onclick = showFruitDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = fruit.name;
    aTitle.append(h3Elem);
    fruitSection.append(aTitle);

    return fruitSection;
}

async function showFruitDetails() {
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/fruits/${id}`);

    if (response.status != 200) {
        console.log("Error receiving fruit");
        return;
    }

    let fruit = await response.json();

    document.getElementById("fruit-id").textContent = fruit.id;
    document.getElementById("fruit-name").textContent.value = fruit.name;
    document.getElementById("fruit-taste").textContent.value = fruit.taste;
    document.getElementById("fruit-size").textContent.value = fruit.size;
}

async function addFruit() {
    let fruitName = document.getElementById("txt-add-fruit").value;
    let fruitTaste = document.getElementById("txt-add-taste").value;
    let fruitSize = document.getElementById("txt-add-size").value;

    let fruit = { name: fruitName, taste: fruitTaste, size: fruitSize };

    let response = await fetch("/api/fruits", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(fruit),
    });

    if (response.status != 200) {
        console.log("ERROR POSTING DATA");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayFruits();
}

async function editFruit() {
    let fruitId = document.getElementById("fruit-id").textContent;
    let fruitName = document.getElementById("txt-name").value;
    let fruitTaste = document.getElementById("txt-taste").value;
    let fruitSize = document.getElementById("txt-size").value;

    let fruit = { name: fruitName, taste: fruitTaste, size: fruitSize };

    let response = await fetch(`/api/fruits/${fruitId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json:charset=utf-8",
        },
        body: JSON.stringify(fruit),
    });

    if (response.status != 200) {
        console.log("ERROR UPDATING FRUIT");
        return;
    }

    let result = await response.json();
    displayFruits();
}

async function deleteFruit() {
    let fruitId = document.getElementById("fruit-id").textContent;

    let response = await fetch(`/api/fruits/${fruitId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    if (response.status != 200) {
        console.log("Error deleting");
        return;
    }

    let result = await response.json();
    displayFruits();
}

window.onload = function () {
    this.displayFruits();

    let addBtn = document.getElementById("btn-add-fruit");
    addBtn.onclick = addFruit;

    let editBtn = document.getElementById("btn-edit-fruit");
    editBtn.onclick = editBtn;

    let deleteBtn = document.getElementById("btn-delete-fruit");
    deleteBtn.onclick = deleteFruit;
};

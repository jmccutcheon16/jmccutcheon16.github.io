const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let fruits = [
    { id: 1, name: "Red Apple", taste: "Sweet", size: "small" },
    { id: 2, name: "Watermelon", taste: "Sweet", size: "large" },
    { id: 3, name: "Green Apple", taste: "Sour", size: "small" },
    { id: 4, name: "Banana", taste: "Sweet", size: "small" },
    { id: 5, name: "Orange", taste: "Sweet", size: "small" },
    { id: 6, name: "Lime", taste: "Sour", size: "small" },
];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/fruits", (req, res) => {
    res.send(fruits);
});

app.get("/api/fruits/:id", (req, res) => {
    const fruit = fruits.find((r) => r.id === parseInt(req.params.id));

    if (!fruit)
        res.status(404).send("The fruit with the given ID was not found");

    res.send(fruit);
});

app.post("/api/fruits", (req, res) => {
    const result = validateFruit(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const fruit = {
        id: fruits.length + 1,
        name: req.body.name,
        taste: req.body.taste,
        size: req.body.size,
    };

    fruits.push(fruit);
    res.send(fruit);
});

app.put("/api/fruits/:id", (req, res) => {
    const fruit = fruits.find((f) => f.id === parseInt(req.params.id));

    if (!fruit) res.status(404).send("Fruit with given ID is not found");

    const result = validateFruit(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    fruit.name = req.body.name;
    fruit.taste = req.body.taste;
    fruit.size = req.body.size;

    res.send(fruit);
});

app.delete("/api/recipes/:id", (req, res) => {
    const fruit = fruits.find((f) => f.id === parseInt(req.params.id));

    if (!fruit)
        req.status(404).send("This fruit with the given ID was not found");

    const index = fruits.indexOf(fruit);
    fruits.splice(index, 1);

    res.send(recipe);
});

function validateFruit(fruit) {
    const schema = {
        name: Joi.string().min(3).required(),
        taste: Joi.string().min(3).required(),
        size: Joi.string().min(3).required(),
    };

    return Joi.validate(fruit, schema);
}

app.listen(3000, () => {
    console.log("Listening on Port 3000");
});

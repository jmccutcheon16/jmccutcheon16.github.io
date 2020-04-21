const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());

let courses = [
    {
        id: 1,
        courseName: "Baking 101",
        description: "Introduction to cakes and pies",
        instructor: "Tom Weston",
    },
];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send("The course with the given ID was not found!");
    }

    res.send(course);
});

app.post("/api/courses", (req, res) => {
    const result = validateCourse(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        courseName: req.body.courseName,
        description: req.body.description,
        instructor: req.body.instructor,
    };

    courses.push(course);
    res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));

    if (!course) {
        res.status(404).send("Course ID is Invalid");
    }

    const result = validateCourse(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    course.courseName = req.body.courseName;
    course.description = req.body.description;
    course.instructor = req.body.instructor;

    res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));

    if (!course) {
        req.status(404).send("Course ID is Invalid");
    }
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        courseName: Joi.string().min(5).required(),
        description: Joi.string().min(5).required(),
        instructor: Joi.string().min(5).required(),
    };

    return Joi.validate(course, schema);
}
app.listen(3000, () => {
    console.log("Listening to Port 3000");
});

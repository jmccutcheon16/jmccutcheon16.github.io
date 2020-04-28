const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());
const mongoose = require('mongoose')



mongoose.connect("mongodb://localhost/courses", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to mongodb"))
    .catch(error => console.log("Could not connect to mongodb"));

const courseSchema = new mongoose.Schema({
    courseName: String,
    description: String,
    instructor: String
})

const Course = mongoose.model('Course', courseSchema);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/courses", (req, res) => {
    getCourses(res);
});

async function getCourses(res) {
    const courses = await Course.find();
    console.log(courses);
    res.send(courses);
}

app.get("/api/courses/:id", (req, res) => {
    getCourses(req.params.id, res);
});

async function getCourses(id, res) {
    const course = await Course.findOne({ _id: id });
    console.log(course);
    res.send(course);
}

app.post("/api/courses", (req, res) => {
    const result = validateCourse(req.body);

    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = new Course({
        courseName: req.body.courseName,
        description: req.body.description,
        instructor: req.body.instructor,
    });

    createCourse(course, res);
});

async function createCourse(course, res) {
    const result = await course.save();
    console.log(result);
    res.send(course);
}

app.put("/api/courses/:id", (req, res) => {

    const result = validateCourse(req.body);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateCourse(res, req.params.id, req.body.courseName, req.body.description, req.body.instructor);
});

async function updateCourse(res, id, courseName, description, instructor) {
    const result = await Course.updateOne({ _id: id }, {
        $set: {
            courseName: courseName,
            description: description,
            instructor: instructor
        }
    })

    res.send(result);
}

app.delete("/api/courses/:id", (req, res) => {
    removeCourse(res, req.params.id);
});

async function removeCourse(res, id) {
    const course = await Course.findByIdAndRemove(id);
    res.send(course);
}

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

async function displayCourses() {
    let response = await fetch("api/courses/");
    let coursesJSON = await response.json();
    let coursesDiv = document.getElementById("course-list");
    coursesDiv.innerHTML = "";

    for (c in coursesJSON) {
        let course = coursesJSON[c];
        coursesDiv.append(getCourseItem(course));
    }
}

function getCourseItem(course) {
    let courseSection = document.createElement("section");
    courseSection.classList.add("course");

    let title = document.createElement("a");
    title.setAttribute("data-id", course.id);
    title.href = "#";
    title.onclick = showCourseDetails;
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = course.courseName;
    title.append(h3Elem);
    courseSection.append(title);

    let description = document.createElement("p");
    description.textContent = course.description;
    courseSection.append(description);

    return courseSection;
}

async function showCourseDetails(course) {
    let id = this.getAttribute("data-id");
    let response = await fetch(`/api/courses/${id}`);

    if (response.status != 200) {
        console.log("Error fetching course");
        return;
    }

    course = await response.json();

    document.getElementById("course-id").textContent.value = course.id;
    document.getElementById("txt-course-name").value = course.courseName;
    document.getElementById("txt-description").value = course.description;
    document.getElementById("txt-instructor").value = course.instructor;
}

async function addCourse() {
    let courseName = document.getElementById("txt-add-course-name").value;
    let courseDescription = document.getElementById("txt-add-description")
        .value;
    let courseInstructor = document.getElementById("txt-add-instructor").value;

    let course = {
        courseName: courseName,
        description: courseDescription,
        instructor: courseInstructor,
    };

    let response = await fetch("/api/courses", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(course),
    });

    if (response.status != 200) {
        console.log("Error Posting Course");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayCourses();
}

async function editCourse() {
    let courseId = document.getElementById("course-id").textContent;
    let courseName = document.getElementById("txt-course-name").value;
    let courseDescription = document.getElementById("txt-description").value;
    let courseInstructor = document.getElementById("txt-instructor").value;

    let course = {
        courseName: courseName,
        description: courseDescription,
        instructor: courseInstructor,
    };

    let response = await fetch(`/api/courses/${courseId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(course),
    });

    if (response.status != 200) {
        console.log("Error Editing Course");
        return;
    }

    let result = await response.json();
    displayCourses();
}

async function deleteCourse() {
    let courseId = document.getElementById("course-id").textContent;

    let response = await fetch(`/api/courses/${courseId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });

    if (response.status != 200) {
        console.log("Error Deleting Course");
        return;
    }

    let result = await response.json();
    displayCourses();
}

window.onload = function () {
    this.displayCourses();

    let addBtn = document.getElementById("btn-add-course");
    addBtn.onclick = addCourse;

    let editBtn = document.getElementById("btn-edit-course");
    editBtn.onclick = editCourse;

    let deleteBtn = document.getElementById("btn-delete-course");
    deleteBtn.onclick = deleteCourse;
};

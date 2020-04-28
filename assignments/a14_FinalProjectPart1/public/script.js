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
    title.setAttribute("data-id", course._id);
    title.href = "#";
    let h3Elem = document.createElement("h3");
    h3Elem.textContent = course.courseName;
    title.append(h3Elem);
    courseSection.append(title);

    let description = document.createElement("p");
    description.textContent = course.description;
    courseSection.append(description);

    let editButton = document.createElement("button");
    editButton.innerHTML = "Edit";
    editButton.id = "edit-btn";
    editButton.setAttribute('data-id', course._id);
    editButton.href = "#";
    editButton.onclick = showCourseDetails;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.id = "delete-btn";
    deleteButton.setAttribute('data-id', course._id);
    deleteButton.href = '#';
    deleteButton.onclick = deleteCourse;

    courseSection.append(editButton);
    courseSection.append(deleteButton);

    return courseSection;
}

async function showCourseDetails() {
    let id = this.getAttribute('data-id');
    let response = await fetch(`/api/courses/${id}`);

    if (response.status != 200) {
        console.log("Error fetching course");
        return;
    }

    course = await response.json();

    document.getElementById("course-id").textContent = course._id;
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
        "courseName": courseName,
        "description": courseDescription,
        "instructor": courseInstructor,
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

async function editCourse(course) {

    let courseId = course.getAttribute('data-id');
    let courseName = document.getElementById("txt-course-name").value;
    let courseDescription = document.getElementById("txt-description").value;
    let courseInstructor = document.getElementById("txt-instructor").value;

    let newCourse = {
        "courseName": courseName,
        "description": courseDescription,
        "instructor": courseInstructor,
    };

    let response = await fetch(`/api/courses/${courseId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(newCourse),
    });

    if (response.status != 200) {
        console.log("Error Editing Course");
        return;
    }

    let result = await response.json();
    console.log(result);
    displayCourses();
}

async function deleteCourse(course) {
    let id = this.getAttribute("data-id");

    let response = await fetch(`/api/courses/${id}`, {
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
    console.log(result);
    displayCourses();
}

window.onload = function () {
    this.displayCourses();

    let addBtn = document.getElementById("btn-add-course");
    addBtn.onclick = addCourse;
};

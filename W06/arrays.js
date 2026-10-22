let courses = ["WDD131", "WDD130", "ECEN 390", "CSE 210"]

console.log(courses[0]); // WDD131

for (let i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}

courses.forEach((course) => {
    console.log(course);
});

// js objects
const car = {make: "Subaru", model: "Outback", year: 2013, color: "gray"};

let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
}

let coursesArrayOfObjects = [
    {name: "Dynamic Web Fundamentals", code: "WDD131", credits: 3, instructor: "Brother Warner"},
    {name: "Web Development 2", code: "WDD130", credits: 3, instructor: "Brother Warner"},
]

console.log(course.name); // Dynamic Web Fundamentals

console.log(coursesArrayOfObjects[1].name);

let body = document.querySelector("body");

coursesArrayOfObjects.forEach((course) => {
    let courseDiv = `
    <div>
        <h2>${course.name}</h2>
        <p>Code: ${course.code}</p>
        <p>Credits: ${course.credits}</p>
        <p>Instructor: ${course.instructor}</p>
    </div>
    `
    body.innerHTML += courseDiv;
});
let type = document.getElementById("guestType");
let accessCode = document.getElementById("accesscode-div");
let studentId = document.getElementById("studentid-div");
let form = document.getElementById("EventForm");

const output = document.querySelector("#output");
const eventDate = document.querySelector("#eventDate");

type.addEventListener("change", function() {
    typeValue = type.value;
    if (typeValue === "student") {
        accessCode.style.display = "none";
        studentId.style.display = "block";
    } else if (typeValue === "guest") {
        accessCode.style.display = "block";
        studentId.style.display = "none";
    } else {
        accessCode.style.display = "none";
        studentId.style.display = "none";
    }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const eventDate = form.eventDate.value;
  const guest = form.guestType.value;
  const accessCodeValue = form.accesscode.value;
  const studentIdValue = form.studentid.value;

  if (guest == "guest" && accessCodeValue != "EVENT131") {
    output.textContent = "Invalid access code. Please enter the correct access code.";
    return;
  }

  if (guest == "student" && studentIdValue.length < 9) {
    output.textContent = "Student I# must be 9 digits.";
    return;
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>${guest}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
});
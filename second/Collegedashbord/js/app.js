// ================= Sidebar Toggle (mobile) =================
function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("active");
}

// ================= Notification Bell Click =================
document.addEventListener("DOMContentLoaded", () => {
    const bell = document.querySelector(".bi-bell");
    if (bell) {
        bell.addEventListener("click", () => {
            alert("No new notifications 🔔");
        });
    }
});

// ================= Validate Form =================
function validateForm(student) {
    if (student.name.trim() === "") return "Name is required";

    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailPattern.test(student.email)) return "Enter a valid Gmail address";

    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(student.mobile)) return "Enter a valid 10-digit mobile number";

    if (student.course === "") return "Please select a course";
    if (student.gender === "") return "Please select gender";

    return null;
}

// ================= Submit Registration =================
function submitData() {
    const student = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        dob: document.getElementById("dob").value,
        course: document.getElementById("course").value,
        gender: document.getElementById("gender").value,
        address: document.getElementById("address").value
    };

    // Validate
    const errorMsg = validateForm(student);
    if (errorMsg) {
        document.getElementById("error").innerText = errorMsg;
        return;
    }

    // Save to localStorage
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    // Optional AJAX POST (demo)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
        if (xhr.status === 201) {
            alert("Registration Successful!");
            window.location.href = "list.html";
        }
    };
    xhr.send(JSON.stringify(student));
}

// ================= Load Student Data (List Page) =================
function loadData() {
    const table = document.getElementById("studentList");
    if (!table) return;

    const students = JSON.parse(localStorage.getItem("students")) || [];
    table.innerHTML = "";

    students.forEach((s, index) => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.email}</td>
                <td>${s.mobile}</td>
                <td>${s.course}</td>
                <td>${s.gender}</td>
            </tr>
        `;
    });
}

// ================= Search Students =================
function searchTable() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const rows = document.querySelectorAll("#studentList tr");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

// ================= Auto Load Data on Page Load =================
window.onload = loadData;
function checkEmergency() {
    let icu = document.getElementById("icu").innerText;
    let doctor = document.getElementById("doctor").innerText;
    let blood = document.getElementById("blood").innerText;

    if (icu == 0 || doctor == 0 || blood == 0) {
        alert("⚠ Emergency! Resources Not Available");
    } else {
        alert("✅ All Emergency Resources Available");
    }
}

function checkVisitor() {
    let count = document.getElementById("visitorCount").value;
    let alarm = document.getElementById("alarm");

    if (count > 1) {
        alarm.innerHTML = "🚨 ALERT! Visitor Limit Exceeded";
        alarm.style.color = "red";
    } else {
        alarm.innerHTML = "Visitor Allowed";
        alarm.style.color = "green";
    }
}const hospitals = [
    {
        name: "City Care Hospital",
        distance: 2,
        icu: 3,
        doctor: "Cardiologist",
        iceRoom: true,
        blood: { "A+": 5, "B+": 0, "O+": 2 }
    },
    {
        name: "LifeLine Hospital",
        distance: 5,
        icu: 0,
        doctor: "Orthopedic",
        iceRoom: false,
        blood: { "A+": 0, "B+": 3, "O+": 1 }
    }
];

function displayHospitals() {
    const container = document.getElementById("hospitalContainer");
    container.innerHTML = "";

    hospitals.forEach(h => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${h.name}</h3>
            <p>Distance: ${h.distance} km</p>
            <p>ICU Beds: 
                <span class="${h.icu > 0 ? 'available' : 'not-available'}">
                ${h.icu > 0 ? h.icu + " Available" : "Not Available"}
                </span>
            </p>
            <p>Special Doctor: ${h.doctor}</p>
            <p>Ice Room: 
                <span class="${h.iceRoom ? 'available' : 'not-available'}">
                ${h.iceRoom ? "Available" : "Full"}
                </span>
            </p>
        `;

        container.appendChild(card);
    });
}

function checkBlood() {
    const bloodType = document.getElementById("bloodSelect").value;
    let found = false;

    hospitals.forEach(h => {
        if (h.blood[bloodType] > 0) {
            alert(`${h.name} has ${h.blood[bloodType]} units of ${bloodType}`);
            found = true;
        }
    });

    if (!found) {
        alert("⚠ Blood Not Available in Nearby Hospitals");
    }
}

function checkVisitor() {
    const count = document.getElementById("visitorInput").value;

    if (count > 1) {
        alert("🚨 ALERT! Only 1 visitor allowed.");
    } else {
        alert("Visitor Allowed");
    }
}

displayHospitals();
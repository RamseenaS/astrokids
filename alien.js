document.getElementById("head-shape").addEventListener("change", function () {
    let head = document.getElementById("head");
    let shape = this.value;

    if (shape === "circle") {
        head.style.borderRadius = "50%";
    } else if (shape === "oval") {
        head.style.borderRadius = "50% / 70%";
    } else if (shape === "square") {
        head.style.borderRadius = "0";
    }
});

document.getElementById("head-color").addEventListener("input", function () {
    document.getElementById("head").style.backgroundColor = this.value;
});

document.getElementById("eye-color").addEventListener("input", function () {
    document.querySelectorAll(".eye").forEach(eye => {
        eye.style.backgroundColor = this.value;
    });
});

document.getElementById("mouth-shape").addEventListener("change", function () {
    let mouth = document.getElementById("mouth");

    if (this.value === "smile") {
        mouth.style.borderRadius = "10px";
        mouth.style.height = "10px";
    } else if (this.value === "frown") {
        mouth.style.borderRadius = "50%";
        mouth.style.height = "15px";
        mouth.style.transform = "rotate(180deg)";
    } else {
        mouth.style.borderRadius = "0";
        mouth.style.height = "5px";
    }
});

document.getElementById("add-ears").addEventListener("change", function () {
    document.getElementById("ears").style.display = this.checked ? "block" : "none";
});

document.getElementById("add-horns").addEventListener("change", function () {
    document.getElementById("horns").style.display = this.checked ? "block" : "none";
});

function animateAlien() {
    let alien = document.querySelector(".alien");
    
    if (alien.style.animation) {
        alien.style.animation = "";
    } else {
        alien.style.animation = "bounce 0.5s infinite";
    }
}


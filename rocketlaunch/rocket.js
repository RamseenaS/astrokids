document.getElementById("sky").addEventListener("click", function(event) {
    let countdown = document.getElementById("countdown");
    let sound = document.getElementById("launchSound");

    // Create a new rocket
    let rocket = document.createElement("img");
    rocket.src = "rocket.png.png";
    rocket.classList.add("rocket");
    document.getElementById("sky").appendChild(rocket);

    // Set position of the new rocket
    let x = event.clientX;
    let y = event.clientY;
    rocket.style.left = x - (rocket.clientWidth / 2) + "px";
    rocket.style.bottom = "0px";

    // Start countdown
    let count = 3;
    countdown.innerHTML = count;
    countdown.style.display = "block";

    let countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdown.innerHTML = count;
        } else {
            clearInterval(countdownInterval);
            countdown.style.display = "none";
            
            // Play sound
            sound.play();
            let audioDuration = sound.duration; // Get sound duration

            // Launch rocket
            rocket.style.transition = `bottom ${audioDuration}s ease-out`;
            rocket.style.bottom = "100%";
        }
    }, 1000);
});

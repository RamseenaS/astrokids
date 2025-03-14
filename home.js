document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.getElementById("shooting-stars");

    function createShootingStar() {
        let star = document.createElement("div");
        star.className = "shooting-star";

        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.animationDuration = Math.random() * 2 + 2 + "s";

        starsContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000); // Remove after animation ends
    }

    // Create multiple shooting stars at intervals
    setInterval(createShootingStar, 1500);
});

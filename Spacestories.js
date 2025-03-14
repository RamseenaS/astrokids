function toggleStory(element) {
    let hiddenText = element.previousElementSibling;

    if (hiddenText.classList.contains("hidden-story")) {
        hiddenText.classList.remove("hidden-story");
        element.textContent = "Read Less"; 
    } else {
        hiddenText.classList.add("hidden-story");
        element.textContent = "Read More";
    }
}

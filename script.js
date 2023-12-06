document.addEventListener("DOMContentLoaded", function () {
    const progressBlock = document.getElementById("progressBlock");
    const valueInput = document.getElementById("valueInput");
    const animateCheckbox = document.getElementById("animateCheckbox");
    const hideCheckbox = document.getElementById("hideCheckbox");

    function updateProgressState() {
        const value = valueInput.value;
        const isAnimated = animateCheckbox.checked;
        const isHidden = hideCheckbox.checked;
        const progressCircle = document.querySelector(".progressCircle");
        progressBlock.classList.toggle("normalState", !isAnimated && !isHidden);
        progressBlock.classList.toggle("animatedState", isAnimated && !isHidden);
        progressCircle.classList.toggle("hiddenState", isHidden);

        if (progressCircle && value) {
            progressCircle.style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 0 100%)`;
            progressCircle.style.background = `conic-gradient(#4e54c8 0% ${value}%, #f2f2f2 ${value}% 100%)`;
        }
    }

    valueInput.addEventListener("input", updateProgressState);
    animateCheckbox.addEventListener("change", updateProgressState);
    hideCheckbox.addEventListener("change", updateProgressState);

    // Initial update
    updateProgressState();
});
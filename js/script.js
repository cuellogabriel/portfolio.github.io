document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function revealSections() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.6;

        sections.forEach((section) => {
            if (section.offsetTop < scrollPosition) {
                section.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});

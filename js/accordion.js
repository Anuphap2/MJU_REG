document.querySelectorAll(".accordion-header").forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const isOpen = !content.classList.contains("hidden");

        document.querySelectorAll(".accordion-content").forEach(c => c.classList.add("hidden"));
        document.querySelectorAll(".accordion-header span").forEach(icon => icon.textContent = "+");

        if (!isOpen) {
            content.classList.remove("hidden");
            btn.querySelector("span").textContent = "-";
        }
    });
});
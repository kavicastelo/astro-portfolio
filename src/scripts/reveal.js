export function revealInit() {
    const sections = document.querySelectorAll(".motion-enter");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        },
        { threshold: 0.15 }
    );
    sections.forEach((section) => observer.observe(section));
}

// Automatically initialize if the script is loaded directly
if (typeof document !== 'undefined') {
    revealInit();
    document.addEventListener("astro:after-swap", revealInit);
}

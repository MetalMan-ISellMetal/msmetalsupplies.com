// Fade-up animation on scroll
const fadeElements = document.querySelectorAll(".fade-up");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add("visible");
        }
    });
}

// Category switching
const categoryButtons = document.querySelectorAll('.product-categories li');
const productGroups = document.querySelectorAll('.product-group');

categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {

        // remove active state
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        // hide all groups
        productGroups.forEach(group => {
            group.classList.add('hidden');
        });

        // show chosen group
        document.querySelector(`.product-group[data-category="${category}"]`)
            .classList.remove('hidden');
    });
});



window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

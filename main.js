document
    .querySelector(".further-information a")
    .addEventListener("mouseover", () => {
        document.querySelector(".line").classList.add("hidden");
    });

document
    .querySelector(".further-information a")
    .addEventListener("mouseout", () => {
        document.querySelector(".line").classList.remove("hidden");
    });

const hero = document.querySelector(".section__hero");
const navHeight = document
    .querySelector(".header")
    .getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
        document.body.classList.remove("sticky");
    } else {
        document.body.classList.add("sticky");
    }
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(hero);

// Make mobile navigation work
document.querySelector(".icon-box").addEventListener("click", () => {
    document.querySelector(".header").classList.toggle("nav__list-open")
})

// Close mobile navigation
document.querySelectorAll(".nav-option").forEach(e => {
    e.addEventListener("click", () => {
        if(document.querySelector(".header").classList.contains("nav__list-open")) {
            document.querySelector(".header").classList.toggle("nav__list-open")
        }
    })
})
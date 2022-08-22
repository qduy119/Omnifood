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

// Sticky nav 
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

// Revealing section
const revealSection = function(entries, observe) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    else {
        entry.target.classList.remove("section--hidden")
    }
    observe.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2
})

document.querySelectorAll(".section--").forEach(section => {
    section.classList.add("section--hidden");
    sectionObserver.observe(section);
})

// Lazy image
const imgTargets = document.querySelectorAll("img[data-src]");

const lazyImg = function(entries, observe) {
    const [entry] = entries;
    if(!entry.isIntersecting) return;
    else {
        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener("load", () => {
            entry.target.classList.remove("lazy-img");
          });
    }
    observe.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(lazyImg, {
    root: null,
    threshold: 0.2
});

imgTargets.forEach(img => {
    imgObserver.observe(img);
})

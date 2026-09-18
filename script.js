/* =========================================================
   RANIA RHAIEM — PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       Elements
       ----------------------------------------------------- */

    const navbar = document.querySelector(".navbar");
    const sections = document.querySelectorAll(".section");
    const projectCards = document.querySelectorAll(".project-card");
    const timelineItems = document.querySelectorAll(".timeline-item");
    const eduCards = document.querySelectorAll(".edu-card");
    const skillItems = document.querySelectorAll(".skills-list li");
    const contactCards = document.querySelectorAll(".contact-card");
    const navLinks = document.querySelectorAll(".nav-links a");

    /* -----------------------------------------------------
       Scroll reveal
       ----------------------------------------------------- */

    const animatedElements = [
        ...sections,
        ...projectCards,
        ...timelineItems,
        ...eduCards,
        ...skillItems,
        ...contactCards
    ];

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const element = entry.target;

                element.classList.add("show");

                observer.unobserve(element);
            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    animatedElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* -----------------------------------------------------
       Staggered animations
       ----------------------------------------------------- */

    const staggerGroups = [
        skillItems,
        projectCards,
        timelineItems,
        eduCards,
        contactCards
    ];

    staggerGroups.forEach(group => {

        group.forEach((element, index) => {

            element.style.transitionDelay = `${index * 80}ms`;

        });

    });


    /* -----------------------------------------------------
       Navbar scroll effect
       ----------------------------------------------------- */

    function updateNavbar() {

        if (window.scrollY > 30) {
            navbar?.classList.add("scrolled");
        } else {
            navbar?.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* -----------------------------------------------------
       Active navigation link
       ----------------------------------------------------- */

    const sectionsForNavigation = document.querySelectorAll(
        "#about, #skills, #projects, #experience, #education, #contact"
    );

    const navObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const currentId = entry.target.id;

                navLinks.forEach(link => {

                    const target = link.getAttribute("href");

                    link.classList.toggle(
                        "active",
                        target === `#${currentId}`
                    );

                });

            });

        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0
        }
    );

    sectionsForNavigation.forEach(section => {
        navObserver.observe(section);
    });


    /* -----------------------------------------------------
       Smooth navigation
       ----------------------------------------------------- */

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* -----------------------------------------------------
       Hero typing effect
       ----------------------------------------------------- */

    const heroHeader = document.querySelector("#hero h1");

    if (heroHeader) {

        const originalText = heroHeader.textContent.trim();

        /*
         * Respect reduced-motion preferences.
         * In that case, show the heading immediately.
         */

        const prefersReducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (prefersReducedMotion) {

            heroHeader.textContent = originalText;

        } else {

            heroHeader.textContent = "";

            let index = 0;

            const typeSpeed = 55;

            function typeHero() {

                if (index >= originalText.length) {
                    return;
                }

                heroHeader.textContent += originalText.charAt(index);

                index++;

                setTimeout(typeHero, typeSpeed);
            }

            setTimeout(typeHero, 350);

        }

    }


    /* -----------------------------------------------------
       Subtle hero parallax
       ----------------------------------------------------- */

    const hero = document.querySelector("#hero");

    if (hero) {

        const prefersReducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (!prefersReducedMotion) {

            window.addEventListener(
                "scroll",
                () => {

                    const scrollPosition = window.scrollY;

                    if (scrollPosition <= window.innerHeight) {

                        hero.style.backgroundPosition =
                            `center ${scrollPosition * 0.12}px`;

                    }

                },
                { passive: true }
            );

        }

    }

});
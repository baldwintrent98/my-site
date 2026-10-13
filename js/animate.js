// animate.js

gsap.registerPlugin(ScrollTrigger);

// -------------------------------------------------
// Split the Portfolio title into individual letters
// -------------------------------------------------

const title = document.querySelector(".hero h1");

if (title) {

    title.innerHTML = title.textContent
        .split("")
        .map(letter =>
            letter === " "
                ? "<span>&nbsp;</span>"
                : `<span>${letter}</span>`
        )
        .join("");

    const letters = title.querySelectorAll("span");

    // ---------------------------------------------
    // Initial States
    // ---------------------------------------------

    gsap.set(letters, {
        y: 100,
        opacity: 0,
        rotateX: 90
    });

    // gsap.set(".hero p", {
    //     y: 50,
    //     opacity: 0
    // });

    gsap.set(".project", {
        opacity: 0,
        y: 150
    });

    gsap.set(".project-image", {
        rotationY: 20,
        rotationX: 10,
        scale: 0.85
    });

    // ---------------------------------------------
    // Intro Animation
    // ---------------------------------------------

    const intro = gsap.timeline();

    intro.to(letters, {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.06,
        duration: 1,
        ease: "back.out(2)"
    });

    intro.to(".hero p", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.5");

    // ---------------------------------------------
    // Hero Scroll Animation
    // ---------------------------------------------

    const heroTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=800",
            pin: true,
            scrub: true
        }
    });

    heroTimeline.to(".hero-content", {
        y: -320,
        scale: 0.55,
        transformOrigin: "top center",
        ease: "none"
    }, 0);

    heroTimeline.to(".hero h1", {
        letterSpacing: "12px",
        ease: "none"
    }, 0);

    heroTimeline.to(".hero p", {
        opacity: 0.6,
        y: -10,
        ease: "none"
    }, 0);

    heroTimeline.to(letters, {
        x: (i) => (i - letters.length / 2) * 18,
        rotation: 360,
        stagger: 0.02,
        ease: "none"
    }, 0);

    heroTimeline.to("body", {
        backgroundColor: "#d9e5dc",
        ease: "none"
    }, 0);

    // ---------------------------------------------
    // Animate each project into view
    // ---------------------------------------------

    gsap.utils.toArray(".project").forEach(project => {

        gsap.to(project, {
            opacity: 1,
            y: 0,
            ease: "power2.out",

            scrollTrigger: {
                trigger: project,
                start: "top 75%",
                end: "top 45%",
                scrub: 1
            }
        });

    });

    // ---------------------------------------------
    // Animate each project image
    // ---------------------------------------------

    gsap.utils.toArray(".project-image").forEach(image => {

        gsap.to(image, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            ease: "power2.out",

            scrollTrigger: {
                trigger: image,
                start: "top 80%",
                end: "top 45%",
                scrub: true
            }
        });

    });

    // ---------------------------------------------
    // Parallax on project images
    // ---------------------------------------------

    gsap.utils.toArray(".project-image").forEach(image => {

        gsap.to(image, {
            y: -60,
            ease: "none",

            scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

    });

    // ---------------------------------------------
    // Fade in project text separately
    // ---------------------------------------------

    gsap.utils.toArray(".project-text").forEach(text => {

        gsap.from(text.children, {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 1,

            scrollTrigger: {
                trigger: text,
                start: "top 75%"
            }
        });

    });

    // ---------------------------------------------
    // Slight rotation while scrolling
    // ---------------------------------------------

    gsap.utils.toArray(".project").forEach(project => {

        gsap.to(project, {
            rotation: gsap.utils.random(-1.5, 1.5),

            scrollTrigger: {
                trigger: project,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });

    });

}
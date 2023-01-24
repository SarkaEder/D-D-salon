const burger = document.querySelector("nav svg");

burger.addEventListener("click", () => {
    if (burger.classList.contains("active")) {
        gsap.to(".links", { x: "100%" });
        gsap.to(".line", { stroke: "white" });
        gsap.set("body", { overflow: "auto" });
        gsap.set("body", { overflowX: "hidden" });
    } else {
        gsap.to(".links", { x: "0%" });
        gsap.to(".line", { stroke: "black" });
        gsap.fromTo(
            ".links a",
            { opacity: 0, y: 0 },
            { opacity: 1, y: 20, delay: 0.15, stagger: 0.15 });
        gsap.set("body", { overflow: "hidden" }); //disable scroll bar
    }
    burger.classList.toggle("active");
});

const images = gsap.utils.toArray(".img");
gsap.set(images, { opacity: 0 });

//pops up images
images.forEach(image => {
    ScrollTrigger.create({
        trigger: image,
        start: "top center",
        end: "center",
        markers: true,
        onEnter: () => {
            gsap.to(image, { opacity: 1 });
        },
    });
});
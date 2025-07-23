// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Page Load Animation
gsap.from(".home__content, .home__img-wrapper", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.3,
});

// Navbar Animation
gsap.from("header nav", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
});

// About Section
gsap.from( {
  scrollTrigger: {
    start: "top 100%",
  },
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  duration: 1,
  ease: "back.out(1.7)",
});

gsap.from(".about__content", {
  scrollTrigger: {
    trigger: ".about__content",
    start: "top 80%",
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power3.out",
});

// Qualification Section
gsap.from(".resume__item", {
  scrollTrigger: {
    trigger: ".qualification",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out",
});

// Services Section
gsap.from(".services__item", {
  scrollTrigger: {
    trigger: ".services__container",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 0.9,
  ease: "power2.out",
});

// Skills Section
gsap.from(".skills__item", {
  scrollTrigger: {
    trigger: ".skills__container",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out",
});

// Portfolio Section
// gsap.from(".work__card", {
//   scrollTrigger: {
//     trigger: ".work__container",
//     start: "top 85%",
//   },
//   opacity: 1,
//   scale: 0.8,
//   stagger: 0.2,
//   duration: 1,
//   ease: "back.out(1.7)",
// });

// Testimonials Section
gsap.from(".testimonials__item", {
  scrollTrigger: {
    trigger: ".testimonials",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  stagger: 0.3,
  duration: 1,
  ease: "power2.out",
});

// Contact Section
gsap.from(".contact-form, .contact-info", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 85%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

// Footer Animation
gsap.from(".footer__container", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out",
});

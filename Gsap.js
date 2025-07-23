// gsap.js
gsap.registerPlugin(ScrollTrigger);

// Home Section
gsap.from(".home__small, .home__title, .home__description, .home__btns", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.2
});
gsap.from(".home__img", {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  ease: "back.out(1.7)"
});

// About Section

gsap.from(".about__content", {
  scrollTrigger: {
    trigger: ".about__content",
    start: "top 80%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Qualification Section
gsap.from(".resume__group", {
  scrollTrigger: {
    trigger: ".resume__container",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: "power3.out"
});

// Services Section
gsap.utils.toArray(".services__item").forEach((item, i) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: i * 0.2, // stagger effect
  });
});


// Skills Section
gsap.from(".skills__item", {
  scrollTrigger: {
    trigger: ".skills__container",
    start: "top 80%",
  },
  x: -100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});

// Portfolio Section
gsap.from(".work__card", {
  scrollTrigger: {
    trigger: ".work__container",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power3.out"
});

// Testimonials Section
gsap.from(".testimonials__item", {
  scrollTrigger: {
    trigger: ".testimonials__conatiner",
    start: "top 80%",
  },
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  ease: "power2.out"
});

// Contact Section
gsap.from(".contact-info-block", {
  scrollTrigger: {
    trigger: ".contact-info",
    start: "top 80%",
  },
  x: -50,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});
gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 80%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

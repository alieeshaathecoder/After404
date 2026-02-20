gsap.registerPlugin(ScrollTrigger);

gsap.to(".terminal", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".terminal",
    start: "top 60%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".body p", {
  opacity: 0,
  width: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".body p",
    start: "top 70%",
    // toggleActions: "play none none reverse",
  },
});

gsap.to(".body p", {
  opacity: 1,
  width: "38%",
  duration: 2.5,
  scrollTrigger: {
    trigger: ".body p",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".debug-para p", {
  opacity: 0,
  y: 50,
  scrollTrigger: {
    trigger: ".debug-para p",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".debug-para p", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".debug-para p",
    start: "top 85%",
    toggleActions: "play none none reverse",
  },
});

// gsap.from(".debug p", {
//   opacity: 0,
//   y: 50,
//   scrollTrigger: {
//     trigger: ".debug-para p",
//     toggleActions: "play none none reverse",
//   },
// });

// gsap.to(".debug p", {
//   opacity: 1,
//   y: 0,
//   duration: 0.8,
//   scrollTrigger: {
//     trigger: ".debug-para p",
//     start: "top 55%",
//     markers: true,
//     toggleActions: "play none none reverse",
//   },
// });

gsap.from(".debug p", {
  opacity: 0,
  width: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".debug p",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".debug p", {
  opacity: 1,
  width: "100%",
  duration: 2,
  scrollTrigger: {
    trigger: ".debug p",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
});

gsap.from(".files", {
  opacity: 0,
  x: -400,
  scrollTrigger: {
    trigger: "files",
    toggleActions: "play none none reverse",
  },
});

gsap.to(".files", {
  opacity: 1,
  x: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".files",
    start: "top 55%",
    toggleActions: "play none none reverse",
  },
});


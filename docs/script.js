// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const crsr = document.querySelector("#cursor")
const blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px"
  crsr.style.top = dets.y + "px"
  blur.style.left = dets.x - 200 + "px"
  blur.style.top = dets.y - 200 + "px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid rgba(255, 13, 0, 0.793)";
    crsr.style.backgroundColor = "rgba(255, 13, 0, 0.793)";
  });
});

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the #nav element
gsap.to("#nav", {
  duration: 0.5,
  height: "150px",
  background: " linear-gradient(to left, red, blue)", // Changes background color to black
  scrollTrigger: {
    trigger: "#nav", // The element that triggers the animation
    scroller: "body", // The scroller (usually "body" unless you have a custom container)
    //markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    //markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub: 1,
  },
});

gsap.from("#Introduction img,#intro-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#Introduction",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".cards", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from(".cards, .card", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#cards-container",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#school-gallery", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#school-gallery",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 2,
  },
});

// new Swiper('.card-wrapper', {
//loop: true, //

// If we need pagination
// pagination: {
// el: '.swiper-pagination',
//}, 

// Navigation arrows
// navigation: {
//  nextEl: '.swiper-button-next',
//prevEl: '.swiper-button-prev',
//},
//}); 

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});

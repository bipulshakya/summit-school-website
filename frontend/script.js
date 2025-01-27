const crsr = document.querySelector("#cursor")
const blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+"px"
  crsr.style.top = dets.y+"px"
  blur.style.left = dets.x-200+"px"
  blur.style.top = dets.y-200+"px"
})

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the #nav element
gsap.to("#nav", {
  duration: 0.5,
  height: "130px",
  backgroundColor: " black", // Changes background color to black
  scrollTrigger: {
    trigger: "#nav", // The element that triggers the animation
    scroller: "body", // The scroller (usually "body" unless you have a custom container)
    //markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub:1,
  },
});

gsap.to("#main",{
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    //markers: true,
    start: "top -30%",
    end: "top -80%",
    scrub:1,
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

gsap.from(".cards, .card",{
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

new Swiper('.card-wrapper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

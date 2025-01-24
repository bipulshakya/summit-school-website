// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the #nav element
gsap.to("#nav", {
  duration: 0.5,
  height: "140px",
  backgroundColor: " rgba(34, 0, 255, 0.89)", // Changes background color to black
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
    markers: true,
    start: "top -50vh",
    end: "top -80vh",
    scrub:true
  },
});



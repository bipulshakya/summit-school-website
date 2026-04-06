// Cursor elements (only exist on homepage)
const crsr = document.querySelector("#cursor")
const blur = document.querySelector("#cursor-blur")

if (crsr && blur) {
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
}

// Register the ScrollTrigger plugin
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the #nav element (only on video pages)
  if (document.querySelector("#page1")) {
    gsap.to("#nav", {
      duration: 0.5,
      height: "100px",
      background: "linear-gradient(to left, #3b0764, #1e3a5f)",
      scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
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
        start: "top -30%",
        end: "top -80%",
        scrub: 1,
      },
    });
  }

  // Animations that only matter if element exists
  if (document.querySelector("#Introduction")) {
    gsap.from("#Introduction img", {
      x: -80,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "#Introduction",
        scroller: "body",
        start: "top 85%",
        end: "top 40%",
        scrub: 2,
      },
    });
    gsap.from("#intro-in", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#Introduction",
        scroller: "body",
        start: "top 80%",
        end: "top 35%",
        scrub: 2,
      },
    });
  }


  if (document.querySelector("#gallery-swiper-section")) {
    gsap.from("#gallery-swiper-section", {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#gallery-swiper-section",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 2,
      },
    });
  }

  if (document.querySelector("#school-gallery")) {
    gsap.from("#school-gallery h2", {
      y: 60,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#school-gallery",
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: 2,
      },
    });
  }

  if (document.querySelector("#colon1")) {
    gsap.from("#colon1", {
      y: -70,
      x: -70,
      scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
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
        start: "top 55%",
        end: "top 45%",
        scrub: 4,
      },
    });
  }

  if (document.querySelector("#page4 h1")) {
    gsap.from("#page4 h1", {
      y: 50,
      scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
      },
    });
  }
}

// Initialize Swiper gallery
if (document.querySelector(".gallery-swiper")) {
  // Fallback to local image when external gallery sources fail.
  document.querySelectorAll(".gallery-swiper img").forEach((img) => {
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied === "true") return;
      img.dataset.fallbackApplied = "true";
      img.src = "imges/logo.png";
      img.style.objectFit = "contain";
      img.style.backgroundColor = "#0a0a18";
      img.style.padding = "14px";
    });
  });

  new Swiper(".gallery-swiper", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    speed: 800,
    effect: "slide",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
  });
}

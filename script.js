/* ==========================================================
   PREMIUM PORTFOLIO JAVASCRIPT
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================
     LOADER
     ========================================================== */

  window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    loader.style.opacity = "0";
    loader.style.visibility = "hidden";

    setTimeout(() => {
      loader.style.display = "none";
    }, 500);

  });

  /* ==========================================================
     HEADLINE ROTATION
     ========================================================== */

  const titles = [
  "Full Stack Developer",
  "Data Analyst",
  "Azure AI Certified",
  "Problem Solver",
  "Web Developer",
  "Software Engineer"
];
  const headline = document.getElementById("headline-target");
function rotateHeadline() {

  headline.classList.add("fade-out");

  setTimeout(() => {

    currentIndex =
      (currentIndex + 1) % titles.length;

    headline.textContent =
      titles[currentIndex];

    headline.classList.remove("fade-out");

  }, 400);

}

setInterval(rotateHeadline, 2500);
  /* ==========================================================
     SCROLL PROGRESS BAR
     ========================================================== */

  const progressBar =
    document.getElementById("progress-bar");

  function updateProgressBar() {

    const scrollTop =
      window.scrollY;

    const docHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =
      (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width =
        progress + "%";
    }

  }

  window.addEventListener(
    "scroll",
    updateProgressBar
  );

  updateProgressBar();

  /* ==========================================================
     CUSTOM CURSOR
     ========================================================== */

  const cursor =
    document.querySelector(".cursor");

  if (cursor) {

    document.addEventListener(
      "mousemove",
      (e) => {

        cursor.style.left =
          e.clientX + "px";

        cursor.style.top =
          e.clientY + "px";

      }
    );

    const hoverTargets =
      document.querySelectorAll(
        "a, button, .btn, .skill-tag, .project-card"
      );

    hoverTargets.forEach((item) => {

      item.addEventListener(
        "mouseenter",
        () => {
          cursor.classList.add("active");
        }
      );

      item.addEventListener(
        "mouseleave",
        () => {
          cursor.classList.remove("active");
        }
      );

    });

  }

  /* ==========================================================
     SCROLL REVEAL
     ========================================================== */

  const revealElements =
    document.querySelectorAll(
      ".glass-section"
    );

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "show"
            );

          }

        });

      },

      {
        threshold: 0.15
      }

    );

  revealElements.forEach((el) => {
    observer.observe(el);
  });

  /* ==========================================================
     ACTIVE NAVIGATION
     ========================================================== */

  const sections =
    document.querySelectorAll(
      "section, header"
    );

  const navLinks =
    document.querySelectorAll(
      ".nav-links a"
    );

  function updateActiveNav() {

    let current = "";

    sections.forEach((section) => {

      const sectionTop =
        section.offsetTop - 150;

      const sectionHeight =
        section.clientHeight;

      if (
        window.scrollY >= sectionTop &&
        window.scrollY <
          sectionTop + sectionHeight
      ) {

        current =
          section.getAttribute("id");

      }

    });

    navLinks.forEach((link) => {

      link.classList.remove(
        "active-link"
      );

      if (
        link.getAttribute("href") ===
        `#${current}`
      ) {

        link.classList.add(
          "active-link"
        );

      }

    });

  }

  window.addEventListener(
    "scroll",
    updateActiveNav
  );

  updateActiveNav();
   const skillTags =
document.querySelectorAll(".skill-tag");

skillTags.forEach((tag,index)=>{

  tag.style.opacity="0";

  setTimeout(()=>{

    tag.style.opacity="1";
    tag.style.transform="translateY(0px)";

  },index*100);

});

  /* ==========================================================
     MAGNETIC BUTTONS
     ========================================================== */

  const magneticButtons =
    document.querySelectorAll(
      ".btn, .submit-btn"
    );

  magneticButtons.forEach((button) => {

    button.addEventListener(
      "mousemove",
      (e) => {

        const rect =
          button.getBoundingClientRect();

        const x =
          e.clientX -
          rect.left -
          rect.width / 2;

        const y =
          e.clientY -
          rect.top -
          rect.height / 2;

        button.style.transform =
          `translate(${x * 0.12}px, ${y * 0.12}px)`;

      }
    );

    button.addEventListener(
      "mouseleave",
      () => {

        button.style.transform =
          "translate(0px,0px)";

      }
    );

  });

  /* ==========================================================
     LENIS SMOOTH SCROLL
     ========================================================== */

  if (typeof Lenis !== "undefined") {

    const lenis =
      new Lenis({

        duration: 1.2,

        smoothWheel: true,

        smoothTouch: false

      });

    function raf(time) {

      lenis.raf(time);

      requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

  }

  /* ==========================================================
     GSAP HERO ANIMATION
     ========================================================== */

  if (
    typeof gsap !== "undefined"
  ) {

    gsap.from(
      ".avatar-container",
      {
        duration: 1,
        scale: 0.8,
        opacity: 0,
        ease: "power3.out"
      }
    );

    gsap.from(
      ".name",
      {
        duration: 1,
        opacity: 0,
        y: 40,
        delay: 0.2,
        ease: "power3.out"
      }
    );

    gsap.from(
      ".headline-container",
      {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.4,
        ease: "power3.out"
      }
    );

    gsap.from(
      ".bio",
      {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.6,
        ease: "power3.out"
      }
    );

    gsap.from(
      ".hero-buttons",
      {
        duration: 1,
        opacity: 0,
        y: 30,
        delay: 0.8,
        ease: "power3.out"
      }
    );

  }

  /* ==========================================================
     PARALLAX EFFECT
     ========================================================== */

  const aurora =
    document.querySelector(".aurora");

  if (aurora) {

    window.addEventListener(
      "mousemove",
      (e) => {

        const x =
          (window.innerWidth / 2 -
            e.clientX) /
          40;

        const y =
          (window.innerHeight / 2 -
            e.clientY) /
          40;

        aurora.style.transform =
          `translate(${x}px, ${y}px)`;

      }
    );

  }

  /* ==========================================================
     IMAGE HOVER TILT
     ========================================================== */

  const cards =
    document.querySelectorAll(
      ".project-card"
    );

  cards.forEach((card) => {

    card.addEventListener(
      "mousemove",
      (e) => {

        const rect =
          card.getBoundingClientRect();

        const x =
          e.clientX - rect.left;

        const y =
          e.clientY - rect.top;

        const rotateX =
          ((y / rect.height) - 0.5) * -8;

        const rotateY =
          ((x / rect.width) - 0.5) * 8;

        card.style.transform =
          `perspective(1000px)
           rotateX(${rotateX}deg)
           rotateY(${rotateY}deg)
           translateY(-10px)`;

      }
    );

    card.addEventListener(
      "mouseleave",
      () => {

        card.style.transform =
          "perspective(1000px) rotateX(0deg) rotateY(0deg)";

      }
    );

  });

  /* ==========================================================
     PERFORMANCE
     ========================================================== */

  let resizeTimer;

  window.addEventListener(
    "resize",
    () => {

      clearTimeout(resizeTimer);

      resizeTimer =
        setTimeout(() => {

          updateProgressBar();

        }, 150);

    }
  );

});
const topBtn =
document.getElementById("scrollTopBtn");

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}
);

topBtn.addEventListener(
"click",
()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

}
);

/* ==========================================================
   END OF FILE
   ========================================================== */
console.log(
"%c🚀 Adarsh V Pujar Portfolio",
"font-size:24px;color:#B3A7E8;font-weight:bold;"
);

console.log(
"%cFull Stack Developer | Data Analyst | Azure AI Certified",
"font-size:14px;color:#57ACC8;"
);

console.log(
"%cPortfolio Developed by Adarsh V Pujar",
"font-size:13px;color:#ffffff;"
);

console.log(
"%cGitHub: https://github.com/adarshvpujar143-cyber",
"font-size:12px;color:#7BBBFF;"
);

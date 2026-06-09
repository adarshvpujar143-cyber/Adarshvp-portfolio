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
  let currentIndex = 0;

  function rotateHeadline() {
    if (!headline) return;

    headline.classList.add("fade-out");

    setTimeout(() => {
      currentIndex = (currentIndex + 1) % titles.length;
      headline.textContent = titles[currentIndex];
      headline.classList.remove("fade-out");
    }, 400);
  }

  setInterval(rotateHeadline, 2500);

  /* ==========================================================
     SCROLL PROGRESS BAR & ACTIVE NAVIGATION (PERFORMANCE OPTIMIZED)
     ========================================================== */
  const progressBar = document.getElementById("progress-bar");
  const sections = document.querySelectorAll("section, header");
  const navLinks = document.querySelectorAll(".nav-links a");
  let isScrolling = false;

  function updateProgressBar() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = progress + "%";
    }
  }

  function updateActiveNav() {
    let current = "";
    const scrollPos = window.scrollY;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.clientHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active-link");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active-link");
      }
    });
  }

  // Combined Scroll Listener throttled with requestAnimationFrame to prevent lagging/stuttering
  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        updateProgressBar();
        updateActiveNav();
        isScrolling = false;
      });
      isScrolling = true;
    }
  }, { passive: true });

  // Initial runtime executions
  updateProgressBar();
  updateActiveNav();

  /* ==========================================================
     CUSTOM CURSOR
     ========================================================== */
  const cursor = document.querySelector(".cursor");

  if (cursor) {
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%), 0)`;
    }, { passive: true });

    const hoverTargets = document.querySelectorAll("a, button, .btn, .skill-tag, .project-card");

    hoverTargets.forEach((item) => {
      item.addEventListener("mouseenter", () => cursor.classList.add("active"), { passive: true });
      item.addEventListener("mouseleave", () => cursor.classList.remove("active"), { passive: true });
    });
  }

  /* ==========================================================
     SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================== */
  const revealElements = document.querySelectorAll(".glass-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stops observing once shown to boost device performance
        }
      });
    },
    { threshold: 0.10 }
  );

  revealElements.forEach((el) => observer.observe(el));

  /* ==========================================================
     SKILL TAGS INITIAL ANIMATION
     ========================================================= */
  const skillTags = document.querySelectorAll(".skill-tag");

  skillTags.forEach((tag, index) => {
    tag.style.opacity = "0";
    tag.style.transform = "translateY(20px)"; // Setup initial offset state
    tag.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    setTimeout(() => {
      tag.style.opacity = "1";
      tag.style.transform = "translateY(0px)";
    }, index * 60); // Faster rendering pipeline cadence
  });

  /* ==========================================================
     MAGNETIC BUTTONS
     ========================================================== */
  const magneticButtons = document.querySelectorAll(".btn, .submit-btn");

  magneticButtons.forEach((button) => {
    button.addEventListener("mousemove", (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      button.style.transform = `translate3d(${x * 0.12}px, ${y * 0.12}px, 0)`;
    }, { passive: true });

    button.addEventListener("mouseleave", () => {
      button.style.transform = `translate3d(0px, 0px, 0px)`;
    });
  });

  /* ==========================================================
     LENIS SMOOTH SCROLL
     ========================================================== */
  if (typeof Lenis !== "undefined") {
    const lenis = new Lenis({
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
  if (typeof gsap !== "undefined") {
    const tl = gsap.timeline();

    tl.from(".avatar-container", {
      duration: 0.8,
      scale: 0.8,
      opacity: 0,
      ease: "power3.out"
    })
    .from(".name", {
      duration: 0.8,
      opacity: 0,
      y: 30,
      ease: "power3.out"
    }, "-=0.5")
    .from(".headline-container", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power3.out"
    }, "-=0.5")
    .from(".bio", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power3.out"
    }, "-=0.5")
    .from(".hero-buttons", {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: "power3.out"
    }, "-=0.5");
  }

  /* ==========================================================
     PARALLAX EFFECT
     ========================================================== */
  const aurora = document.querySelector(".aurora");

  if (aurora) {
    document.addEventListener("mousemove", (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;

      aurora.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }, { passive: true });
  }

  /* ==========================================================
     IMAGE HOVER TILT
     ========================================================== */
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = ((y / rect.height) - 0.5) * -6;
      const rotateY = ((x / rect.width) - 0.5) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    }, { passive: true });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
    });
  });

  /* ==========================================================
     PERFORMANCE EVENT DEBOUNCING
     ========================================================== */
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateProgressBar();
    }, 150);
  }, { passive: true });

});

/* ==========================================================
   SCROLL TO TOP BUTTON
   ========================================================== */
const topBtn = document.getElementById("scrollTopBtn");
let isButtonScrolling = false;

window.addEventListener("scroll", () => {
  if (topBtn && !isButtonScrolling) {
    window.requestAnimationFrame(() => {
      if (window.scrollY > 500) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
      isButtonScrolling = false;
    });
    isButtonScrolling = true;
  }
}, { passive: true });

if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

/* ==========================================================
   END OF FILE - BRANDING
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

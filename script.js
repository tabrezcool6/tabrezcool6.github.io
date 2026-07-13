// ===== Syed Tabrez — Portfolio interactions =====
(function () {
  "use strict";

  const navBar = document.getElementById("navBar");
  const menu = document.getElementById("menu");
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const progress = document.getElementById("scrollProgress");
  const links = Array.from(document.querySelectorAll(".menu li a"));
  const sections = Array.from(document.querySelectorAll("section[id]"));

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Mobile menu -----
  if (mobileBtn && menu) {
    mobileBtn.addEventListener("click", function () {
      menu.classList.toggle("show");
      mobileBtn.classList.toggle("open");
    });
    links.forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.remove("show");
        mobileBtn.classList.remove("open");
      });
    });
  }

  // ----- Scroll: nav background + progress bar -----
  function onScroll() {
    const y = window.scrollY || window.pageYOffset;

    if (navBar) navBar.classList.toggle("scrolled", y > 30);

    if (progress) {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }

    // active link based on section in view
    let current = sections.length ? sections[0].id : "";
    const offset = window.innerHeight * 0.35;
    sections.forEach(function (sec) {
      if (y + offset >= sec.offsetTop) current = sec.id;
    });
    links.forEach(function (a) {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();

  // ----- Reveal on scroll -----
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry, i) {
          if (entry.isIntersecting) {
            // small stagger for siblings entering together
            entry.target.style.transitionDelay = Math.min(i * 60, 240) + "ms";
            entry.target.classList.add("in");
            runEffects(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); runEffects(el); });
  }

  // ----- Effects fired when an element reveals -----
  function runEffects(el) {
    // Animate skill bars within this element
    el.querySelectorAll(".line span[data-width]").forEach(function (bar) {
      bar.style.width = bar.getAttribute("data-width");
    });

    // Count-up stats within this element
    el.querySelectorAll(".stat-num[data-count]").forEach(function (num) {
      countUp(num, parseInt(num.getAttribute("data-count"), 10));
    });
  }

  function countUp(node, target) {
    if (!target || target < 0) { node.textContent = target || 0; return; }
    const duration = 1200;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
})();

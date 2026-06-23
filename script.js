document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================================================
  // 1. GLOBAL INTERFACE SCRIPTS & ANIMATION INITIALIZATION
  // ==========================================================================
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-quart"
    });
  }

  // Live Auto-Updating Footer Copyright Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ==========================================================================
  // 2. RADIAL INTERFACE NAVIGATION CONTROLLER
  // ==========================================================================
  const radialTrigger = document.getElementById("radialTrigger");
  const radialNavSystem = document.querySelector(".radial-nav-system");
  const radialOrbit = document.getElementById("radialOrbit");

  if (radialTrigger && radialNavSystem && radialOrbit) {
    radialTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      radialNavSystem.classList.toggle("open");
    });

    document.addEventListener("click", (e) => {
      if (!radialNavSystem.contains(e.target)) {
        radialNavSystem.classList.remove("open");
      }
    });

    radialOrbit.querySelectorAll("a.radial-node-item").forEach((link) => {
      link.addEventListener("click", () => {
        radialOrbit.querySelectorAll("a.radial-node-item").forEach(item => item.classList.remove("active"));
        link.classList.add("active");
        radialNavSystem.classList.remove("open");
      });
    });
  }

  // ==========================================================================
  // 3. SECURE HARDWARE OPERATING SYSTEM THEME AUTOMATION
  // ==========================================================================
  const root = document.documentElement;

  function syncWithSystemTheme(e) {
    if (e.matches) {
      root.setAttribute("data-theme", "light");
    } else {
      root.setAttribute("data-theme", "dark");
    }
  }

  const systemThemeQuery = window.matchMedia("(prefers-color-scheme: light)");
  
  if (systemThemeQuery.matches) {
    root.setAttribute("data-theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
  }

  try {
    systemThemeQuery.addEventListener("change", syncWithSystemTheme);
  } catch (err) {
    systemThemeQuery.addListener(syncWithSystemTheme); 
  }

  // ==========================================================================
  // 4. HUMANIZED TYPEWRITER INTERACTION TIMELINE (AI ENGINEERING FOCUS)
  // ==========================================================================
  const typedEl = document.getElementById("typedText");
  if (typedEl) {
    const words = [
      "AI Automation Engineer.",
      "Autonomous Agents Architect.",
      "ML Pipeline Designer."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        charIndex++;
        if (charIndex === currentWord.length + 1) {
          setTimeout(() => (isDeleting = true), 1500); 
          return setTimeout(type, 120);
        }
      } else {
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }

      typedEl.textContent = currentWord.slice(0, charIndex);
      const speed = isDeleting ? 40 : 100;
      setTimeout(type, speed);
    }

    type();
  }

  // ==========================================================================
  // 5. BACKGROUND CONTROLLER: SCROLL MOMENTUM DRIVER
  // ==========================================================================
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDelta = Math.abs(scrollTop - lastScrollTop);
    
    if (scrollDelta > 2) {
      const dynamicSpeed = Math.max(3.5, 12 - (scrollDelta * 0.1));
      root.style.setProperty("--warp-speed", `${dynamicSpeed}s`);
    }

    clearTimeout(window.scrollWarpTimeout);
    window.scrollWarpTimeout = setTimeout(() => {
      root.style.setProperty("--warp-speed", "12s");
    }, 150);

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // ==========================================================================
  // 6. DYNAMIC 3D INTERACTION LOOP (TARGETED INTERACTIVE GRID ALIGNMENT)
  // ==========================================================================
  // Enhanced Selectors Array to perfectly bind new matrix cards and profile rows
  const interactiveElements = document.querySelectorAll(
    ".grid > div, .matrix-project-card, .glow-effect, .bg-cardBg\\/20, .flex-col.gap-3 > div, #project-carousel > div, .avatar-perspective-card, .image-stage-container"
  );

  interactiveElements.forEach((element) => {
    // Triggers smoothly on all verified classes, cards, and mockup rows
    if (
      element.classList.contains("glow-effect") || 
      element.classList.contains("matrix-project-card") || 
      element.classList.contains("bg-black/40") || 
      element.querySelector("img")
    ) {
      
      element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        element.style.setProperty("--mouse-x", `${x}px`);
        element.style.setProperty("--mouse-y", `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Rigid physics parameters customized for deep workspace cards
        let maxTilt = 3;
        if (element.classList.contains("image-stage-container") || element.parentElement.id === "project-carousel") {
          maxTilt = 6;
        } else if (element.classList.contains("matrix-project-card") && rect.height > 400) {
          maxTilt = 4; // Slight boost for tall custom certification blocks
        }
        
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        element.style.transition = "transform 0.1s ease";
      });

      element.addEventListener("mouseleave", () => {
        element.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        element.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
      });
    }
  });
});
/**
 * Golden Fork Restaurant - Main JavaScript
 * Handles navigation, scroll effects, menu tabs, and form interactions
 */

document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // Header Scroll Effect
  // ============================================
  const header = document.getElementById("header");
  let lastScroll = 0;

  function handleScroll() {
    const currentScroll = window.scrollY;

    // Add/remove scrolled class based on scroll position
    if (currentScroll > 80) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  }

  window.addEventListener("scroll", handleScroll, { passive: true });

  // ============================================
  // Mobile Menu Toggle
  // ============================================
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const nav = document.getElementById("nav");

  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", function () {
      mobileMenuToggle.classList.toggle("active");
      nav.classList.toggle("active");
      document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
    });

    // Close menu when clicking on a nav link
    const navLinks = nav.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenuToggle.classList.remove("active");
        nav.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      if (
        nav.classList.contains("active") &&
        !nav.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        mobileMenuToggle.classList.remove("active");
        nav.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  // ============================================
  // Smooth Scrolling for Anchor Links
  // ============================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href !== "#") {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          const headerHeight = header.offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = targetPosition - headerHeight - 20;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // ============================================
  // Menu Tabs Functionality
  // ============================================
  const menuTabs = document.querySelectorAll(".menu-tab");
  const menuItems = document.querySelectorAll(".menu-item");

  menuTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const category = this.dataset.category;

      // Update active tab
      menuTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Filter menu items
      menuItems.forEach((item) => {
        if (item.dataset.category === category) {
          item.style.display = "block";
          // Trigger reveal animation
          setTimeout(() => {
            item.classList.add("active");
          }, 50);
        } else {
          item.style.display = "none";
          item.classList.remove("active");
        }
      });
    });
  });

  // ============================================
  // Scroll Reveal Animation
  // ============================================
  const revealElements = document.querySelectorAll(".reveal");

  function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add("active");
      }
    });
  }

  // Run on load
  checkReveal();

  // Run on scroll
  window.addEventListener("scroll", checkReveal, { passive: true });

  // ============================================
  // Reservation Form Handling
  // ============================================
  const reservationForm = document.getElementById("reservation-form");

  if (reservationForm) {
    // Set minimum date to today
    const dateInput = document.getElementById("date");
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const dd = String(today.getDate()).padStart(2, "0");
      dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      // Simple validation
      if (!data.name || !data.email || !data.phone || !data.guests || !data.date || !data.time) {
        showNotification("Please fill in all required fields.", "error");
        return;
      }

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      setTimeout(() => {
        showNotification(
          "Thank you! Your reservation request has been received. We will contact you shortly to confirm.",
          "success"
        );
        reservationForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }

  // ============================================
  // Newsletter Form Handling
  // ============================================
  const newsletterForm = document.querySelector(".newsletter-form");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput.value.trim();

      if (!email || !isValidEmail(email)) {
        showNotification("Please enter a valid email address.", "error");
        return;
      }

      showNotification("Thank you for subscribing to our newsletter!", "success");
      emailInput.value = "";
    });
  }

  // ============================================
  // Utility Functions
  // ============================================
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showNotification(message, type = "info") {
    // Remove existing notification
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) {
      existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <span>${message}</span>
      <button class="notification-close">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      max-width: 400px;
      padding: 18px 25px;
      background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
      color: white;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      gap: 15px;
      z-index: 10000;
      animation: slideInRight 0.4s ease;
      font-size: 15px;
    `;

    // Add keyframes
    if (!document.querySelector("#notification-styles")) {
      const style = document.createElement("style");
      style.id = "notification-styles";
      style.textContent = `
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideOutRight {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100px);
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Close button styles
    const closeBtn = notification.querySelector(".notification-close");
    closeBtn.style.cssText = `
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      opacity: 0.8;
      transition: opacity 0.2s;
    `;

    closeBtn.addEventListener("mouseover", () => (closeBtn.style.opacity = "1"));
    closeBtn.addEventListener("mouseout", () => (closeBtn.style.opacity = "0.8"));

    closeBtn.addEventListener("click", () => {
      notification.style.animation = "slideOutRight 0.4s ease forwards";
      setTimeout(() => notification.remove(), 400);
    });

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.animation = "slideOutRight 0.4s ease forwards";
        setTimeout(() => notification.remove(), 400);
      }
    }, 5000);
  }

  // ============================================
  // Gallery Lightbox (Optional Enhancement)
  // ============================================
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");
      if (!img) return;

      // Create lightbox
      const lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.style.cssText = `
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        padding: 40px;
        cursor: zoom-out;
        animation: fadeIn 0.3s ease;
      `;

      const lightboxImg = document.createElement("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxImg.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
        animation: zoomIn 0.3s ease;
      `;

      // Add keyframes if not exists
      if (!document.querySelector("#lightbox-styles")) {
        const style = document.createElement("style");
        style.id = "lightbox-styles";
        style.textContent = `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `;
        document.head.appendChild(style);
      }

      lightbox.appendChild(lightboxImg);
      document.body.appendChild(lightbox);
      document.body.style.overflow = "hidden";

      // Close on click
      lightbox.addEventListener("click", function () {
        this.style.opacity = "0";
        setTimeout(() => {
          this.remove();
          document.body.style.overflow = "";
        }, 300);
      });

      // Close on ESC key
      function handleEsc(e) {
        if (e.key === "Escape") {
          lightbox.click();
          document.removeEventListener("keydown", handleEsc);
        }
      }
      document.addEventListener("keydown", handleEsc);
    });
  });

  // ============================================
  // Parallax Effect for Hero (Subtle)
  // ============================================
  const heroImg = document.querySelector(".hero-img");

  if (heroImg && window.innerWidth > 768) {
    window.addEventListener(
      "scroll",
      function () {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroImg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      },
      { passive: true }
    );
  }

  // Console message
  console.log(
    "%c🍴 Golden Fork Restaurant %c Welcome to fine dining excellence!",
    "background: #d4a373; color: white; padding: 8px 12px; border-radius: 4px 0 0 4px; font-weight: bold;",
    "background: #1a1a1a; color: white; padding: 8px 12px; border-radius: 0 4px 4px 0;"
  );
});
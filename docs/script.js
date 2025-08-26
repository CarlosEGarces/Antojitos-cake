// Funcionalidad general del sitio
document.addEventListener("DOMContentLoaded", () => {
  initializeMobileMenu()
  initializeThemeToggle()
  initializeScrollAnimations()
  initializeTypingEffect()
  initializeSmoothScrolling()
})

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileMenuClose = document.getElementById("mobileMenuClose")

  if (!mobileMenuBtn || !mobileMenu || !mobileMenuClose) return

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    document.body.style.overflow = "hidden"
  })

  mobileMenuClose.addEventListener("click", closeMobileMenu)
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMobileMenu()
  })

  function closeMobileMenu() {
    mobileMenu.classList.remove("active")
    document.body.style.overflow = ""
  }
}

// Theme toggle functionality
function initializeThemeToggle() {
  const themeToggle = document.getElementById("themeToggle")
  const mobileThemeToggle = document.getElementById("mobileThemeToggle")
  const themeIcon = document.getElementById("themeIcon")
  const mobileThemeIcon = document.getElementById("mobileThemeIcon")

  // Load saved theme
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme")
    updateThemeIcons(true)
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle("dark-theme")
    updateThemeIcons(isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }

  function updateThemeIcons(isDark) {
    const iconClass = isDark ? "fa-sun" : "fa-moon"
    if (themeIcon) themeIcon.className = `fas ${iconClass}`
    if (mobileThemeIcon) mobileThemeIcon.className = `fas ${iconClass}`
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme)
  if (mobileThemeToggle) mobileThemeToggle.addEventListener("click", toggleTheme)
}

// Scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".feature-card, .contact-item, .about-text, .about-image").forEach((el) => {
    observer.observe(el)
  })
}

// Typing effect for hero subtitle
function initializeTypingEffect() {
  const heroSubtitle = document.getElementById("heroSubtitle")
  if (!heroSubtitle) return

  const text =
    "En Antojitos Cakes Express creamos postres artesanales premium que despiertan sonrisas y endulzan tus momentos más especiales"

  heroSubtitle.style.opacity = "0"

  setTimeout(() => {
    typeWriter(heroSubtitle, text, 30)
  }, 1500)

  function typeWriter(element, text, speed = 50) {
    let i = 0
    element.innerHTML = ""
    element.style.opacity = "1"

    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      } else {
        element.classList.add("typing-complete")
      }
    }
    type()
  }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Utility function for notifications
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#3b82f6"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1001;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

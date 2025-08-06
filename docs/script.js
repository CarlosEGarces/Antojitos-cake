// Funcionalidad general del sitio

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileMenuClose = document.getElementById("mobileMenuClose")

  if (mobileMenuBtn && mobileMenu && mobileMenuClose) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    })

    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })

    // Close menu when clicking outside
    mobileMenu.addEventListener("click", (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }

  // Theme toggle functionality
  const themeToggle = document.getElementById("themeToggle")
  const mobileThemeToggle = document.getElementById("mobileThemeToggle")
  const themeIcon = document.getElementById("themeIcon")
  const mobileThemeIcon = document.getElementById("mobileThemeIcon")

  function toggleTheme() {
    document.body.classList.toggle('dark-theme')
    const isDark = document.body.classList.contains('dark-theme')
    
    // Update icons
    const iconClass = isDark ? 'fa-sun' : 'fa-moon'
    themeIcon.className = `fas ${iconClass}`
    mobileThemeIcon.className = `fas ${iconClass}`
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  // Load saved theme
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme')
    themeIcon.className = 'fas fa-sun'
    mobileThemeIcon.className = 'fas fa-sun'
  }

  // Add event listeners for theme toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }
  if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", toggleTheme)
  }

  // Smooth scrolling for anchor links
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

  // Add scroll animations
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
  
  // Scroll reveal animation
  const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observerReveal.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observar elementos para scroll reveal
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    observerReveal.observe(el);
  });
  
  // Parallax suave
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.speed || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
  
  // Efecto de typing para textos
  function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    element.style.opacity = '1'; // Mostrar el elemento cuando empiece el typing
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      } else {
        element.classList.add('typing-complete');
      }
    }
    type();
  }
  
  // Aplicar efecto typing al subtitle del hero
  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroSubtitle) {
    const originalText = 'En Antojitos Cakes Express creamos postres artesanales premium que despiertan sonrisas y endulzan tus momentos más especiales con la más alta calidad y dedicación';
    
    // Inicialmente oculto
    heroSubtitle.style.opacity = '0';
    
    // Empezar typing después de un delay
    setTimeout(() => {
      typeWriter(heroSubtitle, originalText, 30);
    }, 1500);
  }
  
  // Efecto de confetti al hacer hover en botones especiales
  function createConfetti(element) {
    const colors = ['#EC1C63', '#F85A5A', '#FF6B35', '#FFD23F', '#4ECDC4'];
    
    for (let i = 0; i < 10; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '6px';
      confetti.style.height = '6px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.pointerEvents = 'none';
      confetti.style.zIndex = '1000';
      
      const rect = element.getBoundingClientRect();
      confetti.style.left = `${rect.left + Math.random() * rect.width}px`;
      confetti.style.top = `${rect.top + Math.random() * rect.height}px`;
      
      document.body.appendChild(confetti);
      
      // Animar confetti
      confetti.animate([
        { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
        { transform: `translateY(-100px) rotate(360deg)`, opacity: 0 }
      ], {
        duration: 1000,
        easing: 'ease-out'
      }).onfinish = () => confetti.remove();
    }
  }
  
  // Agregar efecto confetti a botones mágicos
  document.querySelectorAll('.btn-magical').forEach(btn => {
    btn.addEventListener('mouseenter', () => createConfetti(btn));
  });
  
  // Tooltip functionality
  document.querySelectorAll('.tooltip').forEach(element => {
    element.addEventListener('mouseenter', function() {
      const tooltip = this.getAttribute('data-tooltip');
      if (tooltip) {
        this.setAttribute('title', ''); // Remove default tooltip
      }
    });
  });
});

// Utility functions
function formatPrice(price) {
  return new Intl.NumberFormat("es-VE", {
    style: "currency",
    currency: "VES",
    minimumFractionDigits: 0,
  }).format(price)
}

function createStarRating(rating = 5) {
  let stars = ""
  for (let i = 0; i < 5; i++) {
    stars += `<i class="fas fa-star star"></i>`
  }
  return stars
}

// Show notification (can be used for future features)
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Add styles
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

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

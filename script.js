// Preloader
window.addEventListener("load", () => {
    const preloader = document.querySelector(".preloader")
    setTimeout(() => {
      preloader.classList.add("hidden")
      document.body.classList.add("loaded")
    }, 1500)
  })
  
  // Particles.js configuration
  // Declare particlesJS if it's not already defined (e.g., by a script tag)
  if (typeof particlesJS !== "function") {
    console.warn("particlesJS is not a function. Ensure particles.js library is included.")
  } else {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#4f46e5",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#4f46e5",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    })
  }
  
  // Typing animation
  const typingTexts = [
    "Django Developer",
    "Backend Specialist",
    "BCA Student",
    "Tech Enthusiast",
    "Problem Solver",
    "Python Developer",
  ]
  
  let textIndex = 0
  let charIndex = 0
  let isDeleting = false
  const typingElement = document.querySelector(".typing-text")
  
  function typeText() {
    const currentText = typingTexts[textIndex]
  
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1)
      charIndex--
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1)
      charIndex++
    }
  
    let typeSpeed = isDeleting ? 50 : 100
  
    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      textIndex = (textIndex + 1) % typingTexts.length
      typeSpeed = 500
    }
  
    setTimeout(typeText, typeSpeed)
  }
  
  // Start typing animation
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, 1000)
  })
  
  // Mobile menu toggle
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("nav-menu")
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
  
  // Smooth scrolling for navigation links
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
  
  // Navbar background on scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar")
    const backToTop = document.getElementById("backToTop")
  
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
      backToTop.classList.add("active")
    } else {
      navbar.classList.remove("scrolled")
      backToTop.classList.remove("active")
    }
  })
  
  // Active navigation link
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")
  
    let current = ""
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id")
      }
    })
  
    navLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active")
      }
    })
  })
  
  // Animated counter for stats
  function animateCounter(element, target) {
    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
      current += increment
      element.textContent = Math.floor(current)
      if (current >= target) {
        element.textContent = target
        clearInterval(timer)
      }
    }, 20)
  }
  
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
  
        // Animate stats counters
        if (entry.target.classList.contains("about-stats")) {
          const statNumbers = entry.target.querySelectorAll(".stat-number")
          statNumbers.forEach((stat) => {
            const target = Number.parseInt(stat.getAttribute("data-target"))
            animateCounter(stat, target)
          })
        }
  
        // Animate skill bars
        if (entry.target.classList.contains("skills")) {
          const skillBars = entry.target.querySelectorAll(".skill-progress")
          skillBars.forEach((bar, index) => {
            const width = bar.getAttribute("data-width")
            setTimeout(() => {
              bar.style.width = width + "%"
            }, index * 200)
          })
        }
      }
    })
  }, observerOptions)
  
  // Observe elements for animation
  document.addEventListener("DOMContentLoaded", () => {
    const elementsToObserve = document.querySelectorAll(
      ".about, .skills, .projects, .contact, .about-stats, .featured-project, .skills-category",
    )
  
    elementsToObserve.forEach((el, index) => {
      // Add different animation classes
      if (index % 3 === 0) {
        el.classList.add("fade-in")
      } else if (index % 3 === 1) {
        el.classList.add("slide-in-left")
      } else {
        el.classList.add("slide-in-right")
      }
  
      observer.observe(el)
    })
  })
  
  // Form submission
  const contactForm = document.querySelector(".form")
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
  
    // Get form data
    const name = contactForm.querySelector("#name").value
    const email = contactForm.querySelector("#email").value
    const subject = contactForm.querySelector("#subject").value
    const message = contactForm.querySelector("#message").value
  
    // Simple validation
    if (!name || !email || !subject || !message) {
      showNotification("Please fill in all fields", "error")
      return
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      showNotification("Please enter a valid email address", "error")
      return
    }
  
    // Simulate form submission
    const submitBtn = contactForm.querySelector(".btn")
    const originalText = submitBtn.innerHTML
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    submitBtn.disabled = true
  
    setTimeout(() => {
      showNotification("Thank you for your message! I'll get back to you soon.", "success")
      contactForm.reset()
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }, 2000)
  })
  
  // Notification system
  function showNotification(message, type) {
    const notification = document.createElement("div")
    notification.className = `notification ${type}`
    notification.innerHTML = `
      <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
      <span>${message}</span>
    `
  
    // Add notification styles
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === "success" ? "#10b981" : "#ef4444"};
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      z-index: 10000;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `
  
    document.body.appendChild(notification)
  
    // Animate in
    setTimeout(() => {
      notification.style.transform = "translateX(0)"
    }, 100)
  
    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 5000)
  }
  
  // Parallax effect for hero section
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const hero = document.querySelector(".hero")
    const rate = scrolled * -0.5
  
    if (hero && scrolled < hero.offsetHeight) {
      hero.style.transform = `translateY(${rate}px)`
    }
  })
  
  // Add floating animation to tech items
  document.querySelectorAll(".tech-item").forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-10px) scale(1.1)"
    })
  
    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0) scale(1)"
    })
  })
  
  // Add hover effect to skill categories
  document.querySelectorAll(".skills-category").forEach((category) => {
    category.addEventListener("mouseenter", () => {
      category.style.transform = "translateY(-10px) scale(1.02)"
    })
  
    category.addEventListener("mouseleave", () => {
      category.style.transform = "translateY(0) scale(1)"
    })
  })
  
  // Cursor trail effect
  let mouseX = 0
  let mouseY = 0
  let trailX = 0
  let trailY = 0
  
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })
  
  function animateTrail() {
    trailX += (mouseX - trailX) * 0.1
    trailY += (mouseY - trailY) * 0.1
    requestAnimationFrame(animateTrail)
  }
  
  animateTrail()
  
  // Back to top functionality
  document.getElementById("backToTop").addEventListener("click", (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
  
  // Add loading animation
  window.addEventListener("load", () => {
    document.body.classList.add("loaded")
  })
  
  // Easter egg - Konami code
  const konamiCode = []
  const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
  
  document.addEventListener("keydown", (e) => {
    konamiCode.push(e.keyCode)
    if (konamiCode.length > konamiSequence.length) {
      konamiCode.shift()
    }
  
    if (konamiCode.join(",") === konamiSequence.join(",")) {
      // Easter egg activated
      document.body.style.animation = "rainbow 2s infinite"
      showNotification("🎉 Easter egg activated! You found the secret!", "success")
      setTimeout(() => {
        document.body.style.animation = ""
      }, 5000)
    }
  })
  
  // Add rainbow animation for easter egg
  const style = document.createElement("style")
  style.textContent = `
    @keyframes rainbow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }
  `
  document.head.appendChild(style)
  
  // Add smooth reveal animations on scroll
  const revealElements = document.querySelectorAll(".hero-text, .hero-image, .about-text, .about-image")
  
  revealElements.forEach((element, index) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(50px)"
    element.style.transition = "all 0.8s ease"
    element.style.transitionDelay = `${index * 0.2}s`
  
    setTimeout(() => {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }, 500)
  })
  
  // Add interactive hover effects
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)"
    })
  
    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
  
  // Add ripple effect to buttons
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
  
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      `
  
      this.style.position = "relative"
      this.style.overflow = "hidden"
      this.appendChild(ripple)
  
      setTimeout(() => {
        ripple.remove()
      }, 600)
    })
  })
  
  // Add ripple animation
  const rippleStyle = document.createElement("style")
  rippleStyle.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `
  document.head.appendChild(rippleStyle)
  
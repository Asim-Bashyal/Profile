# Asim Bashyal - Portfolio Website

A modern, animated portfolio website showcasing my skills as a Django Developer and BCA Student from Nepal. Built with HTML, CSS, and JavaScript featuring advanced animations, particle effects, and responsive design.

![Portfolio Preview](/placeholder.svg?height=400&width=800)

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Animations](#animations)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Modern UI Design**: Clean, professional layout with vibrant color scheme and gradient effects
- **Interactive Particles Background**: Dynamic particle system that responds to user interaction
- **Advanced Animations**: Morphing shapes, floating elements, and smooth transitions
- **Backend Focus**: Showcasing Django and Python development skills
- **Featured E-commerce Project**: Detailed showcase of a comprehensive e-commerce platform
- **Interactive Elements**: Hover effects, animated counters, and typing animation
- **Notification System**: User feedback for form submissions and interactions
- **Responsive Design**: Perfect display on all device sizes
- **Performance Optimized**: Fast loading with efficient animations
- **SEO Friendly**: Proper semantic structure and metadata

## 🛠 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and advanced animations
- **JavaScript (ES6+)**: Interactive functionality and dynamic effects
- **Particles.js**: Interactive background particle system
- **Font Awesome**: Icons for UI elements and tech stack
- **Google Fonts**: Poppins font family for typography

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asimbashyal/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
   
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Access the website**
   - Open your browser and navigate to `http://localhost:8000`

## 🎯 Usage

### Development

1. **Customize Content**: Edit the HTML content in `index.html`
2. **Modify Styles**: Update CSS variables in `styles.css` for colors and styling
3. **Extend Functionality**: Add features in `script.js`

### Deployment

#### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

#### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command to `# No build command needed`
3. Set publish directory to `/` (root)
4. Deploy automatically on every push

#### Vercel
1. Import your GitHub repository to Vercel
2. No build configuration needed
3. Deploy with zero configuration

## 🎨 Customization

### Colors
Update CSS custom properties in `styles.css`:

```css
:root {
  --primary-color: #4f46e5;      /* Main brand color */
  --primary-light: #818cf8;      /* Lighter shade */
  --primary-dark: #3730a3;       /* Darker shade */
  --secondary-color: #10b981;    /* Secondary brand color */
  --accent-color: #f97316;       /* Accent color */
  /* Other color variables... */
}
```

### Content
1. **Personal Information**: Update name, title, and description in the hero section
2. **About Section**: Modify your background story and statistics
3. **Skills**: Adjust backend skills and proficiency percentages
4. **Project**: Update the e-commerce project details and features
5. **Contact**: Update contact information and social media links

### Particles Background
Modify the particles configuration in `script.js`:

```javascript
particlesJS("particles-js", {
  particles: {
    number: { value: 80 }, // Number of particles
    color: { value: "#4f46e5" }, // Particle color
    // Other particle settings...
  },
  // More configuration options...
});
```

### Profile Image
Replace the placeholder image with your actual photo:

```html
<div class="profile-img">
  <img src="path/to/your-photo.jpg" alt="Asim Bashyal">
</div>
```

## 🎭 Animations

### CSS Animations
- **Morphing Profile**: Shape-changing container for profile image
- **Typing Effect**: Dynamic text typing and deleting
- **Floating Elements**: Smooth up-and-down movement
- **Shimmer Effect**: Animated gradient on skill bars
- **Fade & Slide**: Elements appear with different transitions as you scroll

### JavaScript Interactions
- **Particles System**: Interactive background particles
- **Intersection Observer**: Triggers animations when elements come into view
- **Smooth Scrolling**: Enhanced navigation experience
- **Counter Animation**: Incremental number counting for statistics
- **Ripple Effect**: Interactive feedback on button clicks

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 992px and above
- **Tablet**: 768px to 991px
- **Mobile**: Below 768px
- **Small Mobile**: Below 576px

### Mobile Features
- Hamburger navigation menu
- Stacked grid layouts
- Optimized typography and spacing
- Touch-friendly buttons and interactions
- Adjusted animations for better performance

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 60+
- **Safari**: 12+
- **Edge**: 79+
- **Opera**: 47+

### Features Used
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- Intersection Observer API
- ES6+ JavaScript features
- CSS Animations and Transitions

## 🚀 Performance Optimization

- **Efficient Animations**: Optimized for smooth performance
- **Lazy Loading**: Elements animate only when scrolled into view
- **Event Throttling**: Prevents performance issues on scroll events
- **Conditional Rendering**: Heavy effects only on capable devices
- **Optimized Assets**: Compressed images and efficient code

## 🔧 Customization Guide

### Adding More Projects
To add another project to the portfolio:

```html
<div class="featured-project">
  <div class="project-image">
    <img src="path/to/project-image.jpg" alt="Project Name">
    <div class="project-overlay">
      <div class="project-links">
        <a href="#" class="project-link" title="View Live Demo">
          <i class="fas fa-external-link-alt"></i>
        </a>
       
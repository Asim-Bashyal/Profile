# Asim Bashyal - Portfolio Website

A modern, animated portfolio website showcasing my skills as a Django Developer and BCA Student from Nepal. Built with pure HTML, CSS, and JavaScript featuring smooth animations and responsive design.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.com)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Sections](#sections)
- [Animations](#animations)
- [Responsive Design](#responsive-design)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds
- **Smooth Animations**: CSS animations and JavaScript interactions
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, animated counters, and typing animation
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized CSS and JavaScript for quick load times
- **Cross-browser Compatible**: Works on all modern browsers

## 🛠 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox, Grid, and animations
- **JavaScript (ES6+)**: Interactive functionality and animations
- **Font Awesome**: Icons for social links and contact information
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
2. **Modify Styles**: Update CSS variables in `styles.css` for colors and spacing
3. **Add Functionality**: Extend JavaScript features in `script.js`

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
  --primary-color: #667eea;      /* Main brand color */
  --secondary-color: #764ba2;    /* Secondary brand color */
  --accent-color: #f093fb;       /* Accent color */
  --text-primary: #2d3748;       /* Primary text color */
  --text-secondary: #4a5568;     /* Secondary text color */
}
```

### Content
1. **Personal Information**: Update name, title, and description in the hero section
2. **About Section**: Modify your background story and statistics
3. **Skills**: Add or remove skills and adjust proficiency percentages
4. **Projects**: Replace with your actual projects and links
5. **Contact**: Update contact information and social media links

### Images
Replace placeholder images with your actual photos:
- Profile images: Update `src` attributes in HTML
- Project images: Replace project screenshots
- Optimize images for web (WebP format recommended)

## 📱 Sections

### 1. Navigation
- Fixed header with smooth scroll navigation
- Mobile-responsive hamburger menu
- Active section highlighting

### 2. Hero Section
- Animated typing effect showing different roles
- Floating profile image with orbiting tech icons
- Call-to-action buttons
- Parallax background effect

### 3. About Section
- Personal introduction and background
- Animated statistics counters
- Professional photo with decorative elements

### 4. Skills Section
- Categorized technical skills
- Animated progress bars
- Hover effects on skill cards

### 5. Projects Section
- Featured project showcase
- Image overlays with project links
- Technology tags for each project
- Responsive grid layout

### 6. Contact Section
- Contact form with validation
- Contact information display
- Social media links
- Interactive form submission

## 🎭 Animations

### CSS Animations
- **Typing Effect**: Simulates typing and deleting text
- **Floating Elements**: Smooth up-and-down movement
- **Fade In**: Elements appear as you scroll
- **Hover Effects**: Interactive feedback on user actions
- **Progress Bars**: Animated skill level indicators

### JavaScript Interactions
- **Intersection Observer**: Triggers animations when elements come into view
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Menu**: Responsive navigation toggle
- **Form Validation**: Real-time form feedback
- **Counter Animation**: Incremental number counting

## 📱 Responsive Design

### Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

### Mobile Features
- Hamburger navigation menu
- Touch-friendly buttons and links
- Optimized typography and spacing
- Responsive images and layouts
- Swipe-friendly project cards

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

## 🚀 Performance Optimization

- **Minified CSS**: Compressed stylesheets for faster loading
- **Optimized Images**: WebP format with fallbacks
- **Lazy Loading**: Images load as needed
- **Critical CSS**: Above-the-fold styles inlined
- **Font Display**: Optimized font loading strategy

## 🔧 Customization Guide

### Adding New Sections
1. Add HTML structure in `index.html`
2. Create corresponding styles in `styles.css`
3. Add navigation link if needed
4. Implement any JavaScript functionality

### Modifying Animations
1. **CSS Animations**: Edit keyframes in `styles.css`
2. **JavaScript Animations**: Modify functions in `script.js`
3. **Timing**: Adjust animation durations and delays

### Adding New Projects
```html
<div class="project-card">
  <div class="project-image">
    <img src="project-image.jpg" alt="Project Name">
    <div class="project-overlay">
      <div class="project-links">
        <a href="live-demo-url" class="project-link">
          <i class="fas fa-external-link-alt"></i>
        </a>
        <a href="github-repo-url" class="project-link">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="project-content">
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Project description...</p>
    <div class="project-tech">
      <span class="tech-tag">Django</span>
      <span class="tech-tag">Python</span>
    </div>
  </div>
</div>
```

## 🐛 Troubleshooting

### Common Issues

1. **Animations not working**
   - Check if JavaScript is enabled
   - Verify CSS custom properties support
   - Clear browser cache

2. **Images not loading**
   - Check file paths are correct
   - Ensure images are in the correct directory
   - Verify image file formats are supported

3. **Mobile menu not working**
   - Check JavaScript console for errors
   - Verify hamburger click event is attached
   - Test on different mobile devices

4. **Form not submitting**
   - Currently uses JavaScript simulation
   - Integrate with backend service for actual functionality
   - Add proper form action and method

## 📈 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section integration
- [ ] GitHub API integration for dynamic projects
- [ ] Contact form backend integration
- [ ] Multi-language support
- [ ] Advanced animations with GSAP
- [ ] PWA (Progressive Web App) features
- [ ] Analytics integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Asim Bashyal**
- 🌐 Website: [your-website.com](https://your-website.com)
- 📧 Email: asim.bashyal@email.com
- 💼 LinkedIn: [linkedin.com/in/asimbashyal](https://linkedin.com/in/asimbashyal)
- 🐱 GitHub: [github.com/asimbashyal](https://github.com/asimbashyal)
- 🐦 Twitter: [@asimbashyal](https://twitter.com/asimbashyal)

---

⭐ **If you found this portfolio helpful, please give it a star!**

Made with ❤️ in Nepal 🇳🇵
```

This comprehensive README.md file includes:

## 📋 **Key Sections:**
- **Installation & Setup** - Step-by-step guide to get started
- **Customization Guide** - How to personalize the portfolio
- **Technical Details** - Technologies used and browser support
- **Deployment Options** - Multiple hosting platform instructions
- **Performance Tips** - Optimization recommendations

## 🎯 **Highlights:**
- **Complete documentation** for all features and animations
- **Troubleshooting section** for common issues
- **Future enhancement ideas** for continued development
- **Contributing guidelines** for open-source collaboration
- **Professional formatting** with emojis and clear structure

## 🚀 **Usage Instructions:**
- **Development setup** with multiple server options
- **Deployment guides** for GitHub Pages, Netlify, and Vercel
- **Customization examples** with code snippets
- **Browser compatibility** information

The README provides everything needed for someone to understand, use, and contribute to your portfolio project. It's structured professionally and includes all the technical details while remaining accessible to developers of all skill levels!
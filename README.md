# Golden Fork Restaurant Website

<div align="center">

![Golden Fork Logo](https://img.shields.io/badge/Golden-Fork-orange?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

A elegant, responsive website for Golden Fork Restaurant - a fine dining establishment established in 1996.

[View Live Demo](#) | [Report Bug](#) | [Request Feature](#)

</div>

---

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

---

## About The Project

Golden Fork Restaurant website is a fully responsive, elegant single-page website designed for a fine dining establishment. The website showcases the restaurant's story, menu, gallery, and provides an easy way for customers to make reservations.

Built with pure HTML, CSS, and JavaScript - no frameworks required.

---

## Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Smooth Scrolling** - Navigation with smooth scroll animations
- **Interactive Menu** - Tabbed menu with categories (Starters, Mains, Desserts)
- **Reservation Form** - Functional booking form with validation
- **Image Gallery** - Beautiful grid layout showcasing dishes and ambiance
- **Contact Section** - With embedded Google Maps
- **Newsletter Signup** - Footer subscription form
- **Scroll Animations** - Reveal animations on scroll
- **Mobile Menu** - Hamburger menu for mobile devices

---

## Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure & Semantics |
| CSS3 | Styling & Animations |
| JavaScript (ES6+) | Interactivity & DOM Manipulation |
| Font Awesome 6.5.1 | Icons |
| Google Fonts | Typography (EB Garamond, Poppins, Italianno) |
| Unsplash | Placeholder Images |

---

## Project Structure

```
goldenfork-restaurant-web/
│
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles and responsive design
├── js/
│   └── index.js        # JavaScript functionality
├── .gitignore          # Git ignore rules
└── README.md           # Project documentation
```

---

## Getting Started

### Prerequisites

No build tools or dependencies required! Just a web browser.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Seihakz/GoldenFork_Restarant_web.git
```

2. Navigate to the project directory:
```bash
cd GoldenFork_Restarant_web
```

3. Open `index.html` in your web browser

### Using a Local Server (Optional)

For better development experience, you can use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

---

## Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #d4a574;  /* Gold/Beige */
  --dark-color: #1a1a1a;
  --light-color: #f8f5f2;
  /* ... more variables */
}
```

### Updating Menu Items

Edit the menu section in `index.html` (lines 186-380):

```html
<div class="menu-item" data-category="starters">
  <div class="menu-item-image">
    <img src="your-image-url" alt="Dish Name" />
  </div>
  <div class="menu-item-content">
    <div class="menu-item-header">
      <h3>Your Dish Name</h3>
      <span class="price">$00</span>
    </div>
    <p>Dish description here...</p>
  </div>
</div>
```

### Updating Contact Information

Edit contact details in `index.html`:
- Lines 556-580: Reservation section info
- Lines 680-693: Contact section info

---

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy!

### GitHub Pages

1. Go to repository Settings > Pages
2. Select `main` branch as source
3. Save!

---

## Screenshots

<!-- Add your screenshots here -->

---

## License

Distributed under the MIT License.

---

## Contact

Golden Fork Restaurant
- Website: [goldenfork.com](https://goldenfork.com)
- Email: info@goldenfork.com
- Phone: +1 (555) 123-4567
- Location: 123 Gourmet Avenue, New York, NY 10001

---

<div align="center">
Made with ❤️ for Golden Fork Restaurant
</div>

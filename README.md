# Mark Angelo — Professional Portfolio

A modern, responsive, professional portfolio website showcasing software development skills, projects, and AI-assisted development workflow.

## Overview

This portfolio is designed for early-career software developer job applications, highlighting:

- Technical skills and technologies
- Featured project: AI-Powered Construction Site Safety Management System
- AI-assisted development workflow and tools
- Problem-solving approach
- Currently learning technologies
- Contact information

## Technologies

- **HTML5** — Semantic structure and SEO
- **CSS3** — Custom properties, Grid, Flexbox, responsive design, animations
- **JavaScript** — Vanilla JS, IntersectionObserver, scroll effects
- **Google Fonts** — Inter, JetBrains Mono

No frameworks, no build tools required.

## Project Structure

```
My Portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete stylesheet with responsive design
├── script.js           # Navigation, scroll effects, reveal animations
├── README.md           # This file
└── assets/
    └── images/         # Project screenshots go here
```

## How to Run Locally

### Option 1: Open directly
Double-click `index.html` in your file explorer. The portfolio works as a static HTML file.

### Option 2: Local development server
Using Python:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

Using Node.js (npx):
```bash
npx serve .
```

Using VS Code:
Install the "Live Server" extension, then right-click `index.html` and select "Open with Live Server".

## How to Customize

All personal details, URLs, email, and project links have been configured in `index.html`:

- **GitHub Profile**: `https://github.com/MarkPorjects`
- **Project Repository**: `https://github.com/MarkPorjects/ai-construction-safety-system`
- **Email**: `magcalayocianangelo@gmail.com`
- **LinkedIn**: Removed as requested.


### Add Project Screenshots

1. Take screenshots of your project (recommended size: 1280×800 px)
2. Save them to the `assets/images/` folder with these filenames:
   - `login.png`
   - `dashboard.png`
   - `sites.png`
   - `incidents.png`
   - `ai-analysis.png`
   - `inspections.png`
   - `ai-report.png`
3. In `index.html`, find each screenshot card in the **Featured Project** section
4. Uncomment the `<img>` tag and remove/hide the `.screenshot-placeholder` div

Example — before:
```html
<div class="screenshot-placeholder">
  <!-- placeholder content -->
</div>
<!-- REPLACE: Uncomment and update when screenshot is available -->
<!-- <img src="assets/images/dashboard.png" alt="Dashboard" loading="lazy"> -->
```

Example — after:
```html
<!-- <div class="screenshot-placeholder"> ... </div> -->
<img src="assets/images/dashboard.png" alt="Dashboard - Main analytics overview" loading="lazy">
```

### Enable "View Live Project" Button

In the **Featured Project** section, find the commented-out button and uncomment it:
```html
<a href="https://your-deployed-url.com" class="btn btn-secondary" ...>
  View Live Project
</a>
```

## How to Deploy

### GitHub Pages
1. Push this portfolio to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to "Deploy from a branch" → `main` branch → `/ (root)`
4. Your portfolio will be live at `https://yourusername.github.io/repository-name/`

### Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop your portfolio folder to deploy
3. Configure a custom domain if desired

### Vercel
1. Go to [vercel.com](https://vercel.com) and sign in
2. Import your GitHub repository
3. Deploy — Vercel will detect the static site automatically

## Browser Support

- Chrome 80+
- Firefox 80+
- Safari 14+
- Edge 80+

## License

© 2026 Mark Angelo. All rights reserved.

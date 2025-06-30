# Website Development: Advanced CSS, HTML & JavaScript Showcase

## 1. Introduction
   This project delivers a modern, responsive web portfolio for Emma Royo, showcasing her professional profile, skillset, and projects. Built with semantic HTML5, modular CSS (using Flexbox and Grid), and vanilla JavaScript, the site provides an engaging user experience across desktop and mobile devices.

## 2. Project Structure

   * **Root Files:**

     * `index.html`: Main landing page with hero section, about me, and featured projects.
     * `contact.html`: Dedicated contact page with form and validation.
   * **Assets Folder (`/assets`):**

     * **CSS (`/assets/css`)**:

       * `styles.css`: Core styling, including responsive breakpoints and utility classes.
       * `animations.css`: Keyframe definitions for subtle scroll and hover effects.
     * **JavaScript (`/assets/js`)**:

       * `main.js`: DOM manipulation for mobile menu toggling and smooth scrolling.
       * `form.js`: Client-side validation and AJAX submission for the contact form.
     * **Images (`/assets/img`)**: Optimized JPEG/PNG graphics used throughout the site.
   * **Components:**

     * **Navigation Bar:** Sticky header with logo, section links, and mobile “hamburger” menu.
     * **Hero Section:** Full-width background image with overlay text and call-to-action button.
     * **Projects Gallery:** Grid of interactive project cards that link to live demos or GitHub repos.
     * **Footer:** Social-media icons, copyright notice, and quick links.

## 3. How to Run the Project

   **1. Clone the repository:**

      ```bash
      git clone https://github.com/EmmaRoyo/Web_Emma_Royo.git
      cd Web_Emma_Royo
      ```
   **2. Serve locally:**

      * Open `index.html` directly in your browser, **or**
      * Run a simple HTTP server (recommended for AJAX form handling):

        ```bash
        # Using Python 3
        python -m http.server 8000
        ```
      * Navigate to `http://localhost:8000` in your browser.

## 4. Contact Form Configuration

   * The contact form in `contact.html` uses client-side validation (`/assets/js/form.js`) and submits entries via AJAX to Formspree (or any SMTP/API endpoint you configure).
   * To enable live submissions, replace the placeholder Formspree URL in the form’s `action` attribute with your own endpoint.

## 5. Assets & Dependencies

   * **Fonts & Icons:**

     * Google Fonts (Roboto, Lato) loaded via CDN.
     * Font Awesome for social-media icons.
   * **No Build Step:** All code is vanilla—no Node.js, bundlers, or preprocessors—making setup and maintenance lightweight.
   * **Image Optimization:** All graphics are pre-compressed to balance quality and performance.

Feel free to include this summary in your GitHub README to clearly convey the purpose, organization, and usage of your web portfolio project.

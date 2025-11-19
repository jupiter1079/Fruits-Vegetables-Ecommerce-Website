🌿 Project Overview
Jupiter Farms is a modern, responsive e-commerce website for selling fresh, organic fruits and vegetables. Built with a mobile-first approach, the website showcases the farm's products while providing an intuitive shopping experience.

✨ Features
Core Functionality
Responsive Design - Optimized for all devices (mobile, tablet, desktop)

Product Showcase - Featured products with pricing and add-to-cart functionality

Company Story - Engaging about section with farm history and values

Blog Integration - Content marketing section for recipes and farming tips

Contact System - Advanced form validation and submission

Subscription Service - Weekly produce box subscription options

Technical Features
Modern CSS Architecture - Modular, scalable styling with CSS variables

Form Validation - Comprehensive client-side validation system

Interactive Elements - Smooth animations and hover effects

Accessibility - WCAG compliant design patterns

Performance Optimized - Efficient loading and smooth interactions

🛠 Technology Stack
Frontend: HTML5, CSS3, JavaScript (ES6+)

Styling: Custom CSS with CSS Grid and Flexbox

Architecture: Modular CSS with component-based structure

Icons: Unicode emojis for cross-platform compatibility

Images: Unsplash integration for high-quality visuals

📁 Project Structure
text
jupiter-farms/
├── index.html              # Main homepage
├── style.css               # Additional styles (forms, components)
├── script.js               # JavaScript functionality
├── shop.html              # Product catalog page
├── our-story.html         # About us page
├── blog.html              # Blog and recipes
└── contact.html           # Contact form page
🎨 Design System
Color Palette
Primary Green: #2d5a27 (Brand identity, buttons)

Primary Brown: #795548 (Accents, secondary elements)

Light Gray: #f9f9f9 (Backgrounds, sections)

Dark Gray: #333 (Text, headings)

Accent Yellow: #ffd700 (Highlights, notifications)

Typography
Headings: System font stack with 600-700 weight

Body Text: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

Hierarchy: Clear visual hierarchy with consistent spacing

Components
Buttons: Primary, outline, and disabled states

Cards: Product and blog cards with hover effects

Forms: Validated input fields with error states

Navigation: Sticky header with active states

🚀 Installation & Setup
Clone or Download the project files

Serve Locally using any web server:

bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
Open http://localhost:8000 in your browser

📱 Responsive Breakpoints
Mobile: 320px+ (default)

Tablet: 768px+

Desktop: 1024px+

Large Screens: 1440px+

🔧 Customization
Adding New Products
Update the products grid in index.html:

html
<div class="product-card">
    <div class="product-img" style="background-image: url('your-image.jpg');"></div>
    <div class="product-info">
        <h3 class="product-title">Product Name</h3>
        <p class="product-price">$X.XX / unit</p>
        <button class="btn">Add to Cart</button>
    </div>
</div>
Modifying Colors
Update CSS variables in :root:

css
:root {
    --primary-green: #your-color;
    --primary-brown: #your-color;
    /* ... other variables */
}
Adding Blog Posts
Extend the blog section with new posts:

html
<div class="blog-post">
    <div class="blog-img" style="background-image: url('blog-image.jpg');"></div>
    <div class="blog-content">
        <h3>Your Blog Title</h3>
        <p>Blog excerpt...</p>
        <a href="blog.html">Read More →</a>
    </div>
</div>
📊 Performance Features
Optimized Images: Proper sizing and compression

Efficient CSS: Minimal, focused styling

Fast Loading: Optimized asset delivery

Smooth Interactions: Hardware-accelerated animations

🌐 Browser Support
✅ Chrome (latest 2 versions)

✅ Firefox (latest 2 versions)

✅ Safari (latest 2 versions)

✅ Edge (latest 2 versions)

📞 Contact Integration
The contact form includes:

Real-time validation

Success/error notifications

Loading states

Accessible error messages

🔒 Security Features
Form validation and sanitization

XSS prevention through proper encoding

Secure form submission handling

📈 SEO Features
Semantic HTML structure

Proper heading hierarchy

Meta tags and descriptions

Alt text for images

Fast loading times

🎯 Future Enhancements
Shopping cart functionality

User authentication system

Payment gateway integration

Product search and filtering

Inventory management

Order tracking system

👥 Team
Developer: Jupiter Ngwenya

Student Number: ST10465627

Course: WEDE5020 (2025)

📄 License
All rights reserved © 2023 Jupiter Farms.

Jupiter Farms - Project Changelog

All notable changes to the Jupiter Farms e-commerce website project will be documented in this file.

The format is based on Keep a Changelog,
and this project adheres to Semantic Versioning.

[1.1.0] - 2025-01-XX
Added
Advanced Form Validation System

Comprehensive client-side validation for contact forms

Real-time field validation with error messaging

Email and phone number format validation

Success/error notification system

Loading states for form submission

Enhanced User Experience

Smooth animations for notifications (slideIn, slideOut)

Improved form feedback mechanisms

Accessible error messages with proper ARIA attributes

Form field focus states and visual feedback

Newsletter Subscription

Email validation for newsletter signups

AJAX-style subscription simulation

Success confirmation for subscribers

Technical Improvements
Modular JavaScript Architecture

FormValidator class for reusable form validation

Event-driven form handling

Promise-based form submission simulation

Configurable validation rules per field

Enhanced CSS Structure

Form-specific styles in style.css

Error state styling for form fields

Responsive form layouts

Notification component styling

Code Organization

Separation of concerns (HTML, CSS, JavaScript)

Modular component architecture

Reusable validation patterns

[1.0.0] - 2025-01-XX
Added
Initial Project Launch

Complete website structure and layout

Responsive design implementation

Mobile-first CSS architecture

Cross-browser compatibility

Core Pages

Homepage with hero section and featured products

Shop page framework

Our Story about section

Blog/Recipes section

Contact page structure

Design System

Custom color palette inspired by organic farming

Typography hierarchy (Playfair Display, Lato)

Component-based CSS architecture

Consistent spacing and layout patterns

User Interface Components

Sticky navigation header with active states

Product cards with hover effects

Call-to-action buttons (primary, outline variants)

Section titles with decorative elements

Footer with multi-column layout

Responsive Features

Mobile-optimized navigation

Flexible grid systems

Adaptive typography scaling

Touch-friendly interactive elements

Interactive Elements

Basic shopping cart functionality

User account placeholder

Search functionality simulation

Smooth hover transitions and animations

Technical Foundation
CSS Architecture

CSS custom properties (variables) for theming

Modular stylesheets organization

Responsive breakpoint system

Utility classes for common patterns

Performance Optimizations

Optimized image loading

Efficient CSS selectors

Minimal JavaScript footprint

Fast loading times

Accessibility Features

Semantic HTML structure

Proper heading hierarchy

Keyboard navigation support

Color contrast compliance

[Pre-Release] - 2024-12-XX
Added
Project proposal and scope definition

Wireframe designs and mockups

Technical requirements documentation

Development timeline and milestones

Budget planning and cost analysis

Types of Changes
Added for new features.

Changed for changes in existing functionality.

Deprecated for soon-to-be removed features.

Removed for now removed features.

Fixed for any bug fixes.

Security in case of vulnerabilities.

Versioning Scheme
Major version (1.x.x): Breaking changes or major feature additions

Minor version (x.1.x): New features in a backward-compatible manner

Patch version (x.x.1): Backward-compatible bug fixes

Maintenance
This changelog is maintained by Jupiter Ngwenya (ST10465627) as part of the WEDE5020 course requirements.

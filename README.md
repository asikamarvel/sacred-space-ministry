# Sacred Space Therapeutic Ministry - Website

## 📋 Overview

This is a complete, professional website for Sacred Space Therapeutic Ministry, founded by Julie Maduforo, Neuropsychotherapist and Registered Nurse. The website features a holistic approach to healing, integrating biological, psychological, and spiritual dimensions.

## 🎨 Design Features

- **Color Palette**: Sage green, earth tones (terracotta, browns, beiges), teal accents, and navy blue
- **Typography**: Cormorant Garamond (headings) and Montserrat (body text)
- **Responsive Design**: Fully mobile-friendly and tablet-optimized
- **Professional Layout**: Clean, modern, and welcoming aesthetic

## 📄 Pages Included

1. **index.html** - Homepage
   - Hero section with call-to-action
   - Introduction to Sacred Space Ministry
   - Services overview
   - About Julie preview
   - Testimonials
   - Call to action

2. **about.html** - About Julie Maduforo
   - Personal story and journey
   - Philosophy & approach (Biological, Psychological, Spiritual)
   - Complete credentials and certifications
   - Speaking topics and workshop themes
   - Personal commitment section

3. **services.html** - Services Page
   - Individual therapy (PTSD, trauma, OCD, ADHD, anxiety, depression)
   - Workshops & retreats
   - Speaking engagements & conferences
   - Consultations & training
   - Investment information

4. **appointments.html** - Book Appointment
   - Appointment types and scheduling
   - New client information
   - Telehealth details
   - Payment information
   - FAQ section
   - Placeholders for Calendly/Acuity integration

5. **contact.html** - Contact Page
   - Contact form
   - Multiple contact methods
   - Office hours and location
   - Emergency resources
   - FAQ section
   - Helpful mental health resources

## 🎯 Key Features

### Professional Elements
- ✅ SEO-optimized meta tags
- ✅ Accessibility features
- ✅ Mobile-responsive navigation
- ✅ Smooth scrolling
- ✅ Form validation
- ✅ Interactive elements
- ✅ Professional photography integration

### Client Photos Used
- Stage/speaking photo: `https://www.genspark.ai/api/files/s/IEGDOo8O`
- Professional portrait (brown sweater): `https://www.genspark.ai/api/files/s/be8yCtp4`
- Professional portrait (blue blazer): `https://www.genspark.ai/api/files/s/Fxjta9Up`
- Sacred Space logo: `https://www.genspark.ai/api/files/s/IYHB3I3G`

## 🚀 Getting Started

### Quick Setup

1. **Upload to Web Hosting**
   - Upload all files to your web hosting service (e.g., GoDaddy, Bluehost, SiteGround)
   - Maintain the file structure exactly as provided
   - Ensure all files are in the root directory or a subdirectory

2. **Update Contact Information**
   - Replace placeholder phone number `(123) 456-7890` with actual number
   - Replace placeholder email `info@sacredspaceministry.com` with actual email
   - Add actual office location if applicable
   - Update social media links (currently placeholder #)

3. **Integrate Scheduling System**
   - Sign up for Calendly (https://calendly.com) or Acuity Scheduling
   - Create appointment types matching the website services
   - Copy the embed code
   - Replace the placeholder in `appointments.html` (line ~90-110)

4. **Setup Contact Form**
   - The form currently shows a success message for demo purposes
   - Integrate with a backend service:
     - **FormSpree**: Easy, no-code solution
     - **Netlify Forms**: If hosting on Netlify
     - **Custom backend**: Use the commented code in `script.js`

5. **Payment Integration**
   - Sign up for Stripe (https://stripe.com) or PayPal
   - Add payment links or embed payment forms
   - Update the payment section in `appointments.html`

## 📝 Customization Guide

### Colors
All colors are defined in CSS variables at the top of `styles.css`:
```css
--sage-green: #9CAF88;
--earth-terracotta: #C17A5F;
--teal-accent: #5B9AA0;
--navy-blue: #2F4858;
```
Change these values to update the entire color scheme.

### Content Updates
- All text content is in the HTML files
- Search for placeholder text and replace with actual information
- Add real testimonials in the testimonials section
- Update credentials as needed

### Images
- Replace image URLs with your own hosted images
- Or download the current images and re-upload to your server
- Update the `src` attributes in the HTML files

## 🔧 Technical Requirements

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Hosting Requirements
- Standard web hosting with HTML/CSS/JS support
- SSL certificate recommended (usually free with hosting)
- No special server requirements (static website)

## 📱 Mobile Optimization

The website is fully responsive with breakpoints at:
- Desktop: 1024px and above
- Tablet: 768px - 1024px
- Mobile: Below 768px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Alt text for images (update as needed)
- Sufficient color contrast
- Focus indicators for form elements

## 🔐 Security Recommendations

1. **SSL Certificate**: Essential for contact forms and credibility
2. **Form Spam Protection**: Add reCAPTCHA to contact form
3. **HIPAA Compliance**: If collecting health information, use secure, compliant forms
4. **Regular Updates**: Keep any plugins or integrations updated

## 📊 Analytics Setup

To track website performance:

1. **Google Analytics**
   - Create account at analytics.google.com
   - Add tracking code before `</head>` in all HTML files

2. **Facebook Pixel** (optional)
   - For social media advertising tracking

## 🎓 Training Resources

### Calendly Integration Tutorial
1. Go to calendly.com and sign up
2. Create event types (Initial Consultation, Therapy Session, etc.)
3. Go to your event type → Share
4. Copy "Embed options" → "Inline embed"
5. Paste code in appointments.html

### FormSpree Setup (Contact Form)
1. Go to formspree.io
2. Sign up for free account
3. Create a new form
4. Copy the form endpoint URL
5. Update form action in contact.html:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

## 📞 Support & Maintenance

### Common Updates
- **Adding a blog**: Create a `blog.html` page following the same structure
- **Adding new services**: Copy existing service card HTML and modify
- **Updating photos**: Replace image URLs in HTML files
- **Changing colors**: Update CSS variables in `styles.css`

### File Structure
```
sacred-space-website/
├── index.html          (Homepage)
├── about.html          (About Julie)
├── services.html       (Services)
├── appointments.html   (Booking)
├── contact.html        (Contact)
├── styles.css          (All styling)
├── script.js           (Interactivity)
└── README.md           (This file)
```

## ✅ Launch Checklist

Before going live:
- [ ] Replace all placeholder contact information
- [ ] Update social media links
- [ ] Add real testimonials
- [ ] Integrate scheduling system (Calendly/Acuity)
- [ ] Setup contact form backend
- [ ] Test all links and buttons
- [ ] Test on mobile devices
- [ ] Add SSL certificate
- [ ] Setup Google Analytics
- [ ] Test contact form submission
- [ ] Verify all images load correctly
- [ ] Check grammar and spelling
- [ ] Test in multiple browsers
- [ ] Add privacy policy page (required if collecting data)
- [ ] Add terms of service (recommended)

## 🌟 Recommended Enhancements

### Phase 2 Features (Optional)
1. **Blog section** for articles and insights
2. **Video testimonials** embedded from YouTube
3. **Resource library** with downloadable PDFs
4. **Newsletter signup** with email marketing integration
5. **Client portal** for existing clients (requires backend)
6. **Online payment** for session fees
7. **Automated appointment reminders**
8. **Live chat widget** for immediate questions

## 📧 Need Help?

For web development assistance:
- HTML/CSS questions: W3Schools, MDN Web Docs
- Hosting questions: Contact your hosting provider
- Scheduling integration: Calendly or Acuity support
- General questions: Reach out to your web developer

## 🎉 Website Features Summary

✨ **What Makes This Website Special:**
- Professional, therapeutic aesthetic with calming colors
- Comprehensive information about services and credentials
- Easy navigation and mobile-friendly design
- Multiple calls-to-action for booking appointments
- Built-in accessibility and SEO optimization
- Ready for scheduling and payment integration
- Reflects holistic approach to healing (body, mind, spirit)

## 📄 License & Credits

Website designed and developed for Sacred Space Therapeutic Ministry
© 2025 Sacred Space Therapeutic Ministry. All rights reserved.

**Built with:**
- Pure HTML5, CSS3, and JavaScript
- Google Fonts (Cormorant Garamond, Montserrat)
- No frameworks required (lightweight and fast)

---

**Last Updated**: January 2025
**Version**: 1.0
**Developer Notes**: This is a complete, production-ready website. Follow the setup steps above to deploy.
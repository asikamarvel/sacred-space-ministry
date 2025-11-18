# Sacred Space Therapeutic Ministry
## Quick Start Guide - Get Your Website Live in 30 Minutes!

---

## 🚀 Step 1: Choose a Web Host (5 minutes)

### Recommended Hosting Providers:
1. **Bluehost** - Beginner-friendly, includes free domain
2. **SiteGround** - Excellent support, fast servers
3. **HostGator** - Budget-friendly option
4. **Netlify** - Free for basic sites, tech-savvy option

**What to do:**
- Sign up for hosting plan ($3-10/month typically)
- Register domain name: `sacredspaceministry.com` (or similar)
- Wait for hosting account activation (instant to 24 hours)

---

## 📤 Step 2: Upload Website Files (10 minutes)

### Option A: Using File Manager (Easiest)
1. Log into your hosting control panel (cPanel)
2. Click "File Manager"
3. Navigate to `public_html` folder
4. Click "Upload" button
5. Select all website files:
   - index.html
   - about.html
   - services.html
   - appointments.html
   - contact.html
   - styles.css
   - script.js
6. Wait for upload to complete
7. Visit your domain to see the website live!

### Option B: Using FTP (For Tech Users)
1. Download FileZilla (free FTP software)
2. Connect using hosting FTP credentials
3. Drag all files to the `public_html` folder
4. Done!

---

## ✏️ Step 3: Update Contact Information (5 minutes)

Open each HTML file and find/replace:

### In ALL HTML files:
- Replace `(123) 456-7890` with your real phone number
- Replace `info@sacredspaceministry.com` with your real email
- Update social media links (search for `href="#"`)

### Quick Find & Replace:
Most text editors have "Find & Replace" feature:
- Windows: Ctrl + H
- Mac: Cmd + Option + F

**Example:**
- Find: `(123) 456-7890`
- Replace with: `(555) 867-5309`
- Click "Replace All"

---

## 📅 Step 4: Setup Appointment Scheduling (5 minutes)

### Using Calendly (Recommended - It's Free!)

1. **Sign up at Calendly.com**
   - Choose free plan
   - Complete profile

2. **Create Event Types:**
   - Initial Consultation (90 min)
   - Individual Therapy (60 min)
   - Couples Session (90 min)
   - Free Consultation Call (15 min)

3. **Get Embed Code:**
   - Click on your event
   - Click "Share"
   - Click "Embed"
   - Copy the "Inline Embed" code

4. **Add to Website:**
   - Open `appointments.html`
   - Find the commented section that says:
     ```html
     <!-- Example Calendly Embed Code (to be replaced with actual code) -->
     ```
   - Replace the placeholder with your Calendly code
   - Save and re-upload the file

**Your scheduling is now live!**

---

## 📧 Step 5: Activate Contact Form (5 minutes)

### Using FormSpree (Free & Easy!)

1. **Sign up at formspree.io**
   - Free for up to 50 submissions/month

2. **Create New Form:**
   - Click "New Form"
   - Name it "Contact Form"
   - Copy your form endpoint (looks like: `https://formspree.io/f/abc123xyz`)

3. **Update contact.html:**
   - Open `contact.html`
   - Find this line:
     ```html
     <form id="contactForm" class="contact-form" action="#" method="POST">
     ```
   - Replace `action="#"` with your FormSpree URL:
     ```html
     <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">
     ```
   - Save and re-upload

**Contact form is now working!**

---

## ✅ Final Checks (5 minutes)

### Test Everything:
1. ✅ Click every navigation link
2. ✅ Test contact form - send yourself a test message
3. ✅ Try booking an appointment
4. ✅ View on your phone
5. ✅ Check that all images load
6. ✅ Verify contact information is correct

---

## 🎉 Congratulations! Your Website is LIVE!

**Share Your New Website:**
- Post on social media
- Update business cards
- Add to email signature
- List on Google My Business
- Submit to Psychology Today (if applicable)

---

## 📱 Next Steps (Optional but Recommended)

### Week 1:
- [ ] Add Google Analytics (track visitors)
- [ ] Setup Google My Business listing
- [ ] Add real testimonials (with client permission)
- [ ] Take professional photos if needed

### Week 2:
- [ ] Create Privacy Policy page (required by law)
- [ ] Create Terms of Service page
- [ ] Setup email newsletter (MailChimp/ConvertKit)
- [ ] Add SSL certificate (usually free with hosting)

### Month 1:
- [ ] Start a blog with helpful articles
- [ ] Optimize for SEO (search engines)
- [ ] Collect more testimonials
- [ ] Consider online payment integration

---

## 🆘 Troubleshooting

### Website not showing after upload?
- Wait 24-48 hours for DNS propagation
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that files are in `public_html` folder, not a subfolder

### Links not working?
- Make sure all files are in the SAME folder
- Check that file names match exactly (case-sensitive)
- Verify you uploaded ALL files

### Contact form not working?
- Check that you updated the form action URL
- Verify FormSpree account is active
- Check spam folder for test submissions

### Scheduling not showing?
- Verify Calendly embed code is correct
- Check that you removed the placeholder comments
- Try refreshing the page with Ctrl+F5

---

## 💡 Pro Tips

### Make It Easier for Clients to Book:
1. Add "Book Now" button to email signature
2. Share direct Calendly link on social media
3. Put booking link in Google My Business profile

### Get More Clients:
1. Ask happy clients for Google reviews
2. List on Psychology Today directory
3. Network with other therapists for referrals
4. Post helpful content on social media
5. Join local community Facebook groups

### Keep Costs Low:
1. Use free tools: Calendly, FormSpree, Canva
2. DIY social media graphics with Canva
3. Write your own blog content
4. Use free stock photos from Unsplash

---

## 📞 Support Resources

### Website Help:
- **Hosting Issues**: Contact your hosting provider's support
- **Calendly Help**: help.calendly.com
- **FormSpree Help**: help.formspree.io
- **General HTML/CSS**: w3schools.com

### Business Resources:
- **HIPAA Compliance**: hhs.gov/hipaa
- **Telehealth Laws**: Check your state licensing board
- **Insurance Credentialing**: Contact insurance companies directly
- **Professional Liability**: Check with professional association

---

## 🎯 Your 30-Minute Checklist

- [x] Step 1: Choose web host ✓
- [x] Step 2: Upload files ✓
- [x] Step 3: Update contact info ✓
- [x] Step 4: Setup scheduling ✓
- [x] Step 5: Activate contact form ✓
- [x] Test everything ✓
- [x] **LAUNCH!** 🚀

---

## 🌟 You Did It!

Your professional website is now live and ready to help clients find the healing they need. You've created a beautiful, functional online presence for Sacred Space Therapeutic Ministry.

**Remember**: A website is never "finished" - keep improving it as you grow your practice!

---

**Questions?**
Refer to the detailed README.md file for more in-depth information and troubleshooting.

**Good luck with your healing ministry! 🌱**

---

*Last Updated: January 2025*
*Sacred Space Therapeutic Ministry - Website v1.0*
# Prudent Juris - Deployment Guide

## 🎯 Quick Overview

This is a **static website** built with React + Vite. It can be hosted on any web hosting service including Hostinger.

---

## 📝 How to Edit Website Content

All website content is in ONE file: `src/data/siteData.ts`

You can edit:
- Firm name, phone, email, address
- Hero section text
- About us content (vision, mission, stats)
- Practice areas (add/remove/edit)
- Team members
- Testimonials
- Articles
- Footer content
- Social media links
- Legal disclaimer

**No coding knowledge needed** - just change the text values between quotes!

---

## 📧 Setting Up Email for Contact Form

The contact form uses **EmailJS** (free service) to send emails.

### Step-by-Step:

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Click "Sign Up Free"
   - Create account with your email

2. **Add Email Service**
   - In EmailJS dashboard, click "Email Services"
   - Click "Add New Service"
   - Choose Gmail (or your email provider)
   - Follow the connection steps
   - Copy your **Service ID** (like `service_abc123`)

3. **Create Email Template**
   - Click "Email Templates" → "Create New Template"
   - Design your email (example below)
   - Use these variables in your template:
     - `{{from_name}}` - Person's name
     - `{{from_email}}` - Person's email
     - `{{phone}}` - Phone number
     - `{{subject}}` - Subject line
     - `{{message}}` - Message content
   - Save and copy your **Template ID** (like `template_xyz789`)

4. **Get Your Public Key**
   - Click "Account" → "General"
   - Copy your **Public Key**

5. **Update siteData.ts**
   - Open `src/data/siteData.ts`
   - Find the `emailConfig` section
   - Replace the placeholder values:
   ```javascript
   export const emailConfig = {
     serviceId: "service_abc123",      // Your Service ID
     templateId: "template_xyz789",    // Your Template ID
     publicKey: "your_public_key",     // Your Public Key
   };
   ```

### Example Email Template:
```
Subject: New Contact Form Submission: {{subject}}

You have received a new message from your website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}
```

---

## 🚀 Deploying to Hostinger

### Option 1: Using Lovable's Built-in Deploy (Easiest)

1. In Lovable, click the "Publish" button (top right)
2. Your site gets a free URL like `yoursite.lovable.app`
3. You can connect your custom domain later

### Option 2: Manual Deploy to Hostinger

#### Step 1: Export from Lovable
1. In Lovable, click your project name → Settings
2. Go to GitHub tab
3. Connect your GitHub account
4. Push your code to GitHub

#### Step 2: Build the Project
You'll need Node.js installed on your computer.

```bash
# Clone your repository
git clone https://github.com/yourusername/your-project.git
cd your-project

# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist` folder with your website files.

#### Step 3: Upload to Hostinger

1. **Log into Hostinger**
   - Go to hpanel.hostinger.com
   - Select your hosting plan

2. **Access File Manager**
   - Click "File Manager" in the dashboard
   - Navigate to `public_html` folder

3. **Upload Files**
   - Delete any existing files in `public_html`
   - Upload ALL contents from the `dist` folder
   - Make sure `index.html` is directly in `public_html`

4. **Configure for Single Page App (Important!)**
   - Create a file called `.htaccess` in `public_html`
   - Add this content:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

5. **Test Your Site**
   - Visit your domain to verify everything works
   - Test the contact form
   - Check all sections

---

## 🖼️ Replacing Placeholder Images

### Team Photos, Client Logos, etc.

1. Prepare your images (recommended: JPG or PNG, under 500KB each)
2. Upload to `public` folder (via Lovable or GitHub)
3. Update `siteData.ts` with new paths:

```javascript
// Example: Team member photo
{
  name: "John Smith",
  image: "/images/team/john-smith.jpg",  // Your new path
  // ...
}
```

### Hero Background Image
- Replace `src/assets/hero-law-firm.jpg` with your image
- Keep the same filename, or update the import in `Hero.tsx`

---

## 🗺️ Updating the Google Map

1. Go to Google Maps
2. Find your office location
3. Click "Share" → "Embed a map"
4. Copy the iframe `src` URL
5. Update `mapEmbedUrl` in `siteData.ts`

---

## ❓ Common Questions

### "How do I change colors?"
Edit `src/index.css` - look for CSS variables like `--primary`, `--secondary`

### "How do I add a new practice area?"
In `siteData.ts`, find the `practices` array and add a new object following the same format.

### "The contact form says 'Demo Mode'"
You need to configure EmailJS (see email setup section above).

### "My changes aren't showing"
- Make sure you saved the file
- The preview should auto-refresh
- Try clearing your browser cache

---

## 🆘 Need Help?

- **Lovable Documentation**: https://docs.lovable.dev
- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **Hostinger Support**: Available 24/7 via their dashboard

---

## 📁 Project Structure

```
src/
├── assets/          # Images (hero background)
├── components/      # All website sections
├── data/
│   └── siteData.ts  # ⭐ ALL EDITABLE CONTENT HERE
├── pages/
│   └── Index.tsx    # Main page layout
└── index.css        # Styling/colors
```

Good luck with your law firm website! 🎉

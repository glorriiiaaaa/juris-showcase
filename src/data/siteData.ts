/**
 * ====================================================
 * PRUDENT JURIS - EDITABLE SITE DATA
 * ====================================================
 * 
 * This file contains ALL editable content for the website.
 * Simply modify the values below to update your website content.
 * 
 * SECTIONS:
 * 1. firmInfo - Basic firm information
 * 2. navigation - Navigation menu items
 * 3. hero - Home/Hero section content
 * 4. about - About Us section
 * 5. clients - Client logos
 * 6. whyChooseUs - Benefits/features
 * 7. practices - Legal practice areas
 * 8. team - Team members
 * 9. testimonials - Client testimonials
 * 10. articles - Blog/Article posts
 * 11. contact - Contact information
 * 12. footer - Footer content
 * 13. socialLinks - Social media links
 * 14. disclaimer - Legal disclaimer content
 */

// ====== 1. FIRM INFORMATION ======
export const firmInfo = {
  name: "Prudent Juris",
  tagline: "Excellence in Legal Services",
  phone: "+1 (555) 123-4567",
  email: "contact@prudentjuris.com",
  address: "123 Legal Avenue, Suite 500, New York, NY 10001",
  whatsappNumber: "15551234567", // Format: country code + number, no spaces or symbols
};

// ====== 2. NAVIGATION ======
export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Practices", href: "#practices" },
  { name: "Team", href: "#team" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Articles", href: "#articles" },
  { name: "Contact", href: "#contact" },
];

// ====== 3. HERO SECTION ======
export const hero = {
  headline: "Trusted Legal Excellence",
  subheadline: "Protecting Your Rights with Integrity & Expertise",
  description: "For over two decades, Prudent Juris has been providing exceptional legal services to individuals and businesses. Our commitment to justice and client success sets us apart.",
  ctaText: "Schedule Consultation",
  ctaLink: "#contact",
};

// ====== 4. ABOUT US SECTION ======
export const about = {
  title: "About Prudent Juris",
  subtitle: "A Legacy of Legal Excellence",
  description: `Founded in 2001, Prudent Juris has established itself as a premier law firm dedicated to providing comprehensive legal solutions. Our team of experienced attorneys brings together diverse expertise across multiple practice areas, ensuring that our clients receive well-rounded, strategic legal counsel.

We pride ourselves on our client-centric approach, combining rigorous legal analysis with practical business acumen. Our firm has successfully represented clients in complex litigation, corporate transactions, and regulatory matters, earning recognition for our commitment to excellence.`,
  
  vision: {
    title: "Our Vision",
    content: "To be the most trusted and respected law firm, known for delivering exceptional legal outcomes while maintaining the highest standards of professional ethics and client service.",
  },
  
  mission: {
    title: "Our Mission",
    content: "To provide innovative, strategic, and cost-effective legal solutions that protect our clients' interests and help them achieve their goals. We are committed to accessibility, transparency, and building lasting relationships based on trust and results.",
  },
  
  stats: [
    { value: "20+", label: "Years of Experience" },
    { value: "500+", label: "Cases Won" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Legal Experts" },
  ],
};

// ====== 5. CLIENT LOGOS ======
// Replace these placeholder URLs with actual client logo images
export const clients = [
  { name: "Client 1", logo: "/placeholder.svg" },
  { name: "Client 2", logo: "/placeholder.svg" },
  { name: "Client 3", logo: "/placeholder.svg" },
  { name: "Client 4", logo: "/placeholder.svg" },
  { name: "Client 5", logo: "/placeholder.svg" },
  { name: "Client 6", logo: "/placeholder.svg" },
  { name: "Client 7", logo: "/placeholder.svg" },
  { name: "Client 8", logo: "/placeholder.svg" },
];

// ====== 6. WHY CHOOSE US ======
export const whyChooseUs = {
  title: "Why Choose Prudent Juris",
  subtitle: "Your Success Is Our Priority",
  points: [
    {
      title: "Proven Track Record",
      description: "Over 500 successful cases with a 98% client satisfaction rate.",
    },
    {
      title: "Expert Legal Team",
      description: "Our attorneys are recognized leaders in their respective practice areas.",
    },
    {
      title: "Client-Centered Approach",
      description: "We prioritize clear communication and personalized strategies for each case.",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. We provide clear, upfront pricing for all our services.",
    },
    {
      title: "24/7 Availability",
      description: "Legal emergencies don't wait. Neither do we. Available when you need us.",
    },
    {
      title: "Confidentiality Guaranteed",
      description: "Your matters are handled with the utmost discretion and confidentiality.",
    },
  ],
};

// ====== 7. PRACTICE AREAS ======
export const practices = [
  {
    title: "Criminal Law",
    icon: "Scale",
    shortDescription: "Defense against criminal charges",
    fullDescription: "Our criminal defense team provides vigorous representation for individuals facing criminal charges. From misdemeanors to complex federal cases, we protect your rights and fight for the best possible outcome.",
  },
  {
    title: "Corporate Law",
    icon: "Building2",
    shortDescription: "Business legal solutions",
    fullDescription: "Comprehensive corporate legal services including business formation, mergers and acquisitions, corporate governance, and regulatory compliance. We help businesses navigate complex legal landscapes.",
  },
  {
    title: "Family Law",
    icon: "Users",
    shortDescription: "Family legal matters",
    fullDescription: "Compassionate representation in divorce, child custody, adoption, and other family matters. We understand the emotional nature of these cases and work to protect your family's interests.",
  },
  {
    title: "Property Law",
    icon: "Home",
    shortDescription: "Real estate & property rights",
    fullDescription: "Expert guidance in real estate transactions, property disputes, landlord-tenant matters, and land use regulations. We protect your property rights and investments.",
  },
  {
    title: "Intellectual Property",
    icon: "Lightbulb",
    shortDescription: "Protecting your innovations",
    fullDescription: "Patent, trademark, and copyright protection services. We help creators and businesses safeguard their intellectual assets and enforce their rights against infringement.",
  },
  {
    title: "Employment Law",
    icon: "Briefcase",
    shortDescription: "Workplace legal issues",
    fullDescription: "Representation for both employers and employees in workplace disputes, discrimination claims, wrongful termination, and employment contract matters.",
  },
];

// ====== 8. TEAM MEMBERS ======
export const team = [
  {
    name: "Jonathan Mitchell",
    position: "Managing Partner",
    education: "J.D., Harvard Law School",
    description: "With over 25 years of experience, Jonathan leads our firm with a focus on corporate law and complex litigation.",
    email: "j.mitchell@prudentjuris.com",
    phone: "+1 (555) 123-4568",
    image: "/placeholder.svg", // Replace with actual image path
  },
  {
    name: "Sarah Chen",
    position: "Senior Partner",
    education: "J.D., Yale Law School",
    description: "Sarah specializes in intellectual property and has successfully handled landmark patent cases.",
    email: "s.chen@prudentjuris.com",
    phone: "+1 (555) 123-4569",
    image: "/placeholder.svg",
  },
  {
    name: "Michael Torres",
    position: "Partner",
    education: "J.D., Columbia Law School",
    description: "Michael heads our criminal defense practice and is known for his strategic courtroom presence.",
    email: "m.torres@prudentjuris.com",
    phone: "+1 (555) 123-4570",
    image: "/placeholder.svg",
  },
  {
    name: "Emily Richardson",
    position: "Associate Partner",
    education: "J.D., Stanford Law School",
    description: "Emily focuses on family law matters, bringing empathy and expertise to sensitive cases.",
    email: "e.richardson@prudentjuris.com",
    phone: "+1 (555) 123-4571",
    image: "/placeholder.svg",
  },
];

// ====== 9. TESTIMONIALS ======
export const testimonials = [
  {
    name: "Robert Harrison",
    position: "CEO, Harrison Industries",
    message: "Prudent Juris handled our corporate merger with exceptional professionalism. Their attention to detail and strategic guidance made a complex process seamless.",
    image: "/placeholder.svg",
  },
  {
    name: "Amanda Foster",
    position: "Private Client",
    message: "During the most difficult time in my life, the family law team at Prudent Juris provided not just legal expertise but genuine compassion. Forever grateful.",
    image: "/placeholder.svg",
  },
  {
    name: "David Kim",
    position: "Founder, TechStart Inc.",
    message: "Their intellectual property team protected our innovations when competitors tried to infringe. Quick, decisive, and highly effective.",
    image: "/placeholder.svg",
  },
  {
    name: "Patricia Moore",
    position: "Real Estate Developer",
    message: "I've worked with many law firms over the years. None compare to the level of service and expertise I've received from Prudent Juris.",
    image: "/placeholder.svg",
  },
];

// ====== 10. ARTICLES/BLOG ======
export const articles = [
  {
    title: "Understanding Your Rights During a Criminal Investigation",
    excerpt: "Know what to do and what to avoid when facing a criminal investigation. Your actions in the early stages can significantly impact your case outcome.",
    author: "Michael Torres",
    date: "December 5, 2024",
    category: "Criminal Law",
    slug: "understanding-rights-criminal-investigation",
  },
  {
    title: "Key Considerations for Business Mergers in 2024",
    excerpt: "A comprehensive guide to navigating the legal complexities of mergers and acquisitions in today's regulatory environment.",
    author: "Jonathan Mitchell",
    date: "November 28, 2024",
    category: "Corporate Law",
    slug: "business-mergers-2024",
  },
  {
    title: "Protecting Your Intellectual Property: A Startup Guide",
    excerpt: "Essential steps every startup should take to safeguard their innovations, brands, and creative works from the beginning.",
    author: "Sarah Chen",
    date: "November 15, 2024",
    category: "Intellectual Property",
    slug: "ip-protection-startup-guide",
  },
];

// ====== 11. CONTACT INFORMATION ======
export const contact = {
  title: "Contact Us",
  subtitle: "We're Here to Help",
  description: "Schedule a consultation with our legal team. We're committed to providing prompt, confidential responses to all inquiries.",
  formFields: {
    namePlaceholder: "Your Full Name",
    emailPlaceholder: "Your Email Address",
    phonePlaceholder: "Your Phone Number",
    subjectPlaceholder: "Subject",
    messagePlaceholder: "How can we help you?",
    submitText: "Send Message",
  },
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919364!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959481673!5m2!1sen!2sus",
};

// ====== 12. FOOTER ======
export const footer = {
  description: "Prudent Juris is committed to providing exceptional legal services with integrity, expertise, and dedication to our clients' success.",
  quickLinks: [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Practice Areas", href: "#practices" },
    { name: "Contact", href: "#contact" },
  ],
  practiceLinks: [
    { name: "Criminal Law", href: "#practices" },
    { name: "Corporate Law", href: "#practices" },
    { name: "Family Law", href: "#practices" },
    { name: "Property Law", href: "#practices" },
  ],
  copyright: `© ${new Date().getFullYear()} Prudent Juris. All rights reserved.`,
  bottomLinks: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Disclaimer", href: "#" },
  ],
};

// ====== 13. SOCIAL MEDIA LINKS ======
export const socialLinks = [
  { name: "Facebook", url: "https://facebook.com/prudentjuris", icon: "Facebook" },
  { name: "Twitter", url: "https://twitter.com/prudentjuris", icon: "Twitter" },
  { name: "LinkedIn", url: "https://linkedin.com/company/prudentjuris", icon: "Linkedin" },
  { name: "Instagram", url: "https://instagram.com/prudentjuris", icon: "Instagram" },
];

// ====== 14. DISCLAIMER ======
export const disclaimer = {
  title: "Legal Disclaimer",
  content: `Welcome to Prudent Juris. Before proceeding, please read and acknowledge the following:

**No Attorney-Client Relationship**
The information provided on this website is for general informational purposes only and does not constitute legal advice. Viewing this website or contacting our firm does not create an attorney-client relationship.

**Confidentiality Notice**
Until a formal attorney-client relationship is established, any information you provide to us may not be treated as confidential. Please do not send confidential or sensitive information through the website contact forms.

**Past Results**
Past case results, testimonials, and experience described on this website do not guarantee similar outcomes in your case. Each legal matter is unique and depends on its specific facts and circumstances.

**Jurisdictional Limitations**
Our attorneys are licensed to practice in specific jurisdictions. We do not provide legal services in jurisdictions where we are not licensed unless specifically authorized.

**Legal Advice**
For specific legal advice pertaining to your situation, please schedule a consultation with one of our attorneys.`,
  buttonText: "I Understand and Agree",
};

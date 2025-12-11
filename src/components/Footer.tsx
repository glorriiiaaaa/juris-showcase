/**
 * ====================================================
 * FOOTER COMPONENT
 * ====================================================
 * 
 * This component displays the website footer.
 * 
 * TO EDIT: Modify in src/data/siteData.ts
 * - Footer content: footer object
 * - Firm info: firmInfo object
 * - Social links: socialLinks array
 */

import { footer, firmInfo, socialLinks } from "@/data/siteData";
import { Scale, Facebook, Twitter, Linkedin, Instagram, LucideIcon } from "lucide-react";

// Social icon mapping
const socialIconMap: { [key: string]: LucideIcon } = {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
};

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              {/* 
                TO EDIT LOGO: 
                Replace the Scale icon with your logo image
              */}
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Scale className="h-7 w-7 text-secondary" />
              </div>
              <span className="font-heading text-xl font-bold">{firmInfo.name}</span>
            </a>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              {footer.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = socialIconMap[social.icon] || Facebook;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {footer.practiceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                <a href={`tel:${firmInfo.phone}`} className="hover:text-secondary transition-colors">
                  {firmInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${firmInfo.email}`} className="hover:text-secondary transition-colors">
                  {firmInfo.email}
                </a>
              </li>
              <li className="leading-relaxed">{firmInfo.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">{footer.copyright}</p>
            <div className="flex gap-6">
              {footer.bottomLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
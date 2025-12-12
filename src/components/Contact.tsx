/**
 * ====================================================
 * CONTACT SECTION
 * ====================================================
 * 
 * This component displays the contact form and map.
 * 
 * TO EDIT:
 * - Content: Modify in src/data/siteData.ts (contact, firmInfo, socialLinks)
 * - Map: Update mapEmbedUrl in contact object
 * - Social links: Modify socialLinks array
 * - Email: Configure emailConfig in siteData.ts with your EmailJS credentials
 */

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { contact, firmInfo, socialLinks, emailConfig } from "@/data/siteData";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  LucideIcon 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Social icon mapping
const socialIconMap: { [key: string]: LucideIcon } = {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Check if EmailJS is configured
    if (emailConfig.serviceId === "YOUR_SERVICE_ID" || 
        emailConfig.templateId === "YOUR_TEMPLATE_ID" || 
        emailConfig.publicKey === "YOUR_PUBLIC_KEY") {
      // Fallback: Show success message without actually sending (for demo/testing)
      console.log("EmailJS not configured. Form data:", formData);
      toast({
        title: "Demo Mode",
        description: "EmailJS not configured. See console for form data. Configure emailConfig in siteData.ts to enable emails.",
        variant: "default",
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        emailConfig.publicKey
      );
      
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            {contact.title}
          </h2>
          <p className="text-muted-foreground text-lg">{contact.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border shadow-card p-8">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={contact.formFields.namePlaceholder}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={contact.formFields.emailPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={contact.formFields.phonePlaceholder}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={contact.formFields.subjectPlaceholder}
                    required
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={contact.formFields.messagePlaceholder}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-navy-light text-primary-foreground font-semibold py-6 text-lg shadow-card hover:shadow-elevated transition-all"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    {contact.formFields.submitText}
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-primary text-primary-foreground rounded-xl p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${firmInfo.phone}`}
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>{firmInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${firmInfo.email}`}
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>{firmInfo.email}</span>
                </a>
                <div className="flex items-start gap-4 text-primary-foreground/80">
                  <div className="p-3 bg-primary-foreground/10 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>{firmInfo.address}</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-sm text-primary-foreground/60 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = socialIconMap[social.icon] || Facebook;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-colors"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-xl overflow-hidden border border-border shadow-card h-64">
              {/* 
                TO EDIT MAP:
                Replace mapEmbedUrl in src/data/siteData.ts (contact.mapEmbedUrl)
                with your Google Maps embed URL
              */}
              <iframe
                src={contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
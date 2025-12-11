/**
 * ====================================================
 * PRUDENT JURIS - MAIN PAGE
 * ====================================================
 * 
 * This is the main index page that combines all sections.
 * 
 * TO EDIT CONTENT:
 * All editable content is in src/data/siteData.ts
 * Simply modify the data objects there to update your website.
 * 
 * TO ADD/REMOVE SECTIONS:
 * Comment out or add component imports and JSX below.
 */

import { useState, useEffect } from "react";
import Disclaimer from "@/components/Disclaimer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Clients from "@/components/Clients";
import WhyChooseUs from "@/components/WhyChooseUs";
import Practices from "@/components/Practices";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  // Check if user has already accepted disclaimer
  useEffect(() => {
    const accepted = sessionStorage.getItem("disclaimerAccepted");
    if (accepted === "true") {
      setDisclaimerAccepted(true);
    }
  }, []);

  const handleDisclaimerAccept = () => {
    sessionStorage.setItem("disclaimerAccepted", "true");
    setDisclaimerAccepted(true);
  };

  // Show disclaimer if not accepted
  if (!disclaimerAccepted) {
    return <Disclaimer onAccept={handleDisclaimerAccept} />;
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero/Home Section */}
        <Hero />

        {/* About Us Section */}
        <About />

        {/* Client Logos Carousel */}
        <Clients />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Practice Areas with Flip Cards */}
        <Practices />

        {/* Team Members */}
        <Team />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Articles/Blog */}
        <Articles />

        {/* Contact Form & Map */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
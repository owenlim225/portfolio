"use client";

import {
  Background,
  CertificationsSection,
  // ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  Navigation,
  OverviewSection,
  ProjectsSection,
  // TechStackSection,
  // TestimonialsSection
} from "@/components/portfolio";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-900 dark:text-white relative">
      {/* Background */}
      <Background />

      {/* Navigation */}
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Projects Section */}
        <ProjectsSection />


        {/* Overview Section */}
        <OverviewSection />

        {/* Tech Stack Section */}
        {/* <TechStackSection /> */}

        {/* Experience Section */}
        <ExperienceSection />


        {/* Testimonials Section */}
        {/* <TestimonialsSection /> */}

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Contact Section */}
        {/* <ContactSection /> */}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
} 
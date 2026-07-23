import React, { useState } from 'react';
import { PageRoute } from './types';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';

import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { FAQPage } from './pages/FAQPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { LegalPage } from './pages/LegalPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [consultationModalOpen, setConsultationModalOpen] = useState<boolean>(false);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'home':
        return (
          <HomePage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'dashboard':
        return (
          <DashboardPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'team':
        return (
          <TeamPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'blog':
        return (
          <BlogPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'contact':
        return (
          <ContactPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'careers':
        return (
          <CareersPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'faq':
        return (
          <FAQPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'testimonials':
        return (
          <TestimonialsPage
            onRouteChange={handleRouteChange}
            onOpenConsultationModal={() => setConsultationModalOpen(true)}
          />
        );
      case 'privacy':
      case 'terms':
      case 'disclaimer':
      case 'cookie-policy':
      case 'refund-policy':
        return (
          <LegalPage
            route={currentRoute}
            onRouteChange={handleRouteChange}
          />
        );
      case 'sitemap':
        return (
          <SitemapPage
            onRouteChange={handleRouteChange}
          />
        );
      case '404':
        return (
          <NotFoundPage
            onRouteChange={handleRouteChange}
          />
        );
      default:
        return (
          <NotFoundPage
            onRouteChange={handleRouteChange}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-['Poppins',sans-serif] selection:bg-[#ff7a00] selection:text-white">
      {/* SEO & Meta Tags Injector */}
      <SEOHead route={currentRoute} />

      {/* Header Navigation */}
      <Header
        activeRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
      />

      {/* Main Page Area */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Footer (contains small credit: Website Designed & Developed by Muzahid Saifi) */}
      <Footer
        onRouteChange={handleRouteChange}
      />

      {/* Confidential Consultation Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
      />
    </div>
  );
}

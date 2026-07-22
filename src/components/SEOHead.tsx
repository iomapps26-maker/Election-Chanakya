import React from 'react';
import { PageRoute } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface SEOHeadProps {
  route: PageRoute;
  customTitle?: string;
  customDesc?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ route, customTitle, customDesc }) => {
  const getPageDetails = () => {
    switch (route) {
      case 'home':
        return {
          title: `${COMPANY_INFO.name} | Premier Political Analytics & Election Strategy India`,
          desc: `India's leading political consulting agency led by CEO ${COMPANY_INFO.ceo}. Expertise in booth management, survey research, election strategy, and war room operations in Noida Sector 63.`,
          path: ''
        };
      case 'about':
        return {
          title: `About Us | ${COMPANY_INFO.name} - CEO Vivek Gupta`,
          desc: `Learn about Election Chanakya's mission, vision, and leadership team headed by Vivek Gupta. Transforming political campaigns with scientific data analytics.`,
          path: 'about'
        };
      case 'services':
        return {
          title: `Our Services | Political Consulting, Surveys & War Room Setup`,
          desc: `Comprehensive election management services including Panna Pramukh booth management, opinion polls, exit polls, digital campaigns, and GIS constituency mapping.`,
          path: 'services'
        };
      case 'team':
        return {
          title: `Our Team & Leadership | CEO Vivek Gupta - ${COMPANY_INFO.name}`,
          desc: `Meet our political analysts, data scientists, survey research experts, and field strategists behind India's most successful campaigns.`,
          path: 'team'
        };
      case 'projects':
        return {
          title: `Case Studies & Campaigns | Electoral Victories by ${COMPANY_INFO.name}`,
          desc: `Explore our proven track record across UP, Punjab, Karnataka, MP, and Haryana. Real election data analytics and voter swing results.`,
          path: 'projects'
        };
      case 'gallery':
        return {
          title: `Gallery | War Rooms, Field Surveys & Campaign Rallies`,
          desc: `Behind-the-scenes visual tour of Election Chanakya's 24/7 War Rooms, field survey teams, media management, and political rallies.`,
          path: 'gallery'
        };
      case 'blog':
        return {
          title: `Political Insights & Psephology Blog | ${COMPANY_INFO.name}`,
          desc: `Expert articles on Panna Pramukh booth management, exit poll methodologies, swing voter psychology, and election war room setups.`,
          path: 'blog'
        };
      case 'contact':
        return {
          title: `Contact Us | Sector 63 Noida Office - Call +91 8218305284`,
          desc: `Get in touch with Election Chanakya. Office located in Sector 63, Noida, UP. Call +91 8218305284 for confidential political strategy briefings.`,
          path: 'contact'
        };
      case 'careers':
        return {
          title: `Careers | Join Election Chanakya Team in Noida`,
          desc: `Explore job openings for Political Data Analysts, Field Survey Operations Managers, and Digital Media Campaign Leads.`,
          path: 'careers'
        };
      case 'faq':
        return {
          title: `Frequently Asked Questions | ${COMPANY_INFO.name}`,
          desc: `Answers to common queries regarding political consulting, survey methodologies, candidate confidentiality, and war room setup costs.`,
          path: 'faq'
        };
      case 'testimonials':
        return {
          title: `Client Reviews & Endorsements | ${COMPANY_INFO.name}`,
          desc: `Testimonials from Members of Parliament, Cabinet Ministers, and political leaders across India praising Election Chanakya.`,
          path: 'testimonials'
        };
      case 'privacy':
        return { title: `Privacy Policy | ${COMPANY_INFO.name}`, desc: `Privacy policy and client confidentiality terms for Election Chanakya.`, path: 'privacy' };
      case 'terms':
        return { title: `Terms & Conditions | ${COMPANY_INFO.name}`, desc: `Terms and conditions of service for Election Chanakya Political Advisory.`, path: 'terms' };
      case 'disclaimer':
        return { title: `Disclaimer | ${COMPANY_INFO.name}`, desc: `Official disclaimer regarding political forecasting and research data.`, path: 'disclaimer' };
      case 'cookie-policy':
        return { title: `Cookie Policy | ${COMPANY_INFO.name}`, desc: `Cookie policy for electionchanakya.co.in website visitors.`, path: 'cookie-policy' };
      case 'refund-policy':
        return { title: `Refund Policy | ${COMPANY_INFO.name}`, desc: `Service fee and retainer refund policy for Election Chanakya.`, path: 'refund-policy' };
      case 'sitemap':
        return { title: `HTML Sitemap | ${COMPANY_INFO.name}`, desc: `Complete navigational directory of all pages on electionchanakya.co.in.`, path: 'sitemap' };
      default:
        return { title: `${COMPANY_INFO.name} | Political Analytics & Campaign Strategy`, desc: `India's premier political advisory firm in Noida Sector 63.`, path: '' };
    }
  };

  const details = getPageDetails();
  const title = customTitle || details.title;
  const description = customDesc || details.desc;
  const canonicalUrl = `${COMPANY_INFO.domain}/${details.path}`;

  // Update document title dynamically in DOM
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    'name': COMPANY_INFO.name,
    'legalName': COMPANY_INFO.legalName,
    'url': COMPANY_INFO.domain,
    'logo': `${COMPANY_INFO.domain}/logo.png`,
    'image': 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200',
    'description': description,
    'telephone': COMPANY_INFO.phone,
    'email': COMPANY_INFO.email,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Sector 63',
      'addressLocality': 'Noida',
      'addressRegion': 'Uttar Pradesh',
      'addressCountry': 'IN'
    },
    'founder': {
      '@type': 'Person',
      'name': COMPANY_INFO.ceo,
      'jobTitle': 'Chief Executive Officer'
    },
    'priceRange': '₹₹₹₹'
  };

  return (
    <div className="hidden" aria-hidden="true">
      {/* Schema Markup for SEO Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {/* OpenGraph & Twitter Card Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </div>
  );
};

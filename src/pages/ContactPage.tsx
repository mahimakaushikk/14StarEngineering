import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, UserCheck, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageBanner } from '../components/PageBanner';
import { EnquirySection } from '../components/EnquirySection';
import { BUSINESS_INFO } from '../config/businessInfo';

export const ContactPage: React.FC = () => {
  const location = useLocation();
  const preselectedServiceId = (location.state as { preselectedServiceId?: string })?.preselectedServiceId;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <PageBanner
        tag="[THANE WORKSHOP & DIRECT CONSULTATION]"
        title="Contact 14 Star Engineering"
        subtitle="Connect directly with Talib Naqvi (B.E. Mechanical) for technical quotations, chassis sizing consultations, and manufacturing bay scheduling."
        breadcrumb="Contact Us"
      />

      {/* Workshop Direct Location Highlight */}
      <section className="section" style={{ backgroundColor: 'var(--color-sandstone-light)', paddingBottom: 0 }}>
        <div className="container">
          <div className="contact-cards-grid">
            {/* Engineer Profile Card */}
            <div className="contact-card" style={{ borderLeft: '4px solid var(--color-copper)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <UserCheck size={20} color="var(--color-copper)" />
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage)' }}>
                  Proprietor & Mechanical Engineer
                </h4>
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-forest)', marginBottom: '4px' }}>
                {BUSINESS_INFO.contactPerson}
              </div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-copper)' }}>
                {BUSINESS_INFO.qualification}
              </div>
            </div>

            {/* Direct Calling Lines */}
            <div className="contact-card" style={{ borderLeft: '4px solid var(--color-forest)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Phone size={20} color="var(--color-forest)" />
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage)' }}>
                  Direct Phone Lines
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone1Raw}`}
                  style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-forest)' }}
                >
                  {BUSINESS_INFO.contact.phone1}
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone2Raw}`}
                  style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-forest)' }}
                >
                  {BUSINESS_INFO.contact.phone2}
                </a>
              </div>
            </div>

            {/* Factory Address */}
            <div className="contact-card" style={{ borderLeft: '4px solid var(--color-copper)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <MapPin size={20} color="var(--color-copper)" />
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage)' }}>
                  Factory & Workshop
                </h4>
              </div>
              <p style={{ fontSize: '0.8125rem', color: '#55625B', margin: 0, lineHeight: 1.45, marginBottom: '10px' }}>
                {BUSINESS_INFO.factory.fullAddress}
              </p>
              <a
                href={BUSINESS_INFO.factory.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-copper)' }}
              >
                <span>Get Directions in Google Maps</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Email Enquiries Card */}
            <div className="contact-card" style={{ borderLeft: '4px solid var(--color-forest)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Mail size={20} color="var(--color-forest)" />
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage)' }}>
                  Email Enquiries
                </h4>
              </div>
              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--color-forest)', wordBreak: 'break-all' }}
              >
                {BUSINESS_INFO.contact.email}
              </a>
              <p style={{ fontSize: '0.75rem', color: '#55625B', marginTop: '6px', marginBottom: 0 }}>
                Direct quotation requests & technical drawings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* High-Conversion Enquiry Form */}
      <EnquirySection preselectedServiceId={preselectedServiceId} />
    </motion.div>
  );
};

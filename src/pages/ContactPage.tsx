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
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <UserCheck size={20} color="var(--color-copper)" />
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage)', margin: 0 }}>
                  Proprietor & Mechanical Engineer
                </h4>
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-forest)', marginBottom: '8px' }}>
                {BUSINESS_INFO.contactPerson}
              </div>
              <div className="contact-card-footer-box">
                <div className="contact-qualification-pill">{BUSINESS_INFO.qualification}</div>
                <div className="contact-card-sub-micro">Heavy Tanker Fabrication Leadership</div>
              </div>
            </div>

            {/* Direct Calling Lines */}
            <div className="contact-card" style={{ borderLeft: '4px solid var(--color-forest)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Phone size={20} color="var(--color-forest)" />
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage)', margin: 0 }}>
                  Direct Phone Lines
                </h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone1Raw}`}
                  style={{ fontSize: '1.0625rem', fontWeight: 800, color: 'var(--color-forest)' }}
                >
                  {BUSINESS_INFO.contact.phone1}
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone2Raw}`}
                  style={{ fontSize: '1.0625rem', fontWeight: 800, color: 'var(--color-forest)' }}
                >
                  {BUSINESS_INFO.contact.phone2}
                </a>
              </div>
              <div className="contact-card-footer-box">
                <div className="contact-card-sub">Mon to Sat: 9:00 AM – 7:30 PM</div>
                <div className="contact-card-sub-micro">Direct Calling & WhatsApp Support</div>
              </div>
            </div>

            {/* Email Enquiries Card */}
            <div className="contact-card" style={{ borderLeft: '4px solid var(--color-forest)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Mail size={20} color="var(--color-forest)" />
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage)', margin: 0 }}>
                  Email Enquiries
                </h4>
              </div>
              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                className="contact-card-value email-value"
              >
                {BUSINESS_INFO.contact.email}
              </a>
              <div className="contact-card-footer-box">
                <div className="contact-card-sub">Commercial Quotations & Invoicing</div>
                <div className="contact-card-sub-micro">Direct drawings & specifications review</div>
              </div>
            </div>

            {/* Factory Address */}
            <div className="contact-card" style={{ borderLeft: '4px solid var(--color-copper)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <MapPin size={20} color="var(--color-copper)" />
                <h4 style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-sage)', margin: 0 }}>
                  Factory & Workshop
                </h4>
              </div>
              <p style={{ fontSize: '0.84375rem', color: '#55625B', margin: 0, lineHeight: 1.45, fontWeight: 600 }}>
                {BUSINESS_INFO.factory.name}, Bhandarli, Thane 400 612
              </p>
              <div className="contact-card-footer-box">
                <a
                  href={BUSINESS_INFO.factory.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-forest btn-sm"
                  style={{ width: '100%', fontSize: '0.75rem', padding: '6px 10px' }}
                >
                  <span>Get Factory Directions</span>
                  <ExternalLink size={12} />
                </a>
                <div className="contact-card-sub-micro" style={{ marginTop: '2px' }}>
                  *Bhandarli, Thane industrial area
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Conversion Enquiry Form */}
      <EnquirySection preselectedServiceId={preselectedServiceId} />
    </motion.div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, MapPin, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import { CertificationsSection } from '../components/CertificationsSection';
import { PageBanner } from '../components/PageBanner';
import { Statistics } from '../components/Statistics';
import { BUSINESS_INFO } from '../config/businessInfo';

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <PageBanner
        tag="[THANE FABRICATION FACILITY]"
        title="About 14 Star Engineering"
        subtitle="Specialized road tanker manufacturing, structural body building, and heavy steel fabrication led by qualified mechanical engineers."
        breadcrumb="About Us"
      />

      {/* Main Narrative & Workshop Showcase */}
      <section className="section" style={{ backgroundColor: 'var(--color-sandstone-light)' }}>
        <div className="container">
          <div className="about-grid">
            {/* Left Column: Comprehensive Story */}
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-tag">Engineering Foundation</span>
              <h2 className="section-title">
                Committed to Highway Durability & Structural Precision
              </h2>
              <p className="section-lead" style={{ fontWeight: 600, color: 'var(--color-forest)', marginBottom: '16px' }}>
                14 Star Engineering was established to provide commercial road transporters and fleet owners with tankers built to exacting standards.
              </p>
              <p>
                Operating out of our manufacturing facility at Jay Sai Warehouse in Bhandarli, Thane (Maharashtra), 14 Star Engineering specializes in mild-steel petroleum tankers, multi-compartment fuel tankers, specialized subcontract-based stainless steel vessels, and complete tanker overhaul services.
              </p>
              <p>
                Our facility is situated in a strategic industrial corridor in Thane, enabling efficient vehicle chassis intake, precision fabrication, fitment of statutory safety valves, and fast vehicle delivery for transporters operating across Maharashtra, Gujarat, and nationwide transport routes.
              </p>

              {/* Leadership Spotlight with Owner Portrait */}
              <div className="about-owner-card" style={{ marginTop: '28px', marginBottom: '28px' }}>
                <div className="about-owner-avatar-wrap">
                  <img
                    src="/images/owner-talib-naqvi.jpg"
                    alt="Talib Naqvi (Ali Ahsan Naqvi) - Proprietor & Engineering Lead"
                    className="about-owner-avatar"
                    loading="lazy"
                  />
                </div>
                <div className="about-owner-details">
                  <div className="leader-label">Proprietor & Engineering Lead</div>
                  <div className="leader-name">{BUSINESS_INFO.contactPerson}</div>
                  <div className="leader-qual">{BUSINESS_INFO.qualification} (Bachelor of Engineering in Mechanical Engineering)</div>
                  <p className="about-owner-bio" style={{ marginTop: '8px' }}>
                    Personally directs shell plate thickness verification, dished end forming, chassis axle load balancing, weld quality control, and certified hydrostatic pressure testing before client dispatch.
                  </p>
                </div>
              </div>

              {/* Core Principles */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ padding: '6px', borderRadius: '4px', background: 'var(--color-copper-subtle)', color: 'var(--color-copper)', flexShrink: 0 }}>
                    <Wrench size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--color-forest)' }}>Structural Integrity First</h4>
                    <p style={{ fontSize: '0.8125rem', color: '#55625B', margin: 0 }}>
                      Every tank shell uses heavy-gauge certified plates, precision hydraulic rolling, and uniform weld penetration to withstand liquid surge forces on highways.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ padding: '6px', borderRadius: '4px', background: 'var(--color-copper-subtle)', color: 'var(--color-copper)', flexShrink: 0 }}>
                    <Shield size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--color-forest)' }}>Highway Safety Compliance</h4>
                    <p style={{ fontSize: '0.8125rem', color: '#55625B', margin: 0 }}>
                      Complete provisions for emergency shut-off foot valves, static grounding bonding reels, and side/rear underrun impact protection guards.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ padding: '6px', borderRadius: '4px', background: 'var(--color-copper-subtle)', color: 'var(--color-copper)', flexShrink: 0 }}>
                    <Gauge size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 800, color: 'var(--color-forest)' }}>Leak-Proof Testing</h4>
                    <p style={{ fontSize: '0.8125rem', color: '#55625B', margin: 0 }}>
                      Hydrostatic water pressure testing and pneumatic compartment checks ensure complete weld joint tightness before vehicle dispatch.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Workshop Image & Facility Info */}
            <motion.div
              className="about-media"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/tanker-shell-fabrication.jpg"
                alt="Mild steel road tanker elliptical shell fabrication with dished ends in Thane workshop"
                className="about-media-image"
                loading="lazy"
              />
              <div className="about-media-tag">
                <strong>{BUSINESS_INFO.brandName}</strong> — {BUSINESS_INFO.factory.post}, {BUSINESS_INFO.factory.cityPin}
              </div>

              {/* Physical Workshop Card */}
              <div
                style={{
                  marginTop: '24px',
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <MapPin size={18} color="var(--color-copper)" />
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                    Fabrication Workshop Location
                  </h4>
                </div>
                <p style={{ fontSize: '0.8125rem', color: '#55625B', lineHeight: 1.5, marginBottom: '14px' }}>
                  {BUSINESS_INFO.factory.fullAddress}
                </p>
                <a
                  href={BUSINESS_INFO.factory.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-forest btn-sm"
                  style={{ width: '100%', fontSize: '0.75rem' }}
                >
                  <span>Open Directions in Google Maps</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dedicated Certifications Section */}
      <CertificationsSection />

      {/* Statistics Strip */}
      <Statistics />

      {/* Call to Action Banner */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag">Direct Engineering Consultation</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>
            Need a Commercial Tanker Built or Refurbished?
          </h2>
          <p style={{ fontSize: '1rem', color: '#CBD5CF', marginBottom: '28px', lineHeight: 1.6 }}>
            Speak directly with Talib Naqvi to evaluate your vehicle chassis specifications, tanker capacity requirements, and delivery timeline.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
            <Link to="/contact" className="btn btn-primary">
              <span>Request a Technical Quotation</span>
              <ArrowRight size={16} />
            </Link>
            <a href={`tel:${BUSINESS_INFO.contact.phone1Raw}`} className="btn btn-secondary">
              <span>Call: {BUSINESS_INFO.contact.phone1}</span>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

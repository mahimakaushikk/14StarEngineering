import { Link } from 'react-router-dom';
import { UserCheck, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../config/businessInfo';
import { Logo } from './Logo';

export const ContactFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--color-white)' }} aria-labelledby="contact-heading">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">Get in Touch</span>
            <h2 id="contact-heading" className="section-title">
              Contact 14 Star Engineering
            </h2>
            <p className="section-lead">
              Visit our fabrication facility in Thane or connect directly with our engineering team for quotations and technical discussions.
            </p>
          </motion.div>

          <motion.div
            className="contact-cards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {/* Owner & Qualification Card */}
            <motion.div
              className="contact-card"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="contact-card-icon">
                <UserCheck size={22} aria-hidden="true" />
              </div>
              <div className="contact-card-label">Owner & Mechanical Engineer</div>
              <div className="contact-card-value">{BUSINESS_INFO.contactPerson}</div>
              <div className="contact-card-sub" style={{ fontWeight: 700, color: 'var(--color-copper)' }}>
                {BUSINESS_INFO.qualification}
              </div>
            </motion.div>

            {/* Direct Calling Lines Card */}
            <motion.div
              className="contact-card"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="contact-card-icon">
                <Phone size={22} aria-hidden="true" />
              </div>
              <div className="contact-card-label">Direct Phone Lines</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone1Raw}`}
                  className="contact-card-value"
                  style={{ fontSize: '1rem' }}
                  aria-label={`Call primary phone ${BUSINESS_INFO.contact.phone1}`}
                >
                  {BUSINESS_INFO.contact.phone1}
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone2Raw}`}
                  className="contact-card-value"
                  style={{ fontSize: '1rem' }}
                  aria-label={`Call secondary phone ${BUSINESS_INFO.contact.phone2}`}
                >
                  {BUSINESS_INFO.contact.phone2}
                </a>
              </div>
              <div className="contact-card-sub">Mon to Sat: 9:00 AM – 7:30 PM</div>
            </motion.div>

            {/* Official Email Card */}
            <motion.div
              className="contact-card"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="contact-card-icon">
                <Mail size={22} aria-hidden="true" />
              </div>
              <div className="contact-card-label">Official Email</div>
              <a
                href={`mailto:${BUSINESS_INFO.contact.email}`}
                className="contact-card-value"
                style={{ fontSize: '0.9375rem', wordBreak: 'break-all' }}
                aria-label={`Send email to ${BUSINESS_INFO.contact.email}`}
              >
                {BUSINESS_INFO.contact.email}
              </a>
              <div className="contact-card-sub">Commercial Quotations & Invoicing</div>
            </motion.div>

            {/* Factory Address & Location Card */}
            <motion.div
              className="contact-card"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
            >
              <div className="contact-card-icon">
                <MapPin size={22} aria-hidden="true" />
              </div>
              <div className="contact-card-label">Factory & Workshop Address</div>
              <div className="contact-card-value" style={{ fontSize: '0.875rem', lineHeight: '1.4' }}>
                {BUSINESS_INFO.factory.name}, {BUSINESS_INFO.factory.street}, {BUSINESS_INFO.factory.post}, {BUSINESS_INFO.factory.cityPin}
              </div>
              <div style={{ marginTop: 'auto', paddingTop: '10px' }}>
                <a
                  href={BUSINESS_INFO.factory.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-forest btn-sm"
                  style={{ width: '100%', fontSize: '0.75rem', padding: '6px 10px' }}
                >
                  <span>Get Factory Directions (Bhandarli, Thane)</span>
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
                <div style={{ fontSize: '0.6875rem', color: 'var(--color-sage)', marginTop: '6px' }}>
                  *Factory directions point to Bhandarli, Thane industrial area.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Site Footer */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-main-grid">
            {/* Column 1: Brand & Identity */}
            <div>
              <Logo variant="light" size="md" />
              <p style={{ marginTop: '16px', fontSize: '0.875rem', lineHeight: '1.6', color: 'var(--color-sage-light)' }}>
                Tanker manufacturing, body building, and heavy fabrication solutions built for Indian highways and oil-industry transport standards.
              </p>
              <div style={{ marginTop: '16px', fontSize: '0.8125rem', color: 'var(--color-sandstone)' }}>
                <strong>Factory:</strong> {BUSINESS_INFO.factory.name}, {BUSINESS_INFO.factory.cityPin}
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h3 className="footer-col-title">Navigation</h3>
              <ul className="footer-links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About 14 Star</Link></li>
                <li><Link to="/services">Tankers & Services</Link></li>
                <li><Link to="/clients">Clients & Partners</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Capabilities & Contact */}
            <div>
              <h3 className="footer-col-title">Our Capabilities</h3>
              <ul className="footer-links-list">
                <li><Link to="/services">Petroleum Road Tankers</Link></li>
                <li><Link to="/services">Stainless Steel Tankers (Subcontract)</Link></li>
                <li><Link to="/services">Multi-Compartment Fuel Tankers</Link></li>
                <li><Link to="/services">Emergency Safety Foot Valves</Link></li>
                <li><Link to="/services">Tanker Repair & Overhaul</Link></li>
                <li><Link to="/services">Polyurethane Repainting</Link></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Bar */}
          <div className="footer-bottom-bar">
            <div>
              © {currentYear} 14 Star Engineering. All rights reserved.
            </div>
            <div style={{ color: 'var(--color-sage)', fontSize: '0.75rem' }}>
              Jay Sai Warehouse, Bhandarli, Thane 400 612, Maharashtra
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

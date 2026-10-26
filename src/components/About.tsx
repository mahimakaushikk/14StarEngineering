import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../config/businessInfo';

export const About: React.FC = () => {
  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--color-sandstone-light)' }} aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Descriptive Copy & Leadership */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag">Engineering Expertise</span>
            <h2 id="about-heading" className="section-title">
              Precision Tanker Engineering & Heavy Steel Fabrication
            </h2>
            <p className="section-lead" style={{ fontWeight: 600, color: 'var(--color-forest)', marginBottom: '16px' }}>
              14 Star Engineering delivers specialized tanker body fabrication and mechanical engineering solutions tailored for commercial road transport.
            </p>
            <p>
              Operating from Thane, Maharashtra, 14 Star Engineering designs and fabricates commercial road tankers engineered to withstand harsh highway conditions, liquid dynamic surges, and rigorous industrial operating schedules. We combine practical workshop fabrication skills with structural engineering principles.
            </p>
            <p>
              Under the technical leadership of Talib Naqvi (Ali Ahsan Naqvi), holding a Bachelor of Engineering in Mechanical Engineering (B.E. Mechanical), our manufacturing focuses on structural integrity, precision alignment, weld longevity, and leak-proof tanker vessel fabrication.
            </p>

            {/* Verified Leadership Box with Owner Portrait */}
            <div className="about-owner-card">
              <div className="about-owner-avatar-wrap">
                <img
                  src="/images/owner-talib-naqvi.jpg"
                  alt="Talib Naqvi (Ali Ahsan Naqvi) - Proprietor & Technical Lead, B.E. Mechanical"
                  className="about-owner-avatar"
                  loading="lazy"
                />
              </div>
              <div className="about-owner-details">
                <div className="leader-label">Proprietor & Engineering Lead</div>
                <div className="leader-name">{BUSINESS_INFO.contactPerson}</div>
                <div className="leader-qual">{BUSINESS_INFO.qualification} (Bachelor of Engineering)</div>
                <p className="about-owner-bio">
                  Personally directs tanker shell design, chassis weight balancing, dished end alignment, and certified hydrostatic testing.
                </p>
              </div>
            </div>

            {/* Practical Engineering Focus Pillars */}
            <div className="about-pillars">
              <div className="about-pillar-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <Wrench size={16} color="var(--color-copper)" aria-hidden="true" />
                  <h4>Mechanical Engineering Rigor</h4>
                </div>
                <p>Qualified mechanical engineering supervision over plate rolling, alignment, and chassis load distribution.</p>
              </div>

              <div className="about-pillar-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <Shield size={16} color="var(--color-copper)" aria-hidden="true" />
                  <h4>Heavy-Duty Fabrication</h4>
                </div>
                <p>High-strength steel fabrication, calibrated internal bulkheads, and durable sub-frame mounting.</p>
              </div>

              <div className="about-pillar-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                  <CheckCircle size={16} color="var(--color-copper)" aria-hidden="true" />
                  <h4>End-to-End Transporter Support</h4>
                </div>
                <p>From requirement specification and body building to maintenance, re-strengthening, and repainting.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-outline-forest">
                <span>More About 14 Star</span>
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/contact" className="btn btn-primary">
                <span>Discuss Requirements</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Authentic Workshop Shell Fabrication */}
          <motion.div
            className="about-media"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-media-frame">
              <img
                src="/images/tanker-shell-fabrication.jpg"
                alt="Mild steel road tanker elliptical shell fabrication with dished ends in Thane workshop"
                className="about-media-image"
                loading="lazy"
              />
              <div className="about-media-tag">
                <strong>{BUSINESS_INFO.brandName}</strong> — Fabrication Bay, Bhandarli, Thane
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../config/businessInfo';

export const Hero: React.FC = () => {
  const prefilledWhatsAppMsg = encodeURIComponent(
    'Hello 14 Star Engineering, I would like to enquire about road tanker fabrication and request a quotation.'
  );

  const whatsAppUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsAppNumberRaw}?text=${prefilledWhatsAppMsg}`;

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-main-title">
      {/* Authentic Client Tanker Workshop Photography */}
      <img
        src="/images/hero-tanker-tata2823.jpg"
        alt="TATA 2823 commercial heavy petroleum road tanker under fabrication at 14 Star Engineering workshop facility"
        className="hero-bg-overlay"
        loading="eager"
        fetchPriority="high"
      />

      {/* High-Contrast Gradient Protection */}
      <div className="hero-gradient-overlay" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Engineering Verification Badge */}
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ShieldCheck size={15} color="#B77A40" aria-hidden="true" />
            <span>ISO 9001:2015 Certified • B.E. Mechanical Leadership • Thane</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-main-title"
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Built for the Road. Engineered for Safety.
          </motion.h1>

          {/* Supporting Engineering Subheadline */}
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Petroleum tanker manufacturing, stainless steel tanker solutions, and dependable fabrication support for transporters, fleet owners, and oil-industry vendors across India.
          </motion.p>

          {/* Direct Quotation CTA Group */}
          <motion.div
            className="hero-cta-group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/contact"
              className="btn btn-primary"
              id="hero-quote-btn"
            >
              <span>Request a Quote</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <motion.a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              id="hero-whatsapp-btn"
              aria-label="Contact 14 Star Engineering directly on WhatsApp"
              whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageSquare size={18} aria-hidden="true" />
              <span>WhatsApp Us</span>
            </motion.a>
          </motion.div>

          {/* Truthful Trust Line with Reported Figures */}
          <motion.div
            className="hero-trust-line"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.7 }}
          >
            <span>
              <strong>250+</strong> Tankers Delivered
            </span>
            <span style={{ color: 'var(--color-copper)' }}>•</span>
            <span>
              <strong>5+</strong> Years of Experience
            </span>
            <span style={{ color: 'var(--color-copper)' }}>•</span>
            <span>Thane, Maharashtra</span>
          </motion.div>

          <div style={{ marginTop: '10px', fontSize: '0.72rem', color: '#8B9690' }}>
            *Figures based on company delivery records.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

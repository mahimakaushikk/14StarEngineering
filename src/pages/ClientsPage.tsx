import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Building2, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageBanner } from '../components/PageBanner';
import { BUSINESS_INFO } from '../config/businessInfo';

export const ClientsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <PageBanner
        tag="[INDUSTRY FOOTPRINT & FLEET NETWORK]"
        title="Clients & Transport Partners"
        subtitle="Serving transport contractors and fleet owners operating across India's premier petroleum and chemical distribution supply chains."
        breadcrumb="Clients & Partners"
      />

      {/* Main Clients & Partners Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-sandstone-light)' }}>
        <div className="container">
          <div className="clients-container">
            {/* Group 1: Reported Oil-Industry Clients */}
            <div className="clients-group">
              <div className="clients-group-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Building2 size={20} color="var(--color-copper)" />
                  <h3 style={{ color: 'var(--color-forest)', fontSize: '1.65rem' }}>
                    Reported Oil-Industry Clients
                  </h3>
                </div>
                <p style={{ color: '#4A5650' }}>
                  Major oil marketing companies whose retail and bulk supply chains are serviced by tankers fabricated or maintained by 14 Star Engineering.
                </p>
              </div>

              <div className="oil-clients-grid">
                {BUSINESS_INFO.reportedOilClients.map((client) => (
                  <motion.div
                    key={client.name}
                    className="oil-client-card"
                    style={{ background: 'var(--color-white)', border: '1px solid var(--color-border-light)' }}
                    whileHover={{ y: -3, borderColor: 'var(--color-copper)' }}
                  >
                    <div className="oil-client-acronym" style={{ color: 'var(--color-forest)' }}>
                      {client.name}
                    </div>
                    <div className="oil-client-fullname" style={{ color: '#55625B' }}>
                      {client.fullName}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Group 2: Reported Transport Partners (10 Fleet Transporters) */}
            <div className="clients-group">
              <div className="clients-group-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Truck size={20} color="var(--color-copper)" />
                  <h3 style={{ color: 'var(--color-forest)', fontSize: '1.65rem' }}>
                    Reported Transport Partners & Fleet Owners
                  </h3>
                </div>
                <p style={{ color: '#4A5650' }}>
                  Leading road transporters and logistics operators who depend on 14 Star Engineering for custom tanker fabrication, structural strengthening, and emergency repairs.
                </p>
              </div>

              <div className="transporters-grid">
                {BUSINESS_INFO.reportedTransportPartners.map((transporter) => (
                  <motion.div
                    key={transporter.name}
                    className="transporter-card"
                    style={{ background: 'var(--color-white)', border: '1px solid var(--color-border-light)' }}
                    whileHover={{ y: -2, borderColor: 'var(--color-copper)' }}
                  >
                    <div className="transporter-card-icon">
                      <Truck size={14} aria-hidden="true" />
                    </div>
                    <div className="transporter-card-info">
                      <h4 style={{ color: 'var(--color-forest)' }}>{transporter.name}</h4>
                      <span style={{ color: 'var(--color-copper)' }}>{transporter.type}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Transporter Commitment Grid */}
            <div className="transporter-commitment-grid">
              <div
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border-light)',
                  padding: '24px',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle2 size={18} color="var(--color-copper)" />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                    Fast Transporter Turnaround
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#55625B', margin: 0 }}>
                  We understand vehicle idling costs money. We prioritize scheduled tanker manufacturing and express maintenance slots to keep commercial fleets on the road.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border-light)',
                  padding: '24px',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle2 size={18} color="var(--color-copper)" />
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-forest)' }}>
                    Direct Mechanical Engineer Access
                  </h4>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#55625B', margin: 0 }}>
                  Fleet owners communicate directly with Talib Naqvi (B.E. Mechanical) for vehicle dimensioning, compartment calibration, and chassis weight balancing.
                </p>
              </div>
            </div>

            {/* Factual Disclaimer Box */}
            <div
              className="clients-disclaimer-box"
              style={{ background: 'var(--color-white)', borderColor: 'var(--color-border-light)', color: '#55625B' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <Info size={16} color="var(--color-copper)" style={{ flexShrink: 0, marginTop: '2px' }} aria-hidden="true" />
                <span>
                  *Note: Client and transport partner names are owner-reported based on fabrication orders and servicing records. Logos are displayed as typography; official trademark logos will be added upon documented partner authorization.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag">Transporter Fleet Partnerships</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>
            Expand or Maintain Your Tanker Fleet with 14 Star
          </h2>
          <p style={{ fontSize: '1rem', color: '#CBD5CF', marginBottom: '28px' }}>
            Get reliable, long-lasting tanker fabrication and direct engineering support.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <span>Contact Our Team</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

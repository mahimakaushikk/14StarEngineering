import React from 'react';
import { Truck, Info } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '../config/businessInfo';

export const ClientsPartners: React.FC = () => {
  return (
    <section id="clients" className="section section-dark" aria-labelledby="clients-heading">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Industry Footprint</span>
          <h2 id="clients-heading" className="section-title">
            Clients & Transport Partners Served
          </h2>
          <p className="section-lead">
            14 Star Engineering has delivered tankers and fabrication services for fleet operators serving India’s premier oil marketing companies.
          </p>
        </motion.div>

        <div className="clients-container">
          {/* Group 1: Reported Oil-Industry Clients */}
          <div className="clients-group">
            <div className="clients-group-header">
              <h3>Reported Oil-Industry Clients</h3>
              <p>
                Oil marketing companies whose supply chains and transport networks are served by tankers built or maintained by 14 Star Engineering.
              </p>
            </div>

            <motion.div
              className="oil-clients-grid"
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
              {BUSINESS_INFO.reportedOilClients.map((client) => (
                <motion.div
                  key={client.name}
                  className="oil-client-card"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <div className="oil-client-acronym">{client.name}</div>
                  <div className="oil-client-fullname">{client.fullName}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Group 2: Reported Transport Partners (10 Fleet Transporters) */}
          <div className="clients-group">
            <div className="clients-group-header">
              <h3>Reported Transport Partners & Fleet Owners</h3>
              <p>
                Commercial road transporters and logistics operators who rely on 14 Star Engineering for tanker fabrication and maintenance.
              </p>
            </div>

            <motion.div
              className="transporters-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.06 },
                },
              }}
            >
              {BUSINESS_INFO.reportedTransportPartners.map((transporter) => (
                <motion.div
                  key={transporter.name}
                  className="transporter-card"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                  }}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                >
                  <div className="transporter-card-icon">
                    <Truck size={14} aria-hidden="true" />
                  </div>
                  <div className="transporter-card-info">
                    <h4>{transporter.name}</h4>
                    <span>{transporter.type}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Factual Disclaimer Box */}
          <div className="clients-disclaimer-box">
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
  );
};

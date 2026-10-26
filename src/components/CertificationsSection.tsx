import React, { useState } from 'react';
import { ShieldCheck, Download, ExternalLink, X, CheckCircle2, ZoomIn, FileText, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../config/businessInfo';

export const CertificationsSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const cert = BUSINESS_INFO.isoCertification;

  return (
    <section id="certifications" className="section cert-section" aria-labelledby="cert-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Quality Assurance & Compliance</span>
          <h2 id="cert-heading" className="section-title">
            ISO 9001:2015 Certified Tanker Fabrication
          </h2>
          <p className="section-lead">
            FOURTEEN STAR ENGINEERING operates under an accredited Quality Management System ensuring every road tanker and storage vessel complies with strict structural, leak-proof, and highway safety standards.
          </p>
        </div>

        <div className="cert-main-grid">
          {/* Left Column: Certificate Preview Card */}
          <motion.div
            className="cert-preview-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="cert-preview-wrapper" onClick={() => setModalOpen(true)}>
              <img
                src={cert.certificateImageUrl}
                alt="ISO 9001:2015 Certificate of Registration for Fourteen Star Engineering"
                className="cert-preview-img"
                loading="lazy"
              />
              <div className="cert-hover-overlay">
                <div className="cert-zoom-btn">
                  <ZoomIn size={20} />
                  <span>Click to Inspect Certificate</span>
                </div>
              </div>
            </div>

            <div className="cert-action-bar">
              <button
                type="button"
                className="btn btn-outline-forest btn-sm"
                onClick={() => setModalOpen(true)}
              >
                <ZoomIn size={15} />
                <span>Enlarge Certificate</span>
              </button>
              <a
                href={cert.certificatePdfUrl}
                download="FOURTEEN_STAR_ENGINEERING_ISO_9001_CERTIFICATE.pdf"
                className="btn btn-primary btn-sm"
              >
                <Download size={15} />
                <span>Download PDF</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Verified Scope & Certification Metadata */}
          <motion.div
            className="cert-details-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="cert-badge-row">
              <span className="cert-status-badge">
                <ShieldCheck size={16} />
                <span>Verified Active Certification</span>
              </span>
              <span className="cert-standard-badge">{cert.standard}</span>
            </div>

            <h3 className="cert-title">
              Certificate of Registration — Quality Management Systems
            </h3>

            <p className="cert-entity">
              Certified Entity: <strong>{cert.registeredEntity}</strong>
            </p>

            <div className="cert-scope-box">
              <div className="cert-scope-label">Certified Audit Scope:</div>
              <p className="cert-scope-text">
                "{cert.scope}"
              </p>
            </div>

            {/* Structured Metadata Table */}
            <div className="cert-table-wrapper">
              <table className="cert-table">
                <tbody>
                  <tr>
                    <th>Certificate Number</th>
                    <td>
                      <code className="cert-code">{cert.certificateNo}</code>
                    </td>
                  </tr>
                  <tr>
                    <th>Issue Date</th>
                    <td>{cert.issueDate}</td>
                  </tr>
                  <tr>
                    <th>Expiry Date</th>
                    <td>{cert.expiryDate} (3-Year Valid Cycle)</td>
                  </tr>
                  <tr>
                    <th>Surveillance Schedule</th>
                    <td>
                      1st Due: {cert.surveillance1} • 2nd Due: {cert.surveillance2}
                    </td>
                  </tr>
                  <tr>
                    <th>Accreditation & Audit</th>
                    <td>
                      {cert.accreditation}
                    </td>
                  </tr>
                  <tr>
                    <th>Certified Facility</th>
                    <td>
                      Near Karan Compound, Ground Floor, Survey No. 42/26B, Jai Sai Warehouse, Bhandarli, Dahisar, Thane, Maharashtra - 400612
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Quality Commitments */}
            <div className="cert-commitments-grid">
              <div className="commitment-item">
                <CheckCircle2 size={16} className="commitment-icon" />
                <div>
                  <strong>High-Tensile Plates</strong>
                  <p>Certified steel plate thickness verification for shell & dished ends.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={16} className="commitment-icon" />
                <div>
                  <strong>100% Weld Integrity</strong>
                  <p>Full-penetration MIG root seams with calibrated anti-surge baffles.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={16} className="commitment-icon" />
                <div>
                  <strong>Hydrostatic Pressure Testing</strong>
                  <p>Individual cell leak testing and pneumatic checks before dispatch.</p>
                </div>
              </div>

              <div className="commitment-item">
                <CheckCircle2 size={16} className="commitment-icon" />
                <div>
                  <strong>Chassis Load Balance</strong>
                  <p>Calculated center of gravity to optimize highway road stability.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statutory Licences & Government Authorisations */}
        <div className="statutory-licences-section">
          <div className="statutory-header text-center">
            <span className="section-tag">Statutory Approvals & Compliance</span>
            <h3 className="statutory-title">
              Statutory Licences & Government Authorisations
            </h3>
            <p className="statutory-lead">
              FOURTEEN STAR ENGINEERING operates under official regulatory approvals and provides all mandatory vehicle modification and carriage certificates with every fabricated road tanker.
            </p>
          </div>

          {/* Featured Highlight: PESO Approved Explosive Licence */}
          <motion.div
            className="peso-highlight-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="peso-highlight-left">
              <div className="peso-tag-row">
                <span className="peso-badge">[PESO APPROVED]</span>
                <span className="peso-dept-tag">Govt. of India Statutory Authority</span>
              </div>
              <h4 className="peso-highlight-title">Explosive Licence</h4>
              <p className="peso-highlight-desc">
                Statutory authorization from the <strong>Petroleum and Explosives Safety Organization (PESO)</strong>, Ministry of Commerce and Industry, Government of India. Authorizes the manufacturing, carriage, and hazardous cargo safety compliance of road tankers carrying Class A and Class B petroleum products across Indian highways.
              </p>
              <div className="peso-specs-row">
                <div className="peso-spec-chip">
                  <CheckCircle2 size={15} />
                  <span>Petroleum Carriage Compliant</span>
                </div>
                <div className="peso-spec-chip">
                  <CheckCircle2 size={15} />
                  <span>Hazardous Cargo Safety Certified</span>
                </div>
                <div className="peso-spec-chip">
                  <CheckCircle2 size={15} />
                  <span>Interstate Highway Transport Authorized</span>
                </div>
              </div>
            </div>
            <div className="peso-highlight-right">
              <div className="peso-seal-box">
                <div className="peso-seal-circle">
                  <ShieldCheck size={32} />
                  <span className="peso-seal-text">PESO</span>
                </div>
                <div className="peso-seal-label">Statutory Petroleum Standard</div>
                <div className="peso-seal-status">Active & Approved</div>
              </div>
            </div>
          </motion.div>

          {/* Statutory Licences & Commercial Documents Grid */}
          <div className="statutory-grid">
            {BUSINESS_INFO.licences.filter(l => !l.isPesoApproved).map((licence, idx) => (
              <motion.div
                key={licence.id}
                className="statutory-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <div className="statutory-card-header">
                  <div className="statutory-card-icon">
                    <FileText size={20} />
                  </div>
                  <div className="statutory-card-badge">{licence.badge}</div>
                </div>
                <h4 className="statutory-card-title">{licence.title}</h4>
                <div className="statutory-card-scope">{licence.scope}</div>
                <p className="statutory-card-desc">{licence.description}</p>
                <div className="statutory-card-footer">
                  <span className="statutory-card-status">
                    <CheckCircle2 size={14} />
                    <span>{licence.status}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Handover Documentation Notice */}
          <div className="statutory-dispatch-banner">
            <div className="dispatch-banner-icon">
              <FileCheck size={24} />
            </div>
            <div className="dispatch-banner-text">
              <strong>Mandatory Handover Documentation Included With Every Tanker</strong>
              <p>
                Every fabricated road tanker is dispatched complete with body builder Form 17, Form 22A/22B endorsement certificates, hydrostatic cell pressure testing reports, and calibration certificates for immediate RTO passing and oil marketing company registration.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Certificate */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cert-modal-header">
                <div>
                  <h4>FOURTEEN STAR ENGINEERING — ISO 9001:2015 Certificate</h4>
                  <p style={{ fontSize: '0.8125rem', color: '#CBD5CF', margin: 0 }}>
                    Certificate No: {cert.certificateNo} | Valid Until: {cert.expiryDate}
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <a
                    href={cert.certificatePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ fontSize: '0.75rem', padding: '6px 12px' }}
                  >
                    <ExternalLink size={14} />
                    <span>Open PDF</span>
                  </a>
                  <button
                    className="cert-modal-close"
                    onClick={() => setModalOpen(false)}
                    aria-label="Close certificate modal"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="cert-modal-body">
                <img
                  src={cert.certificateHighResUrl}
                  alt="High Resolution ISO 9001:2015 Certificate of Registration"
                  className="cert-modal-full-img"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

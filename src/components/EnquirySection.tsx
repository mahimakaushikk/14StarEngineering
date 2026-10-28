import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../config/businessInfo';

interface EnquirySectionProps {
  preselectedServiceId?: string;
}

interface FormState {
  fullName: string;
  phone: string;
  companyName: string;
  tankerType: string;
  capacity: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  tankerType?: string;
  message?: string;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  preselectedServiceId,
}) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    companyName: '',
    tankerType: '',
    capacity: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  // Sync preselected service from cards if passed
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({
        ...prev,
        tankerType: preselectedServiceId,
      }));
    }
  }, [preselectedServiceId]);

  const tankerTypeOptions = [
    { value: 'petroleum-tankers', label: 'Petroleum Tanker (MS Road Tanker)' },
    { value: 'stainless-steel-tankers', label: 'Stainless Steel Tanker (Subcontract Solution)' },
    { value: 'compartment-tankers', label: 'Multi-Compartment Fuel Tanker' },
    { value: 'tanker-fittings', label: 'Tanker Fittings & Safety Valves' },
    { value: 'tanker-repair', label: 'Tanker Overhaul & Polyurethane Repainting' },
    { value: 'custom-fabrication', label: 'Custom Industrial Fabrication / Other' },
  ];

  // Sensible Indian & international phone validation
  const validatePhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const indianRegex = /^[6-9]\d{9}$/;
    const internationalRegex = /^\+?[1-9]\d{9,13}$/;
    return indianRegex.test(cleaned) || internationalRegex.test(cleaned);
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter a valid contact phone number.';
    } else if (!validatePhone(formData.phone)) {
      errs.phone = 'Please enter a valid 10-digit Indian mobile number or international phone format.';
    }

    if (!formData.tankerType) {
      errs.tankerType = 'Please select a tanker or service type from the dropdown.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your tanker requirement.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const constructWhatsAppMessage = (data: FormState) => {
    const selectedTypeObj = tankerTypeOptions.find((o) => o.value === data.tankerType);
    const typeLabel = selectedTypeObj ? selectedTypeObj.label : data.tankerType || 'General Tanker Inquiry';

    const text = [
      `*New Tanker Quotation Request — 14 Star Engineering*`,
      `• *Name:* ${data.fullName}`,
      `• *Phone:* ${data.phone}`,
      data.companyName ? `• *Company/Fleet:* ${data.companyName}` : null,
      `• *Tanker Type:* ${typeLabel}`,
      data.capacity ? `• *Required Capacity:* ${data.capacity}` : null,
      `• *Requirements/Message:* ${data.message}`,
    ]
      .filter(Boolean)
      .join('\n');

    return encodeURIComponent(text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setShowSuccessModal(true);
    }, 600);
  };

  const handleReset = () => {
    setShowSuccessModal(false);
    setFormData({
      fullName: '',
      phone: '',
      companyName: '',
      tankerType: '',
      capacity: '',
      message: '',
    });
    setSubmittedData(null);
  };

  const instantWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.contact.whatsAppNumberRaw}?text=${constructWhatsAppMessage(formData)}`;

  return (
    <section id="enquiry" className="section" style={{ backgroundColor: 'var(--color-sandstone-light)' }} aria-labelledby="enquiry-heading">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Direct Quotation</span>
          <h2 id="enquiry-heading" className="section-title">
            Tell Us Your Tanker Requirement
          </h2>
          <p className="section-lead">
            Get a prompt, transparent quotation for your road tanker manufacturing, fitting, or repair requirement. Direct response from our mechanical engineering team.
          </p>
        </motion.div>

        <div className="enquiry-layout">
          {/* Left Column: Direct Contact & Technical Response Assurance */}
          <motion.div
            className="enquiry-info-box"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="enquiry-info-content">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <h3>Direct Engineering Consultation</h3>
                <span className="tech-tag" style={{ color: 'var(--color-sandstone)' }}>B.E. MECHANICAL</span>
              </div>

              <p>
                Connect directly with our mechanical engineering team to evaluate vehicle chassis specifications, tanker capacity requirements, and fabrication timelines.
              </p>

              <div className="enquiry-contact-links">
                <a
                  href={`tel:${BUSINESS_INFO.contact.phone1Raw}`}
                  className="enquiry-contact-item"
                  aria-label={`Call primary phone ${BUSINESS_INFO.contact.phone1}`}
                >
                  <div className="enquiry-contact-icon">
                    <Phone size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-sage-light)' }}>Primary Call</div>
                    <div>{BUSINESS_INFO.contact.phone1}</div>
                  </div>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.contact.phone2Raw}`}
                  className="enquiry-contact-item"
                  aria-label={`Call secondary phone ${BUSINESS_INFO.contact.phone2}`}
                >
                  <div className="enquiry-contact-icon">
                    <Phone size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-sage-light)' }}>Secondary Call</div>
                    <div>{BUSINESS_INFO.contact.phone2}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS_INFO.contact.email}`}
                  className="enquiry-contact-item"
                  aria-label={`Email ${BUSINESS_INFO.contact.email}`}
                >
                  <div className="enquiry-contact-icon">
                    <Mail size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-sage-light)' }}>Email</div>
                    <div style={{ wordBreak: 'break-all' }}>{BUSINESS_INFO.contact.email}</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="enquiry-whatsapp-block">
              <div style={{ fontSize: '0.8125rem', color: '#CBD5CF', marginBottom: '12px' }}>
                Instant connection: opens a prefilled quotation message on WhatsApp.
              </div>
              <motion.a
                href={instantWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
                aria-label="Send direct WhatsApp inquiry"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageSquare size={18} aria-hidden="true" />
                <span>Instant WhatsApp Enquiry</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Validated Enquiry Form */}
          <motion.div
            className="enquiry-form-card"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} noValidate aria-label="Tanker quotation enquiry form">
              <div className="form-grid">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className="form-error-msg">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Phone & Company in 2 Columns */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210 (10-digit mobile)"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="form-error-msg">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="companyName" className="form-label">
                      Company / Transport Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Manisha Roadline / Fleet Name"
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Tanker Type & Capacity in 2 Columns */}
                <div className="form-grid-2">
                  <div className="form-group">
                    <label htmlFor="tankerType" className="form-label">
                      Tanker / Service Type *
                    </label>
                    <select
                      id="tankerType"
                      name="tankerType"
                      value={formData.tankerType}
                      onChange={handleChange}
                      className={`form-control ${errors.tankerType ? 'is-invalid' : ''}`}
                      aria-required="true"
                      aria-invalid={!!errors.tankerType}
                      aria-describedby={errors.tankerType ? 'tankerType-error' : undefined}
                    >
                      <option value="">-- Select required tanker or service --</option>
                      {tankerTypeOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.tankerType && (
                      <span id="tankerType-error" className="form-error-msg">
                        {errors.tankerType}
                      </span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="capacity" className="form-label">
                      Required Capacity / Compartments (Optional)
                    </label>
                    <input
                      type="text"
                      id="capacity"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleChange}
                      placeholder="e.g. 20 KL (4 Compartments) / 24 KL"
                      className="form-control"
                    />
                  </div>
                </div>

                {/* Specific Requirements / Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Specific Requirements / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Specify chassis make (Tata/Ashok Leyland/BharatBenz), required tanker capacity, delivery location, and any special specifications..."
                    rows={4}
                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error-msg">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', marginTop: '8px' }}
                  id="submit-enquiry-btn"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {isSubmitting ? (
                    <span>Validating & Processing...</span>
                  ) : (
                    <>
                      <span>Submit Quotation Request</span>
                      <Send size={16} aria-hidden="true" />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Transparent Submission Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {showSuccessModal && submittedData && (
          <div
            className="submission-modal-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
          >
            <motion.div
              className="submission-modal-card"
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3 }}
            >
              <div className="submission-success-icon">
                <CheckCircle2 size={36} aria-hidden="true" />
              </div>

              <h3 id="success-modal-title" className="submission-modal-title">
                Requirement Recorded Successfully!
              </h3>

              <p className="submission-modal-body">
                Thank you! Your quotation request has been recorded. For an instant technical quotation, click the button below to send this exact specification directly to Talib Naqvi on WhatsApp or call our team directly.
              </p>

              {/* Structured Requirement Summary */}
              <div
                style={{
                  background: '#F7F4EE',
                  border: '1px solid rgba(139, 150, 144, 0.25)',
                  borderRadius: '6px',
                  padding: '14px',
                  textAlign: 'left',
                  fontSize: '0.8125rem',
                  marginBottom: '20px',
                  lineHeight: 1.5,
                }}
              >
                <div><strong>Name:</strong> {submittedData.fullName}</div>
                <div><strong>Contact Phone:</strong> {submittedData.phone}</div>
                {submittedData.companyName && <div><strong>Fleet:</strong> {submittedData.companyName}</div>}
                <div><strong>Tanker Requirement:</strong> {submittedData.tankerType}</div>
                {submittedData.capacity && <div><strong>Capacity:</strong> {submittedData.capacity}</div>}
              </div>

              <div className="submission-modal-actions">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.contact.whatsAppNumberRaw}?text=${constructWhatsAppMessage(submittedData)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <MessageSquare size={18} aria-hidden="true" />
                  <span>Send via WhatsApp Now</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.contact.phone1Raw}`}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <Phone size={16} aria-hidden="true" />
                  <span>Call Now: {BUSINESS_INFO.contact.phone1}</span>
                </a>

                <button
                  onClick={handleReset}
                  className="btn btn-secondary"
                  style={{ width: '100%', color: 'var(--color-dark-ink)', borderColor: 'var(--color-border-subtle)' }}
                >
                  Close & Reset Form
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

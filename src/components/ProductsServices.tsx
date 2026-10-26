import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductsServicesProps {
  onSelectService: (serviceKey: string) => void;
}

const serviceItems = [
  {
    id: 'petroleum-tankers',
    title: 'Petroleum Tankers',
    category: 'Core Road Transport',
    specCode: 'SPEC-MS-PETRO',
    type: 'in-house' as const,
    description:
      'Heavy-duty mild steel (MS) road tankers engineered specifically for petroleum fuels, motor spirit (MS), and high-speed diesel (HSD) transportation. Built with precision dished ends, internal surge baffles, and robust chassis mounting.',
    features: [
      'Precision dished ends & heavy-gauge shell plates',
      'Internal anti-surge baffles for highway stability',
      'Full catwalk with anti-skid grid & folding safety railings',
      'Calibrated discharge box & emergency foot valve provision',
    ],
    cta: 'Enquire for Petroleum Tankers',
    image: '/images/hero-tanker.jpg',
  },
  {
    id: 'stainless-steel-tankers',
    title: 'Stainless Steel Tankers',
    category: 'Chemical & Liquid Solutions',
    specCode: 'SPEC-SS-SUBCON',
    type: 'subcontract' as const,
    description:
      'Specialized stainless steel tanker fabrication solutions executed on a subcontract basis with vetted technical fabrication specialists. Designed for chemical transport, edible oils, and corrosive or food-grade liquid carriage.',
    features: [
      'SS 304 / SS 316 grade vessel specifications via subcontract',
      'Food-grade inner mirror finish & sanitary weld options',
      'Thermal insulation & external cladding configurations',
      'Clear project oversight & engineering coordination by 14 Star',
    ],
    cta: 'Enquire for Stainless Tankers',
    image: '/images/stainless-tanker.jpg',
  },
  {
    id: 'compartment-tankers',
    title: 'Compartment Tankers',
    category: 'Multi-Product Distribution',
    specCode: 'SPEC-MULTI-COMP',
    type: 'in-house' as const,
    description:
      'Multi-compartment road tankers designed for transporting multiple fuel grades simultaneously. Each compartment is separated by heavy-duty double-bulkhead or single-bulkhead partitions with independent discharge piping.',
    features: [
      'Engineered compartment volume calibration',
      'Independent manhole covers & dedicated dip pipes per cell',
      'Individual bottom foot valves & side discharge manifolds',
      'Even axle weight distribution across loaded compartments',
    ],
    cta: 'Enquire for Compartment Tankers',
    image: '/images/compartment-tanker.jpg',
  },
  {
    id: 'tanker-fittings',
    title: 'Tanker Fittings & Safety Equipment',
    category: 'Safety & Hardware',
    specCode: 'SPEC-SAFETY-VALVES',
    type: 'in-house' as const,
    description:
      'Supply, installation, and integration of essential road tanker fittings, statutory safety hardware, and fluid handling accessories to ensure compliant highway operations.',
    features: [
      'Emergency pneumatic / mechanical shut-off foot valves',
      'Vapour recovery adapters & camlock discharge couplings',
      'Static electricity grounding reels & bonding cables',
      'Side underrun protection beams & rear heavy-duty impact bumpers',
    ],
    cta: 'Enquire for Fittings & Equipment',
    image: '/images/tanker-fittings.jpg',
  },
  {
    id: 'tanker-repair',
    title: 'Tanker Repair & Repainting',
    category: 'Maintenance & Overhaul',
    specCode: 'SPEC-OVERHAUL-PU',
    type: 'in-house' as const,
    description:
      'Complete tanker refurbishment, structural crack repairs, shell leak rectification, sub-frame reinforcement, surface rust blasting, and industrial polyurethane repainting with transporter livery.',
    features: [
      'Shell weld inspection, leak detection & plate patch repair',
      'Chassis mount rubber bushing & U-bolt replacement',
      'Complete abrasive surface preparation & rust neutralization',
      'High-durability polyurethane topcoat & fleet branding livery',
    ],
    cta: 'Enquire for Repair & Repainting',
    image: '/images/tanker-repair.jpg',
  },
];

export const ProductsServices: React.FC<ProductsServicesProps> = ({ onSelectService }) => {
  const handleEnquire = (serviceId: string) => {
    onSelectService(serviceId);
    const enquiryEl = document.getElementById('enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--color-white)' }} aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Products & Solutions</span>
          <h2 id="services-heading" className="section-title">
            Tanker Manufacturing & Specialized Fabrication Services
          </h2>
          <p className="section-lead">
            Engineered solutions built for durability, highway safety, and fluid containment. Clearly categorized by in-house fabrication and subcontracted specialized solutions.
          </p>
        </div>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {serviceItems.map((item) => {
            const isSubcontract = item.type === 'subcontract';

            return (
              <motion.div
                key={item.id}
                className="service-card"
                id={`service-${item.id}`}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="service-card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    onError={(e) => {
                      // Bulletproof fallback so broken image icons never appear
                      e.currentTarget.src = '/images/hero-tanker.jpg';
                    }}
                  />
                  <span
                    className={`service-type-badge ${isSubcontract ? 'subcontract' : 'in-house'}`}
                  >
                    {isSubcontract ? 'Subcontract-Based Solution' : 'In-House Fabrication'}
                  </span>
                </div>

                <div className="service-card-body">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <div className="service-card-category">{item.category}</div>
                    <span className="tech-tag">{item.specCode}</span>
                  </div>

                  <h3 className="service-card-title">{item.title}</h3>
                  <p className="service-card-desc">{item.description}</p>

                  <ul className="service-features-list">
                    {item.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check size={14} aria-hidden="true" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => handleEnquire(item.id)}
                    className="btn btn-outline-forest btn-sm"
                    style={{ marginTop: 'auto', width: '100%' }}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{item.cta}</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Link to dedicated Services & Specs page */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/services" className="btn btn-primary">
            <span>View Complete Tanker Specifications & Models</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

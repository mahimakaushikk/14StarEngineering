import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Check, ArrowRight, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageBanner } from '../components/PageBanner';

const detailedServices = [
  {
    id: 'petroleum-tankers',
    title: 'Petroleum Road Tankers (MS Tankers)',
    category: 'Core Road Transport',
    specCode: 'SPEC-MS-PETRO',
    type: 'in-house' as const,
    image: '/images/hero-tanker.jpg',
    lead: 'Custom-fabricated mild steel road tankers built specifically for the transportation of Motor Spirit (MS) and High-Speed Diesel (HSD).',
    description:
      'Engineered to withstand continuous long-haul highway stresses and liquid sloshing dynamics. Manufactured using certified structural steel plates, precision cold-formed dished ends, and heavy-duty internal anti-surge baffles. Every tank is designed to distribute axle loads evenly across customer vehicle chassis.',
    specs: [
      { label: 'Primary Material', val: 'Certified Structural Mild Steel (MS)' },
      { label: 'Typical Capacities', val: '12 KL, 20 KL, 24 KL, 28 KL, 35 KL (Chassis Dependent)' },
      { label: 'Internal Baffles', val: 'Calibrated Anti-Surge Perforated Wave Baffles' },
      { label: 'Chassis Mount', val: 'Hardwood/Rubber Pad Sub-Frame with Heavy U-Bolts' },
      { label: 'Safety Accessories', val: 'Emergency Foot Valves, Full Catwalk & Folding Railings' },
    ],
    features: [
      'Precision hydraulic dished ends for maximum pressure absorption',
      'Continuous submerged arc / MIG root-welded shell joints',
      'Anti-skid walkway grid with ergonomic rear access ladder',
      'Calibrated bottom discharge manifold box with lockable steel doors',
    ],
  },
  {
    id: 'stainless-steel-tankers',
    title: 'Stainless Steel Tankers (Subcontract-Based Solution)',
    category: 'Chemical & Specialized Liquids',
    specCode: 'SPEC-SS-SUBCON',
    type: 'subcontract' as const,
    image: '/images/stainless-tanker.jpg',
    lead: 'Specialized stainless steel tanker fabrication solutions executed on a subcontract basis with vetted technical fabrication specialists.',
    description:
      'Built for the carriage of industrial chemicals, acids, edible oils, and corrosive or food-grade liquid commodities. 14 Star Engineering coordinates technical specifications, chassis dimensions, and engineering oversight while manufacturing is executed via vetted subcontract fabrication partners.',
    specs: [
      { label: 'Available Grades', val: 'SS 304, SS 304L, SS 316, SS 316L (via Subcontract)' },
      { label: 'Internal Finish', val: 'Mirror Finish / Pickled & Passivated Sanitary Welds' },
      { label: 'Thermal Insulation', val: 'Optional Glass Wool / Polyurethane with External Cladding' },
      { label: 'Discharge Lines', val: 'Stainless Steel Ball Valves, Camlock Quick-Couplers' },
      { label: 'Project Oversight', val: 'Engineering Direction & Quality Coordination by 14 Star' },
    ],
    features: [
      'Subcontract-based technical execution with strict quality control',
      'Suitable for acids, industrial chemicals, alcohols, and edible oils',
      'Optional external stainless steel mirror or embossed protective cladding',
      'Comprehensive leak and weld inspection before vehicle dispatch',
    ],
  },
  {
    id: 'compartment-tankers',
    title: 'Multi-Compartment Fuel Tankers',
    category: 'Multi-Product Distribution',
    specCode: 'SPEC-MULTI-COMP',
    type: 'in-house' as const,
    image: '/images/compartment-tanker.jpg',
    lead: 'Engineered road tankers partitioned into independent, calibrated cells for transporting different petroleum products simultaneously.',
    description:
      'Transporters can carry petrol, diesel, and premium fuels in a single trip with absolute zero inter-compartment contamination. Engineered with heavy-duty single or double bulkheads, dedicated dip pipes, independent manhole covers, and separate discharge lines for each cell.',
    specs: [
      { label: 'Compartment Setup', val: '2 to 6 Compartment Configurations (Customer Sized)' },
      { label: 'Bulkhead Design', val: 'Heavy-Gauge Double / Single Dished Partition Bulkheads' },
      { label: 'Piping Setup', val: 'Independent Seamless Steel Bottom Discharge Lines' },
      { label: 'Manhole Lids', val: 'Self-Venting Safety Manhole Covers with Dip Hatch' },
      { label: 'Axle Balance', val: 'Engineered Dynamic CG Calibration Across Cells' },
    ],
    features: [
      'Precise volumetric calibration per compartment cell',
      'Independent emergency foot valve controls per cell',
      'Isolated side discharge manifold with clear compartment labels',
      'Balanced axle weight distribution even when partially unloaded',
    ],
  },
  {
    id: 'tanker-fittings',
    title: 'Tanker Fittings & Safety Hardware',
    category: 'Safety & Highway Compliance',
    specCode: 'SPEC-SAFETY-VALVES',
    type: 'in-house' as const,
    image: '/images/tanker-fittings.jpg',
    lead: 'Supply, assembly, and integration of essential petroleum road tanker safety fittings and statutory fluid hardware.',
    description:
      'We supply and fit high-grade brass, aluminum, and stainless steel hardware required for road tanker safety and fluid containment. All hardware is selected to prevent accidental product spills, static hazards, and vapor emissions on highways.',
    specs: [
      { label: 'Emergency Valves', val: 'Bottom Pneumatic / Mechanical Shear Foot Valves' },
      { label: 'Discharge Couplings', val: 'Camlock Quick-Release Brass & Aluminum Couplers' },
      { label: 'Static Safety', val: 'Heavy Grounding Bonding Reel & Braided Copper Cables' },
      { label: 'Vapour System', val: 'Vapour Recovery Adapters, Coaxial Fittings & PV Valves' },
      { label: 'Impact Protection', val: 'Heavy Channel Rear Bumpers & Side Guard Beams' },
    ],
    features: [
      'Shear-groove emergency valves to prevent spills during rear collisions',
      'Pressure-vacuum relief vents integrated into manhole lids',
      'Anti-sparking brass fluid contact surfaces',
      'Robust rear underrun impact bumper fabricated to commercial standards',
    ],
  },
  {
    id: 'tanker-repair',
    title: 'Tanker Repair & Polyurethane Repainting',
    category: 'Maintenance & Overhaul',
    specCode: 'SPEC-OVERHAUL-PU',
    type: 'in-house' as const,
    image: '/images/tanker-repair.jpg',
    lead: 'Turnaround maintenance, leak rectification, weld re-strengthening, and industrial polyurethane repainting with fleet branding.',
    description:
      'When road tankers face highway wear, plate thinning, or body cracks, our workshop provides fast-turnaround refurbishment to minimize transporter fleet downtime. We perform tank cleaning, dye-penetrant weld testing, structural reinforcing, and multi-coat protective painting.',
    specs: [
      { label: 'Weld Rectification', val: 'Shell Crack Grooving, MIG / Arc Re-Welding & Patching' },
      { label: 'Mounting Overhaul', val: 'U-Bolt Replacement, Sub-frame Wood/Rubber Bushing' },
      { label: 'Surface Preparation', val: 'Mechanical Descaling, Grinding & Rust Neutralization' },
      { label: 'Primer & Topcoat', val: 'Zinc Phosphate Epoxy Primer + High-Solid Polyurethane (PU)' },
      { label: 'Branding & Livery', val: 'Transporter Fleet Stripes, Reflective Tapes & Badging' },
    ],
    features: [
      'Comprehensive leak detection and hydrostatic re-testing',
      'Structural sub-frame re-alignment and bolt torque audit',
      'UV-resistant industrial polyurethane finish for lasting gloss',
      'Minimizes fleet standing time with organized workshop bay scheduling',
    ],
  },
];

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleEnquire = (serviceId: string) => {
    navigate('/contact', { state: { preselectedServiceId: serviceId } });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
    >
      <PageBanner
        tag="[ROAD TRANSPORT CAPABILITIES]"
        title="Tanker Manufacturing & Services"
        subtitle="Precision-engineered petroleum tanker bodies, multi-compartment fuel carriers, specialized subcontract stainless solutions, and maintenance overhaul."
        breadcrumb="Tankers & Services"
      />

      {/* Services List */}
      <section className="section" style={{ backgroundColor: 'var(--color-sandstone-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
            {detailedServices.map((service, index) => {
              const isEven = index % 2 === 1;
              const isSubcontract = service.type === 'subcontract';

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: 'var(--color-white)',
                    border: '1px solid var(--color-border-light)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <div className={`service-detail-grid ${isEven ? 'reverse' : ''}`}>
                    {/* Media Column */}
                    <div className="service-detail-media">
                      <img
                        src={service.image}
                        alt={service.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/images/hero-tanker.jpg';
                        }}
                      />
                      <span
                        className={`service-type-badge ${isSubcontract ? 'subcontract' : 'in-house'}`}
                      >
                        {isSubcontract ? 'Subcontract-Based Solution' : 'In-House Fabrication'}
                      </span>
                    </div>

                    {/* Content Column */}
                    <div className="service-detail-content">
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
                        <span className="section-tag" style={{ marginBottom: 0 }}>
                          {service.category}
                        </span>
                        <span className="tech-tag">{service.specCode}</span>
                      </div>

                      <h2 className="service-card-title" style={{ fontSize: '1.65rem' }}>
                        {service.title}
                      </h2>

                      <p style={{ fontWeight: 600, color: 'var(--color-dark-ink)', fontSize: '0.96875rem', marginBottom: '12px' }}>
                        {service.lead}
                      </p>

                      <p style={{ fontSize: '0.875rem', color: '#55625B', lineHeight: 1.6, marginBottom: '20px' }}>
                        {service.description}
                      </p>

                      {/* Technical Specs Table */}
                      <div
                        style={{
                          background: 'var(--color-sandstone-light)',
                          border: '1px solid rgba(139, 150, 144, 0.25)',
                          borderRadius: 'var(--radius-sm)',
                          padding: '16px',
                          marginBottom: '20px',
                        }}
                      >
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-copper)', marginBottom: '10px' }}>
                          Technical Highlights & Specifications
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {service.specs.map((sp, idx) => (
                            <div
                              key={idx}
                              className="service-spec-row"
                            >
                              <span style={{ color: 'var(--color-forest)', fontWeight: 700 }}>{sp.label}:</span>
                              <span style={{ color: '#4A5650' }}>{sp.val}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="service-features-list" style={{ marginBottom: '24px' }}>
                        {service.features.map((feat, idx) => (
                          <li key={idx}>
                            <Check size={14} aria-hidden="true" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <div style={{ marginTop: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => handleEnquire(service.id)}
                          className="btn btn-primary btn-sm"
                        >
                          <span>Request Quotation</span>
                          <ArrowRight size={14} />
                        </button>

                        <a
                          href="https://wa.me/917777054109?text=Hello%2014%20Star%20Engineering%2C%20I%20would%20like%20to%20discuss%20tanker%20manufacturing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-whatsapp btn-sm"
                        >
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chassis Compatibility Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)', borderTop: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Universal Chassis Integration</span>
            <h2 className="section-title">Engineered for All Major Commercial Vehicle Chassis</h2>
            <p className="section-lead">
              Our tanker bodies are calibrated for seamless mounting onto leading commercial truck manufacturers in India.
            </p>
          </div>

          <div className="chassis-grid">
            {[
              { make: 'Tata Motors', models: 'Signa, Prima, 2823.T, 3523.T, 4225.T', note: 'Calibrated sub-frame U-bolt mounting' },
              { make: 'Ashok Leyland', models: 'AVTR 2820, 3520, 4220, 4825', note: 'Rigid body & articulated semi-trailer setups' },
              { make: 'BharatBenz', models: '2823R, 3523R, 4228R Heavy Duty', note: 'Vibration-damped hardwood/rubber packing' },
              { make: 'Eicher Trucks', models: 'Pro 6028, Pro 6035, Pro 6042', note: 'Optimized axle weight and low-gravity center' },
            ].map((chassis, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--color-sandstone-light)',
                  border: '1px solid var(--color-border-light)',
                  borderLeft: '4px solid var(--color-copper)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '20px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Truck size={18} color="var(--color-copper)" />
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-forest)' }}>{chassis.make}</h4>
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-copper)', marginBottom: '4px' }}>
                  Models: {chassis.models}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#55625B' }}>
                  {chassis.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span className="section-tag">Custom Tanker Specifications</span>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--color-sandstone)' }}>
            Have a Specific Tanker Volume or Compartment Plan?
          </h2>
          <p style={{ fontSize: '1rem', color: '#CBD5CF', marginBottom: '28px' }}>
            We fabricate tankers to exact transporter requirements with full technical documentation support.
          </p>
          <Link to="/contact" className="btn btn-primary">
            <span>Send Tanker Specification</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

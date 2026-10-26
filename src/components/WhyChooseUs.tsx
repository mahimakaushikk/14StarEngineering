import React from 'react';
import { Award, Fuel, Sliders, Wrench, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Deep Practical Experience in Tanker Fabrication',
    spec: '01 / FABRICATION TRACK RECORD',
    description:
      'With over 5 years of focused tanker manufacturing and 250+ delivered units, we understand highway stress points and fleet durability requirements.',
  },
  {
    title: 'Petroleum & Multi-Compartment Engineering',
    spec: '02 / CHASSIS CALIBRATION',
    description:
      'Specialized in petroleum tanker bodies with anti-surge baffles, calibrated bulkheads, and balanced chassis weight distribution.',
  },
  {
    title: 'Comprehensive Safety Fittings & Hardware',
    spec: '03 / SAFETY INTEGRATION',
    description:
      'Turnkey integration of emergency shut-off valves, static earthing reels, vapour recovery lines, and sturdy rear/side protection guards.',
  },
  {
    title: 'Dependable Repair & Repainting Support',
    spec: '04 / FLEET UPTIME',
    description:
      'Quick turnaround on tank repairs, leak rectification, weld re-strengthening, and complete PU repainting to minimize fleet downtime.',
  },
  {
    title: 'Direct Technical Communication',
    spec: '05 / QUALIFIED SUPERVISION',
    description:
      'Consult directly with Talib Naqvi (B.E. Mechanical) for technical quotations, chassis sizing guidance, and fabrication timelines without middle-men.',
  },
];

export const WhyChooseUs: React.FC = () => {
  const icons = [Award, Fuel, Sliders, Wrench, PhoneCall];

  return (
    <section id="why-us" className="section" style={{ backgroundColor: 'var(--color-sandstone-light)' }} aria-labelledby="why-us-heading">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">Why Transporters Trust Us</span>
          <h2 id="why-us-heading" className="section-title">
            Built by Engineers. Trusted by Transporters.
          </h2>
          <p className="section-lead">
            We combine academic mechanical engineering knowledge with decades of combined hands-on highway tanker fabrication expertise.
          </p>
        </motion.div>

        <motion.div
          className="why-us-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {pillars.map((pillar, idx) => {
            const Icon = icons[idx] || Award;
            return (
              <motion.div
                key={idx}
                className="why-us-card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div className="why-us-icon" style={{ marginBottom: 0 }}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <span className="tech-tag">{pillar.spec}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

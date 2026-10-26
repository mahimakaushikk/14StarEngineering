import React from 'react';
import { Truck, Award, Building2, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export const Statistics: React.FC = () => {
  const stats = [
    {
      icon: Truck,
      value: '250+',
      unit: 'Tankers',
      label: 'Delivered to Transporters',
    },
    {
      icon: Award,
      value: '5+',
      unit: 'Years',
      label: 'Fabrication Experience',
    },
    {
      icon: Building2,
      value: '5',
      unit: 'Major',
      label: 'Reported Oil-Industry Clients',
    },
    {
      icon: Users,
      value: '10+',
      unit: 'Fleets',
      label: 'Reported Transport Partners',
    },
  ];

  return (
    <section className="stats-strip" aria-label="Business Track Record Statistics">
      <div className="container">
        <motion.div
          className="stats-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
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
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="stat-card"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Icon size={18} color="var(--color-copper)" aria-hidden="true" />
                  <div className="stat-number">
                    {stat.value}{' '}
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-sandstone)' }}>
                      {stat.unit}
                    </span>
                  </div>
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="stats-source-note">
          Figures reflect business track record as documented on company records.
        </div>
      </div>
    </section>
  );
};

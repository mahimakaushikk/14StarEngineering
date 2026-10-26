import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  subtitle: string;
  tag?: string;
  breadcrumb: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  tag,
  breadcrumb,
}) => {
  return (
    <div className="page-banner">
      {/* Background industrial overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(circle at 80% 20%, rgba(183, 122, 64, 0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Breadcrumb */}
        <div className="page-banner-breadcrumb">
          <Link to="/" style={{ color: 'var(--color-sandstone)', transition: 'color 0.15s' }}>
            Home
          </Link>
          <ChevronRight size={12} color="var(--color-copper)" />
          <span style={{ color: 'var(--color-copper)', fontWeight: 700 }}>{breadcrumb}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {tag && <span className="section-tag page-banner-tag">{tag}</span>}
          <h1 className="page-banner-title">
            {title}
          </h1>
          <p className="page-banner-subtitle">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

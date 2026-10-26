import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, Layers, Truck, Wrench, Shield } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'finished' | 'fabrication' | 'compartments' | 'safety';
  categoryLabel: string;
  image: string;
  description: string;
  badge: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'tata-2823',
    title: 'TATA 2823 Petroleum Road Tanker (MH-04 L45827)',
    category: 'finished',
    categoryLabel: 'Finished Tankers',
    image: '/images/hero-tanker-tata2823.jpg',
    description: 'Complete commercial road tanker mounted on heavy TATA 2823 chassis with All India Permit, calibrated valve box, and hazardous cargo warning markings in our covered Thane workshop.',
    badge: 'Heavy Commercial Tanker',
  },
  {
    id: 'ashok-leyland-petro',
    title: 'Ashok Leyland Multi-Axle Petroleum Tanker',
    category: 'finished',
    categoryLabel: 'Finished Tankers',
    image: '/images/finished-ashok-leyland-tanker.jpg',
    description: 'Pristine white multi-axle petroleum tanker completed with side impact protection bars, integrated valve manifold enclosure, and high-solid polyurethane paint finish.',
    badge: 'High-Capacity Fleet',
  },
  {
    id: 'white-tanker-side',
    title: 'Precision Elliptical Tanker with Full Safety Outriggers',
    category: 'finished',
    categoryLabel: 'Finished Tankers',
    image: '/images/finished-white-road-tanker.jpg',
    description: 'Side profile showing precision-curved mild steel shell courses, chassis bolster brackets, top access walkways, and statutory highway reflector striping.',
    badge: 'Precision Body Building',
  },
  {
    id: 'blue-white-finished',
    title: 'Fleet Petroleum Tanker in Custom Livery',
    category: 'finished',
    categoryLabel: 'Finished Tankers',
    image: '/images/finished-blue-white-tanker.jpg',
    description: 'Finished dual-tone road tanker featuring heavy rear ladder, top anti-skid grid walkway, lockable discharge valve compartment, and rear underrun bumper.',
    badge: 'Fleet Paint & Livery',
  },
  {
    id: 'top-catwalk-aerial',
    title: 'Top Catwalk & Multi-Cell Manhole Assembly',
    category: 'compartments',
    categoryLabel: 'Multi-Compartment',
    image: '/images/catwalk-compartments-topview.jpg',
    description: 'Elevated view showing diamond-tread aluminium/steel catwalk grid, collapsible fall-arrest safety railings, and sealed manhole covers with individual compartment fill necks.',
    badge: 'Highway Safety Catwalk',
  },
  {
    id: 'hp-24kl-tanker',
    title: 'HP 24 KL Multi-Compartment Fuel Tanker',
    category: 'compartments',
    categoryLabel: 'Multi-Compartment',
    image: '/images/hp-24kl-multi-compartment.jpg',
    description: 'Multi-compartment fuel tanker calibrated with dedicated 4,000L and 5,000L cells for transport of Motor Spirit (MS) and High-Speed Diesel (HSD) without cross-contamination.',
    badge: 'Calibrated 24 KL Capacity',
  },
  {
    id: 'shell-fabrication',
    title: 'Elliptical Shell Fabrication & Seam Welding',
    category: 'fabrication',
    categoryLabel: 'Workshop Fabrication',
    image: '/images/tanker-shell-fabrication.jpg',
    description: 'Raw rolled structural steel courses aligned and welded with precision dished end bulkheads. Continuous penetration MIG welding ensures structural integrity under liquid surge forces.',
    badge: 'Structural Steel Shell',
  },
  {
    id: 'chassis-mounting',
    title: 'Subframe Mounting & Underbody Alignment',
    category: 'fabrication',
    categoryLabel: 'Workshop Fabrication',
    image: '/images/chassis-mounting-overhaul.jpg',
    description: 'Heavy tanker subframe bolting to commercial truck chassis with vibration-absorbing wooden/rubber pads, heavy-gauge U-bolts, and welded heavy rear crash barrier.',
    badge: 'Chassis Integration',
  },
  {
    id: 'dished-end-cutting',
    title: 'Dished End Flame Cutting & Bulkhead Forming',
    category: 'fabrication',
    categoryLabel: 'Workshop Fabrication',
    image: '/images/dished-end-gas-cutting.jpg',
    description: 'Fabricators precision-cutting and edge-beveling dished bulkhead plates in the Thane workshop yard prior to shell fitment and welding.',
    badge: 'Bulkhead Fabrication',
  },
  {
    id: 'rear-ladder-catwalk',
    title: 'Ergonomic Rear Access Ladder & Catwalk',
    category: 'safety',
    categoryLabel: 'Safety Fittings',
    image: '/images/tanker-rear-ladder-catwalk.jpg',
    description: 'Heavy tubular rear ladder integrated with the tanker dished end, providing safe operator access to the top walkway and dip pipe inspection points.',
    badge: 'Operator Safety',
  },
  {
    id: 'hazchem-rear',
    title: 'HAZCHEM Placards & Safety Markings',
    category: 'safety',
    categoryLabel: 'Safety Fittings',
    image: '/images/hazchem-rear-dished-end.jpg',
    description: 'Compliance hardware installation including Class 3 Flammable Liquid placards, emergency response code 3YE, reflective chevron markers, and heavy underrun protection.',
    badge: 'HAZCHEM Highway Compliance',
  },
  {
    id: '20kl-petro-tanker',
    title: '20 KL Petroleum Transport Tanker (MH-04 LY6214)',
    category: 'finished',
    categoryLabel: 'Finished Tankers',
    image: '/images/20kl-hsd-petroleum-tanker.jpg',
    description: 'Completed 20,000 Litre capacity HSD tanker undergoing final inspection and testing in our covered fabrication shed before client handover.',
    badge: '20 KL Petroleum Tanker',
  },
];

type FilterCategory = 'all' | 'finished' | 'fabrication' | 'compartments' | 'safety';

export const ManufacturingGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [activeModalIdx, setActiveModalIdx] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIdx !== null) {
      setActiveModalIdx(activeModalIdx === 0 ? filteredItems.length - 1 : activeModalIdx - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIdx !== null) {
      setActiveModalIdx(activeModalIdx === filteredItems.length - 1 ? 0 : activeModalIdx + 1);
    }
  };

  return (
    <section id="gallery" className="section gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">Authentic Workshop Photography</span>
          <h2 id="gallery-heading" className="section-title">
            Manufacturing Capabilities & Fleet Deliveries
          </h2>
          <p className="section-lead">
            Every image below shows genuine tanker body fabrication, dished end forming, welding, and completed road tankers built at our Thane manufacturing facility.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="gallery-filter-tabs">
          <button
            type="button"
            className={`gallery-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            <Layers size={14} />
            <span>All Workshop Assets ({galleryItems.length})</span>
          </button>
          <button
            type="button"
            className={`gallery-filter-btn ${activeFilter === 'finished' ? 'active' : ''}`}
            onClick={() => setActiveFilter('finished')}
          >
            <Truck size={14} />
            <span>Finished Road Tankers</span>
          </button>
          <button
            type="button"
            className={`gallery-filter-btn ${activeFilter === 'fabrication' ? 'active' : ''}`}
            onClick={() => setActiveFilter('fabrication')}
          >
            <Wrench size={14} />
            <span>Workshop Fabrication & Shells</span>
          </button>
          <button
            type="button"
            className={`gallery-filter-btn ${activeFilter === 'compartments' ? 'active' : ''}`}
            onClick={() => setActiveFilter('compartments')}
          >
            <Layers size={14} />
            <span>Multi-Compartment Fleet</span>
          </button>
          <button
            type="button"
            className={`gallery-filter-btn ${activeFilter === 'safety' ? 'active' : ''}`}
            onClick={() => setActiveFilter('safety')}
          >
            <Shield size={14} />
            <span>Safety Fittings & Catwalks</span>
          </button>
        </div>

        {/* Responsive Gallery Grid */}
        <motion.div
          className="gallery-grid"
          layout
          transition={{ duration: 0.3 }}
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                className="gallery-card"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActiveModalIdx(idx)}
              >
                <div className="gallery-card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="gallery-card-img"
                  />
                  <div className="gallery-card-overlay">
                    <div className="gallery-zoom-pill">
                      <ZoomIn size={16} />
                      <span>View Full Image</span>
                    </div>
                  </div>
                  <span className="gallery-category-badge">{item.badge}</span>
                </div>

                <div className="gallery-card-body">
                  <h3 className="gallery-card-title">{item.title}</h3>
                  <p className="gallery-card-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeModalIdx !== null && (
          <motion.div
            className="gallery-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalIdx(null)}
          >
            <motion.div
              className="gallery-modal-container"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Navigation Arrows */}
              <button
                type="button"
                className="gallery-modal-nav gallery-modal-prev"
                onClick={handlePrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                className="gallery-modal-nav gallery-modal-next"
                onClick={handleNext}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Close Button */}
              <button
                type="button"
                className="gallery-modal-close"
                onClick={() => setActiveModalIdx(null)}
                aria-label="Close image modal"
              >
                <X size={22} />
              </button>

              {/* Modal Image */}
              <div className="gallery-modal-img-wrap">
                <img
                  src={filteredItems[activeModalIdx].image}
                  alt={filteredItems[activeModalIdx].title}
                  className="gallery-modal-img"
                />
              </div>

              {/* Modal Metadata / Caption Bar */}
              <div className="gallery-modal-caption">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span className="gallery-category-badge" style={{ position: 'static' }}>
                    {filteredItems[activeModalIdx].badge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#8B9690' }}>
                    {activeModalIdx + 1} of {filteredItems.length}
                  </span>
                </div>
                <h4 style={{ color: 'var(--color-sandstone)', fontSize: '1.1rem', margin: '4px 0 6px' }}>
                  {filteredItems[activeModalIdx].title}
                </h4>
                <p style={{ color: '#CBD5CF', fontSize: '0.875rem', margin: 0, lineHeight: 1.5 }}>
                  {filteredItems[activeModalIdx].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Statistics } from '../components/Statistics';
import { About } from '../components/About';
import { ProductsServices } from '../components/ProductsServices';
import { ClientsPartners } from '../components/ClientsPartners';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { EnquirySection } from '../components/EnquirySection';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectService = (serviceId: string) => {
    navigate('/contact', { state: { preselectedServiceId: serviceId } });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Statistics Strip */}
      <Statistics />

      {/* About Company Overview */}
      <About />

      {/* Products & Services */}
      <ProductsServices onSelectService={handleSelectService} />

      {/* Clients & Transport Partners */}
      <ClientsPartners />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* High-Conversion Enquiry Section */}
      <EnquirySection />
    </motion.div>
  );
};

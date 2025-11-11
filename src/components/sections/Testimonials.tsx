'use client';

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const TestimonialCard = ({ name, role, image, testimonial }: { name: string; role: string; image: string; testimonial: string }) => (
  <motion.div 
    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700"
    variants={itemVariants}
    whileHover={{ y: -8 }}
  >
    <div className="flex items-center mb-4">
      <div className="text-5xl mr-4">{image}</div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">{name}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{role}</p>
      </div>
    </div>
    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">&quot;{testimonial}&quot;</p>
    <div className="flex text-yellow-400 mt-4">
      {[...Array(5)].map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  </motion.div>
);

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at TechCorp',
      image: '👩‍�',
      testimonial: 'This platform helped me transition from junior to senior developer in 6 months with real-world projects.'
    },
    {
      name: 'James Rodriguez',
      role: 'Product Manager',
      image: '👨‍💼',
      testimonial: 'The soft skills training completely transformed my leadership abilities and team dynamics.'
    },
    {
      name: 'Priya Sharma',
      role: 'Data Scientist',
      image: '👩‍🔬',
      testimonial: 'I landed my dream role at a top company using skills learned through the practical projects here.'
    },
    {
      name: 'Mike Johnson',
      role: 'Freelance Developer',
      image: '👨‍💻',
      testimonial: 'The verified skills badges helped me attract premium clients and increased my project rates significantly.'
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join thousands who transformed their careers
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              testimonial={testimonial.testimonial}
            />
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-3xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-bold">10K+</p>
              <p className="text-blue-100 mt-2">Active Learners</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-bold">500+</p>
              <p className="text-blue-100 mt-2">Certifications</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-bold">4.8★</p>
              <p className="text-blue-100 mt-2">Rating</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

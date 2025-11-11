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

const ValueProposition = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
  <motion.div 
    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
    variants={itemVariants}
    whileHover={{ y: -8 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
  </motion.div>
);

export default function ValuePropositions() {
  const propositions = [
    {
      icon: '🎯',
      title: 'Practical Learning',
      description: 'Learn by building real projects that boost your portfolio'
    },
    {
      icon: '✨',
      title: 'Self-Assessment',
      description: 'Test your knowledge with interactive quizzes and exercises'
    },
    {
      icon: '💼',
      title: 'Career Growth',
      description: 'Develop in-demand skills employers are actively seeking'
    },
    {
      icon: '👥',
      title: 'Supportive Community',
      description: 'Learn alongside peers and get guidance from experienced mentors'
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We&apos;ve designed the best learning experience for your success
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {propositions.map((prop, index) => (
            <ValueProposition
              key={index}
              icon={prop.icon}
              title={prop.title}
              description={prop.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

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

const CategoryCard = ({ icon, title, description, tracks }: { icon: string; title: string; description: string; tracks: string[] }) => (
  <motion.div 
    className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
    variants={itemVariants}
    whileHover={{ y: -8 }}
  >
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{description}</p>
    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100 dark:border-slate-700">
      {tracks.map((track, index) => (
        <p key={index} className="text-sm text-slate-700 dark:text-slate-300">
          • {track}
        </p>
      ))}
    </div>
    <motion.button 
      className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Explore
    </motion.button>
  </motion.div>
);

export default function CategoriesOverview() {
  const categories = [
    {
      icon: '💻',
      title: 'Web & Development',
      description: 'Master modern web technologies and frameworks',
      tracks: ['React & Next.js', 'Full Stack', 'Node.js', 'DevOps']
    },
    {
      icon: '📊',
      title: 'Data & Analytics',
      description: 'Transform data into actionable insights',
      tracks: ['Data Science', 'SQL & Databases', 'Visualization', 'Analytics']
    },
    {
      icon: '🎨',
      title: 'Design & UX',
      description: 'Create beautiful and user-friendly interfaces',
      tracks: ['UI/UX Design', 'Figma', 'Web Design', 'Prototyping']
    },
    {
      icon: '🧠',
      title: 'Soft Skills',
      description: 'Develop essential communication abilities',
      tracks: ['Leadership', 'Public Speaking', 'Time Management', 'Negotiation']
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
            Learning Pathways
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose your learning journey and start growing
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              icon={category.icon}
              title={category.title}
              description={category.description}
              tracks={category.tracks}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

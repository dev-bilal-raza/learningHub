'use client';

import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

interface CommunityFeature {
  icon: string;
  title: string;
  description: string;
}

export default function CommunitySection() {
  const features: CommunityFeature[] = [
    {
      icon: '💬',
      title: 'Discord Community',
      description: 'Connect with thousands of learners, share insights, and get help from peers in real-time.'
    },
    {
      icon: '🤝',
      title: 'Mentorship Program',
      description: 'Get paired with experienced mentors who guide you through your learning journey.'
    },
    {
      icon: '🚀',
      title: 'Group Projects',
      description: 'Collaborate on real-world projects and build your portfolio together with peers.'
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
            Join Our Community
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Learn together with thousands of passionate professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Features list */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-8"
                whileHover={{ x: 8 }}
              >
                <div className="flex items-start">
                  <div className="text-5xl mr-6 mt-2">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Mock community feed */}
                <motion.div 
                  className="border-l-4 border-blue-600 pl-4"
                  whileHover={{ x: 4 }}
                >
                  <p className="font-semibold text-slate-900 dark:text-white">Sarah shared a solution</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Just now</p>
                </motion.div>
                <motion.div 
                  className="border-l-4 border-indigo-600 pl-4"
                  whileHover={{ x: 4 }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="font-semibold text-slate-900 dark:text-white">James joined the mentorship</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">2 hours ago</p>
                </motion.div>
                <motion.div 
                  className="border-l-4 border-cyan-600 pl-4"
                  whileHover={{ x: 4 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="font-semibold text-slate-900 dark:text-white">Team project created</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">5 hours ago</p>
                </motion.div>
              </div>
              <motion.button
                className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Community
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

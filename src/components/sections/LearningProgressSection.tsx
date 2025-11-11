'use client';

import React from 'react';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function LearningProgressSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual - Dashboard Mockup */}
          <motion.div 
            className="relative h-96 order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 rounded-3xl shadow-2xl overflow-hidden p-6">
              <div className="h-full flex flex-col space-y-4">
                {/* Dashboard header */}
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Your Progress</h4>
                  <span className="text-2xl">📊</span>
                </div>

                {/* Progress bars */}
                <div className="space-y-3 flex-grow">
                  {[
                    { label: 'Web Development', pct: 75, color: 'from-green-400 to-green-600' },
                    { label: 'Python Mastery', pct: 60, color: 'from-blue-400 to-blue-600' },
                    { label: 'Communication', pct: 85, color: 'from-indigo-400 to-indigo-600' }
                  ].map((item, i) => (
                    <motion.div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{item.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                        <motion.div 
                          className={`bg-gradient-to-r ${item.color} h-2 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.pct}%` }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Badges */}
                <div className="border-t border-slate-300 dark:border-slate-600 pt-3">
                  <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 mb-2">Achievements</p>
                  <div className="flex gap-2">
                    {['🏆', '⭐', '🎖️'].map((badge, i) => (
                      <motion.span 
                        key={i} 
                        className="text-xl"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.div 
              className="space-y-4"
              variants={itemVariants}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
                Track Your Progress
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Monitor your learning journey with detailed analytics, earn badges, and celebrate your achievements.
              </p>
            </motion.div>

            <motion.div className="space-y-4">
              {[
                { icon: '📈', title: 'Real-Time Analytics', desc: 'Watch your progress grow with detailed insights' },
                { icon: '🏅', title: 'Earn Certificates', desc: 'Complete courses and receive industry-recognized credentials' },
                { icon: '📱', title: 'Share Your Success', desc: 'Display achievements on LinkedIn and impress employers' }
              ].map((item, i) => (
                <motion.div key={i} className="flex items-start space-x-4" variants={itemVariants}>
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-lg inline-block"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Your Dashboard
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

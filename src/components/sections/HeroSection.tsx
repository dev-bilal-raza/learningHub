'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden pt-14">
      {/* Background decorative elements with animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center py-20">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight"
                variants={itemVariants}
              >
                Master Skills<br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                  With GDG
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl"
                variants={itemVariants}
              >
                Curated courses from industry experts, hands-on projects, and Google Developer Community support to accelerate your tech career.
              </motion.p>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning
              </motion.button>
              <motion.button 
                className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-lg font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Courses
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="flex gap-8 pt-4"
              variants={itemVariants}
            >
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">50+</p>
                <p className="text-slate-600 dark:text-slate-400">Courses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">10K+</p>
                <p className="text-slate-600 dark:text-slate-400">Learners</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">500+</p>
                <p className="text-slate-600 dark:text-slate-400">Certifications</p>
              </div>
            </motion.div>
          </div>

          {/* Visual - Illustration placeholder */}
                    {/* Visual - GDG Logo */}
          <motion.div 
            className="relative h-96 sm:h-[500px] hidden lg:flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl opacity-10 blur-2xl"></div>
            <motion.div 
              className="relative w-full h-full bg-gradient-to-br from-slate-100 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-3xl flex items-center justify-center shadow-2xl p-8"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center justify-center space-y-6">
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative w-48 h-48"
                >
                  <Image
                    src="https://makers-of-kerala.vercel.app/img/gdg-logo.png"
                    alt="Google Developer Groups Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
                <div className="text-center space-y-2">
                  <p className="text-lg font-bold text-slate-900 dark:text-white">Google Developer Groups</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Empowering Developers Worldwide</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-slate-400 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

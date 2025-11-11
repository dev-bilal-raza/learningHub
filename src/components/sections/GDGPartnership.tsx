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

export default function GDGPartnership() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4"
            >
              Powered by Google Developer Groups
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            >
              Join a global community of developers learning together with Google&apos;s support
            </motion.p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left - GDG Logo & Description */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start space-y-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-48 h-48 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center shadow-xl"
              >
                <Image
                  src="https://makers-of-kerala.vercel.app/img/gdg-logo.png"
                  alt="Google Developer Group Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                  priority
                />
              </motion.div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Google Developer Groups
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Part of Google&apos;s community network, supporting developers worldwide with learning resources and mentorship.
                </p>
              </div>
            </motion.div>

            {/* Middle - Benefits */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Why GDG Partnership
              </h3>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">🌍</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Global Reach</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Connected to developer communities in 100+ countries</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">🏆</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Industry-Standard Content</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Curriculum aligned with Google&apos;s best practices</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">🤝</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Expert Community</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Learn from Google-certified developers and mentors</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700/50 transition-colors"
              >
                <span className="text-2xl flex-shrink-0">📜</span>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Recognized Certifications</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Earn Google-backed credentials and badges</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Featured Programs */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                GDG Learning Tracks
              </h3>

              {[
                { title: 'Web Technologies', desc: 'Modern web development with Google tools' },
                { title: 'Cloud & DevOps', desc: 'Google Cloud Platform mastery' },
                { title: 'Mobile Development', desc: 'Android & Flutter development' },
                { title: 'AI & Machine Learning', desc: 'Google ML frameworks & tools' },
              ].map((track, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold text-slate-900 dark:text-white">{track.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{track.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-12 border-t-2 border-slate-200 dark:border-slate-700"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Explore GDG Courses
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-lg font-semibold rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
            >
              Join Local Community
            </motion.button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t-2 border-slate-200 dark:border-slate-700">
            {[
              { label: '100+', value: 'GDG Communities' },
              { label: '500K+', value: 'Active Members' },
              { label: '1000+', value: 'Monthly Events' },
              { label: '50+', value: 'Countries' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.label}
                </p>
                <p className="text-slate-600 dark:text-slate-400 mt-2">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

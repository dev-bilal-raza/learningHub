'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
      {/* Background decorative elements */}
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

      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div 
          className="max-w-2xl w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div 
            className="flex justify-center mb-8"
            variants={itemVariants}
          >
            <div className="relative w-32 h-32">
              <Image
                src="https://makers-of-kerala.vercel.app/img/gdg-logo.png"
                alt="Google Developer Groups Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Coming Soon!
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-2xl text-slate-700 dark:text-slate-300 mb-4"
            variants={itemVariants}
          >
            Something amazing is on the way
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto"
            variants={itemVariants}
          >
            We&apos;re working hard to bring you an incredible learning experience powered by Google Developer Groups. 
            Be notified when we launch!
          </motion.p>

          {/* Email subscription */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            {!submitted ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-6 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400"
                />
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Notify Me
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="px-6 py-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg text-green-800 dark:text-green-300 font-semibold"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                ✓ Thanks! We&apos;ll notify you when we launch.
              </motion.div>
            )}
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-4 mb-12"
            variants={itemVariants}
          >
            <div className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">50+</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Courses</p>
            </div>
            <div className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">10K+</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Learners</p>
            </div>
            <div className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">500+</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Certifications</p>
            </div>
          </motion.div>

          {/* Features coming soon */}
          <motion.div 
            className="mb-12"
            variants={itemVariants}
          >
            <p className="text-slate-700 dark:text-slate-300 font-semibold mb-6">What&apos;s Coming:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
              {['Interactive Courses', 'Live Projects', 'Expert Mentorship', 'Certifications'].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-200 dark:border-slate-700"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <p className="text-slate-900 dark:text-white font-semibold">✨ {feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Back to home button */}
          <motion.div 
            variants={itemVariants}
          >
            <Link href="/">
              <motion.button 
                className="px-8 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold rounded-lg border-2 border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ← Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-10 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Career?
        </motion.h2>
        
        <motion.p 
          className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join thousands of professionals already learning with us. Flexible, affordable, and effective.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link href="/coming-soon">
            <motion.button 
              className="px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Sign Up Free
            </motion.button>
          </Link>
          <Link href="/coming-soon">
            <motion.button 
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white font-bold text-lg rounded-lg backdrop-blur-md border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Courses
            </motion.button>
          </Link>
        </motion.div>

        <motion.p 
          className="text-blue-100 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          ✓ No credit card required · Start learning in seconds
        </motion.p>
      </div>
    </section>
  );
}

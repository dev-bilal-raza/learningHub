'use client';

import React from 'react';
import { motion } from 'framer-motion';

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function Footer() {
  const columns = [
    {
      title: 'Quick Links',
      links: ['Home', 'Courses', 'Quizzes', 'Blog']
    },
    {
      title: 'Resources',
      links: ['Documentation', 'Community', 'Support', 'FAQ']
    },
    {
      title: 'Company',
      links: ['About Us', 'Career', 'Contact', 'Press']
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">LearningHub</h3>
            <p className="text-slate-400">
              Empowering learners with practical skills and industry expertise.
            </p>
          </motion.div>

          {/* Link Columns */}
          {columns.map((column, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.1, delayChildren: idx * 0.1 }}
            >
              <h4 className="text-lg font-bold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <motion.li key={i} variants={linkVariants}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-slate-400 mb-4">Stay updated with latest courses</p>
            <motion.div 
              className="flex"
              whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 bg-slate-800 text-white placeholder-slate-500 rounded-l focus:outline-none"
              />
              <motion.button 
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-r"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Media */}
        <motion.div 
          className="border-t border-slate-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex gap-6 mb-4 md:mb-0">
              {['𝕏', 'LinkedIn', 'Facebook', 'YouTube'].map((social, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  className="text-slate-400 hover:text-white transition-colors text-2xl"
                  whileHover={{ scale: 1.2, color: '#fff' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {['𝕏', '💼', '📘', '▶️'][i]}
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="flex gap-6 text-sm text-slate-400"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
            >
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, i) => (
                <motion.a 
                  key={i} 
                  href="#" 
                  className="hover:text-white transition-colors"
                  variants={linkVariants}
                >
                  {policy}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="border-t border-slate-800 pt-8 text-center text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>&copy; {new Date().getFullYear()} LearningHub. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

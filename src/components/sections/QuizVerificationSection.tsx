'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function QuizVerificationSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="space-y-8"
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
                Verify Your Skills Instantly
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Our comprehensive quiz system helps you test and prove your expertise with verifiable certifications.
              </p>
            </motion.div>

            <motion.div className="space-y-4">
              {[
                { title: 'Multiple Choice Quizzes', desc: 'Test conceptual understanding with carefully crafted MCQ questions' },
                { title: 'Coding Challenges', desc: 'Prove your technical skills with hands-on coding problems' },
                { title: 'Scenario-Based Assessments', desc: 'Demonstrate soft skills through real-world scenario simulations' }
              ].map((item, i) => (
                <motion.div key={i} className="flex items-start space-x-4" variants={itemVariants}>
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <span className="text-xl">✓</span>
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Link href="/coming-soon">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-lg inline-block"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Take a Free Skill Test
              </motion.button>
            </Link>
          </motion.div>

          {/* Visual - Quiz Dashboard Mockup */}
          <motion.div 
            className="relative h-96 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-slate-700 dark:to-slate-600 rounded-3xl shadow-2xl overflow-hidden">
              <div className="h-full flex flex-col p-6 space-y-4">
                {/* Quiz header */}
                <motion.div 
                  className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow border border-slate-100 dark:border-slate-700"
                  whileHover={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                >
                  <h4 className="font-bold text-slate-900 dark:text-white mb-2">JavaScript Fundamentals Quiz</h4>
                  <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2 w-full overflow-hidden">
                    <motion.div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '60%' }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    />
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">3 of 5 questions completed</p>
                </motion.div>

                {/* Quiz content */}
                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow flex-grow flex flex-col border border-slate-100 dark:border-slate-700">
                  <p className="font-semibold text-slate-900 dark:text-white mb-3">What does the === operator do?</p>
                  <div className="space-y-2 flex-grow">
                    {['Loose equality check', 'Strict equality check', 'Assignment operator'].map((option, i) => (
                      <motion.label 
                        key={i} 
                        className="flex items-center space-x-2 p-2 rounded hover:bg-blue-50 dark:hover:bg-slate-700 cursor-pointer"
                        whileHover={{ x: 4 }}
                      >
                        <input type="radio" name="answer" className="w-4 h-4" defaultChecked={i === 1} />
                        <span className="text-slate-700 dark:text-slate-300">{option}</span>
                      </motion.label>
                    ))}
                  </div>
                </div>

                {/* Badge indicator */}
                <motion.div 
                  className="flex justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Complete to earn badge 🏆</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

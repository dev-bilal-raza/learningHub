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

const CourseCard = ({ title, level, duration, thumbnail }: { title: string; level: string; duration: string; thumbnail: string }) => {
  const levelColors: Record<string, string> = {
    'Beginner': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'Intermediate': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Advanced': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
  };

  return (
    <motion.div 
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden border border-slate-100 dark:border-slate-700"
      variants={itemVariants}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
    >
      <div className={`h-48 bg-gradient-to-br ${thumbnail} flex items-center justify-center text-5xl`}>
        {/* Placeholder for course thumbnail */}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${levelColors[level]}`}>
            {level}
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">⏱ {duration}</span>
        </div>
        <motion.button 
          className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Start Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function FeaturedCourses() {
  const courses = [
    {
      title: 'Modern Web Development with Next.js',
      level: 'Intermediate',
      duration: '6 weeks',
      thumbnail: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Python for AI & Machine Learning',
      level: 'Advanced',
      duration: '8 weeks',
      thumbnail: 'from-indigo-400 to-indigo-600'
    },
    {
      title: 'Effective Communication Skills',
      level: 'Beginner',
      duration: '4 weeks',
      thumbnail: 'from-cyan-400 to-cyan-600'
    },
    {
      title: 'Full Stack Development Bootcamp',
      level: 'Advanced',
      duration: '12 weeks',
      thumbnail: 'from-green-400 to-green-600'
    },
    {
      title: 'Digital Marketing Essentials',
      level: 'Beginner',
      duration: '5 weeks',
      thumbnail: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Cloud Architecture Fundamentals',
      level: 'Intermediate',
      duration: '7 weeks',
      thumbnail: 'from-slate-400 to-slate-600'
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
            Featured Courses
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Popular courses designed by industry experts
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              level={course.level}
              duration={course.duration}
              thumbnail={course.thumbnail}
            />
          ))}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Courses
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

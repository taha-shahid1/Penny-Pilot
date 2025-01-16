import React from 'react'
import { Link } from "react-router-dom"
import { ArrowRight, Archive, LineChart, DollarSign, Notebook } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from './navbar'

function Landing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  const token = localStorage.getItem('token');

  return (
    <>
    <Navbar tokenProp={token} />
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-cyan-950 to-sky-900 z-0">
      
      <main className="container mx-auto px-4 py-28 flex-grow relative">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Take Control of Your Finances
          </motion.h1>
          <motion.p 
            className="text-xl text-sky-100 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Track, analyze, and optimize your spending with Penny-Pilot
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/dashboard"
              className="bg-sky-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-sky-500 transition duration-300 inline-flex items-center shadow-lg hover:shadow-sky-500/30"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { icon: LineChart, title: "Expense Tracking", description: "Categorize and visualize your spending habits to make smarter financial choices" },
            { icon: Archive, title: "Categorization", description: "Sort your expenses into categories like food, transport, entertainment, and utilities" },
            { icon: DollarSign, title: "Budget Planning", description: "Set and manage budgets for the month" },
            { icon: Notebook, title: "Organization", description: "Organize all expenses in one place" },
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-900/40 backdrop-blur p-6 rounded-lg border border-sky-500/20 shadow-lg hover:shadow-sky-500/10 transition duration-300 group"
              variants={itemVariants}
            >
              <feature.icon className="text-sky-400 mb-4 group-hover:text-sky-300 transition-colors duration-300" size={32} />
              <h3 className="text-xl font-semibold text-sky-200 mb-2">{feature.title}</h3>
              <p className="text-sky-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
    </>
  )
}

export default Landing;
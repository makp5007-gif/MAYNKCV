'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { 
  ArrowRight, 
  Mail, Linkedin, MessageCircle,
  CheckCircle2, ChevronRight,
  Sparkles,
  Menu, X
} from 'lucide-react';
import CountUp from 'react-countup';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { performanceData, skills, experience, caseStudies, tools, clients } from '@/lib/data';

interface BeforeAfterSliderProps {
  beforeLabel: string;
  beforeValue: string;
  afterLabel: string;
  afterValue: string;
}

const BeforeAfterSlider = ({ beforeLabel, beforeValue, afterLabel, afterValue }: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative w-full h-32 bg-surface/50 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors select-none">
      {/* After State (Background) */}
      <div className="absolute inset-0 flex flex-col justify-center p-6 bg-gradient-to-r from-primary/10 to-transparent">
        <span className="text-primary font-bold text-2xl">{afterValue}</span>
        <span className="text-white/50 text-xs uppercase tracking-wider">{afterLabel}</span>
      </div>

      {/* Before State (Foreground, clipped) */}
      <div 
        className="absolute inset-0 flex flex-col justify-center p-6 bg-surface border-r border-white/20"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <span className="text-white/80 font-bold text-2xl">{beforeValue}</span>
        <span className="text-white/40 text-xs uppercase tracking-wider">{beforeLabel}</span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center"
        style={{ left: `calc(${sliderPosition}% - 2px)` }}
      >
        <div className="w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-1 h-3 bg-black/20 rounded-full mx-0.5" />
          <div className="w-1 h-3 bg-black/20 rounded-full mx-0.5" />
        </div>
      </div>

      {/* Invisible Range Input for Interaction */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
      />
    </div>
  );
};

// --- Data ---

export default function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'metrics', label: 'Results' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Case Studies' },
  ];

  return (
    <div className="min-h-screen bg-background text-white overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center pt-8 px-6 md:px-12 pointer-events-auto">
        <div className="flex items-center gap-8 hidden md:flex">
          {navItems.slice(0, 2).map((item) => (
            <a key={item.id} href={`#${item.id}`} className="relative text-xs font-medium text-white/60 hover:text-white uppercase tracking-wider transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary-light hover:after:w-full after:transition-all after:duration-300">
              {item.label}
            </a>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-3xl lg:text-4xl font-black tracking-widest text-white"
          style={{ 
            textShadow: "1px 1px 0 #7b957e, 2px 2px 0 #7b957e, 3px 3px 0 #2d3b2e, 4px 4px 0 #2d3b2e, 5px 5px 0 #1e2920, 6px 6px 0 #1e2920, 8px 8px 15px rgba(0,0,0,0.8)",
            transform: "rotate(-2deg)"
          }}
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block"
          >
            MAYANK PARMAR
          </motion.span>
        </motion.div>
        <div className="flex items-center gap-8 hidden md:flex">
          {navItems.slice(2, 4).map((item) => (
            <a key={item.id} href={`#${item.id}`} className="relative text-xs font-medium text-white/60 hover:text-white uppercase tracking-wider transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary-light hover:after:w-full after:transition-all after:duration-300">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="relative text-xs font-medium text-white/60 hover:text-white uppercase tracking-wider transition-colors after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary-light hover:after:w-full after:transition-all after:duration-300">
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-medium text-white/80 hover:text-white uppercase tracking-wider transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-white/80 hover:text-white uppercase tracking-wider transition-colors"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2850&auto=format&fit=crop" 
            alt="Hero Background" 
            fill 
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mt-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-tight"
          >
            Building scalable <br className="hidden md:block" />
            acquisition engines.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-white/60 mb-10 max-w-2xl mx-auto"
          >
            Performance Marketing Specialist with 5+ years scaling ROI-focused campaigns across UAE & GCC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
            >
              Contact Me
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              View My Results
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges / Client Marquee */}
      <section className="py-12 border-b border-white/5 bg-surface/20 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointers-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointers-events-none" />
        <div className="max-w-7xl mx-auto px-4 flex justify-center flex-col items-center">
          <p className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em] mb-8 text-center">Trusted By Ambitious Brands</p>
          <div className="relative w-full flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="flex whitespace-nowrap gap-16 md:gap-24 items-center pr-16 md:pr-24"
            >
              {/* Double sequence for seamless loop */}
              {[...clients, ...clients, ...clients].map((client, idx) => (
                <div key={idx} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  {client.icon}
                  <span className="font-bold text-white/80 tracking-widest text-lg uppercase">{client.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof / Metrics Section */}
      <section id="metrics" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-default border border-white/5 bg-surface/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light/50 to-transparent opacity-50" />
              <p className="text-white/50 text-sm font-medium mb-4">Monthly Budget Managed</p>
              <h3 className="text-4xl font-medium">
                AED <CountUp end={20} duration={2.5} />K+
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-default border border-white/5 bg-surface/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light/50 to-transparent opacity-50" />
              <p className="text-white/50 text-sm font-medium mb-4">Average ROAS</p>
              <h3 className="text-4xl font-medium">
                <CountUp end={4} duration={2.5} />:1
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-default border border-white/5 bg-surface/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light/50 to-transparent opacity-50" />
              <p className="text-white/50 text-sm font-medium mb-4">Lead Growth</p>
              <h3 className="text-4xl font-medium">
                <CountUp end={35} duration={2.5} />%
              </h3>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-default border border-white/5 bg-surface/50"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-light/50 to-transparent opacity-50" />
              <p className="text-white/50 text-sm font-medium mb-4">CPL Reduction</p>
              <h3 className="text-4xl font-medium">
                <CountUp end={20} duration={2.5} />%
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Preview */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6">
              <Sparkles className="w-3 h-3 text-primary-light" />
              <span>Analytics</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium mb-6">Data-Driven Growth.</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Real-time optimization based on hard data. Here&apos;s a snapshot of a typical campaign trajectory.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 bg-surface/50 relative"
          >
            {/* Dashboard Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-medium">Campaign Performance</h3>
                <p className="text-sm text-white/50">Last 6 Months Trajectory</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-medium">ROAS Trending Up</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-medium">CPL Dropping</span>
              </div>
            </div>

            {/* Chart */}
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRoas" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#7b957e" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#7b957e" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorCpl" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="left" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis yAxisId="right" orientation="right" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#151a16', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Area yAxisId="left" type="monotone" dataKey="roas" name="ROAS (x)" stroke="#7b957e" strokeWidth={3} fillOpacity={1} fill="url(#colorRoas)" />
                  <Area yAxisId="right" type="monotone" dataKey="cpl" name="CPL (AED)" stroke="rgba(255,255,255,0.5)" strokeWidth={3} fillOpacity={1} fill="url(#colorCpl)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About & Skills */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* About Text */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6">
                  <Sparkles className="w-3 h-3 text-primary-light" />
                  <span>About Me</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-medium mb-6 leading-tight">
                  The Architect Behind the Ads.
                </h2>
                <p className="text-white/50 text-base mb-6 leading-relaxed">
                  I don&apos;t just run ads; I build scalable acquisition engines. With over 5 years of experience across the UAE, GCC, and international markets, I specialize in turning complex data into profitable campaigns.
                </p>
                <p className="text-white/50 text-base mb-8 leading-relaxed">
                  My approach combines deep technical tracking (GA4, GTM), relentless creative testing, and full-funnel strategy to ensure every dirham spent works towards your bottom line.
                </p>
                
                <motion.a 
                  href="#contact" 
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary-light font-medium hover:text-primary-light/80 transition-colors"
                >
                  Let&apos;s discuss your growth <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>

            {/* Skills Grid */}
            <div className="lg:col-span-7" id="skills">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skillGroup, index) => (
                  <motion.div
                    key={skillGroup.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 rounded-3xl bg-surface/40 border border-white/5 hover:bg-surface/60 transition-colors cursor-default"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-primary-light">
                        {skillGroup.icon}
                      </div>
                      <h3 className="font-medium text-lg">{skillGroup.category}</h3>
                    </div>
                    <ul className="space-y-3">
                      {skillGroup.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary-light/60 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="work" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6">
              <Sparkles className="w-3 h-3 text-primary-light" />
              <span>Case Studies</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium mb-6">Proven Results.</h2>
            <p className="text-white/50 max-w-2xl mx-auto">Real campaigns. Real numbers. Here is how I&apos;ve helped businesses scale profitably across diverse industries.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring", stiffness: 400, damping: 25, delay: index * 0.1 } }}
                whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3, type: "spring", stiffness: 400, damping: 25, delay: 0 } }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass-card rounded-3xl overflow-hidden border border-white/5 bg-surface/50 group flex flex-col transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(123,149,126,0.4)] hover:border-white/20 hover:bg-surface/80 relative z-10 hover:z-20 h-full"
              >
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-2 mb-4">
                    <div>
                      <span className="text-xs font-medium text-primary-light uppercase tracking-wider mb-2 block">{study.industry}</span>
                      <h3 className="text-xl md:text-2xl font-medium">{study.title}</h3>
                    </div>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium whitespace-nowrap text-white/60">
                      {study.budget}
                    </span>
                  </div>
                  
                  <p className="text-white/50 mb-6 text-sm leading-relaxed">
                    {study.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-2">Strategy</h4>
                    <p className="text-sm text-white/70">{study.strategy}</p>
                  </div>

                  {/* Before / After Visual Graph */}
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <h4 className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Performance Shift (Drag to compare)</h4>
                    
                    <BeforeAfterSlider 
                      beforeLabel={study.beforeLabel}
                      beforeValue={study.beforeValue}
                      afterLabel={study.afterLabel}
                      afterValue={study.afterValue}
                    />

                    {/* Additional Metrics */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {study.metrics.map((metric, i) => (
                        <div key={i}>
                          <p className="text-xs text-white/40 mb-1">{metric.label}</p>
                          <p className="font-medium text-white">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6">
              <Sparkles className="w-3 h-3 text-primary-light" />
              <span>Experience</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-medium mb-6">Career Journey.</h2>
          </div>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-0">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="mb-12 relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-primary-light ring-4 ring-background" />
                
                <motion.div 
                  className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 bg-surface/50 hover:bg-surface/70 transition-colors cursor-default"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-medium">{exp.role}</h3>
                      <p className="text-primary-light font-medium">{exp.company} <span className="text-white/40 font-normal">— {exp.location}</span></p>
                    </div>
                    <span className="text-xs font-medium text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mt-6">
                    {exp.achievements.map((achieve, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/50 text-sm">
                        <ChevronRight className="w-4 h-4 text-primary-light/60 shrink-0 mt-0.5" />
                        <span>{achieve}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Platforms */}
      <section className="py-20 border-y border-white/5 bg-surface/20 overflow-hidden">
        <div className="text-center mb-12">
          <p className="text-xs font-medium text-white/40 uppercase tracking-widest">Platforms & AI Tools I Master</p>
        </div>
        <div className="relative flex w-full">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface/20 to-transparent z-10 pointer-events-none" />
          
          <motion.div
            className="flex whitespace-nowrap gap-4 md:gap-8 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 80,
            }}
          >
            {[...tools, ...tools, ...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool.name}-${index}`}
                className="group flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-default shrink-0"
              >
                <span className="text-sm font-bold tracking-wider text-white/60 group-hover:text-white transition-colors">{tool.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 border border-white/5 bg-surface/50 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary-light/10 to-transparent opacity-50" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-medium mb-6">Ready to scale?</h2>
              <p className="text-white/50 mb-10 max-w-xl mx-auto">
                Whether you need a full-funnel strategy or a technical audit of your current campaigns, let&apos;s talk about your growth goals.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:makp5007@gmail.com"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </a>
                <a
                  href="https://wa.me/971502507699"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/mayank-parmar007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Mayank Parmar. All rights reserved.</p>
      </footer>
    </div>
  );
}

'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Check, ShieldCheck, Zap, Users, Trophy } from 'lucide-react'

const pillars = [
  {
    num: '01',
    title: 'Integrated Advisory & Development',
    description: 'We do not just hand over slide decks and walk away. Our cross-functional teams implement the strategies they design, taking projects from initial data audit to production software delivery.',
    icon: Zap,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20'
  },
  {
    num: '02',
    title: 'Bespoke, Non-Generic Architectures',
    description: 'We build custom, scalable architectures tailored to your exact regulatory compliance, SLA contracts, and cloud performance metrics, ensuring your software is a long-term commercial asset.',
    icon: ShieldCheck,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20'
  },
  {
    num: '03',
    title: 'Focus on Internal Capabilities',
    description: 'We actively train your developers and operations staff throughout the lifecycle. When our engagement completes, your team is fully capable of running, auditing, and scaling the system.',
    icon: Users,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20'
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-background border-b border-border/40 overflow-hidden relative">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Section Header & Pillars List (7 columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
                Our Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                A Strategic Partnership Focused on <span className="text-primary">Performance</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                We design and execute business-critical initiatives with an absolute commitment to engineering quality, clean documentation, and client self-reliance.
              </p>
            </div>

            {/* Pillars List Stack */}
            <div className="space-y-6">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="flex gap-5 p-5 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:bg-card hover:border-primary/25 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className={`p-3 w-fit h-fit rounded-xl border ${pillar.color} shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-5.5 w-5.5" />
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-bold font-mono text-primary/80 bg-primary/5 px-2 py-0.5 rounded border border-primary/10">{pillar.num}</span>
                        <h3 className="text-base sm:text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right Side: Large Image with Badge overlay (5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Background dashed border */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dashed border-primary/25 rounded-2xl -z-10" />

            {/* Main Image */}
            <div className="w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-card group">
              <img
                src="/value_prop_1.png"
                alt="Collaborative meeting session"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Overlaid Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-card border border-border/80 p-5 rounded-2xl shadow-2xl flex items-center gap-4 max-w-xs text-left"
            >
              <div className="p-3 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-xl">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-foreground text-sm">Quality Guaranteed</h4>
                <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">
                  All architectures pass extensive performance, security, and compliance code audits.
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Award } from 'lucide-react'

const highlights = [
  'Custom Software Development',
  'Cloud Architecture & Migration',
  'IT Strategy & Advisory',
  'Business Process Automation',
]

export function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left — Image Collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] sm:h-[500px] w-full"
          >
            {/* Dotted background accent */}
            <div className="absolute top-6 left-6 w-[calc(100%-24px)] h-[calc(100%-24px)] opacity-20 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:20px_20px] rounded-2xl pointer-events-none" />

            {/* Main image */}
            <div className="absolute top-0 left-0 w-[72%] h-[75%] rounded-2xl overflow-hidden shadow-2xl border-4 border-card group z-10">
              <img
                src="/about_consulting_1.png"
                alt="Business consultants analyzing financial reports"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Overlay image */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[58%] rounded-2xl overflow-hidden shadow-2xl border-4 border-card group z-20">
              <img
                src="/about_tech_1.png"
                alt="System engineers working in cloud data center server room"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Experience badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-16 left-4 bg-primary text-white p-5 rounded-2xl shadow-xl flex flex-col items-center text-center z-30 border border-white/10"
            >
              <Award className="h-6 w-6 mb-1" />
              <span className="text-3xl font-extrabold tracking-tight leading-none">2</span>
              <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Years of Excellence</span>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-7 text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">About Our Firm</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                We are Partners in Your
                <span className="text-primary"> Growth Journey</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                Ohio Business and Technology Consultants is a premier consulting and technology firm dedicated to empowering businesses with strategic insights, digital transformation, and operational excellence.
              </p>
            </div>

            {/* Accent callout */}
            <div className="border-l-4 border-primary pl-6 py-4 bg-primary/[0.03] rounded-r-xl">
              <h3 className="font-bold text-foreground text-base mb-1">
                Bridging Technology & Business Strategy
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We align executive goals with software architectures that serve as long-term business assets, not just tools.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/10 text-primary shrink-0">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link href="/about">
                <Button className="gap-2 font-bold px-8 py-5 text-base">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Briefcase, Layers, GraduationCap, ArrowRight, Check, ArrowUpRight } from 'lucide-react'

const services = [
  {
    num: '01',
    title: 'Business Consulting & Advisory',
    icon: Briefcase,
    description: 'Research-driven market modeling, operational audits, and optimized organizational structures for enterprise leaders.',
    items: ['Strategic Corporate Planning', 'Process Optimization', 'Market Entry & Feasibility', 'Compliance Auditing'],
  },
  {
    num: '02',
    title: 'Enterprise Technology Solutions',
    icon: Layers,
    description: 'End-to-end software engineering — from cloud infrastructure migration to custom applications and real-time data pipelines.',
    items: ['Cloud Architecture & Migration', 'Custom Enterprise Software', 'Mobile & Web Applications', 'AI & Data Solutions'],
  },
  {
    num: '03',
    title: 'Corporate Training & Sprints',
    icon: GraduationCap,
    description: 'Hands-on technical upskilling, DevOps bootcamps, agile framework adoption, and design thinking sprints.',
    items: ['Corporate Digital Upskilling', 'DevOps & Cloud Enablement', 'Architecture Bootcamps', 'Agile Methodology Workshops'],
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative">
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
            Our Key Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Strategic Advisory & Product Engineering
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            We deliver integrated solutions across corporate strategy, tech modernization, and organizational enablement.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((svc, idx) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex"
              >
                <Card className="w-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 group text-left">
                  
                  <div>
                    {/* Top border and number strip */}
                    <div className="flex justify-between items-center px-6 pt-6 border-b border-slate-100 dark:border-slate-900 pb-4">
                      <span className="text-xs font-bold font-mono text-slate-400 dark:text-slate-600 tracking-wider">SERVICE {svc.num}</span>
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <CardHeader className="pt-6 px-6 pb-2">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {svc.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed text-sm pt-2">
                        {svc.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="px-6 py-4">
                      <h4 className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider mb-3">Core Focus Areas</h4>
                      <ul className="space-y-2.5">
                        {svc.items.map((item) => (
                          <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300">
                            <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>

                  <div className="p-6 border-t border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50">
                    <Link href="/services" className="w-full block">
                      <Button
                        variant="outline"
                        className="w-full justify-between font-bold border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-primary transition-all duration-200 group/btn"
                      >
                        <span>Explore Capabilities</span>
                        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <Link href="/services">
            <Button size="lg" className="gap-2 font-bold px-8 py-5 text-base shadow-sm">
              View Full Service Matrix <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

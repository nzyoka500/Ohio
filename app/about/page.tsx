'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Award, ShieldCheck, Zap, Users, Leaf, Calendar, TrendingUp, Globe, Target } from 'lucide-react'

const values = [
  { title: 'Innovation', icon: Zap, text: 'We continuously pioneer advanced frameworks and state-of-the-art technological solutions.', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
  { title: 'Integrity', icon: ShieldCheck, text: 'We maintain unyielding ethical standards and deliver on our promises to building long-term trust.', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
  { title: 'Excellence', icon: Award, text: 'We hold ourselves to rigorous standards, crafting products and roadmaps of the absolute highest quality.', color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20' },
  { title: 'Collaboration', icon: Users, text: 'We co-design closely with our clients, fusing our experience with their deep domain knowledge.', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' },
  { title: 'Sustainability', icon: Leaf, text: 'We build processes and systems designed to facilitate resilient, long-term, eco-conscious growth.', color: 'text-green-500 bg-green-500/10 border-green-500/20' },
]

const timeline = [
  { year: '2018', title: 'Foundation', text: 'Founded in Columbus, Ohio, focusing on regional mid-market business consulting and corporate strategy.' },
  { year: '2020', title: 'Technology Pivot', text: 'Expanded capabilities to custom software development and cloud migration, doubling our staff size.' },
  { year: '2022', title: 'National Expansion', text: 'Established our Sheridan, Wyoming headquarters to coordinate national engagements and larger enterprise systems.' },
  { year: '2024', title: 'Enterprise Digital Suites', text: 'Launched specialized AI solutions, real-time analytics engines, and intensive digital workshop training.' },
  { year: '2026', title: 'Present State', text: 'Advising over 50+ continuous contract clients and completing 100+ production projects globally.' },
]

const stats = [
  { number: '100+', label: 'Projects Delivered', icon: Target },
  { number: '50+', label: 'Active Clients', icon: Users },
  { number: '8+', label: 'Years of Excellence', icon: TrendingUp },
  { number: '12', label: 'Countries Served', icon: Globe },
]

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Premium Hero Banner */}
        <section className="relative bg-slate-900 py-28 md:py-36 text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
                About Our Firm
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
                Building the Future of <span className="text-primary">Business & Technology</span>
              </h1>
              <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Discover the history, leadership values, and milestone timeline that define Ohio Business and Tech Consultants as a trusted partner for enterprise transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-left"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-primary">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                  Fusing Business Wisdom with Modern Digital Tools
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ohio Business and Tech Consultants was established to bridge the gap between traditional corporate strategy and the complex demands of the digital age. We believe that strategy without technology is stagnant, and technology without strategy is directionless.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By joining these two pillars, we guide firms through cloud migration, customized web and mobile systems development, and rigorous workflow refactoring, laying a path to compound efficiency and scalable growth.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Enterprise-Grade Security
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    Scalable Architecture
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <div className="h-2 w-2 rounded-full bg-amber-500" />
                    Data-Driven Decisions
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Decorative offset border */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dashed border-primary/20 rounded-2xl -z-10" />
                
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
                  <img
                    src="/project_success_1.png"
                    alt="Team working together on enterprise technology solutions"
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Floating stats card */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-card border border-border/60 p-5 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                      <Award className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-2xl font-extrabold text-foreground block leading-none">8+</span>
                      <span className="text-xs text-muted-foreground mt-0.5 block">Years of Excellence</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Counter Bar */}
        <section className="py-16 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-center space-y-3"
                  >
                    <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mx-auto border border-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{stat.number}</div>
                    <div className="text-sm text-blue-100/60 font-medium">{stat.label}</div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-28 bg-muted/20 border-y border-border/40">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Our Principles</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">Our Core Values</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                These five values form the ethical and engineering core of every strategy roadmap and software system we deploy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {values.map((val, idx) => {
                const Icon = val.icon
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card className="h-full border border-border/60 hover:shadow-lg transition-all duration-300 group text-left">
                      <CardHeader className="pb-3">
                        <div className={`p-3 w-fit rounded-xl border ${val.color} mb-3 group-hover:scale-110 transition-transform`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">{val.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {val.text}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Growth Timeline */}
        <section className="py-20 md:py-28 bg-muted/20 border-t border-border/40">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Milestones</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">Our Journey</h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Explore the key growth chapters and software pivots that shaped our organization over the years.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto pl-6 md:pl-0">
              <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-border to-border pointer-events-none" />

              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:justify-between mb-12 last:mb-0 group`}
                >
                  <div className="absolute left-0 md:left-1/2 -translate-x-[4px] md:-translate-x-1/2 top-1.5 h-4 w-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300 z-10 shadow-lg shadow-primary/20" />

                  <div className={`w-full md:w-[45%] md:text-right flex md:block items-center gap-3 md:gap-0 ${idx % 2 === 0 ? '' : 'md:order-2 md:text-left'}`}>
                    <span className="text-xl font-extrabold text-primary flex items-center justify-start md:justify-end gap-1.5 md:gap-0">
                      <Calendar className="h-4 w-4 md:hidden text-primary" />
                      {item.year}
                    </span>
                  </div>

                  <div className={`w-full md:w-[45%] mt-2 md:mt-0 ${idx % 2 === 0 ? 'md:order-2' : ''}`}>
                    <Card className="border border-border/60 bg-card shadow-sm p-5 hover:border-primary/20 hover:shadow-md transition-all duration-300 text-left">
                      <CardHeader className="p-0 pb-2">
                        <CardTitle className="text-base font-bold text-foreground">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.text}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

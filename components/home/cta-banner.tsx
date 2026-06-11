'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, PhoneCall } from 'lucide-react'

export function CtaBanner() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden relative">

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Container Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 px-6 py-16 md:p-20 text-white shadow-2xl">
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
              Get In Touch
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.1] text-white">
              Ready to Modernize Your Operations?
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-blue-100/70 max-w-xl mx-auto leading-relaxed">
              Connect with our principal advisors and software architects to audit your existing workflows and draft a strategic engineering blueprint.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Link href="/contact?schedule=true">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold gap-2.5 transition-all shadow-md text-sm md:text-base py-5 px-6">
                  <Calendar className="h-4.5 w-4.5 text-primary" />
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white font-bold gap-2.5 text-sm md:text-base py-5 px-6">
                  <PhoneCall className="h-4.5 w-4.5" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

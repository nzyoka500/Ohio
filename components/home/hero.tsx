'use client'

import * as React from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
  { value: 10, suffix: '+', label: 'Industries Served' },
  { value: 95, suffix: '%', label: 'Client Retention' },
]

const slideshowImages = [
  {
    src: '/hero_slideshow_1.png',
    alt: 'Modern corporate meeting room in Columbus, Ohio',
  },
  {
    src: '/hero_slideshow_2.png',
    alt: 'Professional developer engineering cloud software',
  },
  {
    src: '/hero_slideshow_3.png',
    alt: 'Consultant explaining cloud architecture on a whiteboard',
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden bg-slate-950 text-white border-b border-slate-900">
      
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slideshowImages[currentSlide].src}
            alt={slideshowImages[currentSlide].alt}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </AnimatePresence>
        {/* Solid Dark Overlay for high contrast and readability */}
        <div className="absolute inset-0 bg-slate-950/75 z-10 pointer-events-none" />
      </div>

      {/* Main Wording Centered Grid */}
      <div className="container relative mx-auto px-4 md:px-8 z-20 pt-36 md:pt-44 pb-20 flex-grow flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8 flex flex-col items-center">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]"
          >
            We Build the Systems
            <br />
            That Build Your <span className="text-primary">Business</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Custom software engineering, cloud architecture, and strategic consulting for enterprises ready to scale. We don't just advise — we build and ship.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap justify-center gap-4 pt-2"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-white text-slate-950 hover:bg-slate-100 font-bold gap-2 shadow-xl text-base px-8 py-6 transition-all">
                Start a Project <ArrowRight className="h-4.5 w-4.5" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 pt-4 text-xs text-slate-400 font-medium"
          >
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> SOC 2 Compliant</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> Enterprise-Grade Security</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" /> 24/7 Support Available</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Panel Wrapper */}
      <div className="relative z-20 border-t border-slate-900 bg-slate-950">
        
        {/* Stats Bar */}
        <div className="container mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="space-y-0.5"
              >
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                  <Counter value={stat.value} /><span className="text-primary">{stat.suffix}</span>
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Manual Slideshow Controls overlay on the side */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col space-y-3 z-30">
        {slideshowImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              currentSlide === i ? 'bg-primary scale-125' : 'bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

// ─── Counter ──────────────────────────────────────────────────────
function Counter({ value }: { value: number }) {
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    let start = 0
    const inc = Math.ceil(value / 75)
    const timer = setInterval(() => {
      start += inc
      if (start >= value) { setCount(value); clearInterval(timer) }
      else setCount(start)
    }, 16)
    return () => clearInterval(timer)
  }, [value])
  return <>{count}</>
}

'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Ohio Business and Tech Consultants helped us completely re-architect our cloud infrastructure while training our internal engineers. Their integrated advisory approach has boosted our operational velocity by 40%.",
    author: "Sarah Jenkins",
    role: "Chief Information Officer",
    company: "Apex Enterprise Systems",
    rating: 5,
    avatar: "/woman client 2.jpg"
  },
  {
    quote: "Their strategic planning and process optimization reduced waste and streamlined our multi-state supply chain. They are a highly professional partner who understands both corporate business and modern tech.",
    author: "Marcus Vance",
    role: "VP of Operations",
    company: "GreenFields AgriTech",
    rating: 5,
    avatar: "/man client 1.jpg"
  },
  {
    quote: "We partnered with Ohio B&T to design and build our core Web and Mobile platforms. The project was delivered on-time, with exceptional engineering architecture, premium UX, and stellar support.",
    author: "David Chen",
    role: "Director of Product",
    company: "Silo Fintech Corp",
    rating: 5,
    avatar: "/man client 3.jpg"
  },
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0
    })
  }

  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 9000)
    return () => clearInterval(timer)
  }, [current])

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 md:py-28 bg-muted/20 border-t border-border/40 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Trusted by Operations & <span className="text-primary">Product Leaders</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Read how leaders have accelerated their cloud migration, business operations, and strategy roadmaps with our advisory teams.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          <div className="overflow-hidden min-h-[280px] sm:min-h-[260px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="w-full"
              >
                <Card className="border border-border/60 bg-card shadow-xl p-6 sm:p-10 relative overflow-hidden text-left">
                  {/* Decorative quote icon */}
                  <Quote className="absolute -top-6 -left-6 h-28 w-28 text-primary/5 pointer-events-none" />

                  <CardContent className="space-y-6 pt-4 relative z-10">
                    <div className="flex gap-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <blockquote className="text-base sm:text-lg font-medium italic text-foreground/90 leading-relaxed">
                      "{testimonials[current].quote}"
                    </blockquote>

                    <div className="flex items-center gap-4 pt-5 border-t border-border/40">
                      <div className="h-12 w-12 rounded-full border-2 border-primary/20 bg-muted overflow-hidden shrink-0">
                        <img
                          src={testimonials[current].avatar}
                          alt={testimonials[current].author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <cite className="not-italic font-bold text-foreground text-sm sm:text-base block">
                          {testimonials[current].author}
                        </cite>
                        <span className="text-xs text-muted-foreground">
                          {testimonials[current].role}, <strong className="text-foreground/80 font-semibold">{testimonials[current].company}</strong>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center sm:justify-between items-center mt-8 gap-4 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:w-full sm:left-0 sm:px-0 sm:pointer-events-none z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-lg shadow-md bg-card border-border/60 hover:text-primary hover:border-primary/30 sm:pointer-events-auto transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-lg shadow-md bg-card border-border/60 hover:text-primary hover:border-primary/30 sm:pointer-events-auto transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

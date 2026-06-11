'use client'

import * as React from 'react'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/home/hero'
import { AboutPreview } from '@/components/home/about-preview'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { Testimonials } from '@/components/home/testimonials'
import { CtaBanner } from '@/components/home/cta-banner'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Preview Section */}
        <AboutPreview />

        {/* Services Overview Section */}
        <ServicesPreview />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Client Testimonials Slider */}
        <Testimonials />

        {/* Call to Action Banner */}
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

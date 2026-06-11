'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react'

const serviceLinks = [
  { name: 'Web Development', href: '/services#technology' },
  { name: 'App Development', href: '/services#technology' },
  { name: 'Business Plan', href: '/services#consulting' },
  { name: 'Strategic Plan', href: '/services#consulting' },
  { name: 'Consulting Business', href: '/services#consulting' },
  { name: 'Market Research', href: '/services#consulting' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/contact' },
]

export function Footer() {
  const [email, setEmail] = React.useState('')
  const [subscribed, setSubscribed] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="w-full border-t border-slate-900 bg-slate-950 text-slate-300">
      {/* Newsletter / CTA banner upper footer */}
      <div className="border-b border-slate-900 bg-slate-950/50">
        <div className="container mx-auto px-4 md:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-left">
            <h3 className="text-xl font-bold tracking-tight text-white">Subscribe to our Insights</h3>
            <p className="text-sm text-slate-400">
              Stay ahead with the latest industry news, technology trends, and consulting breakthroughs curated by our experts.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md items-center space-x-2">
            <div className="relative flex-grow">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pr-10 bg-slate-900 border-slate-800 text-white placeholder-slate-500 focus-visible:ring-primary"
              />
              <Mail className="absolute right-3 top-3 h-4 w-4 text-slate-500" />
            </div>
            <Button type="submit" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/95 transition-all">
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </Button>
          </form>
        </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          <div>
            <div className="flex items-center">
              <img
                src="/logo.svg"
                alt="Ohio Business & Technology Consultants Logo"
                className="h-12 w-auto object-contain brightness-0 invert transition-all"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Ohio Business and Tech Consultants is a premier consulting and technology solutions firm dedicated to empowering businesses with strategic insights, digital transformation, and operational efficiency.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-primary transition hover:border-primary/30" aria-label="Twitter">
                <Twitter className="h-4 w-4 text-slate-300" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-primary transition hover:border-primary/30" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 text-slate-300" />
              </a>
              <a href="#" className="p-2 rounded-full bg-slate-900 border border-slate-800 hover:text-primary transition hover:border-primary/30" aria-label="GitHub">
                <Github className="h-4 w-4 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary flex items-center gap-1 group transition-colors">
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <a href="tel:+16144019311" className="hover:text-primary transition-colors">+1 614-401-9311</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@ohiobtech.com" className="hover:text-primary transition-colors">info@ohiobtech.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  1309 Coffeen Ave Ste 1200<br />
                  Sheridan, WY 82801
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Ohio Business and Tech Consultants. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Phone, Mail, MapPin, Clock, Send, Twitter, Linkedin, Github, Globe, Map, MessageCircle, Headphones } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error('Please complete all required fields.')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success('Your message has been sent successfully! We will contact you shortly.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Premium Hero Banner */}
        <section className="relative bg-slate-900 py-28 md:py-36 text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              <MessageCircle className="h-3.5 w-3.5" /> Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Let's Start a <span className="text-primary">Conversation</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Get in touch with our consulting leads. We are ready to help optimize your operations and build your next digital product.
            </p>
          </div>
        </section>

        {/* Contact Layout */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column Contact Cards */}
              <div className="lg:col-span-5 space-y-8 text-left">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                    Connect With Our Advisors
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Have questions about our technology solutions or strategic corporate planning? Fill out our form, or use the direct coordinates below.
                  </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="border border-border/60 bg-card hover:shadow-md transition-shadow group">
                    <CardHeader className="pb-2">
                      <div className="p-2.5 w-fit rounded-xl bg-primary/10 text-primary mb-2 border border-primary/20 group-hover:scale-110 transition-transform">
                        <Phone className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-sm font-bold text-foreground">Phone Number</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="tel:+16144019311" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors block">+1 614-401-9311</a>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-card hover:shadow-md transition-shadow group">
                    <CardHeader className="pb-2">
                      <div className="p-2.5 w-fit rounded-xl bg-primary/10 text-primary mb-2 border border-primary/20 group-hover:scale-110 transition-transform">
                        <Mail className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-sm font-bold text-foreground">Email Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <a href="mailto:info@ohiobtech.com" className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors block">info@ohiobtech.com</a>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/60 bg-card sm:col-span-2 hover:shadow-md transition-shadow group">
                    <CardHeader className="pb-2">
                      <div className="p-2.5 w-fit rounded-xl bg-primary/10 text-primary mb-2 border border-primary/20 group-hover:scale-110 transition-transform">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-sm font-bold text-foreground">Corporate Address</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <span className="text-sm text-muted-foreground leading-relaxed block">
                        1309 Coffeen Ave Ste 1200<br />
                        Sheridan, WY 82801
                      </span>
                    </CardContent>
                  </Card>
                </div>

                {/* Hours & Socials */}
                <Card className="border border-border/60 p-6 bg-card">
                  <div className="flex items-center gap-2 text-primary font-semibold mb-4 border-b border-border/40 pb-3">
                    <Clock className="h-5 w-5" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">Business Hours</h3>
                  </div>
                  <div className="space-y-2.5 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold text-foreground/80">8:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday:</span>
                      <span className="font-semibold text-foreground/80">Closed</span>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6 pt-4 border-t border-border/40">
                    <a href="#" className="p-2.5 rounded-xl bg-muted border border-border hover:bg-primary hover:text-white hover:border-primary transition-all" aria-label="Twitter">
                      <Twitter className="h-4 w-4" />
                    </a>
                    <a href="#" className="p-2.5 rounded-xl bg-muted border border-border hover:bg-primary hover:text-white hover:border-primary transition-all" aria-label="LinkedIn">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="p-2.5 rounded-xl bg-muted border border-border hover:bg-primary hover:text-white hover:border-primary transition-all" aria-label="GitHub">
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              </div>

              {/* Right Column Contact Form */}
              <div className="lg:col-span-7 text-left">
                <Card className="border border-border/60 bg-card shadow-xl p-6 sm:p-10 overflow-hidden relative">
                  {/* Gradient accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-blue-royal to-primary" />
                  
                  <CardHeader className="p-0 pb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                        <Headphones className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-foreground">Send Us a Message</CardTitle>
                        <p className="text-xs text-muted-foreground mt-1">We typically respond within 24 business hours.</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-foreground">Full Name <span className="text-primary">*</span></label>
                          <Input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required placeholder="John Doe" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-foreground">Email <span className="text-primary">*</span></label>
                          <Input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required placeholder="john@company.com" />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">Subject <span className="text-primary">*</span></label>
                        <Input type="text" value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} required placeholder="How can we help?" />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground">Message <span className="text-primary">*</span></label>
                        <Textarea placeholder="Tell us about your project, goals, and timeline..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={5} required />
                      </div>

                      <div className="pt-2">
                        <Button type="submit" disabled={loading} className="w-full gap-2 font-bold justify-center text-base py-6 transition-all">
                          <Send className="h-5 w-5" />
                          {loading ? 'Sending Message...' : 'Send Message'}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

            </div>

            {/* Google Map Section */}
            <div className="mt-20 border border-border/60 rounded-2xl overflow-hidden shadow-lg">
              <div className="bg-card p-4 border-b border-border/60 flex items-center justify-between">
                <span className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                  <Map className="h-4.5 w-4.5 text-primary" /> Corporate Location
                </span>
                <span className="text-[10px] text-muted-foreground">Sheridan, WY 82801</span>
              </div>
              <div className="relative h-96 w-full bg-slate-950 flex items-center justify-center text-white">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                <div className="relative z-10 text-center space-y-4 p-8 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl max-w-sm shadow-2xl">
                  <div className="p-3 bg-primary/20 text-primary w-fit rounded-full mx-auto animate-bounce border border-primary/40">
                    <MapPin className="h-8 w-8 fill-primary" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-white">Ohio Business and Tech Consultants</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      1309 Coffeen Ave Ste 1200<br />
                      Sheridan, WY 82801
                    </p>
                  </div>
                  <div className="flex gap-2 justify-center pt-2">
                    <Button variant="outline" size="sm" className="border-slate-800 text-white hover:bg-slate-900/80 text-[10px] font-semibold gap-1">
                      <Globe className="h-3 w-3" /> View on Google Maps
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 flex flex-col gap-1 z-10">
                  <button className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lg font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition shadow">+</button>
                  <button className="h-8 w-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-lg font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition shadow">-</button>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

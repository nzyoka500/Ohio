'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import Link from 'next/link'
import { GraduationCap, Briefcase, Sparkles, ArrowRight, Laptop, Users, CheckCircle2 } from 'lucide-react'

export default function Careers() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    position: 'Technology & Strategy Internship',
    portfolio: '',
    message: ''
  })
  const [isApplyOpen, setIsApplyOpen] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.position) {
      toast.error('Please fill in all required fields.')
      return
    }
    // In a real application, this would send data to an API route (e.g., /api/apply)
    toast.success('Application submitted successfully! Our hiring team will review your details.')
    setFormData({ name: '', email: '', phone: '', position: 'Technology & Strategy Internship', portfolio: '', message: '' })
    setIsApplyOpen(false)
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
              <Briefcase className="h-3.5 w-3.5" /> Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Shape the Future of <span className="text-primary">Business & Tech</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              We are a growing team of strategists, engineers, and problem solvers. Discover opportunities to start your career and make a real-world impact.
            </p>
          </div>
        </section>

        {/* Current Openings / Internship Focus */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="text-center mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Current Opportunities</span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                Launch Your Career With Us
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
                We are continually expanding our core team and are currently prioritizing candidates for our immersive internship programs. We also accept general applications for future engineering and consulting roles.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-2 border-primary/20 bg-primary/5 overflow-hidden relative shadow-lg">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  <GraduationCap className="w-64 h-64 text-primary" />
                </div>
                
                <div className="p-8 md:p-12 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8">
                    <div className="space-y-3 flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold">
                        <Sparkles className="h-4 w-4" /> Actively Recruiting
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground">Technology & Strategy Internships</h3>
                      <p className="text-muted-foreground font-medium flex items-center gap-2">
                        <Laptop className="h-4 w-4" /> Hybrid / Remote Option Available
                      </p>
                      <p className="text-sm text-foreground/80 pt-2 max-w-xl">
                        A rigorous 12-week program where you will be integrated directly into our consulting and engineering teams, working on real client deliverables and cloud software products.
                      </p>
                    </div>
                    
                    <div className="shrink-0 md:pt-4">
                      <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
                        <DialogTrigger asChild>
                          <Button size="lg" className="w-full md:w-auto font-bold gap-2 shadow-md hover:shadow-lg transition-all">
                            Apply Now <ArrowRight className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-bold">Submit Your Application</DialogTitle>
                            <DialogDescription>
                              Tell us about yourself and the role you're interested in. We'll get back to you soon.
                            </DialogDescription>
                          </DialogHeader>

                          <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-xs font-semibold text-foreground">First & Last Name <span className="text-primary">*</span></label>
                                <Input type="text" placeholder="Jane Doe" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs font-semibold text-foreground">Email Address <span className="text-primary">*</span></label>
                                <Input type="email" placeholder="jane@example.com" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                              </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-1">
                                <label className="text-xs font-semibold text-foreground">Phone Number</label>
                                <Input type="tel" placeholder="(555) 123-4567" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                              </div>
                              <div className="space-y-1">
                                <label className="text-xs font-semibold text-foreground">Position <span className="text-primary">*</span></label>
                                <Select value={formData.position} onValueChange={val => setFormData({ ...formData, position: val })} required>
                                  <SelectTrigger><SelectValue placeholder="Select Role" /></SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Technology & Strategy Internship">Tech & Strategy Internship</SelectItem>
                                    <SelectItem value="Junior Software Engineer">Junior Software Engineer</SelectItem>
                                    <SelectItem value="Business Analyst">Business Analyst</SelectItem>
                                    <SelectItem value="Open Application / Other">Open Application / Other</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>

                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-foreground">LinkedIn or Portfolio URL</label>
                              <Input type="url" placeholder="https://linkedin.com/in/..." value={formData.portfolio} onChange={e => setFormData({ ...formData, portfolio: e.target.value })} />
                            </div>

                            <div className="space-y-1">
                              <label className="text-xs font-semibold text-foreground">Cover Letter / Message</label>
                              <Textarea 
                                placeholder="Tell us why you'd be a great fit for our team..." 
                                value={formData.message} 
                                onChange={e => setFormData({ ...formData, message: e.target.value })} 
                                rows={4} 
                                className="resize-none"
                              />
                            </div>
                            
                            <div className="pt-2">
                              <Button type="submit" className="w-full font-bold">Submit Application</Button>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-primary/10">
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                        <Users className="h-5 w-5 text-primary" /> What You'll Learn
                      </h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Hands-on experience with modern web frameworks (React, Next.js, Tailwind).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Exposure to cloud architecture and enterprise software deployments.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Participation in real-world business strategy and client consulting sessions.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Mentorship from senior engineers and managing directors.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-primary" /> Who We Are Looking For
                      </h4>
                      <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Students or recent graduates in Computer Science, Business Administration, or related fields.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">A strong passion for technology and its application in solving business bottlenecks.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">Self-starters who thrive in a fast-paced, collaborative environment.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Culture / Value Add */}
        <section className="py-20 bg-muted/20 border-t border-border/40">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Intern With Us?</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              We don't believe in getting coffee or doing busywork. Our interns are integrated directly into project teams, contributing to actual client deliverables and internal product development. You will leave with a portfolio of real work and a deep understanding of the intersection between business consulting and modern tech.
            </p>
            <Link href="/about">
              <Button variant="outline" className="font-semibold">
                Learn More About Our Culture
              </Button>
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}

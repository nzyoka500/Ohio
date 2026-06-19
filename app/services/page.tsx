'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from 'sonner'
import { Briefcase, Monitor, GraduationCap, CheckCircle2, DollarSign, Calendar, MessageSquare, ShieldCheck, ChevronRight, ArrowRight, Sparkles } from 'lucide-react'

const categories = [
  {
    id: 'consulting',
    title: 'Business Consulting',
    icon: Briefcase,
    color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    description: 'Strategic advisory for corporate growth and operational excellence.',
    services: [
      { name: 'Strategic Planning', desc: 'Comprehensive five-year roadmaps designed to align leadership vision with quantifiable market opportunities.' },
      { name: 'Business Plans', desc: 'Bespoke venture business plans constructed for investor fundraising, bank loans, and corporate alignment.' },
      { name: 'Market Research', desc: 'Deep-dive demographic, competitor, and industry feasibility reports using primary and secondary data methodologies.' },
      { name: 'Organizational Development', desc: 'Restructuring organizational charts, corporate communication, and performance management modules.' },
      { name: 'Business Process Improvement', desc: 'Systematic workflow mapping to identify and eliminate wastes, utilizing Lean and Six Sigma paradigms.' },
    ]
  },
  {
    id: 'technology',
    title: 'Technology Solutions',
    icon: Monitor,
    color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    description: 'End-to-end software engineering and cloud infrastructure.',
    services: [
      { name: 'Website Development', desc: 'Scalable, SEO-optimized, highly responsive corporate websites and portals powered by Next.js and Tailwind.' },
      { name: 'Mobile Applications', desc: 'Cross-platform native iOS and Android utility applications with seamless offline sync capabilities.' },
      { name: 'SaaS Platforms', desc: 'Scalable multi-tenant cloud application architectures featuring subscription billing and role management.' },
      { name: 'Cloud Solutions', desc: 'Cloud migration strategy, database optimization, and Serverless/Kubernetes architectures on AWS and Azure.' },
      { name: 'Enterprise Software', desc: 'Modernizing legacy database infrastructure, custom CRM integrations, and ERP management nodes.' },
      { name: 'AI Solutions', desc: 'Bespoke large language model integrations, automated customer service routing, and data forecasting algorithms.' },
    ]
  },
  {
    id: 'training',
    title: 'Training & Workshops',
    icon: GraduationCap,
    color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    description: 'Corporate upskilling and digital adoption programs.',
    services: [
      { name: 'Corporate Training', desc: 'Intensive training paths targeting management optimization, productivity tools, and soft skill improvements.' },
      { name: 'Digital Transformation', desc: 'Equipping legacy workers with digital literacy blueprints, helping organizations modernize smoothly.' },
      { name: 'Leadership Development', desc: 'Executive coaching frameworks designed to elevate corporate managers into visionary decision makers.' },
      { name: 'Technology Training', desc: 'Development bootcamps, git versioning controls, cloud deployments, and general software training sessions.' },
    ]
  }
]

export default function Services() {
  const [activeTab, setActiveTab] = React.useState('consulting')
  
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  })
  const [isSubmitOpen, setIsSubmitOpen] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.service) {
      toast.error('Please fill in all required fields.')
      return
    }
    toast.success('Inquiry submitted successfully! Our consulting representative will reach out in 24 hours.')
    setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' })
    setIsSubmitOpen(false)
  }

  const selectedCategory = categories.find(c => c.id === activeTab)

  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Premium Hero Banner */}
        <section className="relative bg-slate-900 py-28 md:py-36 text-white border-b border-slate-800 overflow-hidden">
          
          <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5" /> What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Enterprise-Ready <span className="text-primary">Services & Solutions</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Explore in-depth consulting roadmaps, cutting-edge software suites, and corporate workshops designed to accelerate your business.
            </p>
          </div>
        </section>

        {/* Tabbed Catalog Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column Tabs Sidebar */}
              <div className="lg:col-span-4 space-y-4 text-left">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Service Groups</h3>
                <div className="flex flex-col space-y-2">
                  {categories.map((cat) => {
                    const Icon = cat.icon
                    const isActive = activeTab === cat.id
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all duration-300 font-semibold text-sm md:text-base ${
                          isActive
                            ? 'border-primary bg-primary/5 text-primary shadow-sm'
                            : 'border-border/60 hover:bg-muted text-foreground/80'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`p-2 rounded-lg border ${cat.color} ${isActive ? 'bg-primary text-white border-transparent' : ''}`}>
                            <Icon className="h-5 w-5" />
                          </span>
                          <div>
                            <span className="block">{cat.title}</span>
                            <span className="block text-[10px] font-normal text-muted-foreground mt-0.5">{cat.description}</span>
                          </div>
                        </div>
                        <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? 'translate-x-1 text-primary' : 'text-muted-foreground'}`} />
                      </button>
                    )
                  })}
                </div>

                <Card className="mt-8 border border-border/60 bg-muted/20 overflow-hidden">
                  <div className="h-1.5 bg-primary" />
                  <CardHeader>
                    <CardTitle className="text-base font-bold">Custom Consulting Plan?</CardTitle>
                    <CardDescription className="text-xs">Need an integrated approach combining multiple technology and consulting packages?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog open={isSubmitOpen} onOpenChange={setIsSubmitOpen}>
                      <DialogTrigger asChild>
                        <Button className="w-full font-semibold gap-2">
                          <MessageSquare className="h-4 w-4" /> Request Custom Quote
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[480px]">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-bold">Inquire About Consulting</DialogTitle>
                          <DialogDescription>
                            Provide details regarding your organizational constraints and budget.
                          </DialogDescription>
                        </DialogHeader>

                        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-foreground">Name <span className="text-primary">*</span></label>
                            <Input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-foreground">Email <span className="text-primary">*</span></label>
                            <Input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} required />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-foreground">Company</label>
                            <Input type="text" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-foreground">Primary Service Needed <span className="text-primary">*</span></label>
                            <Select value={formData.service} onValueChange={val => setFormData({ ...formData, service: val })} required>
                              <SelectTrigger><SelectValue placeholder="Select Service" /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Strategic Planning">Strategic Planning</SelectItem>
                                <SelectItem value="Business Plans">Business Plans</SelectItem>
                                <SelectItem value="Market Research">Market Research</SelectItem>
                                <SelectItem value="Website Development">Website Development</SelectItem>
                                <SelectItem value="Mobile Applications">Mobile Applications</SelectItem>
                                <SelectItem value="SaaS Platforms">SaaS & Cloud</SelectItem>
                                <SelectItem value="AI Solutions">AI Solutions</SelectItem>
                                <SelectItem value="Corporate Training">Corporate Workshops</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-foreground">Approximate Budget</label>
                            <Select value={formData.budget} onValueChange={val => setFormData({ ...formData, budget: val })}>
                              <SelectTrigger><SelectValue placeholder="Select Budget Range" /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under_250">Under $250 USD</SelectItem>
                                <SelectItem value="250_500">$250 - $500 USD</SelectItem>
                                <SelectItem value="500_1000">$500 - $1,000 USD</SelectItem>
                                <SelectItem value="1000_2000">$1,000 - $2,000 USD</SelectItem>
                                <SelectItem value="2000_3000">$2,000 - $3,000 USD</SelectItem>
                                <SelectItem value="3000_5000">$3,000 - $5,000 USD</SelectItem>
                                <SelectItem value="over_5000">$5,000+ USD</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-foreground">Project Summary</label>
                            <Textarea placeholder="Describe your current bottlenecks..." value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} rows={3} />
                          </div>
                          <div className="pt-2">
                            <Button type="submit" className="w-full font-bold">Submit Pricing Inquiry</Button>
                          </div>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column Services Grid */}
              <div className="lg:col-span-8 text-left">
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-3">
                    <span className="p-2.5 h-fit rounded-xl bg-primary/10 text-primary border border-primary/20">
                      {selectedCategory && React.createElement(selectedCategory.icon, { className: 'h-6 w-6' })}
                    </span>
                    <span>{selectedCategory?.title}</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    {selectedCategory?.services.map((service, idx) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <Card className="h-full border border-border/50 bg-card hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-2 text-primary">
                              <CheckCircle2 className="h-5 w-5" />
                              <CardTitle className="text-base sm:text-lg font-bold">{service.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent className="flex-grow">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {service.desc}
                            </p>
                          </CardContent>
                          <div className="px-6 pb-6 pt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full text-xs font-bold gap-1 group-hover:border-primary/30 group-hover:text-primary transition-colors"
                              onClick={() => {
                                setFormData(prev => ({ ...prev, service: service.name }))
                                setIsSubmitOpen(true)
                              }}
                            >
                              Inquire Now <ArrowRight className="h-3.5 w-3.5" />
                            </Button>
                          </div>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Value Props Bottom Bar */}
        <section className="py-20 bg-muted/20 border-t border-border/40">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { icon: DollarSign, title: 'Transparent Budgets', desc: 'We provide complete fixed-cost quotes and transparent hourly breakdowns on strategic consultations.' },
                { icon: Calendar, title: 'Flexible Engagements', desc: 'From single workshops to long-term dedicated software dev teams, we scale our delivery to your speed.' },
                { icon: ShieldCheck, title: 'Enterprise Security', desc: 'All software and cloud databases are fully hardened, meeting corporate encryption and access standard policies.' },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="p-4 w-fit rounded-2xl bg-primary/10 text-primary mx-auto border border-primary/20">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

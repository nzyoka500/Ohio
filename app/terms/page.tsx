'use client'

import * as React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { FileText } from 'lucide-react'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By accessing and using the Ohio Business and Tech Consultants website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use our services or website.'
  },
  {
    title: '2. Use of Services',
    content: 'The content on this website is for general informational purposes and to facilitate business inquiries. We reserve the right to alter services, pricing, and guidelines at any time without prior notice. Any reliance you place on information from this site is strictly at your own risk.'
  },
  {
    title: '3. Intellectual Property',
    content: 'All custom systems, layouts, logos, designs, source code, and text content are owned by or licensed to Ohio Business and Tech Consultants. Unauthorized reproduction, distribution, or modification of any materials on this website is strictly prohibited and may violate copyright, trademark, and other applicable laws.'
  },
  {
    title: '4. Client Engagements',
    content: 'All consulting and software development engagements are governed by separate service agreements executed between Ohio Business and Tech Consultants and the client. These terms do not supersede or replace the terms of any such service agreement.'
  },
  {
    title: '5. Limitation of Liability',
    content: 'Ohio Business and Tech Consultants shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of our website or services. Our total liability shall not exceed the amount paid by you for the services in question.'
  },
  {
    title: '6. Third-Party Links',
    content: 'Our website may contain links to third-party websites or services that are not owned or controlled by Ohio Business and Tech Consultants. We assume no responsibility for the content, privacy policies, or practices of any third-party websites.'
  },
  {
    title: '7. Governing Law',
    content: 'These Terms shall be governed and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of Sheridan County, Wyoming.'
  },
  {
    title: '8. Changes to Terms',
    content: 'We reserve the right to modify or replace these Terms at any time at our sole discretion. By continuing to access or use our services after any revisions become effective, you agree to be bound by the revised terms.'
  },
]

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative bg-slate-900 py-24 md:py-32 text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-5">
            <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mx-auto border border-primary/20">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Terms & Conditions</h1>
            <p className="text-slate-300 max-w-xl mx-auto text-base">
              Please read these terms carefully before using our website or engaging our services.
            </p>
            <p className="text-xs text-slate-500">Effective Date: June 9, 2026</p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="bg-card border border-border/60 rounded-2xl shadow-sm p-8 md:p-12 space-y-8 text-left">
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Ohio Business and Tech Consultants. By accessing our website, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please do not use our services or website.
              </p>
              
              {sections.map((section) => (
                <div key={section.title} className="space-y-3 pt-4 border-t border-border/40 first:border-t-0 first:pt-0">
                  <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}

              <div className="pt-8 border-t border-border/40">
                <p className="text-xs text-muted-foreground">
                  For any questions regarding these Terms & Conditions, please contact us at{' '}
                  <a href="mailto:legal@ohiobtech.com" className="text-primary hover:underline font-semibold">
                    legal@ohiobtech.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

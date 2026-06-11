'use client'

import * as React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ShieldCheck } from 'lucide-react'

const sections = [
  {
    title: '1. Information We Collect',
    content: 'We collect personal details (such as names, company details, emails, and phone coordinates) strictly via contact forms, careers submissions, or newsletter sign-ups. We also collect standard website usage analytics such as page views, session duration, and referral sources.'
  },
  {
    title: '2. How We Use Your Information',
    content: 'Your personal data is used exclusively for responding to inquiries, processing career applications, delivering newsletter content, and improving the quality of our consulting services. We never use your data for unsolicited marketing purposes.'
  },
  {
    title: '3. Information Security',
    content: 'All submitted inquiry data is protected behind secured cloud pipelines with enterprise-grade encryption (AES-256). We employ strict access controls, regular security audits, and SOC 2-compliant hosting environments. We never sell your contact details to third-party advertisers.'
  },
  {
    title: '4. Cookies & Tracking',
    content: 'Our website uses essential cookies for functionality and analytics cookies to understand user behavior. You may disable cookies through your browser settings, though some website features may not function optimally without them.'
  },
  {
    title: '5. Third-Party Services',
    content: 'We may use third-party services such as analytics platforms and email delivery systems. These services are bound by their own privacy policies and are selected based on their commitment to data protection standards.'
  },
  {
    title: '6. Data Retention',
    content: 'We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Contact form submissions are retained for up to 24 months.'
  },
  {
    title: '7. Your Rights',
    content: 'You have the right to access, correct, or delete your personal data at any time. To exercise these rights, please contact us at privacy@ohiobtech.com. We will respond to your request within 30 business days.'
  },
  {
    title: '8. Changes to This Policy',
    content: 'We reserve the right to modify this privacy policy at any time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.'
  },
]

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative bg-slate-900 py-24 md:py-32 text-white border-b border-slate-800 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 relative z-10 text-center space-y-5">
            <div className="p-3 w-fit rounded-xl bg-primary/10 text-primary mx-auto border border-primary/20">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Privacy Policy</h1>
            <p className="text-slate-300 max-w-xl mx-auto text-base">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-xs text-slate-500">Effective Date: June 9, 2026</p>
          </div>
        </section>

        {/* Policy Content */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="bg-card border border-border/60 rounded-2xl shadow-sm p-8 md:p-12 space-y-8 text-left">
              <p className="text-muted-foreground leading-relaxed">
                At Ohio Business and Tech Consultants, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
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
                  If you have any questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@ohiobtech.com" className="text-primary hover:underline font-semibold">
                    privacy@ohiobtech.com
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

export interface KBArticle {
  id: string
  keywords: string[]
  content: string
}

export const KNOWLEDGE_BASE: KBArticle[] = [
  {
    id: 'company_story',
    keywords: ['about', 'story', 'who are you', 'history', 'firm', 'founded', 'background', 'mission'],
    content: 'Company Story: Ohio Business and Tech Consultants was established to bridge the gap between traditional corporate strategy and digital technologies. We believe strategy without technology is stagnant, and technology without strategy is directionless. We operate across Columbus, Ohio and Sheridan, Wyoming, delivering SOC 2-compliant and secure enterprise cloud pipelines.'
  },
  {
    id: 'timeline_milestones',
    keywords: ['timeline', 'milestones', 'history', 'journey', 'founded', '2024', '2025', '2026', 'years', 'experience'],
    content: 'Milestones Journey:\n- 2024: Founded in Columbus, Ohio, focusing on corporate strategy combined with custom web software development.\n- 2025: Established our Sheridan, Wyoming presence to coordinate national cloud solutions and custom Rax AI integrations.\n- 2026: Servicing 30+ contract clients with over 60+ projects delivered globally.'
  },
  {
    id: 'core_values',
    keywords: ['values', 'principles', 'innovation', 'integrity', 'excellence', 'collaboration', 'sustainability', 'culture'],
    content: 'Core Values:\n- Innovation: Pioneering advanced frameworks and state-of-the-art tech.\n- Integrity: Rigorous ethical standards and building long-term trust.\n- Excellence: Rigorous engineering quality.\n- Collaboration: Co-designing closely with enterprise clients.\n- Sustainability: Resilient, long-term, eco-conscious growth processes.'
  },
  {
    id: 'business_consulting_services',
    keywords: ['consulting', 'strategy', 'planning', 'business plan', 'market research', 'process improvement', 'lean', 'six sigma', 'organizational development'],
    content: 'Business Consulting Services:\n- Strategic Planning: 5-year roadmaps aligning leadership with market opportunities.\n- Business Plans: Bespoke plans for venture fundraising, loans, and corporate alignment.\n- Market Research: Competitor analysis, feasibility reports, demographic deep-dives.\n- Organizational Development: Restructuring charts, communications, and performance tracking.\n- Process Improvement: Workflow mapping to eliminate waste using Lean & Six Sigma paradigms.'
  },
  {
    id: 'tech_solutions_services',
    keywords: ['software', 'technology', 'web', 'website', 'mobile', 'app', 'android', 'ios', 'saas', 'cloud', 'aws', 'azure', 'kubernetes', 'database', 'crm', 'erp', 'ai', 'llm', 'serverless', 'next.js', 'tailwind'],
    content: 'Technology Solutions:\n- Website Development: Scalable, responsive sites powered by Next.js & Tailwind.\n- Mobile Applications: Native iOS/Android apps with offline synchronization.\n- SaaS Platforms: Multi-tenant cloud architectures with subscription billing.\n- Cloud Solutions: Migration strategy, database optimization, Serverless & Kubernetes (AWS/Azure).\n- Enterprise Software: Custom CRM/ERP modules & database modernization.\n- AI Solutions: Custom LLM integrations, chatbot systems, and customer service automation.'
  },
  {
    id: 'training_workshops',
    keywords: ['training', 'workshops', 'upskilling', 'bootcamp', 'literacy', 'coaching', 'git', 'version control', 'leadership development'],
    content: 'Training & Workshops:\n- Corporate Training: Productivity tools and soft skill enhancements.\n- Digital Transformation: Digital literacy bootcamps to transition legacy staff.\n- Leadership Development: Executive coaching frameworks.\n- Technology Training: Software bootcamps, Git version control, and cloud deployment courses.'
  },
  {
    id: 'contact_details',
    keywords: ['contact', 'phone', 'email', 'address', 'location', 'office', 'headquarters', 'wyoming', 'columbus', 'hours', 'hire', 'quote', 'pricing', 'budget', 'reach'],
    content: 'Contact Details:\n- Phone: +1 614-401-9311\n- Email: info@ohiobtech.com or contact@ohiobusiness.tech\n- HQ Address: 1309 Coffeen Ave Ste 1200, Sheridan, WY 82801\n- Regional Office: Columbus, Ohio\n- Business Hours: Monday - Friday, 8:00 AM - 6:00 PM EST (Closed Sat/Sun)\n- Custom Quotes: Budget ranges start from under $500, $500-$2,000, $2,000-$5,000, $5,000-$10,000, and over $10,000 USD.'
  }
]

/**
 * Searches the Knowledge Base for articles matching the user query.
 * Combines matching contents to inject into the LLM system prompt.
 * Keeps token usage low by retrieving only relevant blocks.
 */
export function findRelevantContext(userQuery: string): string {
  if (!userQuery) return ''
  
  const query = userQuery.toLowerCase()
  const matchingArticles: string[] = []

  for (const article of KNOWLEDGE_BASE) {
    // Check if the query contains any of the article keywords
    const matchesKeyword = article.keywords.some((keyword) => query.includes(keyword))
    if (matchesKeyword) {
      matchingArticles.push(article.content)
    }
  }

  if (matchingArticles.length === 0) {
    return ''
  }

  return `\n[Retrieved Website Context for Current Query]:\n${matchingArticles.join('\n\n')}\n`
}

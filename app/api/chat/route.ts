import { NextResponse } from 'next/server'
import { RaxAI } from 'rax-ai'
import { findRelevantContext } from '@/lib/chatbot-kb'

// Initialize the Rax AI client
const rax = new RaxAI({
  apiKey: process.env.RAX_API_KEY || 'dummy-key-for-compilation-dev'
})

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()
    
    // Retrieve the content of the last message from the user
    const lastUserMessage = messages[messages.length - 1]?.content || ''
    
    // Fetch relevant website context dynamically based on key terms in the query
    const dynamicContext = findRelevantContext(lastUserMessage)
    
    // Construct a concise system prompt, appending retrieved context only when relevant
    const systemPrompt = {
      role: 'system',
      content: `You are the virtual assistant for Ohio Business & Tech Consultants (Columbus, Ohio).
Strict rules:
1. ONLY answer questions directly related to our company, services (Strategic Consulting, Custom Software, Cloud Architecture, Rax AI agent integration), or business/tech consulting in Ohio.
2. POLITELY decline to answer any questions about unrelated topics (e.g. general trivia, coding, history, other companies, recipes). State that you are only authorized to assist with Ohio Business & Tech Consultants.
3. Keep responses extremely concise and professional (maximum 2-3 sentences).
4. Direct client inquiries to our Contact Page (/contact) or contact@ohiobusiness.tech.
${dynamicContext}`
    }
    
    // Inject the system prompt at the beginning of the messages array
    const promptMessages = [systemPrompt, ...messages]
    
    // Fallback Mock Mode if API Key is not set up in environment variables
    if (!process.env.RAX_API_KEY || process.env.RAX_API_KEY === 'dummy-key-for-compilation-dev') {
      const userMessage = lastUserMessage.toLowerCase()
      let mockReply = "I apologize, but I am only authorized to answer questions about Ohio Business & Technology Consultants and our technical consulting services."
      
      if (userMessage.includes('service') || userMessage.includes('what do you do') || userMessage.includes('about') || userMessage.includes('work')) {
        mockReply = "Ohio Consultants offers top-tier Business Consulting, Custom Software Development, Cloud Architecture, and Rax AI agent integrations. What area is your company looking to scale?"
      } else if (userMessage.includes('rax') || userMessage.includes('api') || userMessage.includes('agentic')) {
        mockReply = "We integrate Rax AI to construct smart agentic workflows, custom chatbots, and automated CLI tools with sub-50ms latency. Would you like to consult with an expert on this?"
      } else if (userMessage.includes('project') || userMessage.includes('start') || userMessage.includes('pricing') || userMessage.includes('hire') || userMessage.includes('contact')) {
        mockReply = "We'd love to help you build your system! You can start by filling out our Contact Form at /contact or by emailing us at contact@ohiobusiness.tech."
      } else if (userMessage.includes('consultant') || userMessage.includes('speak') || userMessage.includes('call') || userMessage.includes('phone') || userMessage.includes('email')) {
        mockReply = "You can reach our consultants at contact@ohiobusiness.tech or visit our office in Columbus, Ohio. Would you like me to guide you to the Contact page?"
      } else if (dynamicContext) {
        // Use the matching context from the KB directly to mock intelligent responses
        mockReply = `Based on our website: ${dynamicContext.replace('\n[Retrieved Website Context for Current Query]:\n', '').split('\n')[0]} For full details, please contact us at info@ohiobtech.com.`
      }
      
      const mockLatency = `${Math.floor(Math.random() * (42 - 22 + 1)) + 22}ms`
      return NextResponse.json({
        content: mockReply,
        latency: mockLatency
      })
    }
    
    const startTime = Date.now()
    const response = await rax.chat({
      model: 'rax-4.0',
      messages: promptMessages
    })
    const latency = `${Date.now() - startTime}ms`
    
    const replyContent = response.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response."
    
    return NextResponse.json({
      content: replyContent,
      latency
    })
  } catch (error: any) {
    console.error('Error in Rax AI route handler:', error)
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}

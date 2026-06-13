'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Message {
  id: string
  sender: 'user' | 'ai'
  text: string
  timestamp: Date
  latency?: string
}

const QUICK_REPLIES = [
  { text: '💼 Our Services', id: 'services' },
  { text: '🚀 Start a Project', id: 'project' },
  { text: '📞 Speak to a Consultant', id: 'consultant' },
]

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! 👋 Welcome to Ohio Business & Technology Consultants. I am your virtual assistant. How can I help you transform your business today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = React.useState('')
  const [isTyping, setIsTyping] = React.useState(false)
  const [unreadCount, setUnreadCount] = React.useState(1)
  const [showTooltip, setShowTooltip] = React.useState(true)
  
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  // Scroll to bottom on message list change
  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  // Automatically hide tooltip after 8 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false)
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  const handleOpenChat = () => {
    setIsOpen(true)
    setUnreadCount(0)
    setShowTooltip(false)
  }

  const handleCloseChat = () => {
    setIsOpen(false)
  }

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date(),
    }

    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    if (!textToSend) setInputValue('')
    
    setIsTyping(true)

    try {
      // Map message history to schema expected by Rax AI client
      const mappedMessages = updatedMessages.map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.text,
      }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: mappedMessages }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch from Rax AI api')
      }

      const data = await response.json()

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'ai',
          text: data.content,
          timestamp: new Date(),
          latency: data.latency,
        },
      ])
    } catch (error) {
      console.error('Error fetching chat response:', error)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: 'ai',
          text: "I apologize, but I'm having trouble connecting to the network. Please email us at contact@ohiobusiness.tech or check out our /contact page.",
          timestamp: new Date(),
          latency: '2ms',
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-0 right-0 z-50">
      {/* --- GREETING TOOLTIP --- */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-24 right-6 md:bottom-28 md:right-8 bg-card border border-border/80 shadow-2xl p-4 rounded-2xl w-72 backdrop-blur-md flex flex-col gap-1.5 select-none"
          >
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                Ohio AI Assistant
              </span>
              <button
                onClick={() => setShowTooltip(false)}
                className="text-muted-foreground hover:text-foreground transition-colors p-0.5 rounded-full hover:bg-muted"
                aria-label="Close greeting"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
            <p className="text-xs text-foreground font-medium leading-relaxed mt-1">
              Need help? Ask me about our services or how to start a project!
            </p>
            <button
              onClick={handleOpenChat}
              className="mt-2 text-[11px] font-semibold text-primary hover:underline text-left self-start"
            >
              Start Chatting &rarr;
            </button>
            {/* Tooltip triangle */}
            <div className="absolute -bottom-2 right-6 md:right-8 w-4 h-4 bg-card border-r border-b border-border/85 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CHAT WINDOW --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.93 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 md:bottom-28 md:right-8 w-[calc(100vw-32px)] sm:w-[400px] h-[550px] max-h-[80vh] flex flex-col rounded-2xl border border-border/70 bg-background/95 backdrop-blur-md shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary via-indigo-600 to-violet-600 text-white p-4 flex items-center justify-between shadow-sm select-none">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden flex items-center justify-center border border-white/20">
                    <img src="/AI-concierge.png" alt="AI Avatar" className="w-full h-full object-cover" />
                  </div>
                  {/* Status indicator */}
                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-background ring-1 ring-emerald-400/50 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-none flex items-center gap-1.5">
                    Ohio Assistant
                  </h3>
                  <span className="text-[10px] text-indigo-100 font-medium tracking-wide flex items-center gap-1 mt-1">
                    <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    Powered by AI Assistant
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleCloseChat}
                className="text-white hover:bg-white/10 rounded-full h-8 w-8"
                aria-label="Close Chat"
              >
                <X className="h-4.5 w-4.5" />
              </Button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20 scrollbar-thin scrollbar-thumb-border/60">
              {messages.map((message) => {
                const isAI = message.sender === 'ai'
                return (
                  <div
                    key={message.id}
                    className={`flex items-start gap-2.5 ${isAI ? 'justify-start' : 'justify-end'}`}
                  >
                    {isAI && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 overflow-hidden flex items-center justify-center shrink-0 mt-0.5 select-none">
                        <img src="/AI-concierge.png" alt="AI Avatar" className="w-full h-full object-cover" />
                      </div>
                    )}
                    
                    <div className="flex flex-col max-w-[78%] gap-1">
                      <div
                        className={`p-3 rounded-2xl text-[13.5px] leading-relaxed whitespace-pre-wrap ${
                          isAI
                            ? 'bg-card text-foreground border border-border/40 rounded-tl-none shadow-xs'
                            : 'bg-primary text-primary-foreground rounded-tr-none shadow-sm font-medium'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>

                    {!isAI && (
                      <div className="w-8 h-8 rounded-full bg-muted border border-border/50 flex items-center justify-center shrink-0 mt-0.5 select-none">
                        <User className="h-4 w-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                )
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-start gap-2.5 justify-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 overflow-hidden flex items-center justify-center shrink-0 mt-0.5">
                    <img src="/AI-concierge.png" alt="AI Avatar" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-card text-foreground border border-border/40 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 h-9">
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && !isTyping && (
              <div className="px-4 py-2 bg-card border-t border-border/30 flex flex-wrap gap-2 select-none">
                {QUICK_REPLIES.map((reply) => (
                  <button
                    key={reply.id}
                    onClick={() => handleSendMessage(reply.text)}
                    className="text-xs font-semibold px-3 py-1.5 bg-muted/60 hover:bg-primary/10 hover:text-primary border border-border/50 hover:border-primary/25 rounded-full transition-all"
                  >
                    {reply.text}
                  </button>
                ))}
              </div>
            )}

            {/* Input Bar */}
            <div className="p-3 bg-card border-t border-border/40 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask us anything..."
                className="flex-1 px-4 py-2 bg-muted/40 border border-border/50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={isTyping || !inputValue.trim()}
                className="p-2.5 bg-primary text-primary-foreground rounded-full hover:bg-primary/95 disabled:opacity-40 disabled:hover:scale-100 disabled:bg-primary hover:scale-105 active:scale-95 transition-all shadow-md flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            {/* Footer Tag */}
            <div className="bg-muted/30 border-t border-border/20 px-4 py-1.5 text-center text-[9.5px] text-muted-foreground/75 font-medium select-none">
              Ohio Business & Technology Consultants
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FLOATING TRIGGER BUTTON --- */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <button
          onClick={isOpen ? handleCloseChat : handleOpenChat}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-gradient-to-tr from-primary via-indigo-600 to-violet-600 hover:to-indigo-500 text-white shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 relative border border-white/10 select-none group"
          aria-label="Toggle Chatbot Window"
        >
          {/* Pulsing ring indicator (only when chat is closed) */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-primary/35 animate-ping opacity-60 pointer-events-none group-hover:scale-110 transition-transform" />
          )}

          {/* Icon */}
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6 md:h-7 md:w-7" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full p-1"
              >
                <img
                  src="/AI-concierge.png"
                  alt="AI Assistant"
                  className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Unread Message Badge */}
          {unreadCount > 0 && !isOpen && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-bold text-white ring-2 ring-background shadow-md animate-bounce">
              {unreadCount}
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

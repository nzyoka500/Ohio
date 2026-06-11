'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Menu, Moon, Sun, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/85 backdrop-blur-lg shadow-[0_2px_20px_-10px_rgba(0,0,0,0.05)] transition-all">
      <div className="container mx-auto px-6 md:px-10 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200 shrink-0">
          <img
            src="/logo.svg"
            alt="Ohio Business & Technology Consultants Logo"
            className="h-11 md:h-12 w-auto object-contain dark:invert transition-all"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'group relative py-2.5 px-1 text-foreground/80 hover:text-foreground text-[16px] tracking-wide transition-colors duration-200',
                pathname === item.href ? 'text-primary font-semibold' : ''
              )}
            >
              <span>{item.name}</span>
              <span className={cn(
                'absolute bottom-[-2px] left-0 h-[2.5px] bg-primary rounded-full transition-all duration-300 shadow-[0_1px_8px_rgba(var(--primary),0.3)]',
                pathname === item.href ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'
              )} />
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-5">
          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="h-10 w-10 text-muted-foreground hover:text-foreground hover:bg-accent/80 rounded-full transition-all duration-300"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          )}

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden md:block">
            <Button size="lg" className="group/btn gap-2 font-semibold bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full shadow-sm hover:shadow-md hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300">
              Get In Touch 
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 px-0 md:hidden hover:bg-accent/80 rounded-full"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="px-7">
                <img
                  src="/logo.svg"
                  alt="Ohio Business & Technology Consultants Logo"
                  className="h-11 w-auto object-contain dark:invert transition-all"
                />
              </SheetTitle>
              <SheetDescription className="px-7 mt-2.5 text-[13px] text-muted-foreground">
                Corporate consulting and technology solutions.
              </SheetDescription>
              <nav className="flex flex-col gap-4 px-7 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary py-2.5 border-b border-border/40',
                      pathname === item.href ? 'text-primary' : 'text-foreground/70'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-6"
                >
                  <Button size="lg" className="w-full gap-2 justify-center rounded-full font-semibold">
                    Get In Touch <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}


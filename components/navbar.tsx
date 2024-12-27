'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Connect', href: '#connect' },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)

      const sections = navItems.map(item => item.href.slice(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <nav className={`mx-auto max-w-[1400px] rounded-lg border border-[#1e2736] bg-[#0d1117] ${isScrolled ? 'bg-opacity-80' : 'bg-opacity-40'} backdrop-blur-sm transition-all duration-300`}>
        <div className="px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-[#3490dc] to-[#60a5fa] flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`text-white hover:text-[#60a5fa] hover:bg-[#1e2736] hover:bg-opacity-50 transition-all duration-300 ${activeSection === item.href.slice(1) ? 'bg-[#1e2736] bg-opacity-50 text-[#60a5fa]' : ''}`}
                  asChild
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>

            {/* Contact Button */}
            <div className="hidden md:flex items-center">
              <Button 
                className="bg-[#60a5fa] hover:bg-[#3490dc] text-white transition-all duration-300"
                onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

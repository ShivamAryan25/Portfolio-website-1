'use client'

import { useEffect, useRef, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { StackedCards } from '@/components/stacked-cards'
import { TechScroll } from '@/components/tech-scroll'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ConnectSection } from '@/components/connect-section'

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null
    if (!ctx) return

    const hexSize = 60
    const hexHeight = hexSize * Math.sqrt(3)
    const hexWidth = hexSize * 2

    let hexagons: Hexagon[] = []
    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      createHexGrid()
    }

    interface Hexagon {
      x: number
      y: number
      glowIntensity: number
      targetGlowIntensity: number
    }

    function createHexGrid() {
      if (!canvas) return
      hexagons = []
      for (let row = -1; row < Math.ceil(canvas.height / hexHeight) + 1; row++) {
        for (let col = -1; col < Math.ceil(canvas.width / (hexWidth * 0.75)) + 1; col++) {
          const x = col * hexWidth * 0.75
          const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2)
          hexagons.push({ x, y, glowIntensity: 0, targetGlowIntensity: 0 })
        }
      }
    }

    function drawHexagon(x: number, y: number, glowIntensity: number) {
      if (!ctx) return
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i
        const hx = x + hexSize * Math.cos(angle)
        const hy = y + hexSize * Math.sin(angle)
        if (i === 0) ctx.moveTo(hx, hy)
        else ctx.lineTo(hx, hy)
      }
      ctx.closePath()
      ctx.strokeStyle = `rgba(42, 75, 92, ${0.01 + glowIntensity * 0.39})`
      ctx.lineWidth = 0.5 + glowIntensity * 1.5
      ctx.stroke()

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, hexSize)
      gradient.addColorStop(0, `rgba(42, 75, 92, ${glowIntensity * 0.15})`)
      gradient.addColorStop(1, 'rgba(42, 75, 92, 0)')
      ctx.fillStyle = gradient
      ctx.fill()
    }

    function getDistance(x1: number, y1: number, x2: number, y2: number) {
      return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
    }

    function updateGlowIntensities() {
      hexagons.forEach(hexagon => {
        const distance = getDistance(mouseX, mouseY, hexagon.x, hexagon.y)
        const maxDistance = hexSize * 5
        if (distance <= maxDistance) {
          hexagon.targetGlowIntensity = Math.pow(1 - (distance / maxDistance), 2)
        } else {
          hexagon.targetGlowIntensity = 0
        }
        hexagon.glowIntensity += (hexagon.targetGlowIntensity - hexagon.glowIntensity) * 0.1
      })
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      updateGlowIntensities()

      hexagons.forEach(hexagon => {
        drawHexagon(hexagon.x, hexagon.y, hexagon.glowIntensity)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    function handleMouseMove(event: MouseEvent) {
      const rect = canvas.getBoundingClientRect()
      mouseX = event.clientX - rect.left
      mouseY = event.clientY - rect.top
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    setIsLoaded(true)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="bg-[#0d1117] min-h-screen">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
        aria-hidden="true"
      />
      <Navbar />
      
      <main className="relative z-10">
        <section id="home" className="min-h-screen flex flex-col justify-between">
          <div className="container mx-auto px-4 md:px-20 pt-24 flex-grow flex flex-col justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col w-full md:w-1/2 space-y-4">
                <h1 
                  className="text-[#4EA1FF] opacity-0 transition-opacity duration-1000 ease-in-out font-bold tracking-tight text-5xl"
                  style={{ 
                    opacity: isLoaded ? 1 : 0,
                    fontSize: 'clamp(3.5rem, 8vw, 5rem)',
                    lineHeight: '1'
                  }}
                >
                  Welcome
                </h1>
                <div className="space-y-2">
                  <h2 
                    className="text-[#f0f0f0] opacity-0 transition-opacity duration-1000 ease-in-out delay-100 font-semibold tracking-tight text-3xl"
                    style={{ 
                      opacity: isLoaded ? 1 : 0,
                      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                      lineHeight: '1.2'
                    }}
                  >
                    to my portfolio
                  </h2>
                  <h2 
                    className="text-[#f0f0f0] opacity-0 transition-opacity duration-1000 ease-in-out delay-150 font-semibold tracking-tight text-3xl"
                    style={{ 
                      opacity: isLoaded ? 1 : 0,
                      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                      lineHeight: '1.2'
                    }}
                  >
                    Pixel & Code
                  </h2>
                </div>
                <p 
                  className="text-gray-400 text-xl leading-relaxed max-w-xl opacity-0 transition-all duration-1000 ease-in-out delay-200"
                  style={{ opacity: isLoaded ? 1 : 0 }}
                >
                  This is where I showcase my journey through technology, design, and innovation.
                </p>
                <div 
                  className="flex flex-col sm:flex-row gap-4 pt-2 opacity-0 transition-all duration-1000 ease-in-out delay-300"
                  style={{ opacity: isLoaded ? 1 : 0 }}
                >
                  <Button 
                    variant="outline" 
                    className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white hover:bg-opacity-90 border-2 border-transparent hover:border-[#3B82F6] px-8 h-12 text-base rounded-lg shadow-lg transition duration-300 hover:scale-105"
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <StackedCards />
              </div>
            </div>
          </div>
          <div className="container mx-auto px-6 py-8">
            <TechScroll />
          </div>
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="connect">
          <ConnectSection />
        </section>
      </main>
    </div>
  )
}

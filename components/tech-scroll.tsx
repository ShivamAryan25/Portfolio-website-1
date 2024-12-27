'use client'

import { 
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiDocker,
  SiMongodb,
  SiCplusplus,
  SiC,
  SiPython,
  SiOpenai
} from 'react-icons/si'

const technologies = [
  { icon: SiNextdotjs, color: 'text-white' },
  { icon: SiTailwindcss, color: 'text-[#38bdf8]' },
  { icon: SiTypescript, color: 'text-[#3178c6]' },
  { icon: SiGit, color: 'text-[#f05033]' },
  { icon: SiDocker, color: 'text-[#2496ed]' },
  { icon: SiMongodb, color: 'text-[#00ed64]' },
  { icon: SiCplusplus, color: 'text-[#659ad2]' },
  { icon: SiC, color: 'text-[#659ad2]' },
  { icon: SiPython, color: 'text-[#3776ab]' },
  { icon: SiOpenai, color: 'text-[#00a67e]' }
]

export function TechScroll() {
  return (
    <div className="w-full overflow-hidden py-6">
      <div className="flex animate-scroll">
        {/* Triple the icons for smoother infinite scroll */}
        {[...technologies, ...technologies, ...technologies].map((tech, index) => (
          <div 
            key={index}
            className="flex items-center justify-center mx-8 group cursor-pointer"
          >
            <tech.icon 
              className={`w-10 h-10 ${tech.color} opacity-30 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110`} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}

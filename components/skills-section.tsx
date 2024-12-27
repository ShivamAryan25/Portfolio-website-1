'use client'

import { motion } from 'framer-motion'

interface SkillCategory {
  title: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Python", "MongoDB", "SQL"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "CI/CD"]
  }
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-[#1a1f2d] rounded-lg p-6 border border-gray-800 hover:bg-[#1e2433] hover:border-[#3B82F6] transition-all duration-300 shadow-lg"
                    >
                      <span className="text-gray-300 text-lg font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

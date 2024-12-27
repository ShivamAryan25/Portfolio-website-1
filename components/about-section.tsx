'use client'

import { motion } from 'framer-motion'
import { Code, Brain, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const attributes = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing clean, maintainable, and efficient code is my top priority"
  },
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Passionate about solving complex problems with elegant solutions"
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt and learn new technologies and frameworks"
  }
]

export function AboutSection() {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          Hi, I'm Shivam Aryan, a passionate and dedicated B.Tech student at Jaypee Institute of Information Technology. With a strong foundation in technology and a creative edge, I specialize in frontend web development, leveraging modern tools and frameworks to create dynamic, user-friendly interfaces.

Beyond web development, I have honed my skills in Python, C++, C, and AWS, enabling me to tackle a wide range of technical challenges. My expertise isn't limited to coding—I’m also skilled in video editing and photo editing, which add a unique creative perspective to my technical projects.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {attributes.map((attribute, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#1a1f2d] border border-gray-800 hover:bg-[#1e2433] hover:border-[#3B82F6] transition-all duration-300">
                  <CardContent className="p-6">
                    <attribute.icon className="w-8 h-8 text-[#66b9d4] mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{attribute.title}</h3>
                    <p className="text-gray-400">{attribute.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

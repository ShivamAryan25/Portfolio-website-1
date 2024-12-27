'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/ShivamAryan25'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/shivam-aryan-431a742a6/'
  },
  
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:shivam.science25@gmail.com'
  }
]

export function ConnectSection() {
  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Let&apos;s Connect</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I&apos;m always open to new opportunities and collaborations. Feel free to reach out through any of these platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-[#1a1f2d] border border-gray-800 hover:bg-[#1e2433] hover:border-[#3B82F6] text-white"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectFeature {
  label: string
  status: 'success' | 'warning' | 'error'
  detail: string
}

interface Project {
  title: string
  category: string
  year: string
  description: string
  image: string
  link: string
  features: ProjectFeature[]
  stats: {
    value: string
    label: string
  }[]
}

const projects: Project[] = [
  {
    title: 'Sustainable Fashion Tracker',
    category: 'WEB-SERVICE',
    year: '2024',
    description: 'GreenThread is an open-source platform designed to promote sustainability in the fashion industry. By providing consumers with data-driven insights into the environmental practices of fashion brands.',
    image: '/projects/Screenshot 2024-11-23 042431.png',
    link: 'https://github.com/ShivamAryan25/GreenThread-Sustainable-Fashion-Tracker-Webapp',
    features: [
      {
        label: 'Sustainability Score',
        status: 'success',
        detail: 'Active'
      },
      {
        label: 'Brand Analysis',
        status: 'success',
        detail: 'Processing'
      },
      {
        label: 'Data Collection',
        status: 'success',
        detail: 'Automated'
      }
    ],
    stats: [
      {
        value: '5000+',
        label: 'Brands Tracked'
      },
      {
        value: '98%',
        label: 'Accuracy Rate'
      }
    ]
  },
  {
    title: 'Scholarship Recommendation Chatbot',
    category: 'AI-SERVICE',
    year: '2024',
    description: 'A smart web application that helps students find relevant scholarships using AI-powered recommendations. The chatbot leverages Google Gemini AI for personalized suggestions.',
    image: '/projects/Screenshot 2024-12-27 011349.png',
    link: 'https://github.com/ShivamAryan25/Chatbot-Gemini-1',
    features: [
      {
        label: 'AI Integration',
        status: 'success',
        detail: 'Connected'
      },
      {
        label: 'Response Time',
        status: 'success',
        detail: 'Optimized'
      },
      {
        label: 'Data Updates',
        status: 'success',
        detail: 'Pending'
      }
    ],
    stats: [
      {
        value: '2K+',
        label: 'Scholarships'
      },
      {
        value: '95%',
        label: 'Match Rate'
      }
    ]
  },
  {
    title: 'System Resource Monitor',
    category: 'SERVICE',
    year: '2023',
    description: 'A web application that monitors and manages system resources, providing real-time data and allowing users to set thresholds for resource utilization.',
    image: '/projects/Screenshot 2024-12-27 011650.png',
    link: 'https://github.com/ShivamAryan25/ProSysMonitor-Intelligent-System-Resource-Monitoring-and-Optimization-Tool',
    features: [
      {
        label: 'Resource Tracking',
        status: 'success',
        detail: 'Real-time'
      },
      {
        label: 'Alert System',
        status: 'success',
        detail: 'Configuring'
      },
      {
        label: 'Performance',
        status: 'success',
        detail: 'Optimized'
      }
    ],
    stats: [
      {
        value: '99.9%',
        label: 'Uptime'
      },
      {
        value: '100ms',
        label: 'Latency'
      }
    ]
  }
]

const StatusIcon = ({ status }: { status: 'success' | 'warning' | 'error' }) => {
  switch (status) {
    case 'success':
      return <CheckCircle className="h-5 w-5 text-green-500" />
    case 'warning':
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />
    case 'error':
      return <XCircle className="h-5 w-5 text-red-500" />
  }
}

export function ProjectsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0d1117] to-[#1a2332]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our innovative solutions designed to streamline business operations and enhance security
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#1a1f2d] border border-gray-800 hover:bg-[#1e2433] hover:border-[#3B82F6] transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div>
                      <Badge variant="secondary" className="mb-4 bg-[#2a2f3d] text-gray-300 hover:bg-[#2a2f3d]/80">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-between">
                          <span className="text-gray-400">{feature.label}</span>
                          <div className="flex items-center gap-2">
                            <StatusIcon status={feature.status} />
                            <span className="text-gray-300">{feature.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-800">
                      {project.stats.map((stat, statIndex) => (
                        <div key={statIndex}>
                          <div className="text-2xl font-bold text-[#66b9d4]">{stat.value}</div>
                          <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full gap-2 px-4 py-3 bg-[#2a2f3d] hover:bg-[#353b4d] text-white rounded-lg transition-colors duration-300"
                    >
                      Explore Solution
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

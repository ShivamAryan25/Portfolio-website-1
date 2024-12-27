"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
  SiOpenai,
  SiReact
} from 'react-icons/si';

export const StackedCards = () => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-[600px]"
    >
      {/* Background Cards */}
      {[1, 2].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.15,
          }}
          className="absolute inset-0"
          style={{
            transform: `rotate(${-0.5 + index * 0.5}deg)`,
            zIndex: index,
          }}
        >
          <div 
            className="w-full h-[400px] rounded-xl backdrop-blur-[2px] transition-all duration-300 hover:border-[#4EA1FF] hover:border-2"
            style={{
              background: "linear-gradient(145deg, rgba(26, 35, 51, 0.85) 0%, rgba(20, 27, 39, 0.85) 100%)",
              transform: `translateY(${index * 4}px)`,
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          />
        </motion.div>
      ))}

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative z-10"
      >
        <div className="w-full h-[400px] rounded-xl bg-gradient-to-b from-[#1a2333] to-[#1c2638] p-14 flex flex-col shadow-lg border border-[rgba(255,255,255,0.06)] transition-all duration-300 hover:border-[#4EA1FF] hover:border-2">
          {/* Header */}
          <div className="flex items-center space-x-2.5 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#4EA1FF] flex items-center justify-center text-white font-medium text-sm shadow-md">
              <SiOpenai className="w-4 h-4" />
            </div>
            <span className="text-white text-sm font-medium tracking-wide">Shivam Aryan</span>
          </div>

          {/* Content */}
          <div className="space-y-2.5">
            <p className="text-[#e1e7ef] text-lg font-medium leading-relaxed">
              Welcome to My Portfolio! I am a passionate developer specializing in creating dynamic web applications.
            </p>
            <div className="flex items-center space-x-2">
              <SiCplusplus className="w-8 h-8 text-[#4EA1FF]" />
              <span className="text-[#e1e7ef] text-sm">Data Structures</span>
              <div className="bg-[#4EA1FF] h-2 rounded-full w-1/2" style={{ width: '90%' }} />
            </div>
            <div className="flex items-center space-x-2">
              <SiReact className="w-8 h-8 text-[#4EA1FF]" />
              <span className="text-[#e1e7ef] text-sm">Frontend Development</span>
              <div className="bg-[#4EA1FF] h-2 rounded-full w-1/2" style={{ width: '85%' }} />
            </div>
            <div className="flex items-center space-x-2">
              <SiOpenai className="w-8 h-8 text-[#4EA1FF]" />
              <span className="text-[#e1e7ef] text-sm">AI</span>
              <div className="bg-[#4EA1FF] h-2 rounded-full w-1/2" style={{ width: '80%' }} />
            </div>
  
            <br></br>
          </div>

          {/* Input Area */}
          <div className="mt-auto">
            <div className="group relative">
              <div className="absolute inset-0 bg-[#4EA1FF] opacity-0 blur-xl group-hover:opacity-3 transition-opacity duration-300" />
              <div className="relative flex items-center bg-[#243347] rounded-lg p-3 text-[#8b95a5] cursor-pointer transition-all duration-300 hover:bg-[#2a3b54] hover:shadow-lg">
                <span className="text-sm">Give Shivam Aryan a task to work on...</span>
                <ArrowRight className="h-4 w-4 ml-auto text-[#8b95a5] transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StackedCards;

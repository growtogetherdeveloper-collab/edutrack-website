"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ImageWithFallback } from "../figma/ImageWithFallback"
import { cn } from "./utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
  emoji?: string
  color?: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  subtitle?: string
  autoPlayInterval?: number
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  subtitle,
  autoPlayInterval = 3000,
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("", className)}>
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="cursor-pointer"
                animate={{ opacity: index === currentFeature ? 1 : 0.4 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  setCurrentFeature(index)
                  setProgress(0)
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Title and Description */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl text-gray-900 mb-2">
                      {feature.title || feature.step}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.content}
                    </p>
                  </div>
                </div>

                {/* Horizontal Progress Line - Only visible for current feature */}
                {index === currentFeature && (
                  <div className="mt-6">
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="order-1 md:order-2 relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="relative"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {/* Background Shadow Phone */}
                      <div className="bg-white border-gray-200 absolute inset-0 mx-auto w-[280px] md:w-[320px] -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                        <div className="relative h-[28rem] overflow-hidden rounded-[1.5rem] border border-gray-200 p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,#e5e7eb,#e5e7eb_1px,transparent_1px,transparent_6px)] before:opacity-50"></div>
                      </div>
                      
                      {/* Main Phone Mockup */}
                      <div className="bg-gradient-to-b from-gray-50 to-white border-gray-200 mx-auto w-[280px] md:w-[320px] translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                        <div className="bg-white space-y-2 overflow-hidden rounded-[1.5rem] border border-gray-200 p-2 shadow-xl">
                          <div className="relative h-[500px] md:h-[580px] bg-white rounded-[1rem] overflow-hidden">
                            <ImageWithFallback
                              src={feature.image}
                              alt={feature.step}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {["iOS App", "Android App", "Web Dashboard", "Offline Mode"].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 text-center">
              <div className="text-blue-600 mb-2">✓</div>
              <div className="text-gray-900">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

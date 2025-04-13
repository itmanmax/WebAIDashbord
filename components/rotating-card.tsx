"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

export default function RotatingCard({
  title,
  description,
  icon,
  color = "bg-gradient-primary",
}: {
  title: string
  description: string
  icon: React.ReactNode
  color?: string
}) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return

    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    setRotation({ x: rotateX, y: rotateY })
  }

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  // 根据传入的index返回不同的渐变背景
  const getRandomGradient = () => {
    const gradients = [
      "bg-gradient-artistic",
      "bg-gradient-creative", 
      "bg-gradient-vibrant",
      "bg-gradient-cool",
      "bg-gradient-primary",
      "bg-gradient-secondary"
    ];
    
    // 如果是默认的bg-gradient-dark，则返回随机渐变
    if (color === "bg-gradient-dark") {
      const randomIndex = Math.floor(Math.random() * gradients.length);
      return gradients[randomIndex];
    }
    
    return color;
  };

  return (
    <motion.div
      className={`${getRandomGradient()} rounded-xl overflow-hidden shadow-premium p-6 h-full dark-glass-card`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetRotation}
    >
      <div className="flex flex-col h-full text-white">
        <div className="mb-4 text-white/90">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="opacity-80">{description}</p>
      </div>
    </motion.div>
  )
}

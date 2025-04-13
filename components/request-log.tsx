"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, User, Server } from "lucide-react"

// Sample log data
const sampleLogs = [
  { id: 1, user: "user_123", model: "claude-3-5-sonnet", timestamp: "10:23:45", status: "success" },
  { id: 2, user: "user_456", model: "chatgpt-4o-latest", timestamp: "10:23:42", status: "success" },
  { id: 3, user: "user_789", model: "deep-seek-v3", timestamp: "10:23:38", status: "success" },
  { id: 4, user: "user_234", model: "claude-3-7-sonnet", timestamp: "10:23:35", status: "pending" },
  { id: 5, user: "user_567", model: "dall-e-3", timestamp: "10:23:30", status: "success" },
  { id: 6, user: "user_890", model: "deepseek-coder", timestamp: "10:23:25", status: "error" },
  { id: 7, user: "user_345", model: "code-llama-34b", timestamp: "10:23:20", status: "success" },
  { id: 8, user: "user_678", model: "chatgpt-4o-latest", timestamp: "10:23:15", status: "success" },
]

// Generate a new log entry
const generateLogEntry = () => {
  const models = [
    "claude-3-5-sonnet",
    "chatgpt-4o-latest",
    "deep-seek-v3",
    "claude-3-7-sonnet",
    "dall-e-3",
    "deepseek-coder",
    "code-llama-34b",
  ]

  const statuses = ["success", "success", "success", "success", "pending", "error"]

  const now = new Date()
  const hours = now.getHours().toString().padStart(2, "0")
  const minutes = now.getMinutes().toString().padStart(2, "0")
  const seconds = now.getSeconds().toString().padStart(2, "0")

  return {
    id: Math.floor(Math.random() * 10000),
    user: `user_${Math.floor(Math.random() * 1000)}`,
    model: models[Math.floor(Math.random() * models.length)],
    timestamp: `${hours}:${minutes}:${seconds}`,
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }
}

export default function RequestLog() {
  const [logs, setLogs] = useState(sampleLogs)

  useEffect(() => {
    const interval = setInterval(() => {
      const newLog = generateLogEntry()
      setLogs((prevLogs) => {
        const updatedLogs = [newLog, ...prevLogs]
        return updatedLogs.slice(0, 8) // Keep only the most recent 8 logs
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-dark">实时请求日志</h3>
      <div className="overflow-hidden">
        <AnimatePresence>
          {logs.map((log) => (
            <motion.div
              key={log.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-gray-100 py-3 flex items-center gap-3 log-entry"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  log.status === "success" ? "bg-secondary" : log.status === "pending" ? "bg-accent" : "bg-destructive"
                }`}
              ></div>

              <div className="flex items-center gap-2 text-gray-500 w-32">
                <Clock size={14} />
                <span className="text-sm">{log.timestamp}</span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 w-32">
                <User size={14} />
                <span className="text-sm">{log.user}</span>
              </div>

              <div className="flex items-center gap-2 flex-grow">
                <Server size={14} className="text-primary" />
                <span className="text-sm font-medium">{log.model}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

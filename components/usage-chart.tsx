"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

// Sample data for the chart
const generateData = () => {
  const data = []
  const now = new Date()

  for (let i = 6; i >= 0; i--) {
    const date = new Date(now)
    date.setDate(date.getDate() - i)

    const day = date.toLocaleDateString("zh-CN", { month: "numeric", day: "numeric" })

    // Generate random but realistic-looking data
    const apiCalls = Math.floor(Math.random() * 5000) + 10000
    const activeUsers = Math.floor(Math.random() * 1000) + 2000
    const modelRequests = Math.floor(Math.random() * 3000) + 5000

    data.push({
      day,
      apiCalls,
      activeUsers,
      modelRequests,
    })
  }

  return data
}

export default function UsageChart() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    setData(generateData())
  }, [])

  return (
    <div className="glass-card p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-bold mb-4 text-dark">平台使用趋势</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.9)", borderRadius: "8px" }} />
            <Legend />
            <Line type="monotone" dataKey="apiCalls" name="API调用" stroke="#0ea5e9" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="activeUsers" name="活跃用户" stroke="#10b981" />
            <Line type="monotone" dataKey="modelRequests" name="模型请求" stroke="#f59e0b" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

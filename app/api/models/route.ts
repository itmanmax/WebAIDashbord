import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // 读取data.json文件
    const dataPath = path.join(process.cwd(), 'lib', 'data.json')
    const fileContents = fs.readFileSync(dataPath, 'utf8')
    const modelsData = JSON.parse(fileContents)

    // 返回模型数据
    return NextResponse.json(modelsData, { status: 200 })
  } catch (error) {
    console.error('Error fetching models:', error)
    return NextResponse.json(
      { error: '获取模型数据失败' },
      { status: 500 }
    )
  }
} 
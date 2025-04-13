"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, Search, X } from "lucide-react"

type ModelData = {
  id: string
  object: string
  created: number
  owned_by: string
  permission: Array<{
    id: string
    object: string
    created: number
    allow_create_engine: boolean
    allow_sampling: boolean
    allow_logprobs: boolean
    allow_search_indices: boolean
    allow_view: boolean
    allow_fine_tuning: boolean
    organization: string
    group: string | null
    is_blocking: boolean
  }>
  root: string
  parent: string | null
}

export default function AllModelsPage() {
  const [models, setModels] = useState<ModelData[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [filteredModels, setFilteredModels] = useState<ModelData[]>([])

  useEffect(() => {
    const fetchAllModels = async () => {
      try {
        const response = await fetch("/api/models")
        const data = await response.json()
        setModels(data.data)
        setFilteredModels(data.data)
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch models:", error)
        setLoading(false)
      }
    }

    fetchAllModels()
  }, [])

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredModels(models)
    } else {
      const filtered = models.filter(model => 
        model.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredModels(filtered)
    }
  }, [searchTerm, models])

  const handleClearSearch = () => {
    setSearchTerm("")
  }

  const getOwnerDisplay = (ownedBy: string) => {
    const ownerMap: Record<string, string> = {
      "openai": "OpenAI",
      "custom": "自定义模型",
      "anthropic": "Anthropic",
      "vertex-ai": "Google Vertex AI",
      "meta": "Meta",
      "google": "Google",
      "mistralai": "Mistral AI",
      "zhipuai": "智谱AI",
      "aliyun": "阿里云",
      "deepseek": "DeepSeek",
      "volcengine": "火山引擎",
      "lingyiwanwu": "零一万物",
    }
    return ownerMap[ownedBy] || ownedBy
  }

  const getBooleanText = (value: boolean) => {
    return value ? "允许" : "不允许"
  }

  const getOwnerBadgeColor = (ownedBy: string) => {
    const colorMap: Record<string, string> = {
      "openai": "bg-green-100 text-green-800 border-green-200",
      "custom": "bg-gray-100 text-gray-800 border-gray-200",
      "anthropic": "bg-blue-100 text-blue-800 border-blue-200",
      "vertex-ai": "bg-purple-100 text-purple-800 border-purple-200",
      "meta": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "google": "bg-red-100 text-red-800 border-red-200",
      "mistralai": "bg-cyan-100 text-cyan-800 border-cyan-200",
      "zhipuai": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "aliyun": "bg-orange-100 text-orange-800 border-orange-200",
      "deepseek": "bg-teal-100 text-teal-800 border-teal-200",
      "volcengine": "bg-pink-100 text-pink-800 border-pink-200",
      "lingyiwanwu": "bg-amber-100 text-amber-800 border-amber-200",
    }
    return colorMap[ownedBy] || "bg-gray-100 text-gray-800 border-gray-200"
  }

  const getBooleanBadgeColor = (value: boolean) => {
    return value 
      ? "bg-green-50 text-green-700" 
      : "bg-red-50 text-red-700"
  }

  const getModelTypeTag = (modelId: string) => {
    const id = modelId.toLowerCase();
    
    if (id.includes('code') || id.includes('coder')) {
      return { label: "代码", color: "bg-purple-100 text-purple-800 border-purple-300" }
    }
    
    if (id.includes('voice') || id.includes('speech') || id.includes('audio')) {
      return { label: "语音", color: "bg-blue-100 text-blue-800 border-blue-300" }
    }
    
    if (id.includes('video') || id.includes('sora') || id.includes('luma') || id.includes('cogvideo') || id.includes('domo-video')) {
      return { label: "视频", color: "bg-pink-100 text-pink-800 border-pink-300" }
    }
    
    // 图像生成模型检测
    if (
      id.includes('vision') || 
      id.includes('img') || 
      id.includes('image') || 
      id.includes('dall') || 
      id.includes('avatar') || 
      id.includes('flux') || 
      id.includes('stable') || 
      id.includes('sd') || 
      id.includes('midjourney') || 
      id.includes('mj') || 
      id.includes('diffusion') || 
      id.includes('domo-img') || 
      id.includes('picture') || 
      id.includes('photo') || 
      id.includes('visual')
    ) {
      return { label: "图像", color: "bg-indigo-100 text-indigo-800 border-indigo-300" }
    }
    
    // 多模态模型检测
    if (id.includes('multi') || id.includes('vision') || id.includes('v') || id.includes('omni')) {
      return { label: "多模态", color: "bg-amber-100 text-amber-800 border-amber-300" }
    }
    
    return { label: "文本", color: "bg-green-100 text-green-800 border-green-300" }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg glass-card"
          >
            <ChevronLeft size={18} />
            返回首页
          </Link>
          <h1 className="text-2xl font-bold text-center">全部AI模型</h1>
          <div className="w-24"></div> {/* 占位元素，保持标题居中 */}
        </div>

        <div className="relative max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="搜索模型..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2 rounded-lg glass-card focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchTerm && (
              <button 
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>
      </header>

      <main>
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
          </div>
        ) : (
          <>
            <div className="text-sm text-center mb-4">
              总共 <span className="font-medium">{models.length}</span> 个模型
              {searchTerm && `, 找到 ${filteredModels.length} 个匹配结果`}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredModels.map((model) => {
                const modelTypeTag = getModelTypeTag(model.id);
                return (
                <div key={model.id} className="p-4 rounded-lg glass-card hover:bg-opacity-80 transition-all border border-gray-100 hover:shadow-md">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium break-all mr-2">{model.id}</div>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${modelTypeTag.color} border`}>
                      {modelTypeTag.label}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded-md ${getOwnerBadgeColor(model.owned_by)} border`}>
                      {getOwnerDisplay(model.owned_by)}
                    </span>
                  </div>
                  
                  {model.permission && model.permission.length > 0 && (
                    <div className="text-xs space-y-1 mt-3 border-t pt-2 text-gray-600">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          搜索索引: 
                          <span className={`ml-1 font-medium px-1.5 py-0.5 rounded ${getBooleanBadgeColor(model.permission[0].allow_search_indices)}`}>
                            {getBooleanText(model.permission[0].allow_search_indices)}
                          </span>
                        </div>
                        <div>
                          视图访问: 
                          <span className={`ml-1 font-medium px-1.5 py-0.5 rounded ${getBooleanBadgeColor(model.permission[0].allow_view)}`}>
                            {getBooleanText(model.permission[0].allow_view)}
                          </span>
                        </div>
                        <div>
                          微调功能: 
                          <span className={`ml-1 font-medium px-1.5 py-0.5 rounded ${getBooleanBadgeColor(model.permission[0].allow_fine_tuning)}`}>
                            {getBooleanText(model.permission[0].allow_fine_tuning)}
                          </span>
                        </div>
                        <div>
                          数据采样: 
                          <span className={`ml-1 font-medium px-1.5 py-0.5 rounded ${getBooleanBadgeColor(model.permission[0].allow_sampling)}`}>
                            {getBooleanText(model.permission[0].allow_sampling)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )})}
            </div>

            {filteredModels.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                没有找到匹配的模型，请尝试其他搜索关键词
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
} 
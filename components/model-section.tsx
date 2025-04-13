"use client"

import { useState, useEffect } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { modelsInfo } from "@/lib/models-data"

export default function ModelSection() {
  const [allModels, setAllModels] = useState<any[]>([])
  const [filteredModels, setFilteredModels] = useState<any[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [category, setCategory] = useState("all")
  const [manufacturer, setManufacturer] = useState("all")
  const [isLoading, setIsLoading] = useState(true)

  const modelsPerPage = 9

  useEffect(() => {
    // Simulate fetching models data
    const fetchModels = async () => {
      try {
        // In a real app, this would be an API call
        // For now, we'll use the sample data from the models-data.js file
        const modelIds = Object.keys(modelsInfo)

        const models = modelIds.map((id) => {
          const info = modelsInfo[id] || getDefaultModelInfo(id)
          return {
            id,
            name: formatModelName(id),
            manufacturer: info.manufacturer || "未知",
            purpose: info.purpose || "通用AI模型",
            evaluation: info.evaluation || "暂无详细评价",
            category: info.category || "其他模型",
          }
        })

        setAllModels(models)
        setFilteredModels(models)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching models:", error)
        setIsLoading(false)
      }
    }

    fetchModels()
  }, [])

  useEffect(() => {
    filterModels()
  }, [searchTerm, category, manufacturer, allModels])

  const filterModels = () => {
    const filtered = allModels.filter((model) => {
      // Search term filter
      const matchesSearch =
        model.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        model.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())

      // Category filter
      const matchesCategory = category === "all" || model.category === category

      // Manufacturer filter
      const matchesManufacturer =
        manufacturer === "all" ||
        (manufacturer === "其他"
          ? !["Anthropic", "OpenAI", "Meta", "DeepSeek", "Google", "火山引擎"].includes(model.manufacturer)
          : model.manufacturer.includes(manufacturer))

      return matchesSearch && matchesCategory && matchesManufacturer
    })

    setFilteredModels(filtered)
    setCurrentPage(1)
  }

  const formatModelName = (modelId: string) => {
    // Remove version numbers and dates
    let name = modelId.replace(/[-_]\d{8}(-thinking)?$/, "")

    // Replace hyphens and underscores with spaces
    name = name.replace(/[-_]/g, " ")

    // Capitalize first letter of each word
    name = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    return name
  }

  const getDefaultModelInfo = (modelId: string) => {
    let manufacturer = "未知"
    let purpose = "通用AI模型"
    let evaluation = "暂无详细评价"
    let category = "其他模型"

    if (modelId.includes("claude")) {
      manufacturer = "Anthropic"
      purpose = "大型语言模型，擅长对话和内容生成"
      evaluation = "以安全性和有用性著称的对话助手"
      category = "对话模型"
    } else if (modelId.includes("gpt")) {
      manufacturer = "OpenAI"
      purpose = "大型语言模型，擅长多种自然语言处理任务"
      evaluation = "功能全面的AI助手，应用广泛"
      category = "对话模型"
    } else if (modelId.includes("llama")) {
      manufacturer = "Meta"
      purpose = "开源大型语言模型"
      evaluation = "性能良好的开源替代方案"
      category = "对话模型"
    } else if (modelId.includes("deepseek") || modelId.includes("deep-seek")) {
      manufacturer = "DeepSeek"
      purpose = "专注于深度推理的大型语言模型"
      evaluation = "在复杂推理任务上表现出色"
      category = "对话模型"
    }

    return { manufacturer, purpose, evaluation, category }
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredModels.length / modelsPerPage)
  const startIndex = (currentPage - 1) * modelsPerPage
  const endIndex = Math.min(startIndex + modelsPerPage, filteredModels.length)
  const currentModels = filteredModels.slice(startIndex, endIndex)

  return (
    <section className="models-section mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 relative inline-block">
          可用 AI 模型库
          <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded"></span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">探索我们提供的多种先进AI模型，了解它们的特点、用途和性能评价</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center">
        <div className="relative flex-grow max-w-md">
          <input
            type="text"
            id="model-search"
            placeholder="搜索模型..."
            className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 glass-card"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary"
            onClick={() => filterModels()}
          >
            <Search size={18} />
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            id="category-filter"
            className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 glass-card"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">所有类别</option>
            <option value="对话模型">对话模型</option>
            <option value="代码模型">代码模型</option>
            <option value="图像生成">图像生成</option>
            <option value="视频生成">视频生成</option>
            <option value="语音模型">语音模型</option>
            <option value="工具模型">工具模型</option>
            <option value="其他模型">其他模型</option>
          </select>

          <select
            id="manufacturer-filter"
            className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 glass-card"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          >
            <option value="all">所有厂商</option>
            <option value="Anthropic">Anthropic</option>
            <option value="OpenAI">OpenAI</option>
            <option value="Meta">Meta</option>
            <option value="DeepSeek">DeepSeek</option>
            <option value="Google">Google</option>
            <option value="火山引擎">火山引擎</option>
            <option value="其他">其他厂商</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-primary"></div>
          <p className="mt-4 text-gray-600">正在加载模型数据...</p>
        </div>
      ) : filteredModels.length === 0 ? (
        <div className="text-center py-16">
          <div className="inline-block rounded-full h-16 w-16 bg-gray-100 flex items-center justify-center mb-4">
            <Search size={32} className="text-gray-400" />
          </div>
          <p className="text-gray-500 text-lg">没有找到匹配的模型</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentModels.map((model) => (
              <div
                key={model.id}
                className="glass-card rounded-xl overflow-hidden shadow-md hover:shadow-premium transition-all duration-300"
              >
                <div className="bg-gradient-dark text-white p-5">
                  <h3 className="text-lg font-semibold mb-1">{model.name}</h3>
                  <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm">{model.category}</span>
                </div>
                <div className="p-5">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                        厂商:
                      </div>
                      <div className="mt-1">{model.manufacturer}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                          <path d="M12 2v2" />
                          <path d="M12 22v-2" />
                          <path d="m17 20.66-1-1.73" />
                          <path d="M11 10.27 7 3.34" />
                          <path d="m20.66 17-1.73-1" />
                          <path d="m3.34 7 1.73 1" />
                          <path d="M14 12h8" />
                          <path d="M2 12h2" />
                          <path d="m20.66 7-1.73 1" />
                          <path d="m3.34 17 1.73-1" />
                          <path d="m17 3.34-1 1.73" />
                          <path d="m11 13.73-4 6.93" />
                        </svg>
                        用途:
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{model.purpose}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                        评价:
                      </div>
                      <p className="mt-1 text-sm text-gray-600">{model.evaluation}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3 text-xs font-mono text-gray-500">{model.id}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage <= 1}
              className="flex items-center gap-1 px-4 py-2 rounded-lg glass-card disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              上一页
            </button>

            <span className="text-sm">
              第 <span className="font-medium">{currentPage}</span> 页，共{" "}
              <span className="font-medium">{totalPages}</span> 页
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage >= totalPages}
              className="flex items-center gap-1 px-4 py-2 rounded-lg glass-card disabled:opacity-50 disabled:cursor-not-allowed"
            >
              下一页
              <ChevronRight size={16} />
            </button>
          </div>
          
          <div className="flex justify-center mt-4">
            <a 
              href="/all-models" 
              className="flex items-center gap-2 px-6 py-2 rounded-lg glass-card hover:bg-opacity-80 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h.01" />
                <path d="M17 7h.01" />
                <path d="M7 12h.01" />
                <path d="M17 12h.01" />
                <path d="M7 17h.01" />
                <path d="M17 17h.01" />
              </svg>
              全部模型
            </a>
          </div>
        </>
      )}
    </section>
  )
}

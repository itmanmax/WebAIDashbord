import Link from "next/link"
import { MessageSquare, Bot, Tv, Paintbrush, Server, Zap, Users, Globe, ArrowRight, ChevronRight } from "lucide-react"
import ModelSection from "@/components/model-section"
import StatsCounter from "@/components/stats-counter"
import RotatingCard from "@/components/rotating-card"
import UsageChart from "@/components/usage-chart"
import RequestLog from "@/components/request-log"

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-dark text-white py-24 text-center relative overflow-hidden">
        <div className="header-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            MAXTRNN <span className="font-light text-primary">AI 项目展馆</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-8">探索人工智能的无限可能</p>
          <div className="flex justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors shadow-glow"
            >
              浏览项目
            </a>
            <a
              href="#models"
              className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-lg transition-colors"
            >
              查看模型库
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#f0f9ff] to-transparent"></div>
      </header>

      <main className="container mx-auto px-4 py-8 -mt-10">
        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatsCounter label="总访问量" startValue={0} endValue={1254789} suffix="+" />
            <StatsCounter label="注册用户" startValue={0} endValue={42567} color="text-secondary" />
            <StatsCounter label="API调用/日" startValue={0} endValue={356890} color="text-accent" />
            <StatsCounter label="支持模型数" startValue={0} endValue={380+1} color="text-primary-dark" />
          </div>
        </section>

        <section className="intro text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 relative inline-block">
            欢迎来到 MAXTRNN AI 项目展馆
            <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded"></span>
          </h2>
          <p className="text-lg text-gray-600">
            这里汇集了多款强大的AI工具，为您提供从对话、创作到绘图的全方位AI体验。每一款工具都经过精心挑选，旨在帮助您探索AI的无限可能。
          </p>
        </section>

        {/* Featured 3D Cards */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-center">特色功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RotatingCard
              title="高并发处理"
              description="平台支持高并发请求处理，即使在峰值时段也能保持稳定的响应速度，满足企业级应用需求。"
              icon={<Zap size={32} />}
              color="bg-gradient-primary"
            />
            <RotatingCard
              title="全球加速网络"
              description="依托全球分布式节点，为世界各地用户提供低延迟的AI服务体验，无论身在何处都能快速访问。"
              icon={<Globe size={32} />}
              color="bg-gradient-cool"
            />
            <RotatingCard
              title="多用户协作"
              description="支持团队协作模式，多用户可同时使用同一项目，共享资源和成果，提高团队工作效率。"
              icon={<Users size={32} />}
              color="bg-gradient-artistic"
            />
          </div>
        </section>

        <div className="fancy-divider"></div>

        <section id="projects" className="mb-20 pt-10">
          <h2 className="text-3xl font-bold mb-8 text-center">精选项目</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProjectCard
              icon="comments-alt"
              title="OpenWebUI"
              description="开源的网页界面，支持多种大型语言模型，提供流畅的对话体验和丰富的功能。"
              features={["开源", "多模型支持", "高度可定制"]}
              url="http://openwebui.maxtral.fun/"
            />

            <ProjectCard
              icon="robot"
              title="LobeChat"
              description="新一代AI聊天助手，提供更智能的对话体验和个性化功能，支持多种场景应用。访问密码: max123"
              features={["智能对话", "个性化", "多场景"]}
              url="http://lobechat.maxtral.fun/"
            />

            <ProjectCard
              icon="tv"
              title="GPTV"
              description="视觉增强型AI平台，结合文本和图像理解能力，为您提供更全面的AI交互体验。"
              features={["视觉AI", "多模态", "高级分析"]}
              url="https://gptv.maxtral.fun/"
            />

            <ProjectCard
              icon="paint-brush"
              title="Flux 绘图工具"
              description="AI驱动的创意绘图平台，通过文本描述生成精美图像，释放您的创意潜能。"
              features={["AI绘图", "文本生成图像", "创意工具"]}
              url="https://flux.maxtral.fun/"
            />
          </div>
        </section>

        <section className="api-info mb-20">
          <div className="glass-card rounded-xl overflow-hidden shadow-premium hover:shadow-glow transition-all duration-300 flex flex-col max-w-3xl mx-auto glow-border">
            <div className="project-icon h-24 bg-gradient-artistic text-white flex items-center justify-center text-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-paintbrush text-white">
                <path d="m14.622 17.897-10.68-2.913"></path>
                <path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"></path>
                <path d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"></path>
              </svg>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">API 中转服务</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                为所有AI工具提供稳定、高效的API中转服务，确保流畅的使用体验。
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">高速稳定</span>
                <span className="bg-gradient-cool text-white px-4 py-2 rounded-full text-sm font-medium">
                  全球加速
                </span>
                <span className="bg-gradient-creative text-white px-4 py-2 rounded-full text-sm font-medium">多模型支持</span>
              </div>
              <a
                href="https://maxgpt.maxtral.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-gradient-artistic hover:opacity-90 text-white px-6 py-3 rounded-lg inline-flex items-center justify-center transition-all shadow-md"
              >
                立即使用
                <ArrowRight size={18} className="ml-2" />
              </a>
              <div className="mt-4 text-sm text-gray-500 italic">API地址: https://maxgpt.maxtral.fun/v1</div>
            </div>
          </div>
        </section>

        {/* Usage Analytics Section */}
        <section className="mb-20 animated-bg">
          <h2 className="text-3xl font-bold mb-8 text-center">平台使用分析</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <UsageChart />
            <RequestLog />
          </div>
        </section>

        <div id="models" className="pt-10">
          <ModelSection />
        </div>
      </main>

      <footer className="bg-gradient-dark text-white pt-16 pb-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                MAXTRNN <span className="text-primary">AI</span>
              </h3>
              <p className="opacity-70">探索AI的未来</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold mb-2">快速链接</h4>
              <Link href="https://github.com/itmanmax/WebAIDashbord" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                关于我们
              </Link>
              <Link href="https://github.com/itmanmax/WebAIDashbord" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                使用指南
              </Link>
              <Link href="https://github.com/itmanmax/WebAIDashbord" className="opacity-70 hover:opacity-100 hover:text-primary transition-colors">
                联系方式
              </Link>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">关注我们</h4>
              <div className="flex gap-4 mt-3">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/maxtr2n?s=21"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/itmanmax/WebAIDashbord"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="text-sm opacity-70">&copy; 2025 MAXTRNN AI 项目展馆. 保留所有权利.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
  icon,
  title,
  description,
  features,
  url,
}: {
  icon: string
  title: string
  description: string
  features: string[]
  url: string
}) {
  // 根据icon类型返回不同的渐变背景类
  const getGradientClass = (icon: string) => {
    switch(icon) {
      case "comments-alt": return "bg-gradient-primary";
      case "robot": return "bg-gradient-cool";
      case "tv": return "bg-gradient-creative";
      case "paint-brush": return "bg-gradient-artistic";
      default: return "bg-gradient-dark";
    }
  };

  return (
    <div className="glass-card rounded-xl overflow-hidden shadow-md hover:shadow-premium transition-all duration-300 flex flex-col">
      <div className={`project-icon h-24 ${getGradientClass(icon)} text-white flex items-center justify-center text-3xl`}>
        {icon === "comments-alt" && <MessageSquare size={32} className="text-white" />}
        {icon === "robot" && <Bot size={32} className="text-white" />}
        {icon === "tv" && <Tv size={32} className="text-white" />}
        {icon === "paint-brush" && <Paintbrush size={32} className="text-white" />}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature, index) => (
            <span key={index} className="bg-primary/10 text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
              {feature}
            </span>
          ))}
        </div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-dark hover:bg-dark text-white px-4 py-2 rounded-lg inline-flex items-center justify-center transition-colors"
        >
          立即体验
          <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  )
}

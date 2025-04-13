# AI 模型展览馆

这是一个展示和探索各种AI模型的Web应用，为用户提供了丰富的AI模型信息和直观的浏览体验。

## 功能特点

- **模型展示**：以卡片形式展示数百种AI模型的基本信息
- **模型分类**：根据模型类型（文本、图像、视频、代码、语音等）进行分类
- **搜索功能**：快速查找特定模型
- **详细信息**：展示模型的权限、提供商和功能特性
- **响应式设计**：适配各种设备尺寸

## 主要页面

### 首页

首页展示精选的AI模型，提供分页浏览功能和快速筛选选项。主要功能包括：

- 模型卡片展示
- 分页导航
- 模型统计数据
- "全部模型"快速入口

### 全部模型页面

专门展示所有模型的页面，提供更强大的浏览和搜索功能：

- 完整模型列表
- 实时搜索筛选
- 模型类型标签（文本、图像、视频、代码、语音、多模态）
- 提供商信息
- 模型权限详情（微调、搜索索引、视图访问等）

## 技术栈

- **前端框架**：Next.js (React)
- **样式**：TailwindCSS
- **数据处理**：客户端状态管理
- **API**：Next.js API路由
- **UI组件**：自定义组件和Lucide图标

## 文件结构

```
├── app/                   # Next.js 应用目录
│   ├── api/               # API路由
│   │   └── models/        # 模型数据API
│   ├── all-models/        # 全部模型页面
│   └── page.tsx           # 首页
├── components/            # React组件
│   ├── ui/                # UI组件
│   ├── model-section.tsx  # 模型展示区域组件
│   └── ...                # 其他组件
├── lib/                   # 工具和数据
│   ├── data.json          # 模型基础数据
│   ├── models-data.ts     # 模型详细信息
│   └── utils.ts           # 工具函数
└── public/                # 静态资源
```

## 安装与运行

1. 克隆仓库

```bash
git clone https://github.com/yourusername/ai-exhibition.git
cd ai-exhibition
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

4. 打开浏览器访问 http://localhost:3000

## 自定义和扩展

### 添加新模型

要添加新模型，请编辑 `lib/data.json` 文件，按照现有格式添加模型信息。若要添加详细描述，还需在 `lib/models-data.ts` 中添加相应条目。

### 自定义样式

项目使用TailwindCSS进行样式设计，主要样式定义在 `app/globals.css` 中。您可以根据需要修改或扩展这些样式。

## 贡献指南

欢迎贡献！如果您想为项目做出贡献，请遵循以下步骤：

1. Fork 仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启一个 Pull Request

## 许可证

MIT 
export const modelsInfo: Record<
  string,
  {
    manufacturer: string
    purpose: string
    evaluation: string
    category: string
  }
> = {
  // Claude系列
  "claude-3-5-haiku": {
    manufacturer: "Anthropic",
    purpose: "轻量级对话助手，适合快速响应和日常任务",
    evaluation: "响应速度快，成本低，适合简单任务，但在复杂推理上能力有限",
    category: "对话模型",
  },
  "claude-3-5-haiku-20241022": {
    manufacturer: "Anthropic (Google Vertex AI版本)",
    purpose: "Google Vertex AI平台上的Claude 3.5 Haiku模型",
    evaluation: "与标准Haiku相同的性能，但集成在Vertex AI云平台中",
    category: "对话模型",
  },
  "claude-3-5-sonnet": {
    manufacturer: "Anthropic",
    purpose: "中等规模对话助手，平衡性能与效率",
    evaluation: "综合能力强，推理能力好，是日常使用的理想选择",
    category: "对话模型",
  },
  "claude-3-5-sonnet-20240620": {
    manufacturer: "Anthropic (Google Vertex AI版本)",
    purpose: "Google Vertex AI平台上的Claude 3.5 Sonnet模型",
    evaluation: "与标准Sonnet相同的性能，但集成在Vertex AI云平台中",
    category: "对话模型",
  },
  "claude-3-5-sonnet-20241022": {
    manufacturer: "Anthropic (Google Vertex AI版本)",
    purpose: "Google Vertex AI平台上的Claude 3.5 Sonnet模型最新版本",
    evaluation: "最新发布的Vertex AI版Sonnet，具有改进的稳定性和性能",
    category: "对话模型",
  },
  "claude-3-5-sonnet-all": {
    manufacturer: "Anthropic",
    purpose: "增强版Sonnet模型，支持更多功能",
    evaluation: "在标准Sonnet基础上提供更全面的功能支持",
    category: "对话模型",
  },
  "claude-3-5-sonnet-coder": {
    manufacturer: "Anthropic",
    purpose: "专为编程和代码生成优化的Sonnet变体",
    evaluation: "在代码生成、理解和调试方面表现出色",
    category: "代码模型",
  },
  "claude-3-7-sonnet": {
    manufacturer: "Anthropic",
    purpose: "最新一代中等规模对话助手，具有增强的推理能力",
    evaluation: "推理能力显著提升，上下文理解更强，是目前最强的中等规模模型之一",
    category: "对话模型",
  },
  "claude-3-7-sonnet-20250219": {
    manufacturer: "Anthropic (Google Vertex AI版本)",
    purpose: "Vertex AI平台上的Claude 3.7 Sonnet模型",
    evaluation: "Vertex AI上最新的Claude 3.7版本，推理能力强大",
    category: "对话模型",
  },
  "claude-3-7-sonnet-20250219-thinking": {
    manufacturer: "Anthropic (Google Vertex AI版本)",
    purpose: "具有思考链能力的Claude 3.7 Sonnet在Vertex AI平台的版本",
    evaluation: "结合了思考链能力的Vertex AI版Claude 3.7，解决复杂问题能力更强",
    category: "对话模型",
  },
  "claude-3-7-sonnet-thinking": {
    manufacturer: "Anthropic",
    purpose: "具有思考链能力的Claude 3.7 Sonnet变体",
    evaluation: "通过显式思考过程提高推理质量，解决复杂问题能力更强",
    category: "对话模型",
  },
  "claude-3-haiku-20240307": {
    manufacturer: "Anthropic (Google Vertex AI版本)",
    purpose: "Google Vertex AI平台上的Claude 3 Haiku模型",
    evaluation: "与标准Haiku相同的性能，但集成在Google云平台中",
    category: "对话模型",
  },
  "claude-3-opus-20240229": {
    manufacturer: "Anthropic (Google Vertex AI版本)",
    purpose: "Google Vertex AI平台上的Claude 3 Opus大型模型",
    evaluation: "Claude系列中最强大的模型，推理能力和知识广度最佳",
    category: "对话模型",
  },
  "claude-3-sonnet-20240229": {
    manufacturer: "Anthropic (Google Vertex AI版本)",
    purpose: "Google Vertex AI平台上的Claude 3 Sonnet模型",
    evaluation: "与标准Sonnet相同的性能，但集成在Google云平台中",
    category: "对话模型",
  },

  // OpenAI模型
  "chatgpt-4o-latest": {
    manufacturer: "OpenAI",
    purpose: "最新版GPT-4 Omni多模态大型语言模型",
    evaluation: "OpenAI最先进的模型，具有出色的文本理解、生成和视觉能力",
    category: "对话模型",
  },
  "gpt-4o": {
    manufacturer: "OpenAI",
    purpose: "GPT-4 Omni多模态大型语言模型",
    evaluation: "OpenAI推出的支持多模态交互的高级模型",
    category: "对话模型",
  },
  "gpt-4o-mini": {
    manufacturer: "OpenAI",
    purpose: "GPT-4 Omni的轻量级版本",
    evaluation: "保持核心功能的同时提供更高效率和更低成本的选择",
    category: "对话模型",
  },
  "gpt-4-turbo": {
    manufacturer: "OpenAI",
    purpose: "GPT-4的高性能变体",
    evaluation: "比标准GPT-4更快速的响应和更好的性能",
    category: "对话模型",
  },
  "gpt-4": {
    manufacturer: "OpenAI",
    purpose: "OpenAI的高级大型语言模型",
    evaluation: "在复杂理解和生成任务上表现卓越",
    category: "对话模型",
  },
  "gpt-4.5-preview": {
    manufacturer: "OpenAI",
    purpose: "GPT-4.5的预览版本",
    evaluation: "展示下一代GPT模型的功能和能力",
    category: "对话模型",
  },
  "dall-e-3": {
    manufacturer: "OpenAI",
    purpose: "高级文本到图像生成模型",
    evaluation: "生成高质量、创意图像的能力出色，理解复杂提示",
    category: "图像生成",
  },
  "o1": {
    manufacturer: "OpenAI",
    purpose: "OpenAI的O1系列高级模型",
    evaluation: "最新技术的高性能AI模型",
    category: "对话模型",
  },
  "o1-mini": {
    manufacturer: "OpenAI",
    purpose: "O1的轻量级版本",
    evaluation: "为效率优化的O1系列模型",
    category: "对话模型",
  },
  "o1-preview": {
    manufacturer: "OpenAI",
    purpose: "O1的预览版本",
    evaluation: "展示O1技术最新发展的预览版",
    category: "对话模型",
  },

  // DeepSeek系列
  "deep-seek-r1": {
    manufacturer: "DeepSeek",
    purpose: "专注于推理能力的大型语言模型",
    evaluation: "在逻辑推理和问题解决方面表现优异",
    category: "对话模型",
  },
  "deep-seek-v3": {
    manufacturer: "DeepSeek",
    purpose: "DeepSeek第三代通用大型语言模型",
    evaluation: "全面提升的性能，在多种任务上表现均衡",
    category: "对话模型",
  },
  "deepseek-chat": {
    manufacturer: "DeepSeek",
    purpose: "针对对话场景优化的DeepSeek模型",
    evaluation: "对话流畅自然，上下文理解能力强",
    category: "对话模型",
  },
  "deepseek-coder": {
    manufacturer: "DeepSeek",
    purpose: "专为代码生成和理解设计的模型",
    evaluation: "代码生成质量高，理解编程概念能力强",
    category: "代码模型",
  },
  "deepseek-r1": {
    manufacturer: "DeepSeek (火山引擎版本)",
    purpose: "火山引擎平台上的DeepSeek推理模型",
    evaluation: "与标准版本相同的推理能力，但集成在火山引擎平台",
    category: "对话模型",
  },
  "deepseek-reasoner": {
    manufacturer: "DeepSeek",
    purpose: "增强版推理模型，专注于复杂问题解决",
    evaluation: "在数学、逻辑和科学推理方面表现卓越",
    category: "对话模型",
  },
  "deepseek-reasoner-all": {
    manufacturer: "DeepSeek",
    purpose: "全功能版推理模型，支持更广泛的应用场景",
    evaluation: "在标准Reasoner基础上提供更全面的功能支持",
    category: "对话模型",
  },
  "deepseek-v3": {
    manufacturer: "DeepSeek (火山引擎版本)",
    purpose: "火山引擎平台上的DeepSeek V3模型",
    evaluation: "与标准V3版本相同的性能，但集成在火山引擎平台",
    category: "对话模型",
  },

  // Google Gemini系列
  "gemini-1.5-flash": {
    manufacturer: "Google",
    purpose: "Google的Gemini 1.5 Flash快速响应模型",
    evaluation: "平衡速度和性能的高效模型",
    category: "对话模型",
  },
  "gemini-1.5-pro": {
    manufacturer: "Google",
    purpose: "Google的Gemini 1.5 Pro专业版模型",
    evaluation: "在复杂任务中表现卓越的专业级模型",
    category: "对话模型",
  },
  "gemini-2.0-flash": {
    manufacturer: "Google",
    purpose: "Google的Gemini 2.0 Flash次世代快速响应模型",
    evaluation: "改进版的Gemini快速响应模型",
    category: "对话模型",
  },
  "gemini-pro-vision": {
    manufacturer: "Google",
    purpose: "支持视觉能力的Gemini Pro模型",
    evaluation: "结合了文本和图像理解能力的多模态模型",
    category: "对话模型",
  },

  // Meta LLaMA和Code Llama系列
  "llama-3-8b": {
    manufacturer: "Meta",
    purpose: "Meta的LLaMA 3系列8B参数模型",
    evaluation: "相对轻量级但功能强大的开源模型",
    category: "对话模型",
  },
  "llama-3-70b": {
    manufacturer: "Meta",
    purpose: "Meta的LLaMA 3系列70B参数大型模型",
    evaluation: "Meta最强大的开源大型语言模型之一",
    category: "对话模型",
  },
  "llama-3.1-8b": {
    manufacturer: "Meta",
    purpose: "Meta的LLaMA 3.1系列8B参数改进版模型",
    evaluation: "基于LLaMA 3的改进版本，性能更强",
    category: "对话模型",
  },
  "llama-3.1-70b": {
    manufacturer: "Meta",
    purpose: "Meta的LLaMA 3.1系列70B参数改进版大型模型",
    evaluation: "LLaMA 3系列的升级版本，具有更强的理解和生成能力",
    category: "对话模型",
  },
  "llama-3.1-405b": {
    manufacturer: "Meta",
    purpose: "Meta的LLaMA 3.1系列405B超大参数模型",
    evaluation: "Meta目前最大规模的语言模型，能力最强",
    category: "对话模型",
  },
  "code-llama-7b": {
    manufacturer: "Meta",
    purpose: "轻量级代码生成和理解模型",
    evaluation: "适合简单代码任务，响应速度快，资源消耗低",
    category: "代码模型",
  },
  "code-llama-13b": {
    manufacturer: "Meta",
    purpose: "中等规模代码生成和理解模型",
    evaluation: "平衡性能与效率，适合大多数编程任务",
    category: "代码模型",
  },
  "code-llama-34b": {
    manufacturer: "Meta",
    purpose: "大型代码生成和理解模型",
    evaluation: "代码质量高，理解复杂编程概念能力强",
    category: "代码模型",
  },
  "codellama-70b-instruct": {
    manufacturer: "Meta",
    purpose: "超大规模指令调优代码模型",
    evaluation: "Meta最强大的代码模型，生成高质量代码能力出色",
    category: "代码模型",
  },

  // Mistral和Mixtral系列
  "mistral-7b-instruct": {
    manufacturer: "Mistral AI",
    purpose: "Mistral的7B参数指令调优模型",
    evaluation: "小型高效的指令遵循模型",
    category: "对话模型",
  },
  "mistral-medium": {
    manufacturer: "Mistral AI",
    purpose: "Mistral的中等规模模型",
    evaluation: "平衡性能与效率的通用模型",
    category: "对话模型",
  },
  "mixtral-8x7b": {
    manufacturer: "Mistral AI",
    purpose: "Mistral的混合专家模型",
    evaluation: "结合多个专家模型优势的创新架构",
    category: "对话模型",
  },
  "mixtral-8x22b": {
    manufacturer: "Mistral AI",
    purpose: "更大规模的混合专家模型",
    evaluation: "Mixtral系列中最强大的模型",
    category: "对话模型",
  },

  // 智谱AI (GLM)系列
  "glm-3-turbo": {
    manufacturer: "智谱AI",
    purpose: "GLM-3系列的快速响应模型",
    evaluation: "性能与效率平衡的中文大语言模型",
    category: "对话模型",
  },
  "glm-4": {
    manufacturer: "智谱AI",
    purpose: "GLM-4系列高级大型语言模型",
    evaluation: "智谱AI最强大的语言模型",
    category: "对话模型",
  },
  "glm-4-air": {
    manufacturer: "智谱AI",
    purpose: "GLM-4的轻量级高效版本",
    evaluation: "为效率优化的GLM-4变体",
    category: "对话模型",
  },
  "glm-4-0520": {
    manufacturer: "智谱AI",
    purpose: "GLM-4的5月20日版本更新",
    evaluation: "GLM-4系列的增强版本",
    category: "对话模型",
  },

  // 阿里云通义系列
  "qwen-72b": {
    manufacturer: "阿里云",
    purpose: "通义千问72B参数大型语言模型",
    evaluation: "阿里云开发的大型开源模型",
    category: "对话模型",
  },
  "qwen-turbo": {
    manufacturer: "阿里云",
    purpose: "通义千问的快速响应版本",
    evaluation: "为实时应用优化的高效模型",
    category: "对话模型",
  },
  "qwen2.5-72b-instruct": {
    manufacturer: "阿里云",
    purpose: "通义千问2.5系列72B参数指令调优模型",
    evaluation: "最新一代通义千问，指令遵循能力强",
    category: "对话模型",
  },

  // 多模态和视频模型
  cogvideox: {
    manufacturer: "CogVideo",
    purpose: "高级视频生成和处理模型",
    evaluation: "生成流畅、高质量视频的能力出色",
    category: "视频生成",
  },
  "domo-img-to-video": {
    manufacturer: "Domo AI",
    purpose: "将静态图像转换为动态视频",
    evaluation: "从单一图像生成连贯视频的能力强",
    category: "视频生成",
  },
  "domo-video-to-video": {
    manufacturer: "Domo AI",
    purpose: "视频编辑和转换模型",
    evaluation: "在保持内容连贯性的同时修改视频的能力出色",
    category: "视频生成",
  },
  "sora-16:9-480p-5s": {
    manufacturer: "OpenAI",
    purpose: "生成16:9比例480p分辨率5秒视频",
    evaluation: "OpenAI的高质量视频生成模型",
    category: "视频生成",
  },
  "sora-16:9-480p-10s": {
    manufacturer: "OpenAI",
    purpose: "生成16:9比例480p分辨率10秒视频",
    evaluation: "OpenAI的更长时长视频生成模型",
    category: "视频生成",
  },
  "advanced-voice": {
    manufacturer: "未知",
    purpose: "高级语音合成和处理",
    evaluation: "生成自然、表现力丰富的语音能力强",
    category: "语音模型",
  },
  avatar: {
    manufacturer: "未知",
    purpose: "数字人物生成和动画",
    evaluation: "创建逼真数字人物的能力出色",
    category: "图像生成",
  },
  
  // 其他模型
  aqa: {
    manufacturer: "未知",
    purpose: "高级问答系统",
    evaluation: "在精确回答问题方面表现出色",
    category: "对话模型",
  },
  "batch-get-gpts": {
    manufacturer: "未知",
    purpose: "批量处理GPT请求的工具",
    evaluation: "提高多请求处理效率的实用工具",
    category: "工具模型",
  },
  "chat-bison-001": {
    manufacturer: "Google",
    purpose: "Google的对话模型",
    evaluation: "Google开发的通用对话助手",
    category: "对话模型",
  },
  "dbrx-instruct": {
    manufacturer: "Databricks",
    purpose: "Databricks开发的指令调优大型语言模型",
    evaluation: "在数据分析和企业应用方面表现出色",
    category: "对话模型",
  },
  "Doubao-lite-128k": {
    manufacturer: "火山引擎",
    purpose: "轻量级中文大语言模型，支持128k上下文",
    evaluation: "针对中文优化，长上下文理解能力强",
    category: "对话模型",
  },
  "Doubao-pro-128k": {
    manufacturer: "火山引擎",
    purpose: "专业版中文大语言模型，支持128k上下文",
    evaluation: "更强大的中文处理能力，适合专业应用场景",
    category: "对话模型",
  },
  "yi-large": {
    manufacturer: "零一万物",
    purpose: "零一万物的大型语言模型",
    evaluation: "中文理解和生成能力强的开源模型",
    category: "对话模型",
  },
}

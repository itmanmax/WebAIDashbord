const fs = require('fs');
const path = require('path');

// 读取data.json文件
const dataJsonPath = path.join(__dirname, 'data.json');
const modelsDataPath = path.join(__dirname, 'models-data.ts');

// 从data.json读取数据
const jsonData = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));
// 从models-data.ts读取现有数据
const existingModelsData = fs.readFileSync(modelsDataPath, 'utf8');

// 提取现有模型ID列表
const existingModelIds = [];
const modelRegex = /"([^"]+)":\s*{/g;
let match;
while ((match = modelRegex.exec(existingModelsData)) !== null) {
  existingModelIds.push(match[1]);
}

console.log(`现有models-data.ts中的模型数: ${existingModelIds.length}`);
console.log(`data.json中的模型数: ${jsonData.data.length}`);

// 分类函数
function getCategoryByModelId(id) {
  // 默认分类
  let category = "对话模型";
  
  // 视频生成模型
  if (id.includes('video') || id.includes('sora') || id.includes('luma') || id.includes('cogvideo')) {
    return "视频生成";
  }
  
  // 图像生成模型
  if (id.includes('dall-e') || id.includes('image') || id.includes('img') || id.includes('avatar')) {
    return "图像生成";
  }
  
  // 代码模型
  if (id.includes('code') || id.includes('coder')) {
    return "代码模型";
  }
  
  // 语音模型
  if (id.includes('voice') || id.includes('speech') || id.includes('audio')) {
    return "语音模型";
  }
  
  // 工具模型
  if (id.includes('tool') || id.includes('batch')) {
    return "工具模型";
  }
  
  return category;
}

// 获取制造商
function getManufacturerByModelId(id) {
  if (id.includes('claude')) return "Anthropic";
  if (id.includes('gpt') || id.includes('dall-e') || id.includes('sora') || id.includes('o1')) return "OpenAI";
  if (id.includes('llama') || id.includes('codellama')) return "Meta";
  if (id.includes('gemini')) return "Google";
  if (id.includes('mistral') || id.includes('mixtral')) return "Mistral AI";
  if (id.includes('glm')) return "智谱AI";
  if (id.includes('qwen')) return "阿里云";
  if (id.includes('deepseek') || id.includes('deep-seek')) return "DeepSeek";
  if (id.includes('yi')) return "零一万物";
  if (id.includes('doubao')) return "火山引擎";
  
  return "未知";
}

// 生成新的模型数据内容
let newModelsContent = `export const modelsInfo: Record<
  string,
  {
    manufacturer: string
    purpose: string
    evaluation: string
    category: string
  }
> = {\n`;

// 处理每个模型，按照制造商分组
const modelsByManufacturer = {};

// 首先对模型按照制造商分组
jsonData.data.forEach(model => {
  const id = model.id;
  if (!existingModelIds.includes(id)) {
    const manufacturer = getManufacturerByModelId(id);
    if (!modelsByManufacturer[manufacturer]) {
      modelsByManufacturer[manufacturer] = [];
    }
    modelsByManufacturer[manufacturer].push(model);
  }
});

// 首先添加已有的模型数据
const existingPart = existingModelsData.substring(
  existingModelsData.indexOf('{') + 1, 
  existingModelsData.lastIndexOf('}')
);
newModelsContent += existingPart;

// 制造商顺序
const manufacturerOrder = [
  "Anthropic", "OpenAI", "DeepSeek", "Google", "Meta", 
  "Mistral AI", "智谱AI", "阿里云", "火山引擎", "零一万物", "未知"
];

// 按制造商分组添加新模型
manufacturerOrder.forEach(manufacturer => {
  const models = modelsByManufacturer[manufacturer] || [];
  if (models.length > 0) {
    newModelsContent += `\n  // ${manufacturer}系列新增模型\n`;
    
    models.forEach(model => {
      const id = model.id;
      const category = getCategoryByModelId(id);
      
      // 生成模型描述
      let purpose = `${manufacturer}提供的${category}`;
      let evaluation = "暂无详细评估信息";
      
      newModelsContent += `  "${id}": {
    manufacturer: "${manufacturer}",
    purpose: "${purpose}",
    evaluation: "${evaluation}",
    category: "${category}",
  },\n`;
    });
  }
});

// 关闭对象
newModelsContent += '}\n';

// 写入新文件
fs.writeFileSync(
  path.join(__dirname, 'models-data-complete.ts'), 
  newModelsContent, 
  'utf8'
);

console.log('完成! 新文件已保存为 models-data-complete.ts');
console.log('请检查文件内容后，如果满意可以替换原有的models-data.ts文件'); 
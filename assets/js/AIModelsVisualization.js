const aiModels = [
  {
    name: "Computer Vision",
    children: [
      "Classification (Transformers, CNNs)",
      "Segmentation (SAM, UNET, NNU-Net)",
      "Object Detection (YOLO, DETR)",
      "Pose Estimation",
      "Vision Language Models",
      "OCR (TrOCR, PaddleOCR, Tesseract)"
    ]
  },
  {
    name: "Speech Processing",
    children: [
      "Speech-to-Text (Whisper, Distilled Whisper)",
      "Text-to-Speech"
    ]
  },
  {
    name: "Generative Models",
    children: [
      "Vision (GANs, VAEs, Diffusion Models)",
      "Language Models (LLaMA, GPT, BERT)"
    ]
  },
  {
    name: "MLOps",
    children: [
      "Model Deployment",
      "AutoML Pipelines",
      "Model Optimization"
    ]
  }
];

function createAIModelsVisualization() {
  const container = document.getElementById('ai-models-container');
  
  aiModels.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'ai-model-category';
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = category.name;
    categoryDiv.appendChild(categoryTitle);
    
    const modelList = document.createElement('ul');
    category.children.forEach(model => {
      const modelItem = document.createElement('li');
      modelItem.textContent = model;
      modelList.appendChild(modelItem);
    });
    
    categoryDiv.appendChild(modelList);
    container.appendChild(categoryDiv);
  });
}

document.addEventListener('DOMContentLoaded', createAIModelsVisualization);

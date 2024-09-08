// AI Models data
const aiModels = [
  {
    name: "Computer Vision",
    color: "#FF6B6B",
    children: [
      {
        name: "Classification",
        children: ["Transformers (ViT, Dino2)", "EfficientViT", "MobileViT", "CNNs"]
      },
      {
        name: "Segmentation",
        children: ["SAM / SAM 2", "EfficientSAM", "UNET (CNN based)", "NNU-Net (CNN & ViT based)", "3D SAM"]
      },
      {
        name: "Object Detection",
        children: ["YOLO (v3 to v10)", "DETR model", "Blaze model"]
      },
      {
        name: "Pose Estimation",
        children: ["OpenPose", "Google Pose"]
      },
      {
        name: "Vision Language Models",
        children: ["PaLI", "Florence", "Phi-3, 3.5", "LLaVA", "OpenGPT-4", "CLIP / SigLIP", "GroundingDINO"]
      },
      {
        name: "OCR",
        children: ["TrOCR", "PaddleOCR", "Tesseract"]
      }
    ]
  },
  {
    name: "Speech Processing",
    color: "#4ECDC4",
    children: [
      {
        name: "Speech-to-Text",
        children: ["Whisper", "Distilled Whisper"]
      },
      {
        name: "Text-to-Speech",
        children: ["Various TTS models"]
      }
    ]
  },
  {
    name: "Generative Models",
    color: "#FFA07A",
    children: [
      {
        name: "Vision",
        children: ["Autoencoder", "VAE", "VQ-VAE", "GAN", "CycleGAN", "StyleGAN", "Stable Diffusion"]
      },
      {
        name: "Language Models",
        children: ["LoRA / QLoRA", "LLaMA 2 / 3 / 3.1", "Phi-2, 3, 3.5", "Mistral"]
      }
    ]
  },
  {
    name: "MLOps",
    color: "#9370DB",
    children: [
      {
        name: "Deployment",
        children: ["VLLM for production", "Cloud platforms (AWS, GCP)", "On-premise solutions"]
      },
      {
        name: "Pipelines",
        children: ["AutoML pipelines", "Model optimization", "CI/CD for ML"]
      }
    ]
  }
];

// Function to create the visualization
function createAIModelsVisualization() {
  const container = document.getElementById('ai-models-container');
  
  function createModelNode(model, depth = 0) {
    const node = document.createElement('div');
    node.className = 'model-node';
    node.style.marginLeft = `${depth * 20}px`;
    
    const header = document.createElement('div');
    header.className = 'model-header';
    header.style.backgroundColor = model.color || '#f0f0f0';
    header.textContent = model.name;
    
    node.appendChild(header);
    
    if (model.children) {
      const childrenContainer = document.createElement('div');
      childrenContainer.className = 'model-children';
      childrenContainer.style.display = 'none';
      
      model.children.forEach(child => {
        if (typeof child === 'string') {
          const childNode = document.createElement('div');
          childNode.className = 'model-leaf';
          childNode.textContent = child;
          childrenContainer.appendChild(childNode);
        } else {
          childrenContainer.appendChild(createModelNode(child, depth + 1));
        }
      });
      
      node.appendChild(childrenContainer);
      
      header.addEventListener('click', () => {
        childrenContainer.style.display = childrenContainer.style.display === 'none' ? 'block' : 'none';
      });
      
      header.style.cursor = 'pointer';
    }
    
    return node;
  }
  
  aiModels.forEach(model => {
    container.appendChild(createModelNode(model));
  });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', createAIModelsVisualization);

// Add some basic styles
const style = document.createElement('style');
style.textContent = `
  .model-node {
    margin-bottom: 10px;
  }
  .model-header {
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    transition: all 0.3s ease;
  }
  .model-header:hover {
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  }
  .model-children {
    margin-top: 5px;
  }
  .model-leaf {
    padding: 5px 10px;
    font-size: 0.9em;
  }
`;
document.head.appendChild(style);

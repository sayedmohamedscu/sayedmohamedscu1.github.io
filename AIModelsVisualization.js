import React, { useState } from 'react';
import { ZoomIn, ZoomOut, AlertCircle } from 'lucide-react';

const AIModelsVisualization = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const zoomIn = () => setZoomLevel(prev => Math.min(prev + 0.1, 2));
  const zoomOut = () => setZoomLevel(prev => Math.max(prev - 0.1, 0.5));

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

  const renderModelNode = (model, depth = 0) => {
    const fontSize = Math.max(16 - depth * 2, 10);
    const padding = depth * 10;

    return (
      <div key={model.name} className="mb-3">
        <div
          className="rounded-lg shadow transition-all duration-300 hover:shadow-md"
          style={{
            backgroundColor: model.color || '#f0f0f0',
            padding: `${padding}px 15px`,
            fontSize: `${fontSize}px`,
            fontWeight: depth === 0 ? 'bold' : 'normal',
          }}
        >
          {model.name}
        </div>
        {model.children && (
          <div className="ml-5 mt-2">
            {model.children.map(child =>
              typeof child === 'string' 
                ? <div key={child} className="mt-1 text-sm">{child}</div>
                : renderModelNode(child, depth + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">AI Models Expertise</h2>
      <div className="flex justify-end mb-4">
        <button onClick={zoomOut} className="mr-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300">
          <ZoomOut size={24} />
        </button>
        <button onClick={zoomIn} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-300">
          <ZoomIn size={24} />
        </button>
      </div>
      <div 
        className="transition-transform duration-300 ease-in-out"
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top left' }}
      >
        {aiModels.map(model => renderModelNode(model))}
      </div>
      <div className="mt-8 bg-blue-100 p-4 rounded-lg flex items-start">
        <AlertCircle className="mr-2 flex-shrink-0 text-blue-500" />
        <p className="text-sm">
          This visualization represents my expertise across various AI domains, including the newly added OCR models. 
          Each category can be expanded to show specific models and techniques. The size and color of each node 
          indicate its importance and domain respectively. Use the zoom buttons to explore in detail.
        </p>
      </div>
    </div>
  );
};

export default AIModelsVisualization;

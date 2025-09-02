// src/components/Skills.tsx (or your file path)
import React from 'react';

// --- TypeScript Interfaces for our data structures ---
interface SkillPosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

interface Skill {
  name: string;
  position: SkillPosition;
}

interface MainCategory {
  name: string;
  skills: Skill[];
}

interface SurroundingCategory {
  name: string;
  position: SkillPosition;
}

interface Tool {
  name: string;
}

// --- The React Component ---
const Skills: React.FC = () => {
  // Data for the component, now strongly-typed
  const mainCategory: MainCategory = {
    name: 'Programming & Development',
    skills: [
      { name: 'Python', position: { top: '30%', left: '30%' } },
      { name: 'SQL', position: { top: '65%', left: '30%' } },
      { name: 'Java', position: { top: '30%', right: '30%' } },
      { name: 'Bash/Shell', position: { top: '65%', right: '25%' } },
    ],
  };

  const surroundingCategories: SurroundingCategory[] = [
    { name: 'Data Engineering', position: { top: '25%', left: '10%' } },
    { name: 'Cloud & DevOps', position: { top: '25%', right: '10%' } },
    { name: 'Analytics & Visualization', position: { top: '75%', right: '5%' } },
    { name: 'Tools & Technologies', position: { top: '75%', left: '5%' } },
  ];
  
  const tools: Tool[] = [
    { name: 'FastAPI' },
    { name: 'React' },
    { name: 'Hugging Face' },
    { name: 'Docker' },
    { name: 'Airflow' },
  ];

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text-title">
              Skills & Expertise
            </h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mt-6"></div>
          </div>

          {/* 3D Visualizer Section */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            {/* Background Image */}
            <img
              src="/assets/skills-background.png" // IMPORTANT: Update this path!
              alt="Skills background"
              className="absolute inset-0 w-full h-full object-contain"
            />

            {/* Central Box Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-lg md:text-2xl font-bold text-cyan-300">
                {mainCategory.name}
              </h2>
            </div>
            
            {/* Main Skills Text */}
            {mainCategory.skills.map((skill, index) => (
              <div
                key={index}
                className="absolute"
                style={{ ...skill.position }}
              >
                <span className="text-md md:text-xl font-semibold glow-text">
                  {skill.name}
                </span>
              </div>
            ))}
            
            {/* Surrounding Categories Text */}
            {surroundingCategories.map((category, index) => (
              <div
                key={index}
                className="absolute text-center"
                style={{ ...category.position }}
              >
                <h3 className="text-sm md:text-lg font-medium text-gray-400">
                  {category.name}
                </h3>
              </div>
            ))}

            {/* Tools Icons/Text at the bottom */}
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex gap-4 md:gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="flex flex-col items-center">
                   <span className="text-xs md:text-sm text-cyan-400">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
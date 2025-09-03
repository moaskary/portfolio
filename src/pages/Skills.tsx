import React from 'react'; // It's good practice to import React in .tsx files
import { Database, Cloud, Code, BarChart3 } from "lucide-react";

// --- TYPESCRIPT TYPES ---
// Define types for our data structures for type safety

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  icon: React.ReactNode; // The icon is a React component/element
  skills: Skill[];
};

type Tool = {
  name: string;
  category: string;
};

// --- COMPONENT ---

const Skills: React.FC = () => {
  // Apply the types to our data constants
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming & Development",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "SQL", icon: "📊" },
        { name: "Java", icon: "☕" },
        { name: "Bash/Shell", icon: "🖥️" }
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database size={24} />,
      skills: [
        { name: "Apache Airflow", icon: "🌊" },
        { name: "Apache Spark", icon: "⚡" },
        { name: "Apache Kafka", icon: "🚀" },
        { name: "PostgreSQL", icon: "🐘" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "GitHub Actions", icon: "⚙️" },
        { name: "Kubernetes", icon: "⚓" }
      ]
    },
    {
      title: "Analytics & Visualization",
      icon: <BarChart3 size={24} />,
      skills: [
        { name: "Power BI", icon: "📊" },
        { name: "Apache Superset", icon: "📈" },
        { name: "Grafana", icon: "📉" },
        { name: "Prometheus", icon: "🔍" }
      ]
    }
  ];

  const tools: Tool[] = [
    { name: "FastAPI", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Hugging Face", category: "AI/ML" },
    { name: "ETL Pipelines", category: "Data" },
    { name: "Data Warehousing", category: "Architecture" },
    { name: "Stream Processing", category: "Real-time" },
    { name: "CI/CD", category: "DevOps" },
    { name: "Monitoring", category: "Operations" }
  ];

  return (
    <main className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technical proficiencies in data engineering, cloud computing, and modern development practices
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* Unified Skills Section */}
          <div className="project-card p-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={index < skillCategories.length - 1 ? "mb-8" : ""}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Badges Container */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      // --- FIX IS HERE ---
                      // Added `transition-transform`, `duration-200`, and `ease-in-out`
                      // to enable the `hover:scale-105` animation.
                      className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full transition-transform duration-200 ease-in-out hover:scale-105 cursor-pointer"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-foreground text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <div className="project-card">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Tools & Technologies
              </h3>
              <p className="text-muted-foreground">
                Additional technologies and frameworks I work with
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <div key={index} className="skill-badge justify-center text-center group">
                  <div className="text-center">
                    <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {tool.name}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {tool.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="text-center mt-16">
            <div className="project-card max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Cloud size={24} className="text-primary" />
                <h3 className="text-2xl font-bold text-primary">
                  AWS Cloud Practitioner
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Certified in AWS cloud fundamentals, services, and best practices
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-primary font-medium">Active Certification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
import { Database, Cloud, Code, BarChart3, GitBranch, Monitor, Server, Workflow } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: <Code size={24} />,
      skills: [
        { name: "Python", icon: "🐍", level: 95 },
        { name: "SQL", icon: "📊", level: 90 },
        { name: "Java", icon: "⚡", level: 80 },
        { name: "Bash/Shell", icon: "🖥️", level: 85 }
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database size={24} />,
      skills: [
        { name: "Apache Airflow", icon: "🌊", level: 90 },
        { name: "Apache Spark", icon: "⚡", level: 85 },
        { name: "Apache Kafka", icon: "🚀", level: 80 },
        { name: "PostgreSQL", icon: "🐘", level: 90 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      skills: [
        { name: "AWS", icon: "☁️", level: 85 },
        { name: "Docker", icon: "🐳", level: 90 },
        { name: "GitHub Actions", icon: "⚙️", level: 80 },
        { name: "Kubernetes", icon: "⚓", level: 75 }
      ]
    },
    {
      title: "Analytics & Visualization",
      icon: <BarChart3 size={24} />,
      skills: [
        { name: "Power BI", icon: "📊", level: 85 },
        { name: "Apache Superset", icon: "📈", level: 80 },
        { name: "Grafana", icon: "📉", level: 85 },
        { name: "Prometheus", icon: "🔍", level: 80 }
      ]
    }
  ];

  const tools = [
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

          {/* Main Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="project-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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
                <div
                  key={index}
                  className="skill-badge justify-center text-center group"
                >
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
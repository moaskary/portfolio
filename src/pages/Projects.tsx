import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Global E-Commerce Sales Data Pipeline",
      description: "Batch pipeline to process multi-source sales data with comprehensive analytics and visualization dashboards.",
      techStack: ["Apache Airflow", "PostgreSQL", "Power BI", "Python", "ETL"],
      github: "https://github.com/moaskary",
      category: "Data Pipeline"
    },
    {
      title: "Real-Time Ride-Hailing Data Pipeline", 
      description: "Kafka + Spark streaming pipeline for live trip analytics, providing real-time insights and monitoring.",
      techStack: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Superset", "Streaming"],
      github: "https://github.com/moaskary",
      category: "Real-Time Analytics"
    },
    {
      title: "WatchGuard AI – Full-Stack AI Threat Detection",
      description: "AI-powered platform using machine learning for multimodal threat detection and security monitoring.",
      techStack: ["Hugging Face", "FastAPI", "React", "AI/ML", "Security"],
      github: "https://github.com/moaskary",
      category: "AI/ML Platform"
    },
    {
      title: "Smart Audit Ops AI – DevOps Automation Tool",
      description: "Modular automation tool for code quality, UI compliance, and system monitoring with comprehensive dashboards.",
      techStack: ["FastAPI", "Prometheus", "Grafana", "DevOps", "Monitoring"],
      github: "https://github.com/moaskary", 
      category: "DevOps Automation"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of data engineering solutions, from batch processing to real-time analytics
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card group">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="skill-badge text-xs">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label="View on GitHub"
                    >
                      <Github size={18} />
                    </a>
                    <div className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="project-card max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Interested in My Work?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how I can help solve your data engineering challenges
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:mohamadabuabbass@gmail.com"
                  className="btn-hero-filled"
                >
                  Get In Touch
                </a>
                <a
                  href="https://github.com/moaskary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
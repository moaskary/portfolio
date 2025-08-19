import { Link } from "react-router-dom";
import { Github, Mail, Linkedin, Dumbbell, Book, Zap } from "lucide-react";

console.log("Home component loading...");

const Home = () => {
  console.log("Home component rendering...");
  
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Data Stream Background */}
      <div className="data-stream-bg"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container-max text-center">
          {/* Personal Icons - Top Right */}
          <div className="absolute top-20 right-6 flex flex-col gap-4 opacity-60">
            <Dumbbell size={24} className="text-primary animate-float" style={{ animationDelay: '0s' }} />
            <Book size={24} className="text-primary animate-float" style={{ animationDelay: '1s' }} />
            <Zap size={24} className="text-primary animate-float" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main Hero Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-foreground">MOHAMMAD ABU ABBAS</span>
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 glow-text">
              DATA ENGINEER
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Designing scalable pipelines. Turning data into insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/MOHAMAD_ABU_ABBAS_CV.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                VIEW RESUME
              </a>
              <Link to="/projects" className="btn-hero">
                VIEW PROJECTS  
              </Link>
              <Link to="/contact" className="btn-hero-filled">
                CONTACT
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6">
            <a 
              href="mailto:mohamadabuabbass@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/moaskary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/mohamad-abu-abbas-8b9b78248"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
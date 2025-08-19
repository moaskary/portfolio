import { Book, Dumbbell, Zap } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
                About Me
              </h1>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              {/* Profile Section */}
              <div className="space-y-6">
                <div className="project-card">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">
                    Professional Background
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a Data Engineer with a Computer Science degree and AWS Cloud Practitioner certification. 
                    I specialize in designing scalable batch and streaming pipelines, data warehousing, and 
                    cloud-native solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I bring DevOps expertise for reliable production deployments, ensuring data systems 
                    are not just functional but robust and maintainable.
                  </p>
                </div>
              </div>

              {/* Personal Touch */}
              <div className="space-y-6">
                <div className="project-card">
                  <h2 className="text-2xl font-semibold mb-4 text-primary">
                    Beyond the Code
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Beyond data, I love the gym, books, and Formula 1 — passions that shape my 
                    consistency, focus, and speed.
                  </p>
                  
                  {/* Icons Row */}
                  <div className="flex justify-center gap-8">
                    <div className="text-center group">
                      <div className="p-4 bg-secondary rounded-full mb-2 group-hover:bg-primary/20 transition-colors duration-300">
                        <Book size={24} className="text-primary mx-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground">Books</p>
                    </div>
                    <div className="text-center group">
                      <div className="p-4 bg-secondary rounded-full mb-2 group-hover:bg-primary/20 transition-colors duration-300">
                        <Dumbbell size={24} className="text-primary mx-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground">Gym</p>
                    </div>
                    <div className="text-center group">
                      <div className="p-4 bg-secondary rounded-full mb-2 group-hover:bg-primary/20 transition-colors duration-300">
                        <Zap size={24} className="text-primary mx-auto" />
                      </div>
                      <p className="text-sm text-muted-foreground">F1 & Bikes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">AWS</div>
                <p className="text-muted-foreground">Cloud Practitioner</p>
              </div>
              <div className="project-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">CS</div>
                <p className="text-muted-foreground">Degree Background</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
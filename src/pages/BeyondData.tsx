import { Book, Dumbbell, Zap, Target, BookOpen, Trophy } from "lucide-react";

const BeyondData = () => {
  const interests = [
    {
      icon: <Dumbbell size={48} />,
      title: "Gym & Fitness",
      subtitle: "Strength & Consistency",
      description: "Regular training builds the discipline and resilience that directly translates to tackling complex data challenges. Physical consistency mirrors professional reliability.",
      benefits: ["Discipline", "Consistency", "Mental Clarity", "Stress Management"],
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: <Book size={48} />,
      title: "Reading & Learning",
      subtitle: "Continuous Learning",
      description: "Constantly exploring new technologies, methodologies, and industry trends. From technical documentation to leadership books, knowledge fuels innovation.",
      benefits: ["Technical Growth", "Industry Insights", "Problem Solving", "Innovation"],
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: <Zap size={48} />,
      title: "Formula 1 & Bikes",
      subtitle: "Speed & Precision",
      description: "The precision engineering in F1 and motorcycles mirrors the attention to detail needed in data architecture. Speed meets accuracy in both domains.",
      benefits: ["Precision", "Performance", "Optimization", "Strategic Thinking"],
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <main className="min-h-screen pt-16">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Beyond Data
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passions that shape my approach to data engineering and life
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* Main Interests */}
          <div className="space-y-12 mb-16">
            {interests.map((interest, index) => (
              <div key={index} className={`project-card overflow-hidden ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:flex items-center gap-8">
                  {/* Icon Section */}
                  <div className="flex-shrink-0 text-center md:text-left mb-6 md:mb-0">
                    <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${interest.color} mb-4`}>
                      <div className="text-primary">
                        {interest.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-primary font-medium">
                      {interest.subtitle}
                    </p>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {interest.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {interest.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefitIndex}
                          className="flex items-center gap-2 p-2 bg-secondary/50 rounded-lg"
                        >
                          <Target size={16} className="text-primary" />
                          <span className="text-sm font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* How It Connects */}
          <div className="project-card text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen size={24} className="text-primary" />
              <h3 className="text-2xl font-bold text-primary">
                The Connection
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              These passions aren't just hobbies—they're the foundation of my professional approach. 
              The discipline from fitness, the curiosity from reading, and the precision from motorsports 
              all contribute to building better data systems and solving complex engineering challenges.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-secondary/30 rounded-lg">
                <Trophy size={24} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Striving for the highest standards in every project
                </p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <Target size={24} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Maintaining laser focus on delivering results
                </p>
              </div>
              <div className="p-4 bg-secondary/30 rounded-lg">
                <Zap size={24} className="text-primary mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Constantly pushing boundaries and exploring new solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BeyondData;
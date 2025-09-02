import React, { useEffect, useRef, useState } from "react";

// --- Main Component ---
const SkillsPage = () => {
  // We've replaced the react-icons with inline SVG code. No installation needed!
  const allSkills = [
    { name: "Python", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-blue-400"><path d="M12.001 2.003c-2.793 0-5.127 1.68-6.166 4.06-3.13.435-5.334 1.91-5.334 3.943 0 2.25 2.418 4.06 5.39 4.06.418 0 .82-.05 1.205-.135.84 2.85 3.42 4.95 6.405 4.95 2.793 0 5.127-1.68 6.166-4.06 3.13-.435 5.334-1.91 5.334-3.943 0-2.25-2.418-4.06-5.39-4.06-.418 0-.82.05-1.205.135-.84-2.85-3.42-4.95-6.405-4.95zm-6.108 8.01c-1.928 0-3.483-1.008-3.483-2.25s1.555-2.25 3.483-2.25S9.376 6.77 9.376 8.013c0 1.24-1.554 2.25-3.483 2.25zm12.216 0c-1.928 0-3.483-1.008-3.483-2.25s1.555-2.25 3.483-2.25c1.93 0 3.484 1.008 3.484 2.25s-1.554 2.25-3.484 2.25z"/></svg> },
    { name: "SQL", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-cyan-500"><path d="M4.222 3.81a.75.75 0 0 1 1.06 0l2.47 2.47H16.5a3.75 3.75 0 0 1 3.75 3.75v.436a.75.75 0 0 1-1.5 0V10.03a2.25 2.25 0 0 0-2.25-2.25H7.752l2.47 2.47a.75.75 0 0 1-1.06 1.06L3.19 5.333a.75.75 0 0 1 0-1.06l1.032-1.032v.57ZM3.75 13.5A3.75 3.75 0 0 1 7.5 9.75h1.286a.75.75 0 0 1 0 1.5H7.5a2.25 2.25 0 0 0-2.25 2.25v.186l-1.5.375V13.5ZM19.778 20.19a.75.75 0 0 1-1.06 0l-2.47-2.47H7.5a3.75 3.75 0 0 1-3.75-3.75v-.436a.75.75 0 0 1 1.5 0v.436a2.25 2.25 0 0 0 2.25 2.25h8.968l-2.47-2.47a.75.75 0 1 1 1.06-1.06l5.972 5.972a.75.75 0 0 1 0 1.06l-1.032 1.032v-.57ZM20.25 10.5a3.75 3.75 0 0 1-3.75 3.75h-1.286a.75.75 0 1 1 0-1.5H16.5a2.25 2.25 0 0 0 2.25-2.25V10.31l1.5-.375v.565Z"/></svg> },
    { name: "Java", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-red-500"><path d="M12.63,21.5a2.24,2.24,0,0,1-1.5-1.12,3.46,3.46,0,0,1-.37-1.48V16.08a.93.93,0,0,0-.93-.94H8.48a.93.93,0,0,0-.94.94v2.82a2.3,2.3,0,0,1-1.13,2.05,2.07,2.07,0,0,1-2.28-.42,2.36,2.36,0,0,1-.58-2.65,7.24,7.24,0,0,1,2.29-4.2,8,8,0,0,1,4.19-2.31,6,6,0,0,1,1.52-.22,3.32,3.32,0,0,0,1.2-.23,1.3,1.3,0,0,0,.75-1.19v-.11a2.81,2.81,0,0,0-1.11-2.39,2.63,2.63,0,0,0-2-.6,3,3,0,0,0-1.17.27,1,1,0,0,1-1.15-.31L7.33,7.56A1,1,0,0,1,8.1,6.23a4.7,4.7,0,0,1,1.86-.42,4.42,4.42,0,0,1,3.22,1,4.8,4.8,0,0,1,1.83,4.1v.22a3.17,3.17,0,0,1-1.8,3,4.45,4.45,0,0,1-1.63.36,9.11,9.11,0,0,0-2.29.35,5.6,5.6,0,0,0-2.8,1.6,4.74,4.74,0,0,0-1.53,2.88,1.74,1.74,0,0,0,.54,1.42,1.5,1.5,0,0,0,1.13.33,1.6,1.6,0,0,0,1.25-.83,4.17,4.17,0,0,0,.41-1.85V18.8a.94.94,0,0,1,1-1h1.36a.94.94,0,0,1,1,1v1.12a2.41,2.41,0,0,1-.2,1,1.3,1.3,0,0,1-1.09.68Z"/></svg> },
    { name: "Bash", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-gray-400"><path d="M4,17.41,8.59,12.83a1,1,0,0,0,0-1.41L4,6.83,5.41,5.41,10,10a1,1,0,0,0,1.41,0L16,5.41,17.41,6.83,12.83,11.41a1,1,0,0,0,0,1.41L17.41,17.41,16,18.83,11.41,14.24a1,1,0,0,0-1.41,0L5.41,18.83ZM20,4H2V2H22V22H20Z" /></svg> },
    { name: "Airflow", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-sky-500"><path d="M12.984 20.375c-1.28 0-2.25-1.025-2.25-2.25 0-1.28 1.024-2.25 2.25-2.25s2.25 1.025 2.25 2.25c0 1.28-.97 2.25-2.25 2.25m-2.22-4.717c-1.465 0-2.58-1.12-2.58-2.635s1.17-2.638 2.58-2.638a2.607 2.607 0 012.578 2.638c0 1.513-1.114 2.635-2.578 2.635m-.05-5.228c-1.63 0-3.033-1.39-3.033-3.09S9.083 4.25 10.713 4.25s3.033 1.336 3.033 3.09-.915 3.092-3.033 3.092m8.312 11.028c-.86 0-1.72-.05-2.525-.05-3.32 0-6.195-2.093-7.518-5.174-1.278-3.034-.582-6.524 1.83-8.85C12.333 3.5 15.153 2.25 18.27 2.25c.86 0 1.666.05 2.47.05v18.752z"/></svg> },
    { name: "Docker", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-blue-500"><path d="M21.12,6.33a3.46,3.46,0,0,0-3.46-2H6.34a3.46,3.46,0,0,0-3.47,2L2,15.11a1,1,0,0,0,1,1.15H3.18a1,1,0,0,0,1-.75L4.8,12h2.81l-.54,3.34a1,1,0,0,0,1,1.15h1.26a1,1,0,0,0,1-.75L11,12h2.8l-.55,3.34a1,1,0,0,0,1,1.15h1.25a1,1,0,0,0,1-.75L16.2,12h2.8l-.54,3.34a1,1,0,0,0,1,1.15H21a1,1,0,0,0,1-1.15ZM8,10.15H5.21l.34-2.09H8Zm4.81,0H10l.34-2.09h2.81Zm4.8,0H14.8l.34-2.09h2.8Z"/></svg> },
    { name: "AWS", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-orange-400"><path d="M12.93,19.34a.5.5,0,0,0,.43-.23l4.3-7.45a.5.5,0,0,0-.43-.77H13.82L15,5.18a.5.5,0,0,0-.43-.77.51.51,0,0,0-.46.22L9.81,12.09a.5.5,0,0,0,.43.77h3.42L12.5,18.57a.5.5,0,0,0,.43.77M21.4,11.53,17.2,4.08a2.5,2.5,0,0,0-4.32,0l-1,1.73-1.66-2.87a2.5,2.5,0,0,0-4.32,0L1.6,11.53a2.5,2.5,0,0,0,0,2.5l4.3,7.45a2.5,2.5,0,0,0,4.32,0l1-1.73,1.66,2.87a2.5,2.5,0,0,0,4.32,0l4.3-7.45a2.5,2.5,0,0,0,0-2.5"/></svg> },
    // You can find more SVGs for your other skills (Spark, Kafka, etc.) from sites like https://simpleicons.org/ or https://svgrasp.com/
    // and add them here in the same format.
  ];

  const coreCompetencies = [
    "Data Engineering & ETL",
    "Cloud Architecture (AWS)",
    "CI/CD & DevOps",
    "Backend Development",
    "Data Warehousing",
    "Stream Processing",
    "Analytics & Visualization",
    "Containerization (Docker & K8s)",
  ];

  const sphereRef = useRef(null);
  const [radius, setRadius] = useState(300);

  // Helper function to generate positions on a sphere
  const getPositionOnSphere = (index, total, radius) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    
    const x = radius * Math.cos(theta) * Math.sin(phi);
    const y = radius * Math.sin(theta) * Math.sin(phi);
    const z = radius * Math.cos(phi);

    return { x, y, z };
  };

  // Adjust radius for smaller screens
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadius(150); // Smaller radius for mobile
      } else {
        setRadius(300); // Default radius for desktop
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);
  
  // Mouse movement effect
  useEffect(() => {
    const sphere = sphereRef.current;
    if (!sphere) return;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
      sphere.style.transform = `rotateX(${-mouseY * 5}deg) rotateY(${mouseX * 5}deg)`;
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen pt-16 overflow-hidden">
      <div className="section-padding">
        <div className="container-max">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A constellation of technologies I use to build robust, scalable data solutions.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* 3D Skill Sphere */}
          <div className="relative flex items-center justify-center h-[400px] md:h-[700px] w-full mb-16">
            <div 
              ref={sphereRef}
              className="relative w-full h-full"
              style={{
                transformStyle: "preserve-3d",
                animation: "spin 25s linear infinite",
              }}
            >
              {allSkills.map((skill, index) => {
                const { x, y, z } = getPositionOnSphere(index, allSkills.length, radius);
                return (
                  <div
                    key={index}
                    className="skill-icon absolute flex flex-col items-center justify-center p-3 rounded-lg bg-secondary/80 backdrop-blur-sm shadow-lg border border-primary/20"
                    style={{
                      transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                    }}
                  >
                    {skill.icon}
                    <span className="text-xs mt-2 font-semibold text-foreground hidden md:block">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Core Competencies Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-primary mb-8">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {coreCompetencies.map((comp, index) => (
                <div
                  key={index}
                  className="skill-badge px-4 py-2 text-base"
                >
                  {comp}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Add keyframes for animation in your global CSS file */}
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotateY(0deg) rotateX(0deg);
          }
          to {
            transform: rotateY(360deg) rotateX(360deg);
          }
        }
      `}</style>
    </main>
  );
};

export default SkillsPage;
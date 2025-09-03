import React, { useEffect, useRef, useState } from "react";

// Define a type for a single skill object for type safety
interface Skill {
  name: string;
  category: string;
  icon: React.ReactNode; // SVGs are valid React nodes
}

// The component is explicitly typed as a React Functional Component
const SkillsPage: React.FC = () => {
  // The array is typed using our Skill interface
  const allSkills: Skill[] = [
    { name: "Python", category: "Programming", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-blue-400"><path d="M12.001 2.003c-2.793 0-5.127 1.68-6.166 4.06-3.13.435-5.334 1.91-5.334 3.943 0 2.25 2.418 4.06 5.39 4.06.418 0 .82-.05 1.205-.135.84 2.85 3.42 4.95 6.405 4.95 2.793 0 5.127-1.68 6.166-4.06 3.13-.435 5.334 1.91 5.334-3.943 0-2.25-2.418-4.06-5.39-4.06-.418 0-.82-.05-1.205-.135-.84-2.85-3.42-4.95-6.405-4.95zm-6.108 8.01c-1.928 0-3.483-1.008-3.483-2.25s1.555-2.25 3.483-2.25S9.376 6.77 9.376 8.013c0 1.24-1.554 2.25-3.483 2.25zm12.216 0c-1.928 0-3.483-1.008-3.483-2.25s1.555-2.25 3.483-2.25c1.93 0 3.484 1.008 3.484 2.25s-1.554 2.25-3.484 2.25z"/></svg> },
    { name: "SQL", category: "Data", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-cyan-500"><path d="M4.222 3.81a.75.75 0 0 1 1.06 0l2.47 2.47H16.5a3.75 3.75 0 0 1 3.75 3.75v.436a.75.75 0 0 1-1.5 0V10.03a2.25 2.25 0 0 0-2.25-2.25H7.752l2.47 2.47a.75.75 0 0 1-1.06 1.06L3.19 5.333a.75.75 0 0 1 0-1.06l1.032-1.032v.57ZM3.75 13.5A3.75 3.75 0 0 1 7.5 9.75h1.286a.75.75 0 0 1 0 1.5H7.5a2.25 2.25 0 0 0-2.25 2.25v.186l-1.5.375V13.5ZM19.778 20.19a.75.75 0 0 1-1.06 0l-2.47-2.47H7.5a3.75 3.75 0 0 1-3.75-3.75v-.436a.75.75 0 0 1 1.5 0v.436a2.25 2.25 0 0 0 2.25 2.25h8.968l-2.47-2.47a.75.75 0 1 1 1.06-1.06l5.972 5.972a.75.75 0 0 1 0 1.06l-1.032 1.032v-.57ZM20.25 10.5a3.75 3.75 0 0 1-3.75 3.75h-1.286a.75.75 0 1 1 0-1.5H16.5a2.25 2.25 0 0 0 2.25-2.25V10.31l1.5-.375v.565Z"/></svg> },
    { name: "Java", category: "Programming", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-red-500"><path d="M12.63,21.5a2.24,2.24,0,0,1-1.5-1.12,3.46,3.46,0,0,1-.37-1.48V16.08a.93.93,0,0,0-.93-.94H8.48a.93.93,0,0,0-.94.94v2.82a2.3,2.3,0,0,1-1.13,2.05,2.07,2.07,0,0,1-2.28-.42,2.36,2.36,0,0,1-.58-2.65,7.24,7.24,0,0,1,2.29-4.2,8,8,0,0,1,4.19-2.31,6,6,0,0,1,1.52-.22,3.32,3.32,0,0,0,1.2-.23,1.3,1.3,0,0,0,.75-1.19v-.11a2.81,2.81,0,0,0-1.11-2.39,2.63,2.63,0,0,0-2-.6,3,3,0,0,0-1.17.27,1,1,0,0,1-1.15-.31L7.33,7.56A1,1,0,0,1,8.1,6.23a4.7,4.7,0,0,1,1.86-.42,4.42,4.42,0,0,1,3.22,1,4.8,4.8,0,0,1,1.83,4.1v.22a3.17,3.17,0,0,1-1.8,3,4.45,4.45,0,0,1-1.63.36,9.11,9.11,0,0,0-2.29.35,5.6,5.6,0,0,0-2.8,1.6,4.74,4.74,0,0,0-1.53,2.88,1.74,1.74,0,0,0,.54,1.42,1.5,1.5,0,0,0,1.13.33,1.6,1.6,0,0,0,1.25-.83,4.17,4.17,0,0,0,.41-1.85V18.8a.94.94,0,0,1,1-1h1.36a.94.94,0,0,1,1,1v1.12a2.41,2.41,0,0,1-.2,1,1.3,1.3,0,0,1-1.09.68Z"/></svg> },
    { name: "Airflow", category: "Data", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-sky-500"><path d="M12.984 20.375c-1.28 0-2.25-1.025-2.25-2.25 0-1.28 1.024-2.25 2.25-2.25s2.25 1.025 2.25 2.25c0 1.28-.97 2.25-2.25 2.25m-2.22-4.717c-1.465 0-2.58-1.12-2.58-2.635s1.17-2.638 2.58-2.638a2.607 2.607 0 012.578 2.638c0 1.513-1.114 2.635-2.578 2.635m-.05-5.228c-1.63 0-3.033-1.39-3.033-3.09S9.083 4.25 10.713 4.25s3.033 1.336 3.033 3.09-.915 3.092-3.033 3.092m8.312 11.028c-.86 0-1.72-.05-2.525-.05-3.32 0-6.195-2.093-7.518-5.174-1.278-3.034-.582-6.524 1.83-8.85C12.333 3.5 15.153 2.25 18.27 2.25c.86 0 1.666.05 2.47.05v18.752z"/></svg> },
    { name: "Docker", category: "DevOps", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-blue-500"><path d="M21.12,6.33a3.46,3.46,0,0,0-3.46-2H6.34a3.46,3.46,0,0,0-3.47,2L2,15.11a1,1,0,0,0,1,1.15H3.18a1,1,0,0,0,1-.75L4.8,12h2.81l-.54,3.34a1,1,0,0,0,1,1.15h1.26a1,1,0,0,0,1-.75L11,12h2.8l-.55,3.34a1,1,0,0,0,1,1.15h1.25a1,1,0,0,0,1-.75L16.2,12h2.8l-.54,3.34a1,1,0,0,0,1,1.15H21a1,1,0,0,0,1-1.15ZM8,10.15H5.21l.34-2.09H8Zm4.81,0H10l.34-2.09h2.81Zm4.8,0H14.8l.34-2.09h2.8Z"/></svg> },
    { name: "AWS", category: "Cloud", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-orange-400"><path d="M12.93,19.34a.5.5,0,0,0,.43-.23l4.3-7.45a.5.5,0,0,0-.43-.77H13.82L15,5.18a.5.5,0,0,0-.43-.77.51.51,0,0,0-.46.22L9.81,12.09a.5.5,0,0,0,.43.77h3.42L12.5,18.57a.5.5,0,0,0,.43.77M21.4,11.53,17.2,4.08a2.5,2.5,0,0,0-4.32,0l-1,1.73-1.66-2.87a2.5,2.5,0,0,0-4.32,0L1.6,11.53a2.5,2.5,0,0,0,0,2.5l4.3,7.45a2.5,2.5,0,0,0,4.32,0l1-1.73,1.66,2.87a2.5,2.5,0,0,0,4.32,0l4.3-7.45a2.5,2.5,0,0,0,0-2.5"/></svg> },
    { name: "Kubernetes", category: "DevOps", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-blue-700"><path d="M12,2A10,10,0,0,0,2,12a9.9,9.9,0,0,0,2.59,6.79L12,22l7.41-3.21A9.9,9.9,0,0,0,22,12,10,10,0,0,0,12,2Zm5.71,15.7-4-1.71a1,1,0,0,0-.71,0l-4,1.71L12,19.29ZM13,12.5l4,1.71V8.5l-4-1.71Zm-2,0V6.79l-4,1.71v5.71Z" /></svg> },
    { name: "Power BI", category: "Analytics", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-yellow-500"><path d="M3,3V21H21V3ZM11.25,17.25H7.5V7.5h3.75Zm6,0H13.5v-3h3.75Zm0-4.5H13.5v-6h3.75Z" /></svg> },
    { name: "React", category: "Programming", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="40" height="40" className="text-sky-400"><circle cx="12" cy="12" r="2"/><path d="M20.84,8.19A10,10,0,1,0,12,22V20a8,8,0,1,1,5.66-2.34L16.2,19.12a5.92,5.92,0,0,0-8.8.2,6,6,0,1,0,4.24,10.24l1.42,1.42A8,8,0,0,1,12,20V22a10,10,0,0,0,8.84-13.81"/><path d="M12,6a6,6,0,0,0-4.24,10.24l1.42,1.42A8,8,0,0,1,12,4V2a10,10,0,0,0-8.84,13.81L4.6,14.34A8,8,0,1,1,12,20v2A10,10,0,0,0,12,2Z" /></svg> }
  ];

  const skillCategories: string[] = ["All", "Programming", "Data", "Cloud", "DevOps", "Analytics"];
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Type useRef for DOM elements
  const sphereContainerRef = useRef<HTMLDivElement | null>(null);
  const sphereRef = useRef<HTMLDivElement | null>(null);
  const [radius, setRadius] = useState<number>(300);

  // Type useRef for mutable object values
  const rotation = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const rotationSpeed = useRef<{ x: number; y: number }>({ x: 0, y: 0.0003 });
  const lastMousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDragging = useRef<boolean>(false);

  useEffect(() => {
    const updateRadius = () => setRadius(window.innerWidth < 768 ? 150 : 250);
    updateRadius();
    window.addEventListener('resize', updateRadius);

    const container = sphereContainerRef.current;
    if (!container) return;

    // Type the event parameter for event handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      container.style.cursor = 'grabbing';
    };
    const handleMouseUp = () => {
      isDragging.current = false;
      container.style.cursor = 'grab';
    };
    const handleMouseLeave = () => {
      isDragging.current = false;
      container.style.cursor = 'grab';
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      rotationSpeed.current.y = deltaX * 0.0005;
      rotationSpeed.current.x = -deltaY * 0.0005;
      lastMousePos.current = { x: e.clientX, y: e.clientY };
    };
    
    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const animate = () => {
      rotation.current.x += rotationSpeed.current.x;
      rotation.current.y += rotationSpeed.current.y;

      if (!isDragging.current) {
        rotationSpeed.current.x *= 0.98;
        rotationSpeed.current.y *= 0.98;
      }
      
      rotation.current.x %= 360;
      rotation.current.y %= 360;

      if (sphereRef.current) {
        sphereRef.current.style.transform = `rotateX(${rotation.current.x}deg) rotateY(${rotation.current.y}deg)`;
      }

      document.querySelectorAll('.skill-icon-inner').forEach(icon => {
        // Since we are querying the DOM directly, we must cast the element to HTMLElement
        (icon as HTMLElement).style.transform = `rotateY(${-rotation.current.y}deg) rotateX(${-rotation.current.x}deg)`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', updateRadius);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getPositionOnSphere = (index: number, total: number, r: number) => {
    const phi = Math.acos(-1 + (2 * index) / total);
    const theta = Math.sqrt(total * Math.PI) * phi;
    const x = r * Math.cos(theta) * Math.sin(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(phi);
    return { x, y, z };
  };

  return (
    <main className="min-h-screen pt-16 bg-background text-foreground">
      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
              My Technical Universe
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              An interactive constellation of the tools and technologies I use to build robust, scalable solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-primary mb-4">Core Competencies</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                I specialize in transforming data into actionable insights by designing and implementing scalable data pipelines, robust cloud infrastructure, and intuitive analytics platforms.
              </p>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Filter by Category:</h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategories.map(cat => (
                    <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeCategory === cat ? 'bg-primary text-primary-foreground shadow-lg' : 'bg-secondary hover:bg-primary/20'}`}>
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div ref={sphereContainerRef} className="skill-nexus-container">
              <div ref={sphereRef} className="skill-sphere">
                {allSkills.map((skill, index) => {
                  const { x, y, z } = getPositionOnSphere(index, allSkills.length, radius);
                  const isActive = activeCategory === 'All' || activeCategory === skill.category;
                  return (
                    <div key={index} className="skill-node" style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}>
                      <div className={`skill-icon-inner ${isActive ? 'active' : ''}`}>
                        {skill.icon}
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        /* Same CSS as before */
        .skill-nexus-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 500px;
            width: 100%;
            cursor: grab;
            perspective: 1200px;
        }
        .skill-sphere {
            position: relative;
            width: 1px;
            height: 1px;
            transform-style: preserve-3d;
        }
        .skill-node {
            position: absolute;
            transform-style: preserve-3d;
        }
        .skill-icon-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0.75rem;
            border-radius: 0.5rem;
            background-color: rgba(30, 41, 59, 0.7);
            backdrop-filter: blur(4px);
            border: 1px solid rgba(56, 189, 248, 0.2);
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: opacity 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .skill-icon-inner.active {
            opacity: 1;
            transform: scale(1);
        }
        .skill-icon-inner:not(.active) {
            opacity: 0.15;
            transform: scale(0.8);
        }
        .skill-icon-inner:hover {
            transform: scale(1.2) !important;
            box-shadow: 0 0 20px #0ea5e9;
            z-index: 10;
        }
        .skill-name {
            margin-top: 0.5rem;
            font-size: 0.75rem;
            font-weight: 600;
            display: none;
        }
        @media (min-width: 768px) {
            .skill-name {
                display: block;
            }
        }
      `}</style>
    </main>
  );
};

export default SkillsPage;
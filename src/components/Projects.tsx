
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with NextJS, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["NextJS", "NodeJS", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using React, Firebase, and Tailwind CSS.",
      tech: ["ReactJS", "Firebase", "TailwindCSS", "Real-time"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Mobile Fitness App",
      description: "Cross-platform mobile app for fitness tracking and workout planning, developed with Flutter and integrated with health APIs.",
      tech: ["Flutter", "Kotlin", "Health APIs", "SQLite"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence, featuring interactive charts and data visualization components.",
      tech: ["ReactJS", "Python", "FastAPI", "Charts.js"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="glass-effect hover:bg-white/10 transition-all duration-300 overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Link className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Code className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

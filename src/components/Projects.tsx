
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Healthcare Website",
      description: "A comprehensive healthcare platform providing medical services and patient care solutions with modern design and user-friendly interface.",
      tech: ["ReactJS", "NextJS", "TailwindCSS", "Healthcare"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://jaxpremierhealth.com"
    },
    {
      title: "Feet Content Selling",
      description: "An innovative platform for specialized content selling with secure payment processing and user management features.",
      tech: ["ReactJS", "NodeJS", "Payment Integration", "E-commerce"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://magnificentsoles.com"
    },
    {
      title: "Ecommerce Platform",
      description: "A full-featured e-commerce solution with product management, shopping cart, payment processing, and order management system.",
      tech: ["ReactJS", "NodeJS", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://jymcoglobal.com"
    },
    {
      title: "Mobile Fitness App",
      description: "A comprehensive fitness application offering workout plans, progress tracking, and health monitoring features for mobile users.",
      tech: ["Flutter", "Mobile Development", "Health APIs", "SQLite"],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://kla.co.za/"
    },
    {
      title: "Healthcare-Agency Connector",
      description: "A platform that seamlessly connects healthcare professionals with staffing agencies, streamlining the recruitment process for medical facilities.",
      tech: ["ReactJS", "NodeJS", "Healthcare", "Database"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://shiftllink-care-connect.vercel.app"
    },
    {
      title: "DropDeli",
      description: "A modern delivery platform providing efficient logistics solutions for businesses and customers with real-time tracking and management.",
      tech: ["ReactJS", "Laravel", "MySQL", "Logistics"],
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "#"
    },
    {
      title: "MenuFlixer",
      description: "An innovative restaurant menu management system that helps restaurants create, manage, and optimize their digital menus for better customer experience.",
      tech: ["ReactJS", "PHP", "MySQL", "Restaurant Tech"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://menuflixer.com"
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
          <p className="text-sm text-muted-foreground mt-2">
            *These are just a few of my projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="glass-effect hover:bg-white/10 transition-all duration-300 overflow-hidden animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <CardHeader className="flex-1">
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
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        disabled={project.liveUrl === "#"}
                      >
                        <Link className="w-4 h-4 mr-2" />
                        {project.liveUrl === "#" ? "Coming Soon" : "Live Demo"}
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

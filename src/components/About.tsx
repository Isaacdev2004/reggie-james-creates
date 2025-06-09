
import { Card, CardContent } from '@/components/ui/card';
import { Code, Star, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h3 className="text-2xl font-semibold mb-6">
              Building the Future, One Line of Code at a Time
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Reggie James, a full-stack developer with a passion for creating fast, scalable, 
              and user-friendly applications. I specialize in modern web and mobile technologies, 
              bringing ideas to life through clean, efficient code.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether it's a responsive website, a mobile app, or a complex web application, 
              I deliver high-performance solutions tailored to your specific needs. My expertise 
              spans across frontend, backend, and mobile development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Let's collaborate to build something amazing together!
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="glass-effect hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Clean Code</h4>
                </div>
                <p className="text-muted-foreground">
                  Writing maintainable, scalable, and efficient code that stands the test of time.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Quality First</h4>
                </div>
                <p className="text-muted-foreground">
                  Delivering high-quality solutions that exceed expectations and drive results.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-primary mr-3" />
                  <h4 className="text-lg font-semibold">Client Focus</h4>
                </div>
                <p className="text-muted-foreground">
                  Building strong relationships and understanding client needs to deliver perfect solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

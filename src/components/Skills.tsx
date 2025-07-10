
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["ReactJS", "NextJS", "HTML", "CSS", "JavaScript", "TypeScript", "TailwindCSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend", 
      skills: ["NodeJS", "Python", "FastAPI", "Flask", "PHP", "Laravel"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Kotlin", "React Native"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Database & Cloud",
      skills: ["Firebase", "MongoDB", "PostgreSQL", "AWS", "Google Cloud"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="glass-effect hover:bg-white/10 transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{category.title[0]}</span>
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

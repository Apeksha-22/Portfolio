
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I write maintainable, scalable code following best practices and modern standards."
    },
    {
      icon: Palette,
      title: "UI/UX Focus",
      description: "Creating beautiful, intuitive interfaces that users love to interact with."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency across all devices."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Crafting Digital Experiences
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I'm a passionate developer with over 3 years of experience building web applications
              that combine beautiful design with robust functionality. I love turning complex problems
              into simple, elegant solutions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "DSA & Problem Solving",
      description: "I solve DSA problems daily using C++ to strengthen my algorithmic thinking and coding skills."
    },
    {
      icon: Palette,
      title: "Full-Stack Development",
      description: "Building modern web applications with React, Node.js, and MongoDB for complete end-to-end solutions."
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description: "Currently pursuing B.Tech in IT while constantly learning new technologies and frameworks."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Passionate Tech Student
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              I'm Apeksha, currently pursuing B.Tech in Information Technology. I have a deep passion for 
              full-stack web development and enjoy the challenge of solving Data Structures and Algorithms 
              problems on a daily basis.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I use C++ for competitive programming and DSA practice, while leveraging React and Node.js 
              to build dynamic web applications. I believe in continuous learning and staying updated with 
              the latest technologies in the ever-evolving tech landscape.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "C++", "MongoDB", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 dark:bg-slate-800">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-lg">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300">
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


import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Figma", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800 text-center mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

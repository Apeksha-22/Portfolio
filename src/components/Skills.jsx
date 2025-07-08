import { Progress } from "@/components/ui/progress";
import skillCategories from "@/data/skills"; // adjust path as per your structure

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent mb-6 animate-fade-in">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-500 to-teal-500 mx-auto mb-8 rounded-full shadow-lg shadow-blue-500/20"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="text-center mb-8">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700 dark:text-slate-300 font-medium group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-slate-600 dark:text-slate-400 text-sm font-bold bg-slate-100 dark:bg-slate-800/50 px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress
                          value={skill.level}
                          className="h-3 bg-slate-100 dark:bg-slate-800/50 rounded-full overflow-hidden"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

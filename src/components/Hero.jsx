import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              Apeksha
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">B.Tech IT Student</span> who loves
            full-stack web development and solving DSA problems daily.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 text-lg"
              onClick={scrollToAbout}
            >
              Get to know me
            </Button>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-slate-700" asChild>
                <a href="https://github.com/Apeksha-22" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-slate-700" asChild>
                <a href="https://www.linkedin.com/in/apeksha-jain-b95169295" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="hover:bg-blue-50 dark:hover:bg-slate-700" asChild>
                <a href="mailto:morenaapekshajain2209@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      title: "Imagify - AI Image Generation Tool",
      description: "An AI-powered image generation and processing tool with secure authentication, credit-based system, and real-time rendering. Built with MERN stack and Flask-based AI models.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Flask", "Firebase Auth"],
      liveUrl: "#", // Update this with the actual URL
      githubUrl: "#", // Update this with the actual URL
    },
    {
      title: "Professional Alumni Website",
      description: "Enhanced alumni-student interactions with secure authentication, profile management, and real-time updates. Features college-specific authentication and batch-year identification.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind", "MongoDB", "Express", "Node.js"],
      liveUrl: "#", // Update this with the actual URL
      githubUrl: "#", // Update this with the actual URL
    },
    {
      title: "MyChatGPT",
      description: "AI chatbot application using OpenAI API and Next.js for intelligent conversations and user interactions.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Next.js", "OpenAI API", "React", "TypeScript"],
      liveUrl: "https://my-chatgpt-eta-ten.vercel.app/", // Already updated
      githubUrl: "https://github.com/Apeksha-22/MyChatgpt", // Already updated
    },
    {
      title: "E-Commerce Platform",
      description: "A complete e-commerce solution with user authentication, product catalog, cart management, and secure checkout functionality.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "#", // Update this with the actual URL
      githubUrl: "#", // Update this with the actual URL
    },
    {
      title: "Interactive Game Collection",
      description: "Collection of interactive games including Tic-Tac-Toe and Stone-Paper-Scissors with AI opponents, score tracking, and smooth animations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "Game Logic", "AI"],
      liveUrl: "https://tic-tac-toe-sandy-three-21.vercel.app/", // Already updated
      githubUrl: "https://github.com/Apeksha-22/TicTacToe", // Already updated
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 bg-clip-text text-transparent mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-blue-500 to-teal-500 mx-auto mb-8 rounded-full shadow-lg shadow-blue-500/20"></div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work and personal projects with cutting-edge technologies
          </p>
        </div>

        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden bg-white/90 dark:bg-slate-900/90 border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group hover:scale-[1.02] hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                      <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 flex-1 flex flex-col">
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-400 rounded-full text-xs font-medium border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button 
                          size="sm" 
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group/btn" 
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                            Live Demo
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 group/btn" 
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-slate-800/80 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white shadow-xl backdrop-blur-sm" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-slate-800/80 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white shadow-xl backdrop-blur-sm" />
          </Carousel>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

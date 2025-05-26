
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Create a dummy link for resume download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual resume file
    link.download = 'Apeksha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </div>

        <Card className="shadow-lg dark:bg-slate-900 border-2 border-dashed border-blue-200 dark:border-blue-800">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit">
              <FileText className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-2xl text-slate-800 dark:text-white">
              Apeksha's Resume
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Get a comprehensive overview of my education, skills, projects, and experience 
              as a B.Tech IT student passionate about full-stack development and problem-solving.
            </p>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-slate-800 dark:text-white">What's included:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <p className="text-slate-600 dark:text-slate-300">• Educational Background</p>
                  <p className="text-slate-600 dark:text-slate-300">• Technical Skills</p>
                  <p className="text-slate-600 dark:text-slate-300">• Project Details</p>
                </div>
                <div className="space-y-2">
                  <p className="text-slate-600 dark:text-slate-300">• Programming Languages</p>
                  <p className="text-slate-600 dark:text-slate-300">• Development Experience</p>
                  <p className="text-slate-600 dark:text-slate-300">• Contact Information</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 text-lg"
              size="lg"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;

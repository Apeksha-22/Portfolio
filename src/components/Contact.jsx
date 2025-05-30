import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Send, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      emailjs.init("HD31RP0wdTdW9TBTI");
      console.log("EmailJS initialized successfully");
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Apeksha',
      reply_to: formData.email
    };

    console.log("Sending email with params:", templateParams);

    try {
      const response = await emailjs.send(
        "service_nlftouh",
        "template_ids2v2q",
        templateParams,
        "HD31RP0wdTdW9TBTI"
      );
      
      console.log("Email sent successfully:", response);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error details:', error);
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "morenaapekshajain2209@gmail.com",
      href: "mailto:morenaapekshajain2209@gmail.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Apeksha-22",
      href: "https://github.com/Apeksha-22"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/apeksha-jain",
      href: "https://www.linkedin.com/in/apeksha-jain-b95169295"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
              Let's connect and create something amazing
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I'm always excited about new opportunities, interesting projects, and connecting with 
              fellow developers. Whether you have a project idea, want to collaborate, or just want 
              to chat about technology, feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <item.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">{item.title}</p>
                    <p>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <Card className="shadow-lg dark:bg-slate-800">
            <CardHeader>
              <CardTitle className="text-2xl text-slate-800 dark:text-white">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="resize-none dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 h-12"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400">
            © 2024 Apeksha. Built with ❤️ using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

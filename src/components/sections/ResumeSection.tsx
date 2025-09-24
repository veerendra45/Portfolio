import { motion } from "framer-motion";
import { Download, FileText, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  const handleDownloadResume = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/Veerendra-Resume.pdf';
    link.download = 'Veerendra-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "veerendra.dev@example.com",
      link: "mailto:veerendra.dev@example.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bangalore, India",
      link: null,
    },
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Download My <span className="text-primary">Resume</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a detailed overview of my education, experience, skills, and achievements in a comprehensive document
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-gradient rounded-3xl p-8 lg:p-12 shadow-elegant border border-border/50"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Resume Preview Section */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="hero-gradient rounded-2xl p-8 text-white">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-white/20 rounded-full p-3">
                        <FileText className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Professional Resume</h3>
                        <p className="text-white/80">Comprehensive career overview</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <span className="text-white/90">Education & Academic Achievements</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <span className="text-white/90">Technical Skills & Proficiencies</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <span className="text-white/90">Project Portfolio & Experience</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                        <span className="text-white/90">Certifications & Awards</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-accent/30 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary/30 rounded-full"
                  />
                </motion.div>
              </div>

              {/* Download & Contact Section */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Button
                    onClick={handleDownloadResume}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    Download Resume (PDF)
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-3">
                    Last updated: September 2024 • File size: ~250KB
                  </p>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h4 className="text-xl font-semibold text-foreground">Contact Information</h4>
                  <div className="space-y-3">
                    {contactInfo.map((contact) => (
                      <div key={contact.label} className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg text-primary">
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{contact.label}</p>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              className="text-foreground hover:text-primary transition-colors font-medium"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <span className="text-foreground font-medium">{contact.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4 p-4 bg-secondary/50 rounded-xl"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">B.Tech</div>
                    <div className="text-sm text-muted-foreground">Computer Science</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">9.2</div>
                    <div className="text-sm text-muted-foreground">CGPA</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
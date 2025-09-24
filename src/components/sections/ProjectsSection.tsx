import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/LeaderBoardImg.png";
import project2Image from "@/assets/QoutesImg.png";
import project3Image from "@/assets/ecommerImg.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "DSA LeaderBoard",
      description: "A web application to track and display coding performance on platforms like LeetCode and GeeksforGeeks. Features a dynamic leaderboard, problem-solving stats, and user rankings. Built with React.js, Java, and MySQL, focusing on real-time updates and an interactive, user-friendly interface.",
      image: project1Image,
      technologies: ["React", "SpringBoot", "MySQL", "Security"],
      githubUrl: "https://github.com/veerendra45/DSA-LeaderBoard",
      featured: true,
    },
    {
      id: 2,
      title: "Quotes Explorer",
      description: "A web application that allows users to browse, search, and explore a wide collection of quotes. Built with React.js and integrated with a quotes API for dynamic content delivery.",
      image: project2Image,
      technologies: ["React", "SpringBoot", "API"],
      githubUrl: "https://github.com/veerendra45/QuotesExplorer",
      featured: true,
    },
    {
      id: 3,
      title: "E-commerce site",
      description: "A React.js web application that simulates a food ordering platform using the live Swiggy API. Features dynamic restaurant listings, menu exploration, and interactive user interface with real-time data fetched directly from the API. Built entirely in React.js, focusing on responsive design and seamless API integration.",
      image: project3Image,
      technologies: ["React", "Live Swiggy API"],
      githubUrl: "https://github.com/veerendra45/Namasta-React",
      featured: true,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating my skills in full-stack development and innovative problem-solving
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group card-gradient rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 border border-border/50 ${
                project.featured && index === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Button
                    size="icon"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/80 text-secondary-foreground text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://github.com/veerendra45', '_blank')}
            className="group"
          >
            <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
            View More Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
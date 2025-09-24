import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  GitBranch,
  Server,
  Palette,
  Zap,
} from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      technologies: ["Node.js", "Express", "Python", "Java", "REST APIs", "GraphQL"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Database & Storage",
      icon: <Database className="w-8 h-8" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "Supabase"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["React Native", "Flutter", "Android", "iOS", "PWA", "Expo"],
      color: "from-pink-500 to-rose-500",
    },
    {
      category: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      technologies: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"],
      color: "from-orange-500 to-amber-500",
    },
    {
      category: "DevOps & Tools",
      icon: <GitBranch className="w-8 h-8" />,
      technologies: ["Git", "Docker", "AWS", "Vercel", "CI/CD", "Linux"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      category: "Design & UI/UX",
      icon: <Palette className="w-8 h-8" />,
      technologies: ["Figma", "Adobe XD", "Photoshop", "Canva", "Wireframing", "Prototyping"],
      color: "from-violet-500 to-purple-500",
    },
    {
      category: "Other Skills",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["Problem Solving", "Team Leadership", "Agile", "Testing", "Performance", "Security"],
      color: "from-red-500 to-pink-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group card-gradient rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50"
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} mb-4 text-white`}>
                {skill.icon}
              </div>

              {/* Category title */}
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {skill.category}
              </h3>

              {/* Technologies */}
              <div className="space-y-2">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
import { motion } from "framer-motion";
import { Trophy, Award, Star, Zap, Target, Code } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "DSA Problmes solved",
      description: "Solved 1000+ problems on various platforms.",
      // date: "January 2024",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Certificate",
      description: "Java Full Stack Development",
      date: "December 2024",
      color: "from-teal-500 to-cyan-500",
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey in computer science and software development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group card-gradient rounded-2xl p-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border/50"
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${achievement.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h3>
                  <span className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
                    {achievement.date}
                  </span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative elements */}
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color}`} />
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color} opacity-60`} />
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${achievement.color} opacity-30`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-16 p-8 card-gradient rounded-2xl shadow-card"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-2"
            >
              15+
            </motion.div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-2"
            >
              50+
            </motion.div>
            <p className="text-muted-foreground">GitHub Commits</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-primary mb-2"
            >
              90%
            </motion.div>
            <p className="text-muted-foreground">Academic Score</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
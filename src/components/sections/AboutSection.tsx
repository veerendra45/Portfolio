import { motion } from "framer-motion";
import profileImage from "@/assets/profile-picture.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-elegant border-4 border-primary/20">
                <img
                  src={profileImage}
                  alt="Veerendra Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-30"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-bold mb-4"
              >
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Veerendra
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground mb-6"
              >
                Computer Science Engineering Student
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              I'm a passionate computer science student with a strong foundation in 
              web development and software engineering. I love creating innovative 
              solutions and building applications that make a positive impact. 
              Currently pursuing my degree while working on various projects that 
              combine creativity with technical excellence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              When I'm not coding, you can find me exploring new technologies, 
              participating in hackathons, or contributing to open-source projects. 
              I believe in continuous learning and always strive to push the 
              boundaries of what's possible with code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                Full-Stack Developer
              </div>
              <div className="px-4 py-2 bg-accent/10 rounded-full text-accent font-medium">
                Problem Solver
              </div>
              <div className="px-4 py-2 bg-secondary/80 rounded-full text-secondary-foreground font-medium">
                Team Player
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
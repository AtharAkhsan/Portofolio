
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
    const projects = [
        {
            title: 'Poros Mobil',
            date: 'March 2026',
            description: 'A responsive used car sales platform featuring inventory management and an authenticated admin dashboard with protected routing.',
            stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
            github: 'https://github.com/atharakhsan/porosmobil',
            demo: 'https://porosmobil.vercel.app',
        },
        {
            title: 'Final Exam',
            date: 'Oct - Dec 2025',
            description: 'A 2D educational top-down game simulating academic pressure with robust state machines and modular dialogue systems.',
            stack: ['Godot Engine', 'GDScript', 'Pixel Art'],
            github: 'https://github.com/atharakhsan/final-exam',
            demo: 'https://atharakhsan.itch.io/final-exam',
        },
        {
            title: 'Rumah Aman',
            date: 'Oct - Dec 2025',
            description: 'A social-impact mobile application connecting victims of violence with support services, featuring an AI-powered Chatbot.',
            stack: ['FIrebase Firestore', 'AI Integration'],
            github: 'https://github.com/DBizma/PAPB-Rumah-Aman',
            demo: '',
        },
    ];

    return (
        <section id="projects" className="py-24 bg-background border-t border-accent-border/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
                        <span className="text-accent">&gt;</span>QUEST_LOG
                    </h2>
                    <div className="w-24 h-1 bg-accent-muted"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col justify-between p-6 rounded-xl border border-accent-border/50 bg-accent-muted/5 hover:bg-accent-muted/10 hover:border-foreground/50 transition-all duration-300 h-full"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-accent-muted/20 rounded-lg text-foreground/70 group-hover:text-foreground transition-colors border border-accent-border/30">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                                    </div>
                                    <div className="flex gap-3 text-foreground/40">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Github Repository">
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="External Link">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-xs font-mono text-foreground/50 mb-4">
                                    {project.date}
                                </p>

                                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-accent-border/30">
                                {project.stack.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs font-mono text-foreground/80 bg-accent-muted/30 px-2.5 py-1 rounded border border-accent-border/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

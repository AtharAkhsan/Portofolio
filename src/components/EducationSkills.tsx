
import { motion } from 'framer-motion';

export function EducationSkills() {
    const skills = [
        {
            category: 'Frontend',
            items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
        },
        {
            category: 'Backend & Tools',
            items: ['Node.js', 'MySQL', 'Supabase', 'Git'],
        },
        {
            category: 'Game & Media',
            items: ['Godot Engine', 'Pixel Art', 'UI/UX'],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-background border-t border-accent-border/30">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="text-accent">&gt;</span>
                        <span className="break-words">EDUCATION_AND_SKILLS</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent-muted"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground/90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                            Academic Background
                        </h3>

                        <div className="p-6 rounded-xl border border-accent-border/50 bg-accent-muted/10 hover:border-accent-border transition-colors">
                            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-4 gap-2">
                                <h4 className="text-lg font-bold text-foreground">Universitas Brawijaya</h4>
                                <span className="font-mono text-sm px-3 py-1 bg-accent-muted/30 text-foreground/80 rounded-full border border-accent-border/50 self-start xl:self-auto">
                                    GPA: 3.55/4.00
                                </span>
                            </div>
                            <p className="text-foreground/80 font-medium">Bachelor of Computer Science</p>
                            <div className="mt-6 text-sm text-foreground/60 border-t border-accent-border/30 pt-4 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent/50"></span>
                                Informatics Engineering Undergraduate
                            </div>
                        </div>
                    </motion.div>

                    {/* Skills Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-foreground/90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                            Technical Arsenal
                        </h3>

                        <div className="space-y-8">
                            {skills.map((skillGroup, index) => (
                                <div key={index}>
                                    <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                                        {skillGroup.category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, skillIndex) => (
                                            <span
                                                key={skillIndex}
                                                className="px-4 py-2 text-sm font-medium rounded-full cursor-default border border-accent-border/60 bg-background text-foreground/80 hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 select-none shadow-sm flex items-center"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

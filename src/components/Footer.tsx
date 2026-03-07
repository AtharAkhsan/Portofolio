
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="py-12 bg-background border-t border-accent-border/30 relative mt-auto">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <h2 className="font-mono text-2xl md:text-3xl font-bold text-foreground mb-4">
                        Ready to start a new co-op campaign?
                    </h2>
                    <p className="text-foreground/60 mb-8 max-w-md">
                        Let's connect and build something extraordinary together.
                    </p>

                    <div className="flex items-center gap-6 mb-12">
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="mailto:atharakhsan9@gmail.com"
                            className="p-3 bg-accent-muted/20 text-foreground hover:text-background hover:bg-foreground rounded-full transition-colors border border-accent-border/50 shadow-sm"
                            aria-label="Email"
                        >
                            <Mail size={22} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="http://www.linkedin.com/in/athar-iftikhar-akhsan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-accent-muted/20 text-foreground hover:text-background hover:bg-foreground rounded-full transition-colors border border-accent-border/50 shadow-sm"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={22} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/AtharAkhsan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-accent-muted/20 text-foreground hover:text-background hover:bg-foreground rounded-full transition-colors border border-accent-border/50 shadow-sm"
                            aria-label="GitHub"
                        >
                            <Github size={22} />
                        </motion.a>
                    </div>

                    <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-accent-border/20 text-xs text-foreground/40 font-mono">
                        <p className="mb-4 md:mb-0">© {new Date().getFullYear()} ATHAR IFTIKHAR AKHSAN</p>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center gap-2 hover:text-foreground transition-colors uppercase tracking-wider font-semibold"
                        >
                            Back to Start <ArrowUp size={14} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

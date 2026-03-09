
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Subtle minimalist grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 select-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-border bg-accent-muted/30 text-xs font-mono mb-8 text-foreground/80">
                        <span className="w-2 h-2 rounded-full bg-foreground animate-pulse"></span>
                        Available for cooperative campaigns
                    </div>

                    <h1 className="font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 text-foreground">
                        ATHAR IFTIKHAR AKHSAN
                    </h1>

                    <h2 className="text-xl md:text-2xl text-foreground/80 font-medium mb-8">
                        Frontend Developer & Interactive Media Builder
                    </h2>

                    <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/60 mb-12 leading-relaxed">
                        Informatics Engineering undergraduate at Universitas Brawijaya. Bridging the gap between robust web architecture and immersive digital media.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-foreground text-background font-semibold flex items-center justify-center gap-2 hover:bg-accent transition-colors"
                        >
                            Explore My Quests
                            <ArrowRight size={18} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://drive.google.com/file/d/1a0Ms3wQLN61Dzb78YonmvgffA0rgiqtf/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-accent-muted border border-accent-border text-foreground font-semibold flex items-center justify-center gap-2 hover:bg-foreground hover:text-background transition-colors"
                        >
                            <Download size={18} />
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

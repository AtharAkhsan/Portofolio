
import { motion } from 'framer-motion';

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent-border/50"
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" className="font-mono text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors">
                    ATHAR_
                </a>
                <nav className="hidden md:flex gap-8">
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Quests</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </nav>
                <button className="md:hidden text-foreground hover:text-accent transition-colors">
                    <span className="sr-only">Menu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </motion.header>
    );
}

function NavLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full"></span>
        </a>
    );
}

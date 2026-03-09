
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-accent-border/50"
        >
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
                <a href="#" onClick={closeMenu} className="font-mono text-xl font-bold tracking-tight text-foreground hover:text-accent transition-colors z-50">
                    ATHAR_
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8">
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#projects">Quests</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </nav>

                {/* Mobile Hamburger Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-foreground hover:text-accent transition-colors z-50 p-2 -mr-2"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-background md:hidden pt-24 px-6 flex flex-col items-center gap-8"
                    >
                        <MobileNavLink href="#skills" onClick={closeMenu}>Skills</MobileNavLink>
                        <MobileNavLink href="#projects" onClick={closeMenu}>Quests</MobileNavLink>
                        <MobileNavLink href="#contact" onClick={closeMenu}>Contact</MobileNavLink>
                    </motion.div>
                )}
            </AnimatePresence>
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

function MobileNavLink({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className="text-2xl font-mono font-bold text-foreground hover:text-accent transition-colors"
        >
            {children}
        </a>
    );
}

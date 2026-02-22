"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.inner}>
                <a href="#" className={styles.logo}>
                    <span className={styles.logoAccent}>M</span>S
                    <span className={styles.logoDot}>.</span>
                </a>

                <div className={styles.desktopLinks}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                    <a href="#contact" className={`btn btn-primary ${styles.ctaBtn}`}>
                        Let&apos;s Talk
                    </a>
                </div>

                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ""}`}
                onClick={() => setMenuOpen(false)}
            />
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""}`}>
                {navLinks.map((link, i) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className={styles.mobileLink}
                        onClick={handleNavClick}
                        style={{ animationDelay: `${i * 0.07}s` }}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    className={`btn btn-primary ${styles.mobileCta}`}
                    onClick={handleNavClick}
                >
                    Let&apos;s Talk
                </a>
            </div>
        </nav>
    );
}

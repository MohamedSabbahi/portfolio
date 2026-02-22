"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (el) {
            const items = el.querySelectorAll(".fade-up");
            items.forEach((item) => item.classList.add("visible"));
        }
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            {/* Background decoration */}
            <div className={styles.bgDecor}>
                <div className={`${styles.orb} ${styles.orb1}`} />
                <div className={`${styles.orb} ${styles.orb2}`} />
                <div className={`${styles.orb} ${styles.orb3}`} />
                <div className={styles.grid} />
            </div>

            <div className={styles.content}>
                <div className={`fade-up ${styles.greeting}`}>
                    <span className={styles.wave}>👋</span> Hey, I&apos;m
                </div>

                <h1 className={`fade-up fade-up-delay-1 ${styles.name}`}>
                    Mohamed<br />
                    <span className="gradient-text">Sabbahi</span>
                    <span className={styles.cursor}>_</span>
                </h1>

                <p className={`fade-up fade-up-delay-2 ${styles.title}`}>
                    Full Stack Developer
                    <span className={styles.divider}>|</span>
                    Mobile Dev
                    <span className={styles.divider}>|</span>
                    Cloud &amp; AI Enthusiast
                </p>

                <p className={`fade-up fade-up-delay-3 ${styles.tagline}`}>
                    Converting complex problems into clean code.
                </p>

                <div className={`fade-up fade-up-delay-4 ${styles.actions}`}>
                    <a href="#projects" className="btn btn-primary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        Contact Me
                    </a>
                </div>

                <div className={`fade-up fade-up-delay-4 ${styles.scrollHint}`}>
                    <div className={styles.mouse}>
                        <div className={styles.mouseWheel} />
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}

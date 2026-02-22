"use client";

import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="section">
                <div className={styles.grid}>
                    {/* Left — Image / Visual */}
                    <div className={`fade-up ${styles.imageCol}`}>
                        <div className={styles.imageWrapper}>
                            <div className={styles.imagePlaceholder}>
                                <Image
                                    src="/mohamed.png"
                                    alt="Mohamed Sabbahi"
                                    fill
                                    style={{ objectFit: 'cover', borderRadius: 'var(--radius-lg)' }}
                                    priority
                                />
                            </div>
                            <div className={styles.imageGlow} />
                            {/* Floating badges */}
                            <div className={`${styles.badge} ${styles.badge1}`}>
                                <span className={styles.badgeIcon}>🎓</span>
                                <span>Engineering Student</span>
                            </div>
                            <div className={`${styles.badge} ${styles.badge2}`}>
                                <span className={styles.badgeIcon}>🚀</span>
                                <span>Building CivicFix</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — Text Content */}
                    <div className={styles.textCol}>
                        <div className="fade-up">
                            <span className="section-label">About Me</span>
                            <h2 className="section-title">
                                Turning ideas into<br />
                                <span className="gradient-text">digital reality</span>
                            </h2>
                        </div>

                        <p className="fade-up fade-up-delay-1" style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '1.05rem' }}>
                            I am a Computer Engineering student at <strong style={{ color: 'var(--text-primary)' }}>Université Abdelmalek Essaadi</strong> converting complex problems into clean code.
                        </p>

                        <p className="fade-up fade-up-delay-2" style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.05rem' }}>
                            Currently building <strong style={{ color: 'var(--accent-cyan)' }}>CivicFix</strong> — a multi-platform solution for civic engagement. My work spans the full PERN stack and mobile front-end development, including the integration of NLP features.
                        </p>

                        {/* Info Cards */}
                        <div className={`fade-up fade-up-delay-3 ${styles.infoCards}`}>
                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6" />
                                        <polyline points="8 6 2 12 8 18" />
                                    </svg>
                                </div>
                                <div>
                                    <div className={styles.infoLabel}>Stack</div>
                                    <div className={styles.infoValue}>PostgreSQL, Express, React, Node.js, Mobile Dev</div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="2" y1="12" x2="22" y2="12" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className={styles.infoLabel}>Languages</div>
                                    <div className={styles.infoValue}>English, Arabic, Spanish</div>
                                </div>
                            </div>

                            <div className={styles.infoCard}>
                                <div className={styles.infoIcon}>
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <div>
                                    <div className={styles.infoLabel}>Focus</div>
                                    <div className={styles.infoValue}>Cloud Engineering &amp; AI — rapid learning curve</div>
                                </div>
                            </div>
                        </div>

                        <p className="fade-up fade-up-delay-4" style={{ color: 'var(--text-muted)', marginTop: '24px', fontSize: '0.95rem', fontStyle: 'italic' }}>
                            Graduating soon and looking for a team where I can contribute immediately while expanding my expertise in cloud architecture.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

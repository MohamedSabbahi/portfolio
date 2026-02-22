"use client";

import styles from "./Skills.module.css";

const skillCategories = [
    {
        title: "Frontend",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </svg>
        ),
        skills: [
            { name: "React", level: 60 },
            { name: "React Native", level: 45 },
            { name: "Next.js", level: 35 },
            { name: "HTML/CSS", level: 65 },
            { name: "JavaScript", level: 65 },
        ],
    },
    {
        title: "Backend",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
        ),
        skills: [
            { name: "Node.js", level: 65 },
            { name: "Express.js", level: 65 },
            { name: "PostgreSQL", level: 55 },
            { name: "REST APIs", level: 65 },
            { name: "Python", level: 35 },
        ],
    },
    {
        title: "Tools & DevOps",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-pink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        skills: [
            { name: "Git & GitHub", level: 55 },
            { name: "Docker", level: 35 },
            { name: "Linux", level: 40 },
            { name: "Prisma ORM", level: 55 },
            { name: "CI/CD", level: 20 },
        ],
    },
    {
        title: "Cloud & AI",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
        ),
        skills: [
            { name: "Cloud Architecture", level: 20 },
            { name: "NLP", level: 30 },
            { name: "Machine Learning", level: 20 },
            { name: "AWS", level: 20 },
            { name: "Prompt Engineering", level: 40 },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.bgGlow1} />
            <div className={styles.bgGlow2} />
            <div className="section">
                <div className="fade-up" style={{ textAlign: "center", marginBottom: "60px" }}>
                    <span className="section-label">Expertise</span>
                    <h2 className="section-title">
                        Skills &amp; <span className="gradient-text">Technologies</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        My technical toolkit, constantly expanding with a focus on cloud engineering and AI.
                    </p>
                </div>

                <div className={styles.grid}>
                    {skillCategories.map((category, catIndex) => (
                        <div
                            key={category.title}
                            className={`fade-up glass-card ${styles.card}`}
                            style={{ transitionDelay: `${catIndex * 0.1}s` }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.categoryIcon}>{category.icon}</div>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>

                            <div className={styles.skillsList}>
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className={styles.skillItem}>
                                        <div className={styles.skillInfo}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillLevel}>{skill.level}%</span>
                                        </div>
                                        <div className={styles.progressTrack}>
                                            <div
                                                className={styles.progressFill}
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

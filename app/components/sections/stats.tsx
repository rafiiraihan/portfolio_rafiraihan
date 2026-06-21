"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const row1 = [
    { name: "Python", path: "/images/tech/Python.svg" },
    { name: "JavaScript", path: "/images/tech/JavaScript.svg" },
    { name: "TypeScript", path: "/images/tech/TypeScript.svg" },
    { name: "Tailwind CSS", path: "/images/tech/Tailwind CSS.svg" },
    { name: "PHP", path: "/images/tech/PHP.svg" },
    { name: "MySQL", path: "/images/tech/MySQL.svg" },
    { name: "PostgreSQL", path: "/images/tech/PostgresSQL.svg" },
    { name: "MongoDB", path: "/images/tech/MongoDB.svg" }
];

const row2 = [
    { name: "React", path: "/images/tech/React.svg" },
    { name: "Flask", path: "/images/tech/Flask.svg" },
    { name: "NumPy", path: "/images/tech/NumPy.svg" },
    { name: "Matplotlib", path: "/images/tech/Matplotlib.svg" },
    { name: "PyTorch", path: "/images/tech/Pytorch.svg" },
    { name: "TensorFlow", path: "/images/tech/Tensorflow.svg" },
    { name: "Scikit-learn", path: "/images/tech/Scikit-Learn.svg" },
    { name: "Pandas", path: "/images/tech/Pandas.svg" }
];

const row3 = [
    { name: "Docker", path: "/images/tech/Docker.svg" },
    { name: "Git", path: "/images/tech/Git.svg" },
    { name: "GitHub", path: "/images/tech/Github.svg" },
    { name: "VS Code", path: "/images/tech/VSCode.svg" },
    { name: "Jupyter Notebook", path: "/images/tech/Jupyter.svg" },
    { name: "ChatGPT", path: "/images/tech/ChatGPT.svg" },
    { name: "Claude", path: "/images/tech/Claude.svg" },
    { name: "WordPress", path: "/images/tech/Wordpress.svg" }
];

export default function Stats() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const root = sectionRef.current;
            if (!root) return;

            const leftPanel = root.querySelector<HTMLElement>(".stats-panel-left");
            const rightPanel = root.querySelector<HTMLElement>(".stats-panel-right");

            const statsItems = gsap.utils.toArray<HTMLElement>(".stats-anim", root);
            const techItems = gsap.utils.toArray<HTMLElement>(".tech-anim", root);

            const panels: HTMLElement[] = [leftPanel, rightPanel].filter((el): el is HTMLElement => !!el);

            gsap.set(panels, { autoAlpha: 0, y: 40 });
            gsap.set(statsItems, { autoAlpha: 0, y: 22 });
            gsap.set(techItems, { autoAlpha: 0, y: 26 });

            const master = gsap.timeline({ paused: true });

            if (panels.length > 0) {
                master.to(panels, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: "power2.out",
                });
            }

            if (statsItems.length > 0) {
                master.to(
                    statsItems,
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.36,
                        stagger: 0.03,
                        ease: "power2.out",
                    },
                    panels.length > 0 ? "-=0.18" : 0,
                );
            }

            if (techItems.length > 0) {
                master.to(
                    techItems,
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.32,
                        stagger: 0.018,
                        ease: "power2.out",
                    },
                    statsItems.length > 0 ? "-=0.22" : panels.length > 0 ? "-=0.12" : 0,
                );
            }

            ScrollTrigger.create({
                trigger: root,
                start: "top 78%",
                once: true,
                invalidateOnRefresh: true,
                onEnter: () => {
                    master.play(0);
                },
                onRefresh: (self) => {
                    if (self.progress > 0) {
                        master.progress(1);
                    } else {
                        master.pause(0).progress(0);
                    }
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const renderCard = (logo: { name: string; path: string }) => (
        <div
            key={logo.name}
            className="tech-anim group flex items-center gap-2.5 px-3 py-2 rounded-lg border border-border/30 bg-muted/10 hover:bg-muted/30 hover:border-foreground/20 hover:scale-[1.03] transition-all duration-300"
            title={logo.name}
        >
            <div className="relative w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                <Image
                    src={logo.path}
                    alt={logo.name}
                    width={26}
                    height={26}
                    className="object-contain w-full h-full grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300"
                />
            </div>
            <span className="font-mono text-[10px] sm:text-xs uppercase leading-none tracking-wide text-foreground/60 group-hover:text-foreground transition-colors truncate">
                {logo.name}
            </span>
        </div>
    );

    return (
        <section
            ref={sectionRef}
            id="about"
            className="relative min-w-0 overflow-x-clip bg-background py-12 text-foreground sm:py-16 md:py-20 lg:py-24 xl:py-28 scroll-mt-24"
        >
            <div className="w-full min-w-0 max-w-[min(100%,1920px)] mx-auto px-3 min-[375px]:px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-28">
                {/* Upper Area: About Me (Left) and Profile Photo (Right) */}
                <div className="flex min-w-0 flex-col lg:flex-row lg:justify-between lg:items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
                    {/* Left — About */}
                    <div className="stats-panel-left w-full min-w-0 max-w-full lg:w-[50%] lg:max-w-none xl:w-6/12 space-y-4 sm:space-y-5 md:space-y-6">
                        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                            <span className="stats-anim shrink-0 font-mono text-[9px] uppercase tracking-[0.28em] text-foreground/55 min-[375px]:text-[10px] sm:text-xs sm:tracking-[0.35em]">
                                About
                            </span>
                            <div className="h-px min-w-0 flex-1 bg-border" />
                        </div>

                        <h2 className="stats-anim wrap-anywhere text-[clamp(1.625rem,calc(0.9rem+4.2vw),5rem)] font-black uppercase leading-[0.95] tracking-tight text-foreground">
                            About
                        </h2>
                        <p className="stats-anim max-w-full text-[0.9375rem] leading-relaxed text-foreground/70 wrap-anywhere sm:max-w-lg sm:text-base md:text-lg">
                            I am a Software Engineering graduate with a strong interest in Machine Learning and Artificial Intelligence. Fascinated by how intelligent systems can learn from data and solve real-world challenges, I enjoy exploring technologies that transform complex information into meaningful solutions.
                        </p>
                        <p className="stats-anim max-w-full text-[0.8125rem] leading-relaxed text-foreground/55 wrap-anywhere sm:max-w-lg sm:text-sm md:text-base">
                            My journey in AI has been driven by curiosity and a desire to create impactful applications. Through academic and project-based experiences, I have developed a passion for building solutions that bridge technology and human needs.
                        </p>
                        <p className="stats-anim max-w-full text-[0.8125rem] leading-relaxed text-foreground/55 wrap-anywhere sm:max-w-lg sm:text-sm md:text-base">
                            I am committed to continuous learning and aspire to contribute to the advancement of AI by developing innovative technologies that create real value and positive impact.
                        </p>
                    </div>

                    {/* Right — Profile Photo */}
                    <div className="stats-panel-right w-full min-w-0 max-w-full lg:w-[45%] lg:max-w-none xl:w-5/12 lg:self-center flex justify-center">
                        <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-square rounded-2xl overflow-hidden border border-border/80 shadow-2xl transition-all duration-500 hover:border-foreground/30 hover:shadow-foreground/5 bg-muted">
                            <Image
                                src="/rafiraihan.jpeg"
                                alt="Rafi Raihan Profile"
                                width={400}
                                height={400}
                                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-750 ease-out scale-[1.03] group-hover:scale-100"
                                priority
                            />
                            {/* Overlay glow frame effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-500" />
                        </div>
                    </div>
                </div>

                {/* Lower Area: Tech Stack Section */}
                <div className="mt-16 sm:mt-20 md:mt-24 border-t border-border/50 pt-12 sm:pt-16 w-full">
                    <div className="mb-8 md:mb-10 text-center lg:text-left">
                        <span className="stats-anim inline-block font-mono text-[9px] uppercase tracking-[0.28em] text-foreground/55 min-[375px]:text-[10px] sm:text-xs sm:tracking-[0.35em] mb-2">
                            Technologies
                        </span>
                        <h3 className="stats-anim text-2xl font-black uppercase tracking-tight text-foreground sm:text-3xl md:text-4xl">
                            Tech Stack
                        </h3>
                    </div>

                    {/* Grid of 3 rows: responsif for mobile (2 columns / 1 column on small screens) */}
                    <div className="flex flex-col gap-4 sm:gap-5">
                        {/* Baris 1 */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                            {row1.map(renderCard)}
                        </div>

                        {/* Baris 2 */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                            {row2.map(renderCard)}
                        </div>

                        {/* Baris 3 */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
                            {row3.map(renderCard)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

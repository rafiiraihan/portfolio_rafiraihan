"use client";

import { useGSAP } from "@/app/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Coffee, Rocket } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const sectionRef = useGSAP(() => {
        gsap.from(".about-item", {
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%",
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
        });
    }, []);

    return (
        <section ref={sectionRef} className="about-section max-w-3xl mx-auto px-6 py-20">
            <div className="mb-12">
                <span className="text-sm text-gray-300 uppercase tracking-wider">About</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-8">Who I Am</h2>
            </div>

            <div className="prose prose-invert max-w-none">
                <div className="about-item space-y-6">
                    <p className="text-lg text-gray-300 leading-relaxed">
                        I am a fresh graduate in Software Engineering with a strong interest in Machine Learning and Artificial Intelligence. My fascination with AI stems from its ability to transform data into intelligent solutions that can solve real-world problems and improve everyday experiences.
                    </p>
                    <p className="text-base text-gray-400 leading-relaxed">
                        I enjoy exploring how machines can learn, recognize patterns, and make meaningful decisions, and I am motivated to contribute to the development of innovative technologies that create tangible impact.
                    </p>
                </div>

                <div className="about-item grid md:grid-cols-3 gap-6 mt-12">
                    <div className="p-6 border-l-2 border-purple-500/30 pl-6">
                        <Code2 className="w-6 h-6 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">Artificial Intelligence</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Exploring emerging AI technologies and their real-world applications</p>
                    </div>
                    <div className="p-6 border-l-2 border-purple-500/30 pl-6">
                        <Coffee className="w-6 h-6 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Transforming data into intelligent systems through predictive and adaptive models</p>
                    </div>
                    <div className="p-6 border-l-2 border-purple-500/30 pl-6">
                        <Rocket className="w-6 h-6 text-purple-400 mb-3" />
                        <h3 className="text-lg font-semibold mb-2">Innovation</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Exploring new technologies and best practices</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


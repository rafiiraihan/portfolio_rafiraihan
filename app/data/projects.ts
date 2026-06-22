import { PROJECT_DESCRIPTIONS } from "./project-descriptions";

export type Project = {
    slug: string;
    title: string;
    role: string;
    description: string;
    highlights: readonly string[];
    tech: readonly string[];
    github: string;
    live: string;
    featured: boolean;
    year: string;
    image: string;
};

type ProjectCore = Omit<Project, "description">;

const projectCoreList: readonly ProjectCore[] = [
    {
        slug: "tipayun",
        title: "TIPAYUN (TRANSPORTATION SCHEDULING PLATFORM)",
        role: "Backend Developer",
        highlights: [
            "Developed a web-based platform that provides route, schedule, and service information for public transportation in Bandung.",
            "Designed and implemented a user-friendly route search feature to help users plan their trips efficiently.",
            "Integrated transportation data from DAMRI, Trans Metro Bandung, and Trans Metro Pasundan into a centralized system.",
            "Improved accessibility to public transportation information, enabling users to make more informed travel decisions.",
        ],
        tech: ["JS", "CSS", "PHP"],
        github: "https://github.com/rafiiraihan/tipayun",
        live: "#",
        featured: true,
        year: "2024",
        image: "/images/projects/tipayun.webp",
    },
    {
        slug: "gymvision",
        title: "GymVision",
        role: "ML Engineer",
        highlights: [
            "Collected and curated image datasets for 8 gym equipment classes to support model development and training.",
            "Built and optimized image classification models using TensorFlow, Keras, and Python for gym equipment recognition.",
            "Evaluated and improved model performance, achieving 0.92 accuracy on the validation dataset.",
            "Worked with cross-functional teams to deploy and integrate the trained model into a mobile fitness application.",
        ],
        tech: ["Kotlin", "Python", "Jupyter Notebook"],
        github: "https://github.com/rafiiraihan/GymVision-Apps",
        live: "#",
        featured: true,
        year: "2024",
        image: "/images/projects/gymvision.webp",
    },
    {
        slug: "cigarette-detection",
        title: "Cigarette Detection Using YOLOv11",
        role: "ML Engineer",
        highlights: [
            "Collected and prepared a custom dataset of cigarette images, including preprocessing and annotation to support object detection model development.",
            "Trained and optimized a YOLOv11 model using Python, performing hyperparameter tuning to improve detection accuracy and robustness.",
            "Evaluated model performance through object detection metrics and iterative experimentation to identify the most effective training configuration.",
            "Implemented a real-time webcam-based detection system capable of identifying cigarette.",
        ],
        tech: ["Python", "YOLOv11"],
        github: "https://github.com/rafiiraihan/dektesiRokok-YOLOv11",
        live: "#",
        featured: true,
        year: "2026",
        image: "/images/projects/rokok.webp",
    },
];

function attachDescription(core: ProjectCore): Project {
    const description = PROJECT_DESCRIPTIONS[core.slug];
    if (description === undefined) {
        throw new Error(`Missing PROJECT_DESCRIPTIONS entry for slug: ${core.slug}`);
    }
    return { ...core, description };
}

export const projects: readonly Project[] = projectCoreList.map(attachDescription);

export const getProjectBySlug = (slug: string): Project | null => {
    return projects.find((project) => project.slug === slug) ?? null;
};

/**
 * Long-form project blurbs keyed by slug.
 * Kept separate from the main project list so detail routing and static generation stay predictable.
 */
export const PROJECT_DESCRIPTIONS: Readonly<Record<string, string>> = {
    "tipayun":
        "TIPAYUN is a public transportation scheduling platform for Bandung that provides route search, bus schedules, and service information for DAMRI, Trans Metro Bandung, and Trans Metro Pasundan. The platform helps users plan their journeys efficiently through an intuitive and user-friendly interface.",
    "gymvision":
        "GymVision is a mobile application that utilizes machine learning and computer vision to detect and identify gym equipment in real time through a smartphone camera, helping users recognize equipment.",
    "cigarette-detection":
        "Cigarette Detection Using YOLOv11 is a computer vision-based research project that utilizes the YOLOv11 object detection model to detect cigarettes in real time through webcam input. The system was developed to evaluate the effectiveness of deep learning-based object detection techniques for cigarette recognition in monitoring and research applications.",
};

export function getProjectDescription(slug: string): string | undefined {
    return PROJECT_DESCRIPTIONS[slug];
}

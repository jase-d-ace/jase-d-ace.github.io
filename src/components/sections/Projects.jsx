import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Modal } from "../Modal";
import headlineTestingScreenshot from "../../assets/headline_testing.png";
import projectUnityScreenshot from "../../assets/project_unity.png";
import annotationsScreenshot from "../../assets/annotations.png";
import yearInReviewScreenshot from "../../assets/year_in_review.png";

export const Projects = () => {
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState({});

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        };

        return () => {
            document.body.style.overflow = "";
        }
    }, [open]);

    const _projects = [
        {
            name: "Headline Testing", 
            image: headlineTestingScreenshot,
            description: "This full-stack feature allows users to serve up to 5 different headlines to readers and then monitor the performance of each headline in realtime, allowing users to decide which headline performs the best for a given story.",
            techsUsed: ["Vue.js", "Django", "Figma", "Growthbook", "jQuery"]
        },
        {
            name: "Project Unity", 
            image: projectUnityScreenshot,
            description: "Long-term product vision prototype that wireframes a funnel visualization, showing what content journeys are most common or successful, and how these journeys end.",
            techsUsed: ["Figma"]
        },
        {
            name: "Annotations", 
            image: annotationsScreenshot,
            description: "Users are able to create custom notes in their dashboards.",
            techsUsed: ["Vue.js", "Django", "Figma", "Postgres", "jQuery"]
        },
        {
            name: "Year in Review", 
            image: yearInReviewScreenshot,
            description: "End of year roundup and analysis of content performance. Echoes Spotify's Wrapped feature and provides fun labels and accolades for the year based on content performance.",
            techsUsed: ["Vue.js", "Django", "Figma", "Elasticsearch", "jQuery"]
        }
    ]

    const handleClick = (proj) => {
        setOpen(true);
        setProject(proj)
    }

    const onClose = () => {
        setOpen(false);
        setProject({});
    }

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent text-center">Featured Projects and Designs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {_projects.map((project) => (
                            <div className="p-6 rounded-xl border border-white/10 hover:border-fuchsia-600/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                <h3 onClick={() => handleClick(project)} className="underline cursor-pointer">{project.name}</h3>
                                
                                <p className="text-gray-100 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">

                                    {project.techsUsed.map((tech, i) => <span key={i} className="bg-cyan-400/10 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-400/20  hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span> )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <Modal open={open} onClose={() => onClose()} project={project} />
                </div>
            </RevealOnScroll>
        </section>
    )
}
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
            description: "lorem ipsum something something",
            techsUsed: ["Vue.js", "Django", "Figma", "Growthbook", "jQuery"]
        },
        {
            name: "Project Unity", 
            image: projectUnityScreenshot,
            description: "lorem ipsum something something",
            techsUsed: ["Figma"]
        },
        {
            name: "Annotations", 
            image: annotationsScreenshot,
            description: "lorem ipsum something something",
            techsUsed: ["Vue.js", "Django", "Figma", "Postgres", "jQuery"]
        },
        {
            name: "Year in Review", 
            image: yearInReviewScreenshot,
            description: "lorem ipsum something something",
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
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects and Designs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {_projects.map((project) => (
                            <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                <h3 onClick={() => handleClick(project)} className="underline cursor-pointer">{project.name}</h3>
                                
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.techsUsed.map((tech, i) => <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
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
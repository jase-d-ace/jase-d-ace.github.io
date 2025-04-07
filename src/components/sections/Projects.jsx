import { RevealOnScroll } from "../RevealOnScroll";
export const Projects = () => {
    const projects = [
        {
            name: "Ikigai Tracker",
            github: "https://www.github.com/jase-d-ace/openai-ikigai-journaling",
            description: "lorem ipsum something something",
            techsUsed: [
                "React",
                "FastAPI",
                "JWT",
                "SQLAlchemy",
                "PostgreSQL",
                "OpenAI",
                "JavaScript"
            ]
        },
        {
            name: "Infrastructure as Code Proof of Concept",
            github: "https://www.github.com/jase-d-ace/fastapi-docker-terraform-composition",
            description: "lorem ipsum something something",
            techsUsed: [
                "Docker",
                "Terraform",
                "Kubernetes",
                "AWS",
                "FastAPI",
                "Python"
            ]
        },
        {
            name: "Reddit Frontend Challenges",
            github: "https://www.github.com/jase-d-ace/reddit-frontend-challenges",
            description: "lorem ipsum something something",
            techsUsed: [
                "React"
            ]
        }
    ]
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map(({ name, github, description, techsUsed }) => (
                            <div className="p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                <h3 className="underline">{name}</h3>
                                
                                <p className="text-gray-400 mb-4">{description}</p>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {techsUsed.map((tech, i) => <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20  hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span> )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <a href={github} target="_blank" className="text-blue-400 my-2 hover:text-blue-300 transition-colors">View Project</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
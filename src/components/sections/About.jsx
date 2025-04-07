import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontEndSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "jQuery", "CSS3", "HTML5",  "Shopify"];
    const backEndSkills = ["Node.js", "Django", "FastAPI", "PostgreSQL", "Ruby on Rails", "ASP.NET Core", "RDS", "Elasticsearch"];
    const designSkills = ["Figma", "Adobe inDesign", "User Interviews"];

    const workExperience = [
        {
            company: "WordPress VIP", 
            roles: [
                {title: "Product Engineer - Front End, Parse.ly", description: "lorem ipsum something something", dates: "Oct 2021-Oct 2024"},
            ]
        },
        {
            company: "Parse.ly",
            roles: [
                {title: "Solutions Engineer", description: "lorem ipsum something something", dates: "Dec 2020-Oct 2021"},
                {title: "Customer Support Engineer", description: "lorem ipsum something something", dates: "May 2020-Dec 2020"},
            ]
        },
        {
            company: "Freelance/Contractor",
            roles: [
                {title: "Software Engineer - Full Stack", description: "lorem ipsum something something", dates: "Apr 2018-May 2020"},
            ]
        },
        {
            company: "General Assembly",
            roles: [
                {title: "Lead Instructor", description: "lorem ipsum something something", dates: "Jul 2017-Apr 2018"}
            ]
        },
    ]


    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">About Me</h2>
                    <div className="rounded-xl p-8">
                        <p className="text-gray-300 mb-6">
                            lorem ipsum something something something
                        </p>
                    </div>
                    <div className="rounded-xl mt-2 p-8">
                        <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
                        {
                            workExperience.map(({ company, roles }) => (
                                <div className="space-y-4 text-gray-300">
                                    <div className="ml-3 mb-2">
                                        <h4 className="text-xl font-semibold">{company}</h4>
                                        <ul className=" ml-4 list-inside space-y-2">
                                            {roles.map(({ title, description, dates }) => (
                                                <li className="mt-1">
                                                    <strong>{title} </strong>({dates})
                                                    <p>{description}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="grid grid-cols-1 mt-2 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Front End Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontEndSkills.map((skill, i) => (
                                    <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Back End Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {backEndSkills.map((skill, i) => (
                                    <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6">
                            <h3 className="text-xl font-bold mb-4">Design Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {designSkills.map((skill, i) => (
                                    <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
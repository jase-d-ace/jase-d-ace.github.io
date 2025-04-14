import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontEndSkills = ["React", "Vue", "TypeScript", "TailwindCSS", "jQuery", "CSS3", "HTML5",  "Shopify"];
    const backEndSkills = ["Node.js", "Django", "FastAPI", "PostgreSQL", "Ruby on Rails", "ASP.NET Core", "RDS", "Elasticsearch"];
    const designSkills = ["Figma", "Adobe inDesign", "User Interviews"];

    const workExperience = [
        {
            company: "WordPress VIP", 
            roles: [
                {title: "Product Engineer - Front End, Parse.ly", description: "Product Engineering at WordPress VIP covers the whole product lifecycle, from discovery and design, to development and delivery. My team owned Parse.ly products like Headline Testing, Funnel Visualization, our reporting suite, and day-to-day maintenance of our dashboard, which supported over 6000 media and marketing websites globally", dates: "Oct 2021-Oct 2024"},
            ]
        },
        {
            company: "Parse.ly",
            roles: [
                {title: "Solutions Engineer", description: "Solutions Engineering is a multi-faceted internal team that maintained the internal account management tool Success Admin, allowing our support staff to quickly and easily make changes to current customers' integrations. We were also responsible for joining customer calls when a more technical voice is needed to explain some Parse.ly functionality or to understand a deeper technical problem that a customer has.", dates: "Dec 2020-Oct 2021"},
                {title: "Customer Support Engineer", description: "Customer Support Engineers were the white-glove tech support provided for Parse.ly clients. As a CSE, I was responsible for ensuring that our customers had a dedicated technical resource when asking questions about our product, and I was their first point of contact when diagnosing integration issues, either solving them myself or escalating them to the larger product team.", dates: "May 2020-Dec 2020"},
            ]
        },
        {
            company: "Freelance/Contractor",
            roles: [
                {title: "Software Engineer - Full Stack", description: "Work that I did for friends and family included building portfolio sites for some colleagues, a full-stack app that served the private aviation sector allowing users to book flights on private jets that were returning from a destination, and a management app for my Dungeons and Dragons campaign.", dates: "Apr 2018-May 2020"},
            ]
        },
        {
            company: "General Assembly",
            roles: [
                {title: "Lead Instructor", description: "I taught General Assembly's Web Development Immersive bootcamp, a 3-month program that helped career-changers learn the basics of problem solving and writing code. This curriculum included the fundamentals of HTML, CSS, and JavaScript, as well as diving into server-side code through Node.js and Rails, finishing with advanced JavaScript in React.js. As part of my time there, I updated the React unit to include the new functionality and paradigms that had just realeased when I started.", dates: "Jul 2017-Apr 2018"}
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
                        I’m a product-minded, user-focused full-stack engineer with a focus on front end development. I have experience on both sides of the stack, building production-scale UIs using Vue, React, and jQuery, and APIs in Django, FastAPI, and Node.js. I’ve spent the past 4 years helping Parse.ly build out its content analytics dashboard and deliver smooth user experiences for brands like Bon Appetit, Vox, and Slate. I’ve built features that surfaced low-performing content, Google Search performance, and conversion analysis. I’ve also led UX interviews for users, collaborated with engineers using both Figma and GitHub, and I’ve liaised with non-technical stakeholders as the face of a feature team.
                        </p>
                    </div>
                    <div className="rounded-xl p-8">
                        <h3 className="text-2xl font-bold mb-4">Work Experience</h3>
                        {
                            workExperience.map(({ company, roles }) => (
                                <div className="space-y-4 text-gray-300">
                                    <div className="ml-3 mb-2">
                                        <h4 className="text-2xl font-semibold">{company}</h4>
                                        <ul className=" ml-4 list-inside space-y-2">
                                            {roles.map(({ title, description, dates }) => (
                                                <li className="mt-4">
                                                    <strong className="text-xl">{title} </strong>({dates})
                                                    <p className="text-sm">{description}</p>
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
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <div className="text-4xl font-bold">
                        <h1  className="text-xl md:text-5xl font-bold h-20 bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent leading-right">&lt;Jason Andrada /&gt;</h1>
                    </div>
                    <h1 className="text-xl md:text-5xl font-bold mb-6 h-20 bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent leading-right"> Product Engineer, User Advocate, Full-Stack Dev</h1>
                    <p className="text-gray-100 text-lg mb-8 max-w-lg mx-auto">I'm a full-stack product engineer with experience in the entire product life cycle. My work ethos centers around the user and solving their problems with clean code and UX principles. I specialize in Front End work building elegant and performant UIs and the APIs that support them.</p>
                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-fuchsia-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"> View Projects</a>
                        <a href="#contact" className="border border-fuchsia-600/50 text-fuchsia-600 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-510"> Contact Me</a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
}
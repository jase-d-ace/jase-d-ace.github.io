import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])

    const sections = [{href: "#home", label: "Home"}, {href: "#about", label: "About"}, {href:"#projects", label: "Projects"}, {href: "#contact", label: "Contact"}, {href: "https://www.github.com/jase-d-ace", label: "Github"}, {href: "https://www.linkedin.com/in/jason-andrada", label: "LinkedIn"}]
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="font-mono text-xl font-bold text-white">jasonandrada<span className="text-blue-500">.com</span></a>
                    <div onClick={() => setMenuOpen(prev => !prev)} className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {sections.map(({ href, label }) => <a key={label} target={href.search("#") == -1 ? "_blank" : ""} href={href} className="text-gray-300 hove:text-white transition-colors">{label}</a>)}
                        
                    </div>
                </div>
            </div>

        </nav>
    )
}
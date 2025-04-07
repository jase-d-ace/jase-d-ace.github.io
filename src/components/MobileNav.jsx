export const MobileNav = ({ menuOpen, setMenuOpen }) => {

    const sections = [{href: "#home", label: "Home"}, {href: "#about", label: "About"}, {href:"#projects", label: "Projects"}, {href: "#contact", label: "Contact"}, {href: "https://www.github.com/jase-d-ace", label: "Github"}, {href: "https://www.linkedin.com/in/jason-andrada", label: "LinkedIn"}]

    return (
        <div className={`
            fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
                ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
            `}
        >
                <button 
                    onClick={() => setMenuOpen(false)} 
                    className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer" 
                    aria-label="Close Menu"
                >
                    &times;
                </button>
                {sections.map(({ href, label }) => <a onClick={() => setMenuOpen(false)} key={label} href={href} target={href.search("#") == -1 ? "_blank" : ""} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ? "opacity-100 translate-y-0": "opacity-0 translate-y-6"}`}>{label}</a>)}
            </div>
    )
}
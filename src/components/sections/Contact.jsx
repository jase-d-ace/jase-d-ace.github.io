import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Contact = () => {

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-fuchsia-600 bg-clip-text text-transparent text-center">Get in Contact!</h2>
                <div className="flex items-center justify-center py-2"></div>
                    <p className="text-gray-100 mb-6 text-center">
                        Send me a message on <a href="https://www.linkedin.com/in/jason-andrada" target="_blank" className="text-cyan-400 cursor-pointer underline">LinkedIn</a>, or find me on <a href="https://www.github.com/jase-d-ace" target="_blank" className="text-cyan-400 cursor-pointer underline">GitHub</a>, or on Instagram at <a href="https://www.instagram.com/jase.d.ace" target="_blank" className="text-cyan-400 cursor-pointer underline">@jase.d.ace</a>
                    </p>
                </div>
            </RevealOnScroll>

        </section>
    )
}
import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

export const Contact = () => {

    const [copied, setCopied] = useState(false);
    const emailToClipboard = async () => {
        try {
            await navigator.clipboard.writeText("andrada.jasonp@gmail.com");
            setCopied(true);
        } catch (err) {
            console.lerror("failed to copy:", err)
        }
    }
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get in Contact!</h2>
                <div className="flex items-center justify-center py-2"></div>
                    <p className="text-gray-300 mb-6 text-center">
                        Email me at <span onClick={() => emailToClipboard()} className="text-blue-500 cursor-pointer underline">andrada.jasonp@gmail.com</span>
                    </p>
                    <p className="text-center">My email {copied ? "has been" : "will be"} copied to your clipboard for easy pasting into your email client!</p>
                </div>
            </RevealOnScroll>

        </section>
    )
}
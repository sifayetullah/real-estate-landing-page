"use client"



import { useState, useEffect } from "react"
import { FaChevronDown } from "react-icons/fa"

export function Hero() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(true)
    }, [])

    const scrollToForm = () => {
        const element = document.getElementById("lead-form")
        element?.scrollIntoView({ behavior: "smooth" })
    }

    const downloadBrochure = () => {
        alert("Brochure download link would be triggered here.")
    }

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        "url(/placeholder.svg?height=1080&width=1920&query=luxury modern apartment building city skyline at sunset golden hour premium architecture)",
                    backgroundAttachment: "fixed",
                }}
            >
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/50 to-black/60"></div>
                <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30"></div>
                <div className="absolute inset-0 bg-radial-glow opacity-40"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="flex flex-col items-center lg:items-start justify-center min-h-screen lg:min-h-auto lg:py-24 text-white">
                    <div
                        className={`max-w-3xl transition-all duration-1200 ease-out ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <div className="flex items-center gap-3 mb-8 animate-fade-in-delayed">
                            <div className="w-1.5 h-1.5 bg-linear-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                            <span className="text-xs font-bold text-gray-200 tracking-[0.15em] uppercase">
                                Trusted by 500+ Families
                            </span>
                            <div className="w-1.5 h-1.5 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                        </div>

                        <div className="relative mb-8">
                            {/* Glow effect behind text */}
                            <div className="absolute -inset-8 bg-linear-to-r from-cyan-500/20 via-blue-500/15 to-cyan-500/20 blur-4xl rounded-full opacity-100"></div>

                            <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight text-balance">
                                <span className="block bg-linear-to-r from-cyan-200 via-blue-100 to-cyan-300 bg-clip-text text-transparent">
                                    Premium
                                </span>
                                <span className="block text-white mt-2">Luxury Apartments</span>
                                <span className="block text-transparent bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text mt-2">
                                    in Dhaka
                                </span>
                            </h1>
                        </div>

                        <p className="text-lg md:text-xl text-gray-100 font-light mb-12 max-w-2xl leading-relaxed tracking-wide">
                            2/3/4 BHK luxury homes with world-class amenities, flexible payment plans, and premium lifestyle
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            {/* Primary CTA with enhanced linear and glow */}
                            <button

                                className="relative px-10 py-7 text-lg font-semibold rounded-full text-white overflow-hidden group"
                                style={{
                                    background: "linear-linear(135deg, #06b6d4 0%, #0284c7 50%, #1e40af 100%)",
                                }}
                                onClick={scrollToForm}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Book a Visit
                                    <span className="text-xl">→</span>
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 blur opacity-50 group-hover:opacity-100 -z-10 group-hover:blur-xl transition-all duration-300"></div>
                            </button>

                            {/* Secondary CTA with premium outline style */}
                            <button

                                className="relative px-10 py-7 text-lg font-semibold rounded-full bg-white/5 border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-lg transition-all duration-300 group overflow-hidden"
                                onClick={downloadBrochure}
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Download Brochure
                                    <span className="text-xl group-hover:translate-x-1 transition-transform">↓</span>
                                </span>
                                <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-6 text-sm font-semibold text-gray-200 max-w-2xl mb-8">
                            <div className="flex items-start gap-3 group">
                                <div className="w-2 h-2 bg-linear-to-br from-cyan-400 to-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                                <span className="text-gray-100 group-hover:text-cyan-300 transition-colors">Premium Location</span>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="w-2 h-2 bg-linear-to-br from-cyan-400 to-blue-500 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                                <span className="text-gray-100 group-hover:text-cyan-300 transition-colors">Modern Design</span>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <div className="w-2 h-2 bg-linear-to-br from-cyan-400 to-blue-500 rounded-full mt-2 group-hover:scale-150 transition-colors"></div>
                                <span className="text-gray-100 group-hover:text-cyan-300 transition-colors">Easy Payments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex flex-col items-center gap-3 animate-bounce-slow">
                    <span className="text-xs text-gray-300 font-bold tracking-normal uppercase">Scroll to Explore</span>
                    <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center p-2">
                        <FaChevronDown className="w-4 h-4 text-cyan-400 animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    )
}

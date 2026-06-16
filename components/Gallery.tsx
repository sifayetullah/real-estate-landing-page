"use client"

import type React from "react"

import { useState } from "react"
import { FaChevronLeft } from "react-icons/fa"
import { FaChevronRight, FaX } from "react-icons/fa6"

const images = [
    {
        src: "/luxury-apartment-living-room.png",
        alt: "Living room",
    },
    {
        src: "/modern-kitchen-apartment-interior.jpg",
        alt: "Kitchen",
    },
    {
        src: "/bedroom-luxury-apartment-interior.jpg",
        alt: "Bedroom",
    },
    {
        src: "/bathroom-luxury-apartment-design.jpg",
        alt: "Bathroom",
    },
    {
        src: "/balcony-apartment-city-view.jpg",
        alt: "Balcony view",
    },
    {
        src: "/rooftop-garden-apartment-amenity.jpg",
        alt: "Rooftop garden",
    },
]

export function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [lightboxIndex, setLightboxIndex] = useState(0)

    const next = () => setCurrentIndex((prev) => (prev + 1) % images.length)
    const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

    const handleTouchStart = (e: React.TouchEvent) => {
        const startX = e.touches[0].clientX
        const endX = e.changedTouches?.[0]?.clientX || startX

        if (startX - endX > 50) next()
        if (endX - startX > 50) prev()
    }

    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Photo Gallery</h2>

                {/* Carousel */}
                <div
                    className="relative w-full bg-card rounded-2xl overflow-hidden mb-8 cursor-grab active:cursor-grabbing"
                    onTouchEnd={handleTouchStart}
                >
                    <div className="relative h-80 md:h-[500px] w-full">
                        <img
                            src={images[currentIndex].src || "/placeholder.svg"}
                            alt={images[currentIndex].alt}
                            className="w-full h-full object-cover"
                            onClick={() => {
                                setLightboxIndex(currentIndex)
                                setLightboxOpen(true)
                            }}
                        />
                    </div>

                    {/* Navigation */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                        aria-label="Previous image"
                    >
                        <FaChevronLeft className="w-6 h-6 text-foreground" />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 transition-colors"
                        aria-label="Next image"
                    >
                        <FaChevronRight className="w-6 h-6 text-foreground" />
                    </button>

                    {/* Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-primary w-6" : "bg-white/60"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`relative h-24 rounded-lg overflow-hidden transition-all ${index === currentIndex ? "ring-2 ring-primary" : ""
                                }`}
                        >
                            <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                            />
                        </button>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setLightboxOpen(false)}
                >
                    <button
                        onClick={() => setLightboxOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                        aria-label="Close lightbox"
                    >
                        <FaX className="w-8 h-8" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                        aria-label="Previous image"
                    >
                        <FaChevronLeft className="w-8 h-8" />
                    </button>

                    <img
                        src={images[lightboxIndex].src || "/placeholder.svg"}
                        alt={images[lightboxIndex].alt}
                        className="max-w-2xl max-h-[80vh] object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />

                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setLightboxIndex((prev) => (prev + 1) % images.length)
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                        aria-label="Next image"
                    >
                        <FaChevronRight className="w-8 h-8" />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                        {lightboxIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </section>
    )
}

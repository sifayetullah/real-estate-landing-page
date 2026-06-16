import type React from "react"

interface TestimonialCardProps {
    name: string
    title: string
    image?: string
    quote: string
    rating?: number
    className?: string
}

/**
 * Testimonial Card Component - Display user testimonials
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    name,
    title,
    image,
    quote,
    rating = 5,
    className = "",
}) => {
    return (
        <div
            className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-6 ${className}`}
        >
            {/* Rating Stars */}
            <div className="flex mb-4">
                {Array(rating)
                    .fill(0)
                    .map((_, i) => (
                        <span key={i} className="text-yellow-400">
                            ★
                        </span>
                    ))}
            </div>

            {/* Quote */}
            <p className="text-gray-700 text-sm mb-4 italic">"{quote}"</p>

            {/* Author Info */}
            <div className="flex items-center gap-3">
                {image && <img src={image || "/placeholder.svg"} alt={name} className="w-10 h-10 rounded-full object-cover" />}
                <div>
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-gray-600 text-xs">{title}</p>
                </div>
            </div>
        </div>
    )
}

"use client"

import type React from "react"
import { Button } from "./Button"

interface PricingCardProps {
    name: string
    price: string | number
    period?: string
    description: string
    features: string[]
    highlighted?: boolean
    ctaText?: string
    onCTA?: () => void
    className?: string
}

/**
 * Pricing Card Component - Display pricing tiers
 */
export const PricingCard: React.FC<PricingCardProps> = ({
    name,
    price,
    period = "/month",
    description,
    features,
    highlighted = false,
    ctaText = "Get Started",
    onCTA,
    className = "",
}) => {
    return (
        <div
            className={`rounded-xl border transition-all duration-300 ${highlighted
                ? "border-blue-600 from-blue-50 to-white shadow-lg scale-105"
                : "border-gray-200 bg-white shadow-sm hover:shadow-md"
                } ${className}`}
        >
            {/* Badge for highlighted */}
            {highlighted && (
                <div className="bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full inline-block m-4">
                    Most Popular
                </div>
            )}

            {/* Card Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>

                {/* Price */}
                <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">${price}</span>
                    <span className="text-gray-600 ml-1">{period}</span>
                </div>

                {/* CTA Button */}
                <Button variant={highlighted ? "primary" : "outline"} size="md" className="w-full mb-6" onClick={onCTA}>
                    {ctaText}
                </Button>

                {/* Features List */}
                <ul className="space-y-3">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                            <span className="text-green-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

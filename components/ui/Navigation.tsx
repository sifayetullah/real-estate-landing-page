"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./Button"

interface NavLink {
    label: string
    href: string
}

interface NavigationProps {
    logo?: string
    links: NavLink[]
    ctaText?: string
    onCTA?: () => void
    className?: string
}

/**
 * Navigation Bar Component
 * Responsive navigation with mobile menu support
 */
export const Navigation: React.FC<NavigationProps> = ({
    logo = "Logo",
    links,
    ctaText = "Contact",
    onCTA,
    className = "",
}) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <nav
            className={`bg-white border-b border-gray-200 shadow-sm ${className}`}
            role="navigation"
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl font-bold text-blue-600">{logo}</div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded px-2 py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Button size="sm" onClick={onCTA}>
                        {ctaText}
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                    aria-expanded={mobileMenuOpen}
                >
                    <span className="block w-6 h-0.5 bg-gray-900 mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-gray-900 mb-1.5"></span>
                    <span className="block w-6 h-0.5 bg-gray-900"></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-gray-50 border-t border-gray-200 p-4 space-y-3">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block text-gray-700 hover:text-blue-600 py-2 px-3 rounded hover:bg-gray-100 transition-colors duration-150"
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button
                        className="w-full"
                        onClick={() => {
                            setMobileMenuOpen(false)
                            onCTA?.()
                        }}
                    >
                        {ctaText}
                    </Button>
                </div>
            )}
        </nav>
    )
}

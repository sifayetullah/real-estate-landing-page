import type React from "react"

interface CardProps {
    children: React.ReactNode
    className?: string
    [key: string]: any
}

/**
 * Card Component for content containers
 */
export const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => (
    <div
        className={`bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
        {...props}
    >
        {children}
    </div>
)

interface CardHeaderProps {
    children: React.ReactNode
    className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "" }) => (
    <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>{children}</div>
)

interface CardBodyProps {
    children: React.ReactNode
    className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = "" }) => (
    <div className={`px-6 py-4 ${className}`}>{children}</div>
)

interface CardFooterProps {
    children: React.ReactNode
    className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = "" }) => (
    <div className={`px-6 py-4 border-t border-gray-200 bg-gray-50 rounded-b-lg ${className}`}>{children}</div>
)

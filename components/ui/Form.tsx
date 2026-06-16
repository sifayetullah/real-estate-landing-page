import type React from "react"
import type { ReactNode } from "react"

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode
}

/**
 * Form wrapper component
 */
export const Form: React.FC<FormProps> = ({ children, className = "", ...props }) => (
    <form className={`space-y-4 ${className}`} {...props}>
        {children}
    </form>
)

interface FormGroupProps {
    children: ReactNode
    className?: string
}

export const FormGroup: React.FC<FormGroupProps> = ({ children, className = "" }) => (
    <div className={`space-y-2 ${className}`}>{children}</div>
)

interface FormLabelProps {
    htmlFor?: string
    children: ReactNode
    required?: boolean
    className?: string
}

export const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, children, required = false, className = "" }) => (
    <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-900 ${className}`}>
        {children}
        {required && <span className="text-red-500 ml-1">*</span>}
    </label>
)

interface FormErrorProps {
    children: ReactNode
    className?: string
}

export const FormError: React.FC<FormErrorProps> = ({ children, className = "" }) => (
    <p className={`text-red-600 text-sm ${className}`}>{children}</p>
)

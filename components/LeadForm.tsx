"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { FiAlertCircle } from "react-icons/fi"
import { BiCheckCircle, BiLoader } from "react-icons/bi"

interface FormData {
    name: string
    email: string
    phone: string
    preferredTime: string
    message: string
}

interface FormStatus {
    type: "success" | "error" | null
    message: string
}

export function LeadForm() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        preferredTime: "",
        message: "",
    })

    const [errors, setErrors] = useState<Partial<FormData>>({})
    const [status, setStatus] = useState<FormStatus>({ type: null, message: "" })
    const [loading, setLoading] = useState(false)

    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {}

        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required"
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = "Please enter a valid phone number"
        }
        if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setLoading(true)
        setStatus({ type: null, message: "" })

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (data.success) {
                setStatus({
                    type: "success",
                    message: "Thank you! We will contact you shortly.",
                })
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    preferredTime: "",
                    message: "",
                })
            } else {
                setStatus({
                    type: "error",
                    message: "Something went wrong. Please try again.",
                })
            }
        } catch (error) {
            setStatus({
                type: "error",
                message: "Network error. Please try again.",
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="lead-form" className="py-16 md:py-24 bg-card">
            <div className="max-w-2xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Book Your Visit</h2>
                <p className="text-center text-muted-foreground mb-12">
                    Fill in your details and our team will contact you to schedule a site visit.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${errors.name ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
                                }`}
                            placeholder="Enter your full name"
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                        />
                        {errors.name && (
                            <p id="name-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                                <FiAlertCircle className="w-4 h-4" />
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${errors.email ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
                                }`}
                            placeholder="your@email.com"
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {errors.email && (
                            <p id="email-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                                <FiAlertCircle className="w-4 h-4" />
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* Phone */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${errors.phone ? "border-destructive focus:border-destructive" : "border-border focus:border-primary"
                                }`}
                            placeholder="+880 1XXXXXXXXX"
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? "phone-error" : undefined}
                        />
                        {errors.phone && (
                            <p id="phone-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                                <FiAlertCircle className="w-4 h-4" />
                                {errors.phone}
                            </p>
                        )}
                    </div>

                    {/* Preferred Time */}
                    <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium mb-2">
                            Preferred Visiting Time
                        </label>
                        <select
                            id="preferredTime"
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors ${errors.preferredTime
                                ? "border-destructive focus:border-destructive"
                                : "border-border focus:border-primary"
                                }`}
                            aria-invalid={!!errors.preferredTime}
                            aria-describedby={errors.preferredTime ? "time-error" : undefined}
                        >
                            <option value="">Select a time</option>
                            <option value="morning">Morning (9 AM - 12 PM)</option>
                            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                            <option value="evening">Evening (4 PM - 7 PM)</option>
                            <option value="weekend">Weekend</option>
                        </select>
                        {errors.preferredTime && (
                            <p id="time-error" className="text-sm text-destructive mt-1 flex items-center gap-1">
                                <FiAlertCircle className="w-4 h-4" />
                                {errors.preferredTime}
                            </p>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message (Optional)
                        </label>
                        <textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors resize-none"
                            placeholder="Tell us more about your requirements..."
                            rows={4}
                        />
                    </div>

                    {/* Status Message */}
                    {status.type && (
                        <div
                            className={`p-4 rounded-lg flex items-start gap-3 ${status.type === "success"
                                ? "bg-green-50 text-green-900 border border-green-200"
                                : "bg-red-50 text-red-900 border border-red-200"
                                }`}
                            role="alert"
                        >
                            {status.type === "success" ? (
                                <BiCheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            ) : (
                                <FiAlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                            )}
                            <p>{status.message}</p>
                        </div>
                    )}

                    {/* Submit */}
                    <Button
                        type="submit"
                        className="w-full py-3 text-lg font-semibold rounded-lg disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="flex items-center gap-2">
                                <BiLoader className="w-5 h-5 animate-spin" />
                                Submitting...
                            </span>
                        ) : (
                            "Book Your Visit"
                        )}
                    </Button>
                </form>
            </div>
        </section>
    )
}

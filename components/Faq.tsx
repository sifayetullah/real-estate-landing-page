"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

const faqs = [
    {
        id: "payment",
        question: "What are the payment options?",
        answer:
            "We offer flexible payment plans with 20% down payment at booking, 50% during construction, and 30% on possession. EMI options are also available through partner banks.",
    },
    {
        id: "possession",
        question: "When will possession be handed over?",
        answer:
            "Construction is expected to complete in 3 years. Possession will be handed over on a first-come-first-served basis as units are completed.",
    },
    {
        id: "amenities",
        question: "What amenities are included in the price?",
        answer:
            "All units include 24/7 security, fitness center, rooftop garden, community clubhouse, dedicated parking, and premium finishes. Additional amenities like swimming pool are in development.",
    },
    {
        id: "maintenance",
        question: "What is the maintenance charge?",
        answer:
            "Monthly maintenance charges are approximately ৳ 1,500-2,000 per unit, depending on unit size. This covers security, maintenance, utilities management, and amenities.",
    },
    {
        id: "registration",
        question: "Are there any hidden charges?",
        answer:
            "No hidden charges. The price includes all amenities and finishes. Registration and transfer fees are as per government rates, which are transparent and disclosed upfront.",
    },
    {
        id: "warranty",
        question: "Is there a construction warranty?",
        answer:
            "Yes, we provide a 5-year structural warranty and 2-year finishes warranty on all units. Our team is committed to quality and customer satisfaction.",
    },
]

export function FAQ() {
    const [openItem, setOpenItem] = useState<string | null>(null)

    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                <p className="text-center text-muted-foreground mb-12">
                    Have questions? We've got answers. Contact us if you need more information.
                </p>

                <Accordion type="single" collapsible value={openItem || ""} onValueChange={setOpenItem}>
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.id} value={faq.id} className="border-b border-border">
                            <AccordionTrigger className="hover:text-primary hover:no-underline py-4">
                                <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-muted-foreground">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}

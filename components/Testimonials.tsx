import Image from "next/image"
import { BiStar } from "react-icons/bi"

const testimonials = [
    {
        name: "Fatima Khan",
        title: "Happy Resident",
        avatar: "/diverse-woman-avatar.png",
        content:
            "Horizon Residency exceeded our expectations. The quality, amenities, and customer service are outstanding. Our family loves living here!",
        rating: 5,
    },
    {
        name: "Ahmed Hassan",
        title: "Business Owner",
        avatar: "/man-avatar.png",
        content:
            "Perfect location for my family. Close to everything we need, and the security is excellent. Highly recommend to anyone looking for premium apartments.",
        rating: 5,
    },
    {
        name: "Sania Ahmed",
        title: "Young Professional",
        avatar: "/professional-woman-avatar.png",
        content:
            "The modern design and amenities make this place feel like home. Great investment opportunity with excellent returns.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">What Our Residents Say</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Hear from our happy residents about their experience at Horizon Residency.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="bg-card p-8 rounded-2xl hover:shadow-lg transition-shadow">
                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {Array(testimonial.rating)
                                    .fill(0)
                                    .map((_, i) => (
                                        <BiStar key={i} className="w-5 h-5 fill-accent text-accent" />
                                    ))}
                            </div>

                            {/* Content */}
                            <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-4">

                                <Image src={testimonial.avatar || "/placeholder.svg"} width={300} height={300} alt={testimonial.name} />


                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

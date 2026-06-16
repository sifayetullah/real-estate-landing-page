import { Button } from "@/components/ui/Button"
import { BiCheck } from "react-icons/bi"

const units = [
    {
        type: "2 BHK",
        size: "1500 sqft",
        price: "৳ 50 Lac",
        features: [
            "Living room & dining area",
            "Master bedroom with ensuite",
            "Guest bedroom",
            "2 full bathrooms",
            "Modular kitchen",
            "Balcony with city view",
        ],
    },
    {
        type: "3 BHK",
        size: "2200 sqft",
        price: "৳ 70 Lac",
        features: [
            "Spacious living area",
            "Master bedroom with ensuite",
            "2 guest bedrooms",
            "3 full bathrooms",
            "Premium modular kitchen",
            "Large balcony",
        ],
        featured: true,
    },
    {
        type: "4 BHK",
        size: "3500 sqft",
        price: "৳ 95 Lac",
        features: [
            "Grand living & dining area",
            "Master suite with walk-in closet",
            "3 additional bedrooms",
            "4 full bathrooms",
            "Designer modular kitchen",
            "Extended balcony & terrace",
        ],
    },
]

export function PricingCards() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Unit Types & Pricing</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Choose the perfect unit for your lifestyle. Flexible payment plans available.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {units.map((unit) => (
                        <div
                            key={unit.type}
                            className={`rounded-2xl overflow-hidden transition-transform hover:scale-105 ${unit.featured ? "bg-linear-to-br from-primary/10 to-accent/10 ring-2 ring-primary" : "bg-secondary/50"
                                }`}
                        >
                            <div className="p-8">
                                {unit.featured && (
                                    <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                                        Most Popular
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold mb-2">{unit.type}</h3>
                                <p className="text-muted-foreground mb-4">{unit.size}</p>

                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{unit.price}</span>
                                    <p className="text-sm text-muted-foreground">Starting price</p>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {unit.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <BiCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button className="w-full rounded-full font-semibold" >
                                    Contact to Book
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

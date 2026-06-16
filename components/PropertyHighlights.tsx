import { BiBed, BiMapPin, BiSquare } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";

export function PropertyHighlights() {
    return (
        <section className="py-16 md:py-24 bg-card">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative h-96 md:h-full rounded-2xl overflow-hidden">
                        <img
                            src="/luxury-apartment-exterior-modern-design.jpg"
                            alt="Horizon Residency exterior"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Horizon Residency</h2>

                        <div className="space-y-4 mb-8">
                            {/* Location */}
                            <div className="flex items-start gap-3">
                                <BiMapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg">Premium Location</p>
                                    <p className="text-muted-foreground">Banani, Dhaka - Close to all major amenities</p>
                                </div>
                            </div>

                            {/* Size */}
                            <div className="flex items-start gap-3">
                                <BiSquare className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg">Spacious Units</p>
                                    <p className="text-muted-foreground">1500 - 3500 sqft with premium finishes</p>
                                </div>
                            </div>

                            {/* Beds & Baths */}
                            <div className="flex items-start gap-3">
                                <BiBed className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg">Multiple Configurations</p>
                                    <p className="text-muted-foreground">2, 3, and 4 bedroom units with multiple bathrooms</p>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-start gap-3">
                                <FaDollarSign className="w-6 h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-lg">Competitive Pricing</p>
                                    <p className="text-muted-foreground">Flexible payment plans available for all units</p>
                                </div>
                            </div>
                        </div>

                        {/* Highlights */}
                        <div className="bg-secondary/50 p-6 rounded-xl">
                            <h3 className="font-bold mb-4 text-lg">Key Features:</h3>
                            <ul className="space-y-2 text-sm md:text-base">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Premium finishes with Italian flooring
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Dedicated parking spaces
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    24/7 security and surveillance
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                                    Rooftop garden and community space
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

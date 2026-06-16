
import { Button } from "@/components/ui/Button"
import { FaPhone } from "react-icons/fa6"
import { FiMessageCircle } from "react-icons/fi"

export function AgentCard() {
    return (
        <section className="py-16 md:py-24 bg-secondary/50">
            <div className="max-w-2xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Your Sales Agent</h2>

                <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                        {/* Image */}
                        <div className="h-72 md:h-full rounded-xl overflow-hidden">
                            <img src="/professional-man-agent-headshot.jpg" alt="Arif Ahmed" className="w-full h-full object-cover" />
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-3xl font-bold mb-2">Arif Ahmed</h3>
                            <p className="text-muted-foreground mb-6 text-lg">Senior Sales Executive</p>

                            <div className="space-y-4 mb-8">
                                <p className="text-foreground">
                                    With over 10 years of experience in real estate, Arif is dedicated to helping you find your perfect
                                    home at Horizon Residency.
                                </p>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                                        Expert in local market knowledge
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                                        Available 7 days a week
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                                        Speaks Bengali & English
                                    </li>
                                </ul>
                            </div>

                            {/* Contact Buttons */}
                            <div className="space-y-3">
                                <a href="tel:+8801712345678" className="block">
                                    <Button className="w-full gap-2 rounded-full py-6 text-base font-semibold">
                                        <FaPhone className="w-5 h-5" />
                                        Click to Call
                                    </Button>
                                </a>
                                <a
                                    href="https://wa.me/8801712345678?text=Hello%20Arif%2C%20I%20am%20interested%20in%20Horizon%20Residency"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <Button
                                        variant="outline"
                                        className="w-full gap-2 rounded-full py-6 text-base font-semibold border-2 bg-transparent"
                                    >
                                        <FiMessageCircle className="w-5 h-5" />
                                        WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

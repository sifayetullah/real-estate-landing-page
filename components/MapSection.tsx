export function MapSection() {
    return (
        <section className="py-16 md:py-24 bg-background">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Find Us On The Map</h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Located in the heart of Banani, easily accessible from all major areas.
                </p>

                <div className="rounded-2xl overflow-hidden h-96 md:h-[500px] bg-secondary/50">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8206594178945!2d90.41614!3d23.832846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c7c7c7c7c7%3A0x0!2sRoad%2090%2C%20Banani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Horizon Residency Location"
                    />
                </div>

                <div className="mt-8 bg-secondary/50 p-6 rounded-xl">
                    <h3 className="font-bold mb-4">How to Find Us:</h3>
                    <ul className="space-y-2 text-sm md:text-base">
                        <li>• 10 minutes from Gulshan Lake</li>
                        <li>• 5 minutes from Banani Market</li>
                        <li>• Close to major hospitals and schools</li>
                        <li>• Easy access to Dhaka's business districts</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

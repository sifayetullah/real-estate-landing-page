import { FiMessageCircle } from "react-icons/fi";

export function FloatingWhatsApp() {
    return (
        <a
            href="https://wa.me/8801712345678?text=Hello%20Horizon%20Residency%2C%20I%20want%20to%20know%20more%20about%20your%20apartments."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
        >
            <FiMessageCircle className="w-6 h-6" />
        </a>
    )
}

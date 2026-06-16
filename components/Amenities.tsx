import type React from "react"
import { BiNotepad } from "react-icons/bi"
import { FaSwimmer } from "react-icons/fa"
import { FaGamepad, FaShield } from "react-icons/fa6"
import { FiAward } from "react-icons/fi"
import { LuActivity, LuUtensilsCrossed } from "react-icons/lu"
import { TbParkingCircleFilled } from "react-icons/tb"


/**
 * Amenities Section - Display available amenities
 */
export const AmenitiesSection: React.FC = () => {
    const amenities = [
        { icon: <FaSwimmer className="w-6 h-6" />, name: "Swimming Pool" },
        { icon: <LuActivity className="w-6 h-6" />, name: "Fitness Center" },
        { icon: <FiAward className="w-6 h-6" />, name: "Tennis Court" },
        { icon: <LuUtensilsCrossed className="w-6 h-6" />, name: "Dining Area" },
        { icon: <FaGamepad className="w-6 h-6" />, name: "Game Room" },
        { icon: <BiNotepad className="w-6 h-6" />, name: "Library" },
        { icon: <FaShield className="w-6 h-6" />, name: "24/7 Security" },
        { icon: <TbParkingCircleFilled className="w-6 h-6" />, name: "Parking" },
    ]

    return (
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">World-Class Amenities</h2>
                    <p className="text-gray-600 text-lg">Everything you need for premium living</p>
                </div>

                {/* Amenities Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {amenities.map((amenity, idx) => (
                        <div
                            key={idx}
                            className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-lg p-6 text-center hover:shadow-md transition-all duration-200 border border-blue-100"
                        >
                            <div className="text-blue-600 mb-3 flex justify-center">{amenity.icon}</div>
                            <p className="font-semibold text-gray-900">{amenity.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

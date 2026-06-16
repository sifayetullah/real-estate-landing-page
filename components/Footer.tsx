import { BiMapPin, BiPhone } from "react-icons/bi"
import { BsInstagram } from "react-icons/bs"
import { FaFacebook } from "react-icons/fa6"
import { LiaLinkedin } from "react-icons/lia"
import { MdMail } from "react-icons/md"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-4">Horizon Residency</h4>
            <p className="text-sm text-background/80">
              Premium apartments designed for modern living with world-class amenities in the heart of Dhaka.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <BiPhone className="w-4 h-4" />
                <a href="tel:+8801712345678" className="hover:underline">
                  +880 1712 345678
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MdMail className="w-4 h-4" />
                <a href="mailto:info@horizonresidency.com" className="hover:underline">
                  info@horizonresidency.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <BiMapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Road 90, Banani, Dhaka 1213</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Unit Types
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#lead-form" className="hover:underline">
                  Book a Visit
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <FaFacebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <BsInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <LiaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {currentYear} Horizon Residency. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

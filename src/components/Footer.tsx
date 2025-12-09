import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">MedStore</h3>
            <p className="text-sm mb-4">
              Your trusted online pharmacy for genuine medicines and health products with doorstep delivery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary-500"><Twitter size={20} /></a>
              <a href="#" className="hover:text-primary-500"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-500">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary-500">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary-500">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-500">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-500">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/medicines" className="hover:text-primary-500">Medicines</Link></li>
              <li><Link href="/category/health-devices" className="hover:text-primary-500">Health Devices</Link></li>
              <li><Link href="/category/personal-care" className="hover:text-primary-500">Personal Care</Link></li>
              <li><Link href="/category/ayurveda" className="hover:text-primary-500">Ayurveda</Link></li>
              <li><Link href="/category/vitamins" className="hover:text-primary-500">Vitamins & Supplements</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 234-567-8900</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>support@medstore.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Health Street, Medical Plaza, City 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MedStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

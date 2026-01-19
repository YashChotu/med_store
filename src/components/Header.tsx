"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, Upload } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getTotalItems } = useCart();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            MedStore
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for medicines, health products..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-primary-600">
                <Search size={20} />
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/upload-prescription" className="flex items-center gap-2 text-gray-700 hover:text-primary-600">
              <Upload size={20} />
              <span>Upload Rx</span>
            </Link>
            <Link href="/cart" className="relative text-gray-700 hover:text-primary-600">
              <ShoppingCart size={24} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-primary-600">
              <User size={24} />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search Bar - Mobile */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search medicines..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-primary-600">
              <Search size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link href="/upload-prescription" className="flex items-center gap-2 text-gray-700">
              <Upload size={20} />
              <span>Upload Prescription</span>
            </Link>
            <Link href="/cart" className="flex items-center gap-2 text-gray-700">
              <ShoppingCart size={20} />
              <span>Cart ({getTotalItems()})</span>
            </Link>
            <Link href="/account" className="flex items-center gap-2 text-gray-700">
              <User size={20} />
              <span>My Account</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

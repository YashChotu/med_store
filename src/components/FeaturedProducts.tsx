"use client";

import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    price: 5.99,
    originalPrice: 7.99,
    discount: "25% OFF",
    image: "💊",
    prescription: false,
  },
  {
    id: 2,
    name: "Vitamin D3 Tablets",
    category: "Vitamins & Supplements",
    price: 12.99,
    originalPrice: 15.99,
    discount: "19% OFF",
    image: "💊",
    prescription: false,
  },
  {
    id: 3,
    name: "Blood Pressure Monitor",
    category: "Health Devices",
    price: 45.99,
    originalPrice: 59.99,
    discount: "23% OFF",
    image: "🩺",
    prescription: false,
  },
  {
    id: 4,
    name: "Omega-3 Fish Oil",
    category: "Supplements",
    price: 18.99,
    originalPrice: 24.99,
    discount: "24% OFF",
    image: "💊",
    prescription: false,
  },
  {
    id: 5,
    name: "Digital Thermometer",
    category: "Health Devices",
    price: 8.99,
    originalPrice: 12.99,
    discount: "31% OFF",
    image: "🌡️",
    prescription: false,
  },
  {
    id: 6,
    name: "Multivitamin Capsules",
    category: "Vitamins",
    price: 14.99,
    originalPrice: 19.99,
    discount: "25% OFF",
    image: "💊",
    prescription: false,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <button className="text-primary-600 font-semibold hover:underline">
            View All
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-6">
                <div className="text-6xl text-center mb-4">{product.image}</div>
                <span className="text-xs text-gray-500 uppercase">{product.category}</span>
                <h3 className="font-semibold text-lg mt-1 mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                    {product.discount}
                  </span>
                </div>
                
                <button className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

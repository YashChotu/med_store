"use client";

import { useSearchParams } from "next/navigation";
import { ShoppingCart, Search as SearchIcon } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { Suspense } from "react";

const allProducts = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    price: 5.99,
    originalPrice: 7.99,
    discount: "25% OFF",
    image: "💊",
  },
  {
    id: 2,
    name: "Vitamin D3 Tablets",
    category: "Vitamins & Supplements",
    price: 12.99,
    originalPrice: 15.99,
    discount: "19% OFF",
    image: "💊",
  },
  {
    id: 3,
    name: "Blood Pressure Monitor",
    category: "Health Devices",
    price: 45.99,
    originalPrice: 59.99,
    discount: "23% OFF",
    image: "🩺",
  },
  {
    id: 4,
    name: "Omega-3 Fish Oil",
    category: "Supplements",
    price: 18.99,
    originalPrice: 24.99,
    discount: "24% OFF",
    image: "💊",
  },
  {
    id: 5,
    name: "Digital Thermometer",
    category: "Health Devices",
    price: 8.99,
    originalPrice: 12.99,
    discount: "31% OFF",
    image: "🌡️",
  },
  {
    id: 6,
    name: "Multivitamin Capsules",
    category: "Vitamins",
    price: 14.99,
    originalPrice: 19.99,
    discount: "25% OFF",
    image: "💊",
  },
  {
    id: 7,
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    price: 6.99,
    originalPrice: 9.99,
    discount: "30% OFF",
    image: "💊",
  },
  {
    id: 8,
    name: "Calcium Tablets",
    category: "Supplements",
    price: 11.99,
    originalPrice: 14.99,
    discount: "20% OFF",
    image: "💊",
  },
];

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddToCart = (product: typeof allProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    showToast(`${product.name} added to cart!`, "success");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600">
          {filteredProducts.length} results found for "{query}"
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <SearchIcon className="mx-auto text-gray-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No results found</h2>
          <p className="text-gray-600 mb-6">
            Try searching with different keywords
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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
                
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-primary-600 text-white py-2 rounded-lg font-semibold hover:bg-primary-700 transition flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  );
}

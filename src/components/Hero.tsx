"use client";

import { Pill, Upload, Truck, Shield } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-br from-primary-50 to-orange-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Order genuine medicines online with prescription upload and get doorstep delivery
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const element = document.getElementById('featured-products');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Order Now
              </button>
              <button 
                onClick={() => router.push('/upload-prescription')}
                className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition"
              >
                Upload Prescription
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Pill className="text-primary-600 mb-3" size={32} />
              <h3 className="font-semibold mb-1">Authentic Medicines</h3>
              <p className="text-sm text-gray-600">100% genuine products</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Upload className="text-primary-600 mb-3" size={32} />
              <h3 className="font-semibold mb-1">Easy Upload</h3>
              <p className="text-sm text-gray-600">Upload prescription easily</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Truck className="text-primary-600 mb-3" size={32} />
              <h3 className="font-semibold mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Delivered to your door</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="text-primary-600 mb-3" size={32} />
              <h3 className="font-semibold mb-1">Secure Payment</h3>
              <p className="text-sm text-gray-600">Safe & encrypted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

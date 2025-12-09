import Link from "next/link";
import { Pill, Heart, Stethoscope, Syringe, Thermometer, Activity } from "lucide-react";

const categories = [
  { name: "Medicines", icon: Pill, href: "/category/medicines", color: "bg-blue-100 text-blue-600" },
  { name: "Healthcare", icon: Heart, href: "/category/healthcare", color: "bg-red-100 text-red-600" },
  { name: "Diagnostics", icon: Stethoscope, href: "/category/diagnostics", color: "bg-green-100 text-green-600" },
  { name: "Vaccines", icon: Syringe, href: "/category/vaccines", color: "bg-purple-100 text-purple-600" },
  { name: "Devices", icon: Thermometer, href: "/category/devices", color: "bg-yellow-100 text-yellow-600" },
  { name: "Wellness", icon: Activity, href: "/category/wellness", color: "bg-pink-100 text-pink-600" },
];

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center p-6 rounded-xl hover:shadow-lg transition group"
            >
              <div className={`${category.color} p-4 rounded-full mb-3 group-hover:scale-110 transition`}>
                <category.icon size={32} />
              </div>
              <span className="text-sm font-semibold text-gray-800">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

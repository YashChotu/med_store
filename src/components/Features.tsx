import { Truck, Shield, Clock, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on orders above $50",
  },
  {
    icon: Shield,
    title: "100% Authentic",
    description: "Genuine products from licensed vendors",
  },
  {
    icon: Clock,
    title: "Quick Service",
    description: "Fast delivery within 24-48 hours",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Expert assistance anytime you need",
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MedStore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary-600" size={32} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Features from "@/components/Features";
import HealthArticles from "@/components/HealthArticles";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Features />
      <HealthArticles />
    </div>
  );
}

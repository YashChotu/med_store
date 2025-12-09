import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "10 Tips for a Healthy Heart",
    excerpt: "Learn about lifestyle changes and habits that can improve your cardiovascular health...",
    category: "Heart Health",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Diabetes Management",
    excerpt: "A comprehensive guide to managing diabetes through diet, exercise, and medication...",
    category: "Diabetes",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Boost Your Immunity Naturally",
    excerpt: "Discover natural ways to strengthen your immune system and stay healthy...",
    category: "Immunity",
    readTime: "6 min read",
  },
];

export default function HealthArticles() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Health Articles</h2>
          <Link href="/articles" className="text-primary-600 font-semibold hover:underline">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-primary-200 to-primary-400"></div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                <Link
                  href={`/articles/${article.id}`}
                  className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import ClappNavbar from "@/components/ClappNavbar";
import ClappFooter from "@/components/ClappFooter";

const blogPosts = [
  {
    slug: "meta-ad-waste",
    emoji: "📊",
    category: "ATLAS",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    title: "The Hidden €500K Problem: Why Most Meta Ads Waste 40% of Budget",
    description:
      "Every day, thousands of companies pour millions into Meta ads without realizing 40% of their budget evaporates into low-performing placements, wrong audiences, and creative fatigue. Here's how to identify and eliminate waste.",
  },
  {
    slug: "ai-agent-memory",
    emoji: "🧠",
    category: "MOSS",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    title: "Why AI Agents Fail: The Memory Problem No One Talks About",
    description:
      "You've built an AI agent. It works... sometimes. Then it hallucinates, forgets context, or gives outdated answers. The problem isn't your prompt—it's memory architecture. Here's why sub-10ms retrieval changes everything.",
  },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <ClappNavbar />

      <main className="max-w-[1000px] mx-auto px-5 pt-[140px] pb-20">
        <h1 className="text-[clamp(32px,6vw,56px)] font-medium mb-4">Blog</h1>
        <p className="text-xl text-white/60 mb-16">
          Insights on AI orchestration, ad optimization, and the future of marketing
        </p>

        <div className="grid gap-8 md:grid-cols-[repeat(auto-fill,minmax(450px,1fr))]">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block bg-white/[0.03] border border-white/10 rounded-lg overflow-hidden no-underline transition-all duration-300 hover:border-emerald-500 hover:-translate-y-1"
            >
              <div className="w-full h-[250px] bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center text-6xl">
                {post.emoji}
              </div>
              <div className="p-8">
                <div className="flex gap-3 mb-4 text-xs text-white/50">
                  <span className="bg-emerald-500/15 text-emerald-500 px-3 py-1 rounded font-semibold">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-2xl mb-3 text-white">{post.title}</h2>
                <p className="text-white/60 text-base leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <ClappFooter />
    </div>
  );
};

export default Blogs;

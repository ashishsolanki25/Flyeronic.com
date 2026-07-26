import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export function RelatedPosts({ excludeSlug }: { excludeSlug: string }) {
  const related = blogPosts.filter((p) => p.slug !== excludeSlug);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-border">
      <h2 className="text-xl font-bold font-heading text-foreground mb-6">
        Related Reading
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-muted/10 border border-border rounded-2xl p-5 hover:border-primary/30 transition-all"
          >
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
              {post.category}
            </span>
            <h3 className="font-semibold text-foreground text-sm leading-snug mb-3 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <span className="flex items-center gap-1.5 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Read more <ArrowRight size={12} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

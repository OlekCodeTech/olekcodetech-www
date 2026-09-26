import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { formatDate, type Post } from "@/lib/posts";
import { cn } from "@/lib/utils";

export default function PostCard({ post, featured }: { post: Post; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-line/70 bg-ink-2/60 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50",
        featured && "md:grid md:grid-cols-2",
      )}
    >
      <Link href={`/${post.slug}/`} className={cn("relative block overflow-hidden", featured ? "aspect-[4/3] md:aspect-auto md:min-h-[360px]" : "aspect-[16/10]")}>
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-ink-3 to-ink" />
        )}
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex flex-wrap gap-2">
          {post.categories.map((c) => (
            <span key={c} className="rounded-pill bg-cyan-dim px-3 py-1 text-xs font-semibold text-cyan">
              {c}
            </span>
          ))}
        </div>
        <h3 className={cn("mt-4 text-balance", featured ? "text-2xl sm:text-3xl" : "text-xl")}>
          <Link href={`/${post.slug}/`} className="hover:text-cyan">
            {post.title}
          </Link>
        </h3>
        {post.excerpt && <p className={cn("mt-3 text-body", !featured && "line-clamp-3")}>{post.excerpt}</p>}
        <div className="mt-auto flex items-center gap-4 pt-5 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingMinutes} min
          </span>
        </div>
      </div>
    </article>
  );
}

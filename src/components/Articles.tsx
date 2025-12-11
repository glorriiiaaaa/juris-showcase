/**
 * ====================================================
 * ARTICLES/BLOG SECTION
 * ====================================================
 * 
 * This component displays blog/article cards.
 * 
 * TO EDIT: Modify in src/data/siteData.ts (articles array)
 * - Add or remove articles
 * - Each article has: title, excerpt, author, date, category, slug
 */

import { articles } from "@/data/siteData";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Articles = () => {
  return (
    <section id="articles" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
            Insights
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Latest Articles
          </h2>
          <p className="text-muted-foreground text-lg">
            Legal insights and updates from our expert team
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:shadow-elevated transition-all group"
            >
              {/* Article Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary to-navy-light relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-secondary hover:text-gold-dark hover:bg-transparent font-semibold group/btn"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
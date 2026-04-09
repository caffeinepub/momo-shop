import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { fanFavorites } from "../data/sampleData";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function FavoritesSection() {
  return (
    <section id="favorites" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="border-accent/40 text-accent bg-accent/10 mb-4 px-4 py-1"
          >
            ⭐ Fan Favorites
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Most Loved Momos
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            These are the dishes our regulars can't stop ordering. Don't just
            take our word for it — try them yourself.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          data-ocid="favorites-grid"
        >
          {fanFavorites.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="flex gap-5 bg-card rounded-2xl p-5 shadow-card hover:shadow-elevated transition-shadow duration-300 border border-border group"
              data-ocid={`favorite-${item.id}`}
            >
              <div className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-foreground text-base leading-tight">
                      {item.name}
                    </h3>
                    <span className="font-display font-bold text-primary text-base flex-shrink-0">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm font-body mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-body px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            data-ocid="favorites-full-menu-cta"
            variant="outline"
            size="lg"
            className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground font-body font-medium transition-all duration-200"
            onClick={() => scrollTo("menu")}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}

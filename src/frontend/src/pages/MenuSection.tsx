import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { menuItems } from "../data/sampleData";
import type { MenuItem } from "../types";

type Category = "all" | MenuItem["category"];

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Items" },
  { key: "momos-variety", label: "Momos Variety" },
  { key: "signature", label: "Signature Dish" },
  { key: "special", label: "Special Dish" },
  { key: "maggie", label: "Maggie" },
];

const tagColors: Record<string, string> = {
  Spicy: "bg-primary/15 text-primary border-primary/30",
  Popular: "bg-accent/15 text-accent border-accent/30",
  Vegan: "bg-chart-5/20 text-foreground border-chart-5/40",
  Healthy: "bg-chart-5/20 text-foreground border-chart-5/40",
  Signature: "bg-primary/20 text-primary border-primary/40",
  "Fan Favorite": "bg-accent/20 text-accent border-accent/40",
  Traditional: "bg-muted text-muted-foreground border-border",
  Authentic: "bg-muted text-muted-foreground border-border",
  Crispy: "bg-accent/15 text-accent border-accent/30",
};

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  function handleAddToOrder() {
    toast.success(`${item.name} added to your order!`, {
      description: "We'll have it ready fresh for you.",
      action: {
        label: "View Order",
        onClick: () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" }),
      },
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 group flex flex-col"
      data-ocid={`menu-item-${item.id}`}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={`text-xs font-body font-medium px-2.5 py-0.5 rounded-full border ${
                tagColors[tag] ?? "bg-muted text-muted-foreground border-border"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm rounded-lg px-2.5 py-1">
          <span className="font-display font-bold text-primary text-lg">
            ₹{item.price}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-foreground mb-1.5">
          {item.name}
        </h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed flex-1">
          {item.description}
        </p>
        <Button
          data-ocid={`add-to-order-${item.id}`}
          className="mt-4 w-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200 font-body font-medium"
          variant="outline"
          size="sm"
          onClick={handleAddToOrder}
        >
          Add to Order
        </Button>
      </div>
    </motion.div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? menuItems
      : menuItems.filter((m) => m.category === active);

  return (
    <section id="menu" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="border-primary/30 text-primary bg-primary/8 mb-4 px-4 py-1"
          >
            Our Menu
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Handcrafted with Love
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Every momo is made fresh daily using traditional recipes passed down
            through generations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Menu categories"
          data-ocid="menu-category-filter"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={active === cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-body font-medium transition-all duration-200 border ${
                active === cat.key
                  ? "bg-primary text-primary-foreground border-primary shadow-card"
                  : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="menu-grid"
        >
          {filtered.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

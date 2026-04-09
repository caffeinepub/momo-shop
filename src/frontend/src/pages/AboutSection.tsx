import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const values = [
  {
    emoji: "🌿",
    title: "Fresh Ingredients",
    desc: "We source the freshest vegetables, herbs, and spices daily. No preservatives, no shortcuts.",
  },
  {
    emoji: "👩‍🍳",
    title: "Handmade Daily",
    desc: "Every wrapper is hand-rolled, every filling is hand-mixed. Traditional craftsmanship in every bite.",
  },
  {
    emoji: "🏔️",
    title: "Authentic Recipes",
    desc: "Recipes rooted in Himalayan tradition, lovingly brought to the heart of Navi Mumbai.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated aspect-[4/3]">
              <img
                src="/assets/our-story.png"
                alt="Miss Momo our story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-card rounded-xl shadow-elevated p-4 border border-border">
              <p className="font-display font-bold text-3xl text-primary">
                10+
              </p>
              <p className="text-muted-foreground text-xs font-body">
                Years of Tradition
              </p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <Badge
                variant="outline"
                className="border-primary/30 text-primary bg-primary/8 mb-4 px-4 py-1"
              >
                Our Story
              </Badge>
              <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground leading-tight mb-4">
                More Than Just a Dumpling
              </h2>
              <p className="text-muted-foreground font-body text-base leading-relaxed">
                Miss Momo was born from a simple belief: that food has the power
                to bring people together. What started as a family kitchen
                experiment has grown into the neighborhood's favorite momo
                destination — serving hundreds of happy customers every week.
              </p>
            </div>

            <p className="text-muted-foreground font-body text-base leading-relaxed">
              Our founder brought her family's treasured Himalayan recipes to
              Navi Mumbai, adapting them with love for local palates while
              preserving every ounce of authenticity. From Kharghar to the whole
              city — each momo carries that heritage forward.
            </p>

            <div className="space-y-4 pt-2">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.4 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                    {v.emoji}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-0.5">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body">
                      {v.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              data-ocid="about-menu-cta"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium mt-2"
              onClick={() => scrollTo("menu")}
            >
              See Our Menu
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

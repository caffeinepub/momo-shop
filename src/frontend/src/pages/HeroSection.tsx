import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-start overflow-hidden"
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/miss-momo-shop.png"
          alt="Miss Momo shop front with green signage"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent rounded-full px-4 py-1.5 text-sm font-body font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Authentic Himalayan Flavors
          </motion.div>

          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-secondary mb-6">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block"
            >
              Experience the
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="block text-accent"
            >
              Authentic Taste
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="block"
            >
              of Momos
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-secondary/80 font-body text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
          >
            Traditional recipes, modern flavor, made with love. Every dumpling
            tells a story of the Himalayas — crafted fresh daily in our kitchen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              data-ocid="hero-menu-cta"
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold text-base px-8 shadow-elevated"
              onClick={() => scrollTo("menu")}
            >
              Order Now
            </Button>
            <Button
              data-ocid="hero-contact-cta"
              size="lg"
              variant="outline"
              className="border-secondary/40 text-secondary hover:bg-secondary/10 font-body font-medium text-base px-8"
              onClick={() => scrollTo("contact")}
            >
              Find Us
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12 flex gap-8"
          >
            {[
              { value: "15+", label: "Menu Items" },
              { value: "500+", label: "Happy Customers" },
              { value: "5★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-bold text-2xl text-accent">
                  {stat.value}
                </p>
                <p className="text-secondary/60 text-xs font-body mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        aria-label="Scroll down"
        onClick={() => scrollTo("menu")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-secondary/50 hover:text-secondary transition-colors duration-200"
      >
        <span className="text-xs font-body">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.button>
    </section>
  );
}

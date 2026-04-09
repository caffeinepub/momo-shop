import { Badge } from "@/components/ui/badge";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "motion/react";
import { testimonials } from "../data/sampleData";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Miss+momos/@19.0281063,73.0164081,18z/";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {["s1", "s2", "s3", "s4", "s5"].map((key, i) => (
        <Star
          key={key}
          className={`w-4 h-4 ${
            i < rating ? "text-accent fill-accent" : "text-muted-foreground"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-secondary/60">
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
            Testimonials
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Real stories from real momo lovers who keep coming back for more.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
          data-ocid="testimonials-grid"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border flex flex-col gap-4"
              data-ocid={`testimonial-${t.id}`}
            >
              <StarRating rating={t.rating} />
              <p className="text-foreground font-body text-sm leading-relaxed flex-1">
                "{t.comment}"
              </p>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="font-display font-bold text-sm text-primary">
                      {t.avatar}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-sm text-foreground truncate">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs font-body">
                      {t.date}
                    </p>
                  </div>
                </div>
                {t.reviewUrl && (
                  <a
                    href={t.reviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${t.name}'s review on Google`}
                    className="shrink-0 text-muted-foreground hover:text-primary transition-colors duration-200"
                    data-ocid={`review-link-${t.id}`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground font-body text-sm">
            <span className="font-semibold text-foreground">4.9/5 stars</span> —{" "}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:underline underline-offset-2 transition-colors duration-200"
              data-ocid="all-reviews-link"
            >
              See all our reviews on Google
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

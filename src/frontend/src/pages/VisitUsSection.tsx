import { Badge } from "@/components/ui/badge";
import {
  Car,
  Coffee,
  GraduationCap,
  Heart,
  Leaf,
  MapPin,
  Sofa,
  Star,
  Users,
  Utensils,
} from "lucide-react";
import { motion } from "motion/react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  delay?: number;
}

function InfoCard({ icon, title, items, delay = 0 }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.45 }}
      className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-5 flex flex-col gap-3 hover:shadow-elevated transition-shadow duration-300"
      data-ocid={`visit-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-primary flex-shrink-0">
          {icon}
        </div>
        <h3 className="font-display font-semibold text-foreground text-sm">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-xs font-body px-3 py-1 rounded-full bg-primary/8 text-primary border border-primary/20"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const infoCards: { icon: React.ReactNode; title: string; items: string[] }[] = [
  {
    icon: <Utensils className="w-5 h-5" />,
    title: "Service",
    items: ["On-site services", "Dine-in"],
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Popular For",
    items: ["Solo dining"],
  },
  {
    icon: <Coffee className="w-5 h-5" />,
    title: "Offerings",
    items: ["Quick bite", "Small plates", "Vegetarian options", "Dishes"],
  },
  {
    icon: <Sofa className="w-5 h-5" />,
    title: "Atmosphere",
    items: ["Casual", "Trendy"],
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Crowd",
    items: ["Groups", "University students"],
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Children",
    items: ["Good for kids"],
  },
  {
    icon: <Car className="w-5 h-5" />,
    title: "Parking",
    items: ["Free street parking"],
  },
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Dietary",
    items: ["Vegetarian-friendly"],
  },
];

export function VisitUsSection() {
  return (
    <section
      id="visit"
      className="py-20 lg:py-28 bg-foreground relative overflow-hidden"
      data-ocid="visit-us-section"
    >
      {/* Subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="border-primary/40 text-primary bg-primary/10 mb-4 px-4 py-1"
          >
            What to Expect
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-card mb-4">
            Visit Us
          </h2>
          <p className="text-card/60 font-body text-lg max-w-xl mx-auto">
            Great food, a relaxed vibe, and a spot that welcomes everyone — from
            solo diners to big groups.
          </p>

          {/* Address pill */}
          <motion.a
            href="https://maps.google.com/?q=22H8%2B5G+Navi+Mumbai,Maharashtra"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 rounded-full bg-card/10 border border-card/20 text-card/80 text-sm font-body hover:bg-card/20 transition-colors duration-200"
            data-ocid="visit-maps-link"
          >
            <MapPin className="w-4 h-4 text-primary" />
            22H8+5G Navi Mumbai, Maharashtra
          </motion.a>
        </motion.div>

        {/* Info cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {infoCards.map((card, i) => (
            <InfoCard
              key={card.title}
              icon={card.icon}
              title={card.title}
              items={card.items}
              delay={i * 0.07}
            />
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-card/50 font-body text-sm flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4 text-primary" />
            Loved by university students &amp; families across Navi Mumbai
          </p>
        </motion.div>
      </div>
    </section>
  );
}

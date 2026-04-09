import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Facebook, Instagram, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { contactInfo } from "../data/sampleData";

function scrollTo(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const utmUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're on the list!", {
      description:
        "Get exclusive deals and be first to know about new flavors.",
    });
    setEmail("");
  }

  return (
    <footer className="bg-foreground text-secondary" data-ocid="site-footer">
      <div className="container mx-auto px-4 sm:px-6 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">
                  M
                </span>
              </div>
              <p className="font-display font-bold text-xl leading-tight text-secondary">
                Miss Momo
              </p>
            </div>
            <p className="text-sm text-secondary/70 font-body leading-relaxed max-w-xs">
              Authentic Himalayan momos crafted with love, tradition, and the
              finest spices. Every bite tells a story.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {contactInfo.socialLinks.instagram && (
                <a
                  href={contactInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary/70 hover:text-secondary hover:bg-secondary/20 transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {contactInfo.socialLinks.facebook && (
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-secondary/10 flex items-center justify-center text-secondary/70 hover:text-secondary hover:bg-secondary/20 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-secondary tracking-wide uppercase">
              Find Us
            </h3>
            <div className="space-y-3">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-secondary/70 hover:text-secondary transition-colors duration-200"
              >
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </a>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-secondary/70 hover:text-secondary transition-colors duration-200"
                data-ocid="footer-phone"
              >
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1">
              {["#menu", "#about", "#contact"].map((href) => (
                <button
                  key={href}
                  type="button"
                  onClick={() => scrollTo(href)}
                  className="text-xs text-secondary/50 hover:text-secondary transition-colors duration-200 capitalize"
                >
                  {href.replace("#", "")}
                </button>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-secondary tracking-wide uppercase">
              Hours
            </h3>
            <div className="space-y-2">
              {contactInfo.hours.map((entry) => (
                <div
                  key={entry.days}
                  className="flex items-start gap-3 text-sm"
                >
                  <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-secondary/70 font-medium">
                      {entry.days}
                    </p>
                    <p className="text-secondary/50">{entry.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm text-secondary tracking-wide uppercase">
              Stay in the Loop
            </h3>
            <p className="text-sm text-secondary/70 font-body leading-relaxed">
              Get exclusive deals, new dish alerts, and seasonal specials
              delivered to your inbox.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2.5"
              data-ocid="newsletter-form"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address for newsletter"
                data-ocid="newsletter-email-input"
                className="bg-secondary/10 border-secondary/20 text-secondary placeholder:text-secondary/40 focus-visible:ring-accent focus-visible:border-accent/60"
              />
              <Button
                type="submit"
                data-ocid="newsletter-subscribe-btn"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium"
                size="sm"
              >
                Subscribe for Deals
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondary/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary/40">
          <p>© {year} Miss Momo. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={utmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary/60 transition-colors duration-200"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

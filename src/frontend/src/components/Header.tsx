import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Favorites", href: "#favorites" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      data-ocid="main-nav"
      className={`sticky top-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card shadow-elevated border-b border-border"
          : "bg-card/95 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
            aria-label="Miss Momo - scroll to top"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-card">
              <span className="text-primary-foreground font-display font-bold text-lg leading-none">
                M
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-foreground text-lg leading-tight group-hover:text-primary transition-colors duration-200">
                Miss
              </span>
              <span className="font-display font-bold text-primary text-lg leading-tight">
                Momo
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-md hover:bg-muted"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:09082530249"
              data-ocid="header-phone-cta"
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span>09082530249</span>
            </a>
            <Button
              data-ocid="header-order-cta"
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium"
              onClick={() => scrollTo("#menu")}
            >
              Order Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="mobile-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-card border-t border-border"
            data-ocid="mobile-menu"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => {
                    scrollTo(link.href);
                    setMenuOpen(false);
                  }}
                  className="text-left px-4 py-3 text-base font-body font-medium text-foreground hover:bg-muted rounded-md transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-2 pt-2 border-t border-border flex flex-col gap-2">
                <a
                  href="tel:09082530249"
                  className="flex items-center gap-2 px-4 py-2 text-primary font-medium"
                >
                  <Phone className="w-4 h-4" />
                  09082530249
                </a>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-body"
                  onClick={() => {
                    scrollTo("#menu");
                    setMenuOpen(false);
                  }}
                >
                  Order Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

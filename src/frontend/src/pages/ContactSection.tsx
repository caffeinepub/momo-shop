import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { contactInfo } from "../data/sampleData";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you soon.");
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted/30">
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
            Visit Us
          </Badge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Come Find Us
          </h2>
          <p className="text-muted-foreground font-body text-lg max-w-xl mx-auto">
            Walk in, sit down, and let us take you on a flavor journey to the
            Himalayas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
                data-ocid="contact-address"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors duration-200">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground mb-0.5">
                    Address
                  </p>
                  <p className="text-muted-foreground font-body text-sm group-hover:text-foreground transition-colors duration-200">
                    {contactInfo.address}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`}
                className="flex items-start gap-4 group"
                data-ocid="contact-phone"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground mb-0.5">
                    Phone
                  </p>
                  <p className="text-muted-foreground font-body text-sm group-hover:text-foreground transition-colors duration-200">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-start gap-4 group"
                data-ocid="contact-email"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/25 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground mb-0.5">
                    Email
                  </p>
                  <p className="text-muted-foreground font-body text-sm group-hover:text-foreground transition-colors duration-200">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground mb-2">
                    Hours
                  </p>
                  <div className="space-y-1" data-ocid="contact-hours">
                    {contactInfo.hours.map((h) => (
                      <div key={h.days} className="text-sm font-body">
                        <span className="text-foreground font-medium">
                          {h.days}:{" "}
                        </span>
                        <span className="text-muted-foreground">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <iframe
                src="https://maps.google.com/maps?q=19.0279153,73.0163142&z=18&output=embed"
                width="100%"
                height="300"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Miss Momos location on Google Maps"
                data-ocid="contact-map-embed"
                style={{ display: "block" }}
              />
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 bg-muted hover:bg-muted/70 transition-colors duration-200 text-sm font-body text-muted-foreground hover:text-primary"
                data-ocid="contact-map-link"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-7 shadow-card border border-border">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-10 gap-4 text-center">
                  <CheckCircle className="w-14 h-14 text-primary" />
                  <h3 className="font-display font-bold text-xl text-foreground">
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Thanks for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact-form"
                >
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-1">
                      Get in Touch
                    </h3>
                    <p className="text-muted-foreground text-sm font-body">
                      Have a question or want to place a large order? Drop us a
                      message.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="font-body font-medium text-foreground text-sm"
                    >
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      data-ocid="contact-name-input"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="bg-background border-input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="font-body font-medium text-foreground text-sm"
                    >
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact-email-input"
                      placeholder="priya@example.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="bg-background border-input"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="message"
                      className="font-body font-medium text-foreground text-sm"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact-message-input"
                      placeholder="I'd love to place a catering order for 50 people..."
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="bg-background border-input resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    data-ocid="contact-submit-btn"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

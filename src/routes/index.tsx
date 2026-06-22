import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Instagram, Mail, MapPin, X, Sparkles, Scissors, Gem, Ruler, Truck, Palette } from "lucide-react";

import logoAsset from "@/assets/szf-logo.png";
import qrAsset from "@/assets/szf-qr.png";
import sageAsset from "@/assets/design-sage.png";
import fuchsiaAsset from "@/assets/design-fuchsia.png";
import goldAsset from "@/assets/design-gold.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SZF Designs — Custom Made Classics | Luxury Couture, Hyderabad" },
      { name: "description", content: "SZF Designs is a Hyderabad-based luxury custom fashion house crafting one-of-a-kind, made-to-order couture. One vision. One client. One outfit." },
      { property: "og:title", content: "SZF Designs — Custom Made Classics" },
      { property: "og:description", content: "Handcrafted, made-to-order couture from Hyderabad. One vision. One client. One custom-made outfit." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: fuchsiaAsset },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: fuchsiaAsset },
    ],
  }),
  component: Index,
});

const designs = [
  {
    title: "Royal Purple & Fuchsia",
    description: "Inspired by regal South Asian craftsmanship featuring intricate zari detailing and statement borders.",
    image: fuchsiaAsset,
    number: "01",
  },
  {
    title: "Champagne Gold",
    description: "A timeless luxury ensemble crafted with shimmering textures, delicate embellishments, and graceful movement.",
    image: goldAsset,
    number: "02",
  },
  {
    title: "Sage Green & Burnt Terracotta",
    description: "A sophisticated blend of earthy elegance and heritage embroidery, designed for modern celebrations.",
    image: sageAsset,
    number: "03",
  },
];

const processSteps = [
  { icon: Sparkles, title: "Share Your Inspiration", text: "Send references, ideas, requirements, or your dream outfit concept." },
  { icon: Palette, title: "Design Consultation", text: "We understand your vision and develop a custom design concept." },
  { icon: Ruler, title: "Approval & Measurements", text: "Finalize design details, fabric selections, and precise measurements." },
  { icon: Scissors, title: "Craftsmanship", text: "Our artisans begin creating your outfit with precision and attention to detail." },
  { icon: Truck, title: "Delivery", text: "Receive a truly exclusive piece, designed uniquely for you." },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Designs", href: "#designs" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ivory/90 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img src={logoAsset} alt="SZF Designs" className="h-12 w-12 rounded-full object-cover" />
            <div className="hidden sm:block min-w-0">
              <div className="font-display text-lg leading-none tracking-wide">SZF Designs</div>
              <div className="font-script text-xs text-muted-foreground italic">Custom Made Classics</div>
            </div>
          </a>
          <ul className="hidden md:flex items-center justify-center gap-10 text-[11px] tracking-luxe uppercase">
            {navItems.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="relative py-1 hover:text-accent transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-luxe uppercase border-b border-foreground/40 pb-0.5 hover:border-accent hover:text-accent transition-colors">
            Begin Journey
          </a>
          <button onClick={() => setMenuOpen((o) => !o)} aria-label="Menu" className="md:hidden text-foreground p-2">
            <div className="space-y-1.5">
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-4 bg-current ml-auto" />
            </div>
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-ivory border-t border-border"
            >
              <ul className="px-6 py-6 space-y-4">
                {navItems.map((n) => (
                  <li key={n.href}>
                    <a onClick={() => setMenuOpen(false)} href={n.href} className="block text-sm tracking-luxe uppercase">
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <img src={fuchsiaAsset} alt="SZF Designs couture" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="absolute inset-0 gradient-fade-overlay" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-ivory">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-champagne/70" />
              <span className="text-[11px] tracking-wider-luxe uppercase text-champagne">Hyderabad · Est. Couture</span>
              <div className="h-px w-12 bg-champagne/70" />
            </div>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-none tracking-tight">
              SZF <span className="font-script text-champagne">Designs</span>
            </h1>
            <p className="font-script text-2xl md:text-3xl text-champagne -mt-2">Custom Made Classics</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-12 max-w-xl"
          >
            <p className="font-display text-xl md:text-2xl italic leading-relaxed text-ivory/90">
              One Vision. <span className="text-champagne">·</span> One Client. <span className="text-champagne">·</span> One Custom-Made Outfit.
            </p>
          </motion.div>

          <motion.a
            href="#designs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-14 group inline-flex items-center gap-4 text-[11px] tracking-wider-luxe uppercase text-ivory border border-champagne/60 px-10 py-4 hover:bg-champagne hover:text-charcoal transition-all duration-500"
          >
            Explore Designs
            <span className="block h-px w-6 bg-current transition-all group-hover:w-10" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/70 text-[10px] tracking-luxe uppercase flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <span className="block h-10 w-px bg-ivory/40 animate-float-slow" />
        </motion.div>
      </section>

      {/* INTRO */}
      <FadeSection className="py-32 px-6 max-w-4xl mx-auto text-center">
        <span className="text-[11px] tracking-wider-luxe uppercase text-accent">The House of SZF</span>
        <h2 className="font-display text-4xl md:text-6xl mt-6 leading-tight">
          A Hyderabad atelier devoted to <span className="font-script text-accent">handcrafted</span> couture.
        </h2>
        <div className="gold-line w-32 mx-auto my-10" />
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
          SZF Designs is a luxury custom fashion label where every outfit is created from a single conversation between client and atelier. No collections. No mass production. Only individually crafted pieces, born from your vision.
        </p>
      </FadeSection>

      {/* DESIGNS */}
      <section id="designs" className="py-24 md:py-32 bg-cream">
        <FadeSection className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <span className="text-[11px] tracking-wider-luxe uppercase text-accent">Featured Designs</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">The Atelier Lookbook</h2>
            <div className="gold-line w-24 mx-auto mt-6" />
          </div>

          <div className="space-y-32 md:space-y-48">
            {designs.map((d, i) => {
              const reverse = i % 2 === 1;
              return (
                <FadeSection key={d.title} className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
                  <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
                    <button
                      onClick={() => setLightbox(d.image)}
                      className="group block w-full overflow-hidden shadow-luxe cursor-zoom-in"
                    >
                      <div className="overflow-hidden">
                        <img src={d.image} alt={d.title} loading="lazy" className="w-full h-[60vh] md:h-[80vh] object-cover hover-luxe-img" />
                      </div>
                    </button>
                  </div>
                  <div className={`md:col-span-5 ${reverse ? "md:order-1 md:pr-10" : "md:pl-10"}`}>
                    <div className="font-display text-7xl md:text-8xl text-champagne/60 leading-none">{d.number}</div>
                    <div className="gold-line w-16 my-6" />
                    <h3 className="font-display text-3xl md:text-5xl leading-tight">{d.title}</h3>
                    <p className="mt-6 text-muted-foreground leading-relaxed font-light">{d.description}</p>
                    <div className="mt-8 flex items-center gap-3 text-[11px] tracking-luxe uppercase">
                      <Gem className="h-3.5 w-3.5 text-accent" />
                      <span>Made to Order · Bespoke</span>
                    </div>
                  </div>
                </FadeSection>
              );
            })}
          </div>
        </FadeSection>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 md:py-32 bg-ivory">
        <FadeSection className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-20">
            <span className="text-[11px] tracking-wider-luxe uppercase text-accent">Customization Process</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">How It Works</h2>
            <div className="gold-line w-24 mx-auto mt-6" />
          </div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-champagne to-transparent" />
            <div className="space-y-16 md:space-y-24">
              {processSteps.map((s, i) => {
                const reverse = i % 2 === 1;
                return (
                  <FadeSection key={s.title} className={`relative grid md:grid-cols-2 gap-8 items-center`}>
                    <div className={`pl-16 md:pl-0 ${reverse ? "md:order-2 md:pl-16" : "md:text-right md:pr-16"}`}>
                      <div className="text-[11px] tracking-wider-luxe uppercase text-accent mb-2">Step {String(i + 1).padStart(2, "0")}</div>
                      <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                      <p className="mt-4 text-muted-foreground font-light leading-relaxed max-w-md md:ml-auto">{s.text}</p>
                    </div>
                    <div className={`hidden md:block ${reverse ? "md:order-1" : ""}`} />
                    <div className="absolute left-0 md:left-1/2 top-0 -translate-x-1/2 md:-translate-x-1/2">
                      <div className="h-12 w-12 rounded-full bg-ivory border border-champagne flex items-center justify-center shadow-soft">
                        <s.icon className="h-5 w-5 text-accent" />
                      </div>
                    </div>
                  </FadeSection>
                );
              })}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 md:py-32 bg-cream">
        <FadeSection className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={goldAsset} alt="Craftsmanship" className="w-full h-[70vh] object-cover shadow-luxe" />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-ivory px-8 py-6 shadow-luxe border border-champagne/40">
              <div className="font-script text-3xl text-accent">Exclusively Yours</div>
            </div>
          </div>
          <div>
            <span className="text-[11px] tracking-wider-luxe uppercase text-accent">The SZF Difference</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">Why Choose <span className="font-script text-accent">Customization?</span></h2>
            <div className="gold-line w-16 my-8" />
            <p className="text-muted-foreground leading-relaxed font-light">
              Instead of spending days searching for fabrics, coordinating with multiple vendors, and repeating your vision countless times, SZF Designs handles the entire journey from concept to creation.
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed font-light">
              Every outfit is designed exclusively for one client, ensuring uniqueness, quality, and meticulous craftsmanship.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { icon: Gem, label: "Exclusivity" },
                { icon: Scissors, label: "Artisanal" },
                { icon: Sparkles, label: "Bespoke" },
              ].map((f) => (
                <div key={f.label} className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full border border-champagne flex items-center justify-center text-accent">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-3 text-[11px] tracking-luxe uppercase">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeSection>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6">
        <FadeSection className="max-w-4xl mx-auto text-center">
          <span className="text-[11px] tracking-wider-luxe uppercase text-accent">About</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 leading-tight">
            What Makes <span className="font-script text-accent">SZF Designs</span> Different?
          </h2>
          <div className="gold-line w-32 mx-auto my-10" />
          <p className="text-lg text-muted-foreground leading-relaxed font-light">
            At SZF Designs, quality always comes before quantity. Every outfit is thoughtfully designed and handcrafted with precision, attention to detail, and a commitment to individuality.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-light">
            We do not mass-produce designs. Each creation is tailored specifically for the person wearing it.
          </p>
          <div className="mt-12 font-display italic text-2xl md:text-3xl leading-relaxed text-foreground">
            One Vision.<br />
            One Client.<br />
            <span className="text-accent">One Custom-Made Outfit.</span>
          </div>
        </FadeSection>
      </section>

      {/* INSTAGRAM QR */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-cream to-ivory">
        <FadeSection className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="bg-ivory border border-champagne/40 shadow-luxe p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[11px] tracking-wider-luxe uppercase text-accent">Connect</span>
              <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">Begin Your <span className="font-script text-accent">Customization</span> Journey</h2>
              <div className="gold-line w-16 my-8" />
              <p className="text-muted-foreground font-light leading-relaxed">
                Scan the QR code to connect with SZF Designs on Instagram and start creating your dream outfit.
              </p>
              <a href="https://instagram.com/szf.designs" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 text-[11px] tracking-luxe uppercase border-b border-foreground/40 pb-0.5 hover:border-accent hover:text-accent transition-colors">
                <Instagram className="h-3.5 w-3.5" /> @szf.designs
              </a>
            </div>
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.03 }}
                className="bg-ivory p-6 border border-champagne/50 shadow-luxe rounded-sm text-center"
              >
                <img
                  src={qrAsset}
                  alt="SZF Designs Instagram QR code"
                  className="w-64 h-64 md:w-72 md:h-72 object-contain mx-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mt-4 font-display text-lg text-charcoal tracking-wide">@szf.designs</div>
                <div className="mt-1 text-[11px] tracking-luxe uppercase text-muted-foreground">Scan to begin your customization journey</div>
              </motion.div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-ivory">
        <FadeSection className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-wider-luxe uppercase text-accent">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-6xl mt-4">Contact Us</h2>
            <div className="gold-line w-24 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { icon: Mail, label: "Email", value: "szf.designs@gmail.com", href: "mailto:szf.designs@gmail.com" },
                { icon: Instagram, label: "Instagram", value: "@szf.designs", href: "https://instagram.com/szf.designs" },
                { icon: MapPin, label: "Location", value: "Hyderabad, Telangana, India" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-5 border-b border-border pb-6">
                  <div className="h-12 w-12 shrink-0 rounded-full border border-champagne flex items-center justify-center text-accent">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] tracking-luxe uppercase text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="font-display text-xl md:text-2xl mt-1 block hover:text-accent transition-colors break-all">{c.value}</a>
                    ) : (
                      <div className="font-display text-xl md:text-2xl mt-1">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-ivory p-6 border border-champagne/50 shadow-luxe text-center"
              >
                <img
                  src={qrAsset}
                  alt="SZF Designs Instagram QR code"
                  className="w-64 h-64 object-contain mx-auto"
                  loading="lazy"
                  decoding="async"
                />
                <div className="mt-4 font-display text-lg text-charcoal tracking-wide">@szf.designs</div>
                <div className="mt-1 text-[11px] tracking-luxe uppercase text-muted-foreground">Scan to begin your customization journey</div>
              </motion.div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* FOOTER */}
      <footer className="bg-charcoal text-ivory py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div className="flex items-center gap-4">
            <img src={logoAsset} alt="SZF Designs" className="h-16 w-16 rounded-full object-cover" />
            <div>
              <div className="font-display text-xl">SZF Designs</div>
              <div className="font-script text-champagne italic text-sm">Custom Made Classics</div>
            </div>
          </div>
          <div className="text-center text-sm space-y-2">
            <a href="https://instagram.com/szf.designs" className="block hover:text-champagne transition-colors">@szf.designs</a>
            <a href="mailto:szf.designs@gmail.com" className="block hover:text-champagne transition-colors">szf.designs@gmail.com</a>
            <div className="text-ivory/60">Hyderabad, India</div>
          </div>
          <div className="text-center md:text-right text-xs tracking-luxe uppercase text-ivory/60">
            © 2026 SZF Designs<br />All Rights Reserved
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-6 cursor-zoom-out"
          >
            <button className="absolute top-6 right-6 text-ivory p-2" onClick={() => setLightbox(null)} aria-label="Close">
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={lightbox}
              alt="Featured design"
              className="max-h-[90vh] max-w-[90vw] object-contain shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

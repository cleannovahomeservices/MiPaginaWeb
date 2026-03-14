import { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Menu, X, Mail } from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const Chatbot = lazy(() => import("@/components/chatbot").then((m) => ({ default: m.Chatbot })));

const NAV_LINKS = [
  { labelKey: "nav.services", href: "/#servicios" },
  { labelKey: "nav.projects", href: "/#proyectos" },
  { labelKey: "nav.aboutMe", href: "/#sobre-mi" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

interface ServicePageProps {
  slug: string;
}

type ServiceContent = {
  title: string;
  shortDescription: string;
  description: string;
  servicesIncluded: string[];
};

export default function ServicePage({ slug }: ServicePageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t, get } = useLanguage();
  const serviceContent = get<ServiceContent>(`serviceContent.${slug}`);

  if (!serviceContent) {
    return (
      <div className="min-h-screen tech-grid flex items-center justify-center">
        <p className="text-muted-foreground">{t("servicePage.notFound")}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen tech-grid relative overflow-hidden">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <img src="/apiora-logo.png" alt="APIORA" className="h-7 w-auto object-contain" width="112" height="28" decoding="async" />
            <span className="font-display font-bold text-base tracking-widest">APIORA</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div
              className="flex rounded-full border border-white/10 bg-white/5 p-0.5"
              role="group"
              aria-label="Idioma / Language"
            >
              <button
                type="button"
                onClick={() => setLang("es")}
                className={cn(
                  "min-w-[2.25rem] sm:min-w-[2.5rem] py-1.5 px-2 rounded-full text-xs sm:text-sm font-medium transition-colors",
                  lang === "es" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                )}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "min-w-[2.25rem] sm:min-w-[2.5rem] py-1.5 px-2 rounded-full text-xs sm:text-sm font-medium transition-colors",
                  lang === "en" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                )}
              >
                EN
              </button>
            </div>
            <a
              href="/#proyectos"
              className="hidden sm:inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 px-5 py-2 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_16px_rgba(0,212,255,0.2)]"
            >
              {t("nav.viewProjects")} <ChevronRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                >
                  {t(link.labelKey)}
                </a>
              ))}
              <div className="flex justify-center pt-2">
                <div className="flex rounded-full border border-white/10 bg-white/5 p-0.5" aria-label="Idioma / Language">
                  <button
                    type="button"
                    onClick={() => { setLang("es"); setMobileMenuOpen(false); }}
                    className={cn("min-w-[2.5rem] py-2 px-3 rounded-full text-sm font-medium transition-colors", lang === "es" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground")}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLang("en"); setMobileMenuOpen(false); }}
                    className={cn("min-w-[2.5rem] py-2 px-3 rounded-full text-sm font-medium transition-colors", lang === "en" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground")}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* ── Hero ── */}
      <HeroGeometric
        badge={t("servicePage.badge")}
        title1={serviceContent.title}
        title2=""
        subtitle={serviceContent.shortDescription}
        fullHeight={false}
      >
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=cranzcanal@gmail.com&su=Contacto%20desde%20APIORA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] transition-all"
        >
          <Mail className="w-4 h-4" />
          {t("servicePage.requestInfo")}
        </a>
      </HeroGeometric>

      {/* ── Content ── */}
      <section className="py-20 md:py-24 px-6 relative">
        <div className="section-divider absolute top-0 left-0" />
        <div className="container mx-auto max-w-5xl relative">
          <motion.div
            {...fadeInUp}
            className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden"
          >
            <div className="absolute -top-32 -right-32 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-10 items-start">
              <div className="space-y-5">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {t("servicePage.whatIncludes")}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {serviceContent.description}
                </p>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=cranzcanal@gmail.com&su=Contacto%20desde%20APIORA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-full font-semibold text-sm md:text-base hover:shadow-[0_0_20px_rgba(0,212,255,0.35)] transition-all"
                >
                  <Mail className="w-4 h-4" />
                  {t("servicePage.requestInfo")}
                </a>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                  {t("servicePage.detailTitle")}
                </h3>
                <ul className="space-y-3">
                  {serviceContent.servicesIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </div>
  );
}

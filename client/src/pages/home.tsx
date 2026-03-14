import { useState, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Code,
  Zap,
  Bot,
  Network,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Menu,
  X,
  Sparkles,
  Mail,
} from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const Chatbot = lazy(() => import("@/components/chatbot").then((m) => ({ default: m.Chatbot })));

import logoImg from "@assets/ChatGPT_Image_8_mar_2026,_19_25_04_1772994311476.png";
import devImg from "@assets/1772983080062-8iysnwt94dg_1772994215589.png";
import n8nImg from "@assets/1772983941256-rd978ouhgy_1772994215591.png";
import botImg from "@assets/1772984038169-o6e37rliyu_1772994215592.png";
import apiImg from "@assets/1772984197228-jw7jqf7v7on_1772994215592.png";
import gabrielleImg from "@assets/1772987626404-y08r9lumjya_1772994232080.png";
import infinityImg from "@assets/image_1772988057186_hy5c2x_1772994232084.png";
import impostorImg from "@assets/yupp-generated-image-344841_1772994232084.jpg";
import cleanNovaImg from "@assets/yupp-generated-image-814223_1772994232084.jpg";

const NAV_LINKS = [
  { labelKey: "nav.services", href: "#servicios" },
  { labelKey: "nav.projects", href: "#proyectos" },
  { labelKey: "nav.aboutMe", href: "#sobre-mi" },
];

const SERVICE_CONFIG = [
  { slug: "web-apps", href: "/servicios/web-apps", icon: Code, image: devImg, color: "from-cyan-500/20 to-cyan-500/0", accent: "text-cyan-400", border: "group-hover:border-cyan-500/30" },
  { slug: "automatizacion", href: "/servicios/automatizacion", icon: Zap, image: n8nImg, color: "from-purple-500/20 to-purple-500/0", accent: "text-purple-400", border: "group-hover:border-purple-500/30" },
  { slug: "chatbots-ia", href: "/servicios/chatbots-ia", icon: Bot, image: botImg, color: "from-emerald-500/20 to-emerald-500/0", accent: "text-emerald-400", border: "group-hover:border-emerald-500/30" },
  { slug: "integraciones", href: "/servicios/integraciones", icon: Network, image: apiImg, color: "from-amber-500/20 to-amber-500/0", accent: "text-amber-400", border: "group-hover:border-amber-500/30" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const staggerChild = (idx: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: idx * 0.12 },
});

const PROJECT_IMAGES_AND_LINKS = [
  { image: cleanNovaImg, link: "https://cleannova.es" },
  { image: gabrielleImg, link: "https://gabriellecanal.com" },
  { image: impostorImg, link: "https://www.impostor.click" },
  { image: infinityImg, link: "https://investor.infinityproject.io" },
];

const techStack = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "n8n",
  "OpenAI",
  "Pinecone",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Stripe",
  "GitHub",
  "Vercel",
  "Replit",
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen tech-grid relative overflow-hidden">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
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
            {/* Language toggle: ES | EN */}
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
                  lang === "es"
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                )}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "min-w-[2.25rem] sm:min-w-[2.5rem] py-1.5 px-2 rounded-full text-xs sm:text-sm font-medium transition-colors",
                  lang === "en"
                    ? "bg-primary/20 text-primary border border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5",
                )}
              >
                EN
              </button>
            </div>
            <a
              href="#proyectos"
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

        {/* Mobile menu */}
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
                    className={cn(
                      "min-w-[2.5rem] py-2 px-3 rounded-full text-sm font-medium transition-colors",
                      lang === "es" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    ES
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLang("en"); setMobileMenuOpen(false); }}
                    className={cn(
                      "min-w-[2.5rem] py-2 px-3 rounded-full text-sm font-medium transition-colors",
                      lang === "en" ? "bg-primary/20 text-primary border border-primary/30" : "text-muted-foreground hover:text-foreground",
                    )}
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
        badge={t("hero.badge")}
        title1={t("hero.title1")}
        title2={t("hero.title2")}
        subtitle={t("hero.subtitle")}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] transition-all"
          >
            <Sparkles className="w-4 h-4" />
            {t("hero.cta1")}
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 glass-card px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/5 transition-all border border-white/10"
          >
            {t("hero.cta2")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </HeroGeometric>

      {/* ── Services ── */}
      <section id="servicios" className="py-24 md:py-32 px-6 relative">
        <div className="section-divider absolute top-0 left-0" />

        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
              {t("services.badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              {t("services.title")} <span className="text-gradient">{t("services.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("services.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICE_CONFIG.map((cfg, idx) => (
              <motion.a
                key={cfg.slug}
                href={cfg.href}
                {...staggerChild(idx)}
                className={cn(
                  "group glass-card rounded-2xl overflow-hidden transition-all duration-500 block",
                  cfg.border,
                )}
              >
                <div className="h-44 overflow-hidden relative border-b border-white/5">
                  <div className={cn("absolute inset-0 z-10 bg-gradient-to-b", cfg.color, "opacity-60 group-hover:opacity-30 transition-opacity duration-500")} />
                  <img
                    src={cfg.image}
                    alt={t(`services.items.${cfg.slug}.title`)}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("p-2.5 rounded-xl bg-white/5 border border-white/10", cfg.accent)}>
                      <cfg.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-wide">{t(`services.items.${cfg.slug}.title`)}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{t(`services.items.${cfg.slug}.description`)}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="proyectos" className="py-24 md:py-32 px-6 relative">
        <div className="section-divider absolute top-0 left-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-xs font-semibold text-secondary tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-glow-pulse" />
              {t("projects.badge")}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              {t("projects.title")} <span className="text-gradient">{t("projects.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {t("projects.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECT_IMAGES_AND_LINKS.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                {...staggerChild(idx)}
                className="group block"
              >
                <div className="relative rounded-2xl overflow-hidden mb-5 aspect-video border border-white/10 shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 group-hover:from-black/40 transition-all duration-500" />
                  <img
                    src={project.image}
                    alt={t(`projects.items.${idx}.title`)}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/70">
                      {t(`projects.items.${idx}.tag`)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/90 text-primary-foreground shadow-lg">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1.5 group-hover:text-primary transition-colors flex items-center gap-2">
                      {t(`projects.items.${idx}.title`)}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{t(`projects.items.${idx}.description`)}</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="sobre-mi" className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="section-divider absolute top-0 left-0" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-[140px]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2 flex justify-center"
            >
              <div className="relative w-full max-w-xs">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 blur-sm opacity-60" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src="/ami-photo.jpg" alt="Ami Cranz" loading="lazy" decoding="async" className="w-full h-auto object-cover" />
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-3 space-y-6"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {t("about.badge")}
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  {t("about.name")}
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>{t("about.paragraph1")}</p>
                <p>{t("about.paragraph2")}</p>
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-3 pt-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="glass-card rounded-xl p-4 text-center border border-white/5">
                  <div className="text-2xl font-bold text-primary mb-0.5">4+</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{t("about.stats.projects")}</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center border border-white/5">
                  <div className="text-2xl font-bold text-secondary mb-0.5">100%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{t("about.stats.satisfaction")}</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center border border-white/5">
                  <div className="text-2xl font-bold text-emerald-400 mb-0.5">24/7</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{t("about.stats.support")}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="section-divider absolute top-0 left-0" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div {...fadeInUp} className="text-center">
            <div className="glass-card rounded-3xl p-10 md:p-16 border border-white/10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary tracking-wider uppercase mb-6">
                  <Sparkles className="w-3 h-3" />
                  {t("cta.badge")}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {t("cta.title")}
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  {t("cta.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=cranzcanal@gmail.com&su=Contacto%20desde%20APIORA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    {t("cta.email")}
                  </a>
                  <a
                    href="#sobre-mi"
                    className="inline-flex items-center justify-center gap-2 glass-card px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/5 transition-all border border-white/10"
                  >
                    {t("cta.more")}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-black/60 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src="/apiora-logo.png" alt="APIORA" className="h-6 w-auto opacity-60" width="96" height="24" decoding="async" />
              <span className="font-display font-bold text-sm tracking-widest text-muted-foreground">APIORA</span>
            </div>
            <div className="text-muted-foreground text-xs text-center md:text-right">
              © {new Date().getFullYear()} APIORA - AI & Automation. {t("footer.copyright")}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

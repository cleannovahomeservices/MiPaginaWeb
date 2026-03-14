import { useState } from "react";
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
import { Chatbot } from "@/components/chatbot";
import { cn } from "@/lib/utils";

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
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre Mí", href: "#sobre-mi" },
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

const services = [
  {
    title: "Desarrollo Web y Apps",
    description:
      "Páginas web modernas, aplicaciones y plataformas digitales diseñadas para crecer contigo.",
    href: "/servicios/web-apps",
    icon: <Code className="w-5 h-5" />,
    image: devImg,
    color: "from-cyan-500/20 to-cyan-500/0",
    accent: "text-cyan-400",
    border: "group-hover:border-cyan-500/30",
  },
  {
    title: "Automatización de Procesos",
    description:
      "Automatizamos tareas repetitivas y conectamos herramientas para que tu negocio funcione de forma más eficiente.",
    href: "/servicios/automatizacion",
    icon: <Zap className="w-5 h-5" />,
    image: n8nImg,
    color: "from-purple-500/20 to-purple-500/0",
    accent: "text-purple-400",
    border: "group-hover:border-purple-500/30",
  },
  {
    title: "Chatbots y Sistemas con IA",
    description:
      "Asistentes inteligentes capaces de atender clientes, responder preguntas y automatizar procesos.",
    href: "/servicios/chatbots-ia",
    icon: <Bot className="w-5 h-5" />,
    image: botImg,
    color: "from-emerald-500/20 to-emerald-500/0",
    accent: "text-emerald-400",
    border: "group-hover:border-emerald-500/30",
  },
  {
    title: "Integraciones y Sistemas Digitales",
    description:
      "Conectamos plataformas y herramientas para crear ecosistemas digitales completos.",
    href: "/servicios/integraciones",
    icon: <Network className="w-5 h-5" />,
    image: apiImg,
    color: "from-amber-500/20 to-amber-500/0",
    accent: "text-amber-400",
    border: "group-hover:border-amber-500/30",
  },
];

const projects = [
  {
    title: "CleanNova Home Services",
    description:
      "Diseño optimizado para conversión orientado a captar clientes de limpieza profesional.",
    image: cleanNovaImg,
    link: "https://cleannova.es",
    tag: "Web Corporativa",
  },
  {
    title: "Gabrielle Canal",
    description:
      "Diseño elegante y minimalista para una artista y facilitadora de yoga, voz y respiración.",
    image: gabrielleImg,
    link: "https://gabriellecanal.com",
    tag: "Web Personal",
  },
  {
    title: "Impostor Game",
    description:
      "Plataforma interactiva para configurar jugadores y gestionar el juego del impostor.",
    image: impostorImg,
    link: "https://www.impostor.click",
    tag: "Aplicación Web",
  },
  {
    title: "Infinity Project",
    description:
      "Ecosistema digital centrado en soluciones tecnológicas avanzadas y plataformas escalables.",
    image: infinityImg,
    link: "https://investor.infinityproject.io",
    tag: "Plataforma Digital",
  },
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

  return (
    <div className="min-h-screen tech-grid relative overflow-hidden">
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/apiora-logo.png" alt="APIORA" className="h-7 w-auto object-contain" />
            <span className="font-display font-bold text-base tracking-widest">APIORA</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#proyectos"
              className="hidden sm:inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 px-5 py-2 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_16px_rgba(0,212,255,0.2)]"
            >
              Ver Proyectos <ChevronRight className="w-3.5 h-3.5" />
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
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* ── Hero ── */}
      <HeroGeometric
        badge="APIORA · AI & Automation"
        title1="Sistemas inteligentes"
        title2="para negocios digitales"
        subtitle="IA, automatización, páginas web y apps para empresas modernas."
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] transition-all"
          >
            <Sparkles className="w-4 h-4" />
            Descubre Servicios
          </a>
          <a
            href="#proyectos"
            className="inline-flex items-center justify-center gap-2 glass-card px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/5 transition-all border border-white/10"
          >
            Ver Proyectos <ArrowRight className="w-4 h-4" />
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
              Lo que hago
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Servicios <span className="text-gradient">Principales</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Soluciones tecnológicas de extremo a extremo para negocios que quieren crecer en el mundo digital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.a
                key={idx}
                href={service.href}
                {...staggerChild(idx)}
                className={cn(
                  "group glass-card rounded-2xl overflow-hidden transition-all duration-500 block",
                  service.border,
                )}
              >
                <div className="h-44 overflow-hidden relative border-b border-white/5">
                  <div className={cn("absolute inset-0 z-10 bg-gradient-to-b", service.color, "opacity-60 group-hover:opacity-30 transition-opacity duration-500")} />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("p-2.5 rounded-xl bg-white/5 border border-white/10", service.accent)}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold tracking-wide">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
              Proyectos <span className="text-gradient">Desarrollados</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Sistemas funcionales que ayudan a optimizar procesos y hacer crecer negocios reales.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
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
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/70">
                      {project.tag}
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
                      {project.title}
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-60 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
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
                  <img src="/ami-photo.jpg" alt="Ami Cranz" className="w-full h-auto object-cover" />
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
                  Fundador y Desarrollador Digital
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                  Ami Cranz
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Soy un desarrollador digital especializado en crear soluciones tecnológicas modernas para negocios y proyectos digitales. Trabajo combinando diseño web, automatización, inteligencia artificial y desarrollo de sistemas digitales.
                </p>
                <p>
                  Mi enfoque no es solo crear páginas web bonitas, sino desarrollar productos digitales que realmente funcionen y ayuden a las empresas a crecer.
                </p>
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
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Proyectos</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center border border-white/5">
                  <div className="text-2xl font-bold text-secondary mb-0.5">100%</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Satisfacción</div>
                </div>
                <div className="glass-card rounded-xl p-4 text-center border border-white/5">
                  <div className="text-2xl font-bold text-emerald-400 mb-0.5">24/7</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Soporte IA</div>
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
                  Hablemos
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  ¿Tienes un proyecto en mente?
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                  Cuéntame tu idea y te ayudo a convertirla en un producto digital real. Sin compromiso. O escríbeme por el chatbot y agenda una llamada.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=cranzcanal@gmail.com&su=Contacto%20desde%20APIORA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold text-base hover:shadow-[0_0_24px_rgba(0,212,255,0.35)] transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Enviar Email
                  </a>
                  <a
                    href="#sobre-mi"
                    className="inline-flex items-center justify-center gap-2 glass-card px-8 py-3.5 rounded-full font-medium text-base hover:bg-white/5 transition-all border border-white/10"
                  >
                    Saber más
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Chatbot />

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 bg-black/60 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img src="/apiora-logo.png" alt="APIORA" className="h-6 w-auto opacity-60" />
              <span className="font-display font-bold text-sm tracking-widest text-muted-foreground">APIORA</span>
            </div>
            <div className="text-muted-foreground text-xs text-center md:text-right">
              © {new Date().getFullYear()} APIORA - AI & Automation. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

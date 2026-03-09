import { motion } from "framer-motion";
import {
  ChevronRight,
  Code,
  Zap,
  Bot,
  Network,
  ArrowRight,
} from "lucide-react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Chatbot } from "@/components/chatbot";

// Images
import logoImg from "@assets/ChatGPT_Image_8_mar_2026,_19_25_04_1772994311476.png";
import devImg from "@assets/1772983080062-8iysnwt94dg_1772994215589.png";
import n8nImg from "@assets/1772983941256-rd978ouhgy_1772994215591.png";
import botImg from "@assets/1772984038169-o6e37rliyu_1772994215592.png";
import apiImg from "@assets/1772984197228-jw7jqf7v7on_1772994215592.png";
import gabrielleImg from "@assets/1772987626404-y08r9lumjya_1772994232080.png";
import infinityImg from "@assets/image_1772988057186_hy5c2x_1772994232084.png";
import impostorImg from "@assets/yupp-generated-image-344841_1772994232084.jpg";
import cleanNovaImg from "@assets/yupp-generated-image-814223_1772994232084.jpg";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const services = [
    {
      title: "Desarrollo de páginas web",
      description: "Creación de páginas web modernas, rápidas y optimizadas para conversión. Sitios web corporativos, landing pages y diseño responsive.",
      icon: <Code className="w-6 h-6 text-primary" />,
      image: devImg
    },
    {
      title: "Automatización con n8n",
      description: "Workflows automáticos para conectar herramientas, reducir el trabajo manual y optimizar procesos internos de tu negocio.",
      icon: <Zap className="w-6 h-6 text-secondary" />,
      image: n8nImg
    },
    {
      title: "Chatbots con Inteligencia Artificial",
      description: "Asistentes virtuales entrenados con los datos de tu empresa para automatizar respuestas y mejorar la atención al cliente 24/7.",
      icon: <Bot className="w-6 h-6 text-primary" />,
      image: botImg
    },
    {
      title: "Integraciones API",
      description: "Conexión entre diferentes plataformas y sistemas para sincronizar información y crear ecosistemas digitales más completos.",
      icon: <Network className="w-6 h-6 text-secondary" />,
      image: apiImg
    }
  ];

  const projects = [
    {
      title: "Página web CleanNova Home Services",
      description: "Diseño optimizado para conversión orientado a captar clientes para empresa de limpieza profesional. Presupuestos y servicios claros.",
      image: cleanNovaImg,
      link: "https://cleannova.es",
    },
    {
      title: "Página web de Gabrielle Canal",
      description: "Diseño elegante y minimalista que refleja la identidad de una artista y facilitadora de yoga, voz y respiración.",
      image: gabrielleImg,
      link: "https://gabriellecanal.com",
    },
    {
      title: "Aplicación web del juego del impostor",
      description: "Plataforma interactiva para jugar, configurar jugadores y gestionar el juego con una experiencia divertida y moderna.",
      image: impostorImg,
      link: "https://www.impostor.click",
    },
    {
      title: "Infinity Project",
      description: "Ecosistema digital centrado en soluciones tecnológicas avanzadas y desarrollo de plataformas digitales escalables.",
      image: infinityImg,
      link: "https://investor.infinityproject.io",
    }
  ];

  return (
    <div className="min-h-screen tech-grid relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 border-b-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/apiora-logo.png" alt="APIORA Logo" className="h-8 w-auto object-contain" />
            <span className="font-display font-bold text-lg tracking-wider hidden sm:block">APIORA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a>
            <a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a>
          </div>
          <a href="#proyectos" className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2">
            Ver Proyectos <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section with geometric animation */}
      <section className="pt-32 md:pt-40">
        <HeroGeometric
          badge="Ami Cranz · Desarrollo Digital"
          title1="Infraestructura digital"
          title2="sin fricciones tecnológicas"
        />
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Principales</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">Soluciones tecnológicas modernas para negocios y proyectos digitales.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-colors"
              >
                <div className="h-48 overflow-hidden relative border-b border-white/5">
                  <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-6 bg-black/40 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Desarrollados</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">No solo construimos interfaces visuales, sino sistemas funcionales que ayudan a optimizar procesos.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer block"
              >
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video border border-white/10 shadow-lg">
                  <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                  {project.title}{" "}
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="relative">
            {/* Background gradient orbs */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-[120px]"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-[120px]"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              {/* Photo side */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-2 md:order-1 flex justify-center"
              >
                <div className="relative w-full max-w-sm">
                  {/* Glowing border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary to-secondary opacity-0 p-[2px] hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-[2px] rounded-3xl bg-card"></div>
                  </div>
                  
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src="/ami-photo.jpg" 
                      alt="Ami Cranz" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text side */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="order-1 md:order-2"
              >
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      Fundador y Desarrollador Digital
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                      Ami <br className="hidden md:block" /> Cranz
                    </h1>
                  </div>
                  
                  <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                    <p>
                      Soy un desarrollador digital especializado en crear soluciones tecnológicas modernas para negocios y proyectos digitales. Trabajo combinando diseño web, automatización, inteligencia artificial y desarrollo de sistemas digitales.
                    </p>
                    <p>
                      Mi enfoque no es solo crear páginas web bonitas, sino desarrollar productos digitales que realmente funcionen y ayuden a las empresas a crecer.
                    </p>
                  </div>

                  {/* Key points */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="glass-card rounded-xl p-4 border border-white/5">
                      <div className="text-2xl font-bold text-primary mb-1">4+</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Proyectos Completados</div>
                    </div>
                    <div className="glass-card rounded-xl p-4 border border-white/5">
                      <div className="text-2xl font-bold text-secondary mb-1">100%</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wide">Satisfacción</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/apiora-logo.png" alt="APIORA" className="h-6 w-auto opacity-70" />
            <span className="font-display font-bold text-sm tracking-wider text-muted-foreground hidden sm:block">APIORA</span>
          </div>
          <div className="text-muted-foreground text-xs md:text-sm text-center md:text-right">
            © {new Date().getFullYear()} APIORA - AI & Automation. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
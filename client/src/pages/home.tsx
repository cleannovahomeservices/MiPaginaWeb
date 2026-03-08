import { motion } from "framer-motion";
import { ChevronRight, Code, Zap, Bot, Network, ArrowRight } from "lucide-react";

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
      image: cleanNovaImg
    },
    {
      title: "Página web de Gabrielle Canal",
      description: "Diseño elegante y minimalista que refleja la identidad de una artista y facilitadora de yoga, voz y respiración.",
      image: gabrielleImg
    },
    {
      title: "Aplicación web del juego del impostor",
      description: "Plataforma interactiva para jugar, configurar jugadores y gestionar el juego con una experiencia divertida y moderna.",
      image: impostorImg
    },
    {
      title: "Infinity Project",
      description: "Ecosistema digital centrado en soluciones tecnológicas avanzadas y desarrollo de plataformas digitales escalables.",
      image: infinityImg
    }
  ];

  return (
    <div className="min-h-screen tech-grid relative overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 border-b-white/5 py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="APIORA Logo" className="h-10 w-auto object-contain" />
            <span className="font-display font-bold text-xl tracking-wider hidden sm:block">APIORA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-primary transition-colors">Proyectos</a>
            <a href="#sobre-mi" className="hover:text-primary transition-colors">Sobre Mí</a>
          </div>
          <a href="#contacto" className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2">
            Agendar <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium mb-6 text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Construyendo el futuro digital
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Infraestructura digital que permite escalar <br className="hidden md:block" />
            <span className="text-gradient">sin fricciones tecnológicas</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Desarrollo productos digitales que realmente funcionan. Combinamos diseño moderno, automatización e IA para construir herramientas útiles, escalables y eficientes.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#contacto" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all">
              Agendar Asesoría
            </a>
            <a href="#proyectos" className="glass-card px-8 py-3 rounded-full font-medium text-lg hover:bg-white/5 transition-all">
              Ver Proyectos
            </a>
          </motion.div>
        </div>
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
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group cursor-pointer"
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
                  {project.title} <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 relative">
                  <img src={logoImg} alt="Ami Cranz" className="w-full h-full object-cover bg-black" />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Fundador y Desarrollador Digital</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Ami Cranz</h3>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Soy un desarrollador digital especializado en crear soluciones tecnológicas modernas para negocios y proyectos digitales. Trabajo combinando diseño web, automatización, inteligencia artificial y desarrollo de sistemas digitales.
                  </p>
                  <p>
                    Mi enfoque no es solo crear páginas web bonitas, sino desarrollar productos digitales que realmente funcionen y ayuden a las empresas a crecer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section id="contacto" className="py-20 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Empecemos tu proyecto</h2>
            <p className="text-muted-foreground text-lg">Reserva una llamada para discutir cómo podemos escalar tu negocio con tecnología.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-2 md:p-4 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,212,255,0.1)]"
          >
            {/* Google Calendar Appointment Scheduling */}
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1qt6FdVc-Yf8UBUhJjDeRxUv9tDJnKtircpRFXO9ux6Ry8GatR1d9K5AGBEMlYMp26ul_I-BY-?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="Agendar reunión"
              className="bg-white rounded-xl" // Ensure the calendar iframe has white bg if it expects it
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 py-10 mt-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="APIORA" className="h-8 w-auto grayscale opacity-70" />
            <span className="font-display font-bold text-lg tracking-wider text-muted-foreground">APIORA</span>
          </div>
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} APIORA - AI & Automation. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
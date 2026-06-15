"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Full-stack apps with Next.js, React, Node.js — blazing fast, SEO-optimized, and scalable.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    desc: "Chatbots, automation scripts, AI integrations — make your business run on autopilot.",
  },
  {
    icon: "📱",
    title: "Mobile Apps",
    desc: "Cross-platform apps with React Native — one codebase, iOS + Android.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Pixel-perfect interfaces designed in Figma — beautiful, intuitive, conversion-focused.",
  },
  {
    icon: "⚡",
    title: "Performance Tuning",
    desc: "Lighthouse 100, Core Web Vitals optimization, load times under 1 second.",
  },
  {
    icon: "🔒",
    title: "DevOps & Security",
    desc: "Docker, CI/CD, cloud deployment, SSL, security audits — your app, bulletproof.",
  },
];

const projects = [
  { name: "E-Commerce Platform", tag: "Next.js • Stripe • PostgreSQL", desc: "Full-featured marketplace with real-time inventory and payment processing." },
  { name: "SaaS Dashboard", tag: "React • Supabase • Tailwind", desc: "Analytics dashboard with role-based access, charts, and team collaboration." },
  { name: "AI Content Generator", tag: "Python • FastAPI • OpenAI", desc: "Automated content pipeline generating SEO-optimized articles at scale." },
  { name: "Real-time Chat App", tag: "Node.js • WebSocket • Redis", desc: "Scalable messaging platform handling 10k+ concurrent users." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* ─── Navigation ─── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass shadow-lg" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            <span className="gradient-text">Xolvyn</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {l.name}
              </a>
            ))}
            <a href="#contact" className="text-sm px-4 py-2 rounded-full bg-[#6c5ce7] hover:bg-[#5a4bd1] transition-colors text-white font-medium">
              Start Project
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass border-t border-[#1e1e30]">
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <a key={l.name} href={l.href} onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                  {l.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-center px-4 py-3 rounded-full bg-[#6c5ce7] text-white font-medium">
                Start Project
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#6c5ce7]/10 via-transparent to-transparent" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#6c5ce7]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a29bfe]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#6c5ce7]/30 bg-[#6c5ce7]/10 text-[#a29bfe] text-sm mb-8">
              🚀 Full-Stack Digital Agency
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            We <span className="gradient-text">Build</span> the
            <br />
            Future
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Full-stack development, AI automation, and design — 
            everything you need to launch and scale your digital product.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <a href="#contact" className="px-8 py-4 rounded-full bg-[#6c5ce7] hover:bg-[#5a4bd1] transition-all text-white font-semibold text-lg shadow-lg shadow-[#6c5ce7]/25 hover:shadow-[#6c5ce7]/40">
              Start a Project →
            </a>
            <a href="#work" className="px-8 py-4 rounded-full border border-[#1e1e30] hover:border-[#6c5ce7]/50 transition-all text-gray-300 font-semibold text-lg">
              View Our Work
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-gray-500 text-sm animate-fade-in" style={{ animationDelay: "1s" }}>
            <span>⚡ 50+ Projects</span>
            <span>🌍 10+ Countries</span>
            <span>🤝 30+ Happy Clients</span>
            <span>⭐ 5.0 Rating</span>
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#a29bfe] text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Our <span className="gradient-text">Services</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">End-to-end digital solutions — from idea to production, we handle everything.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-8 hover:border-[#6c5ce7]/30 transition-all duration-300 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#a29bfe] transition-colors">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Work / Portfolio ─── */}
      <section id="work" className="py-24 px-6 bg-[#0d0d15]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#a29bfe] text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Recent <span className="gradient-text">Work</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Projects we&apos;ve shipped for clients around the world.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="glass rounded-2xl p-8 hover:border-[#6c5ce7]/20 transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#a29bfe] transition-colors">{p.name}</h3>
                <span className="text-xs text-[#6c5ce7] bg-[#6c5ce7]/10 px-3 py-1 rounded-full inline-block mb-4">{p.tag}</span>
                <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#a29bfe] text-sm font-semibold tracking-widest uppercase">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                Not just another <span className="gradient-text">agency</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                We&apos;re a team of engineers and designers who believe great software should be accessible to everyone. 
                No bloated processes, no inflated prices — just clean code, thoughtful design, and real results.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Founded with a simple mission: help businesses launch digital products that actually work. 
                We obsess over performance, user experience, and clean architecture.
              </p>
              <div className="flex gap-8 mt-8">
                <div>
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-gray-500 text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-gray-500 text-sm">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">99%</div>
                  <div className="text-gray-500 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Our Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Supabase", "Docker", "AWS", "Tailwind", "Figma", "GitHub Actions"].map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-full bg-[#6c5ce7]/10 border border-[#6c5ce7]/20 text-sm text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#6c5ce7]/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section id="contact" className="py-24 px-6 bg-[#0d0d15]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#a29bfe] text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Let&apos;s <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Got a project in mind? Let&apos;s talk. No commitment, just a conversation.
          </p>

          <div className="glass rounded-2xl p-8 md:p-12">
            <form className="flex flex-col gap-5 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <input type="text" placeholder="Your Name" className="bg-[#0a0a0f] border border-[#1e1e30] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#6c5ce7] outline-none transition-colors" />
                <input type="email" placeholder="Your Email" className="bg-[#0a0a0f] border border-[#1e1e30] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#6c5ce7] outline-none transition-colors" />
              </div>
              <input type="text" placeholder="Project Type (e.g. Web App, AI, Mobile)" className="bg-[#0a0a0f] border border-[#1e1e30] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#6c5ce7] outline-none transition-colors" />
              <textarea rows={5} placeholder="Tell us about your project..." className="bg-[#0a0a0f] border border-[#1e1e30] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-[#6c5ce7] outline-none transition-colors resize-none" />
              <button type="submit" className="px-8 py-4 rounded-full bg-[#6c5ce7] hover:bg-[#5a4bd1] transition-all text-white font-semibold text-lg shadow-lg shadow-[#6c5ce7]/25">
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-[#1e1e30] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-2xl font-bold gradient-text">Xolvyn</a>
          <div className="flex gap-8 text-sm text-gray-500">
            {navLinks.map((l) => (
              <a key={l.name} href={l.href} className="hover:text-white transition-colors">{l.name}</a>
            ))}
          </div>
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Xolvyn. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

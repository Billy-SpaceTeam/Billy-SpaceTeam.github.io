"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const glowAnimation: any = {
  boxShadow: [
    "0 0 20px rgba(59, 130, 246, 0.3)",
    "0 0 40px rgba(59, 130, 246, 0.6)",
    "0 0 20px rgba(59, 130, 246, 0.3)",
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text">🛰️ Billy</span>
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="#about" className="text-slate-300 hover:text-white transition">À propos</Link>
            <Link href="#architecture" className="text-slate-300 hover:text-white transition">Architecture</Link>
            <Link href="#team" className="text-slate-300 hover:text-white transition">Équipe</Link>
            <Link href="/connection" className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg transition">Connection</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Logo/Badge */}
          <motion.div variants={item} className="mb-6">
            <motion.div
              className="inline-block px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/50 backdrop-blur-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-sm font-semibold text-blue-300">
                🛰️ CubeSat Innovant
              </span>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent"
          >
            Billy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Un nano-satellite CubeSat innovant développé par l'équipe Billy Space Team de l'IUT d'Annecy
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={item}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="#about"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all cursor-pointer"
            >
              Découvrir le projet
            </motion.a>
            <motion.a
              href="#team"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              L'équipe
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              À Propos du Projet
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-6"
            >
              <motion.div
                className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-blue-300 mb-3">
                  Description Synthétique
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Billy est le nom de notre maquette de satellite. Il s'agit d'un système embarqué communicant conçu pour récolter des données télémé­­triques de vol, transmettre ses mesures en temps réel et assurer un contrôle d'attitude autonome.
                </p>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-cyan-300 mb-3">
                  Objectif
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Concevoir un objet connecté capable de transmettre diverses données issues de capteurs via plusieurs protocoles de communication et réaliser une roue de réaction pour l'orientation autonome.
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-6"
            >
              <motion.div
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-md"
              >
                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-blue-300 mb-2">
                      10×10×10
                    </div>
                    <p className="text-sm text-slate-300">Dimensions (cm)</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-cyan-300 mb-2">
                      &lt;2kg
                    </div>
                    <p className="text-sm text-slate-300">Masse max</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-blue-300 mb-2">
                      6+
                    </div>
                    <p className="text-sm text-slate-300">Capteurs</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold text-cyan-300 mb-2">
                      3
                    </div>
                    <p className="text-sm text-slate-300">Modes</p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                }}
              >
                <h3 className="text-lg font-semibold text-slate-200 mb-3">
                  Format CubeSat
                </h3>
                <p className="text-sm text-slate-400">
                  Normes standardisées pour les nano-satellites compatibles avec les lanceurs commerciaux
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="architecture" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              Fonctionnalités Clés
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          </motion.div>
<motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {[
              {
                icon: "🎯",
                title: "Orientation Automatique",
                desc: "Asservissement via roue de réaction pour orienter le satellite vers le Soleil",
              },
              {
                icon: "⚙️",
                title: "Déploiement Motorisé",
                desc: "Ouverture contrôlée des panneaux solaires par servomoteur",
              },
              {
                icon: "📡",
                title: "Télémétrie Multi-liaisons",
                desc: "Communication UART/I2C, Internet et transmission sans fil",
              },
              {
                icon: "🔋",
                title: "Gestion d'Alimentation",
                desc: "Écran LCD intégré et LEDs pour afficher l'état du système",
              },
              {
                icon: "🛡️",
                title: "Contraintes Mécaniques",
                desc: "Redémarrage automatique en cas de perte d'alimentation",
              },
              {
                icon: "📊",
                title: "Multi-capteurs",
                desc: "Température, pression, luminosité, gyroscope et plus",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={item}
                className="group p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                  y: -5,
                }}
              >
                {/* Icône rendue 100% statique ici */}
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-300 mb-2 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent">
              L'Équipe Billy Space Team
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
            <p className="text-slate-300 mt-4 text-lg max-w-2xl">
              Étudiants en BUT GEII à l'Université Savoie Mont Blanc, passionnés par l'aérospatiale et les systèmes embarqués innovants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

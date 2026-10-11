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

export default function BillyPage() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <main className= "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white overflow-hidden" >
        {/* Retour */ }
        < motion.div
    initial = {{ opacity: 0, y: -20 }
}
animate = {{ opacity: 1, y: 0 }}
className = "fixed top-6 left-6 z-50"
    >
    <Link
          href="/"
className = "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 group"
    >
    <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
fill = "none"
stroke = "currentColor"
viewBox = "0 0 24 24"
    >
    <path
              strokeLinecap="round"
strokeLinejoin = "round"
strokeWidth = { 2}
d = "M15 19l-7-7 7-7"
    />
    </svg>
Retour
    </Link>
    </motion.div>

{/* Hero Section */ }
<section className="relative h-screen flex items-center justify-center overflow-hidden pt-20" >
    <div className="absolute inset-0 overflow-hidden" >
        <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
animate = {{
    x: [0, 100, 0],
        y: [0, 50, 0],
            }}
transition = {{
    duration: 15,
        repeat: Infinity,
            ease: "easeInOut",
            }}
          />
    < motion.div
className = "absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
animate = {{
    x: [0, -100, 0],
        y: [0, -50, 0],
            }}
transition = {{
    duration: 20,
        repeat: Infinity,
            ease: "easeInOut",
            }}
          />
    </div>

    < motion.div
className = "relative z-10 text-center max-w-4xl mx-auto px-6"
variants = { container }
initial = "hidden"
animate = "visible"
    >
    <motion.div variants={ item } className = "mb-6" >
        <motion.div
              className="inline-block px-6 py-3 rounded-full bg-blue-500/20 border border-blue-400/50 backdrop-blur-md"
whileHover = {{ scale: 1.05 }}
transition = {{ type: "spring", stiffness: 300 }}
            >
    <span className="text-sm font-semibold text-blue-300" >
                🛰️ CubeSat Innovant
    </span>
    </motion.div>
    </motion.div>

    < motion.h1
variants = { item }
className = "text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent"
    >
    Billy
    </motion.h1>

    < motion.p
variants = { item }
className = "text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
    >
    Un nano - satellite CubeSat innovant développé par l'équipe Billy Space Team de l'IUT d'Annecy
        </motion.p>

        < motion.div
variants = { item }
className = "flex gap-4 justify-center flex-wrap"
    >
    <motion.a
              href="#about"
whileHover = {{ scale: 1.05, y: -2 }}
whileTap = {{ scale: 0.95 }}
className = "px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all cursor-pointer"
    >
    Découvrir le projet
        </motion.a>
        < motion.a
href = "#team"
whileHover = {{ scale: 1.05, y: -2 }}
whileTap = {{ scale: 0.95 }}
className = "px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 font-semibold text-white hover:bg-white/20 transition-all cursor-pointer"
    >
    L'équipe
        </motion.a>
        </motion.div>
        </motion.div>

        < motion.div
className = "absolute bottom-10 left-1/2 transform -translate-x-1/2"
animate = {{ y: [0, 10, 0] }}
transition = {{ duration: 2, repeat: Infinity }}
        >
    <svg className="w-6 h-6 text-blue-300" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" >
        <path strokeLinecap="round" strokeLinejoin = "round" strokeWidth = { 2} d = "M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            </motion.div>
            </section>

{/* About Section */ }
<section id="about" className = "py-20 px-6 relative" >
    <div className="max-w-6xl mx-auto" >
        <motion.div
            initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.3 }}
className = "mb-16"
    >
    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent" >
        À propos du projet
            </h2>
            < div className = "h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </motion.div>

                < div className = "grid md:grid-cols-2 gap-12 items-center" >
                    <motion.div
              initial={ { opacity: 0, x: -30 } }
whileInView = {{ opacity: 1, x: 0 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.3 }}
className = "space-y-6"
    >
    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20" >
        <h3 className="text-2xl font-semibold text-blue-300 mb-3" >
            Description Synthétique
                </h3>
                < p className = "text-slate-300 leading-relaxed" >
                    Billy est le nom de notre maquette de satellite.Il s'agit d'un système embarqué communicant conçu pour récolter des données télémétriques de vol, transmettre ses mesures en temps réel et assurer un contrôle d'attitude autonome.
                        </p>
                        </div>

                        < div className = "p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20" >
                            <h3 className="text-2xl font-semibold text-cyan-300 mb-3" >
                                Objectif
                                </h3>
                                < p className = "text-slate-300 leading-relaxed" >
                                    Concevoir un objet connecté capable de transmettre diverses données issues de capteurs via plusieurs protocoles de communication et réaliser une roue de réaction pour l'orientation autonome.
                                        </p>
                                        </div>
                                        </motion.div>

                                        < motion.div
initial = {{ opacity: 0, x: 30 }}
whileInView = {{ opacity: 1, x: 0 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.3 }}
className = "space-y-6"
    >
    <motion.div
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-md"
animate = { glowAnimation }
    >
    <div className="grid grid-cols-2 gap-6" >
        <div className="text-center" >
            <div className="text-4xl font-bold text-blue-300 mb-2" > 10×10×10 </div>
                < p className = "text-sm text-slate-300" > Dimensions(cm) </p>
                    </div>
                    < div className = "text-center" >
                        <div className="text-4xl font-bold text-cyan-300 mb-2" >& lt; 2kg </div>
                            < p className = "text-sm text-slate-300" > Masse max </p>
                                </div>
                                < div className = "text-center" >
                                    <div className="text-4xl font-bold text-blue-300 mb-2" > 6 + </div>
                                        < p className = "text-sm text-slate-300" > Capteurs </p>
                                            </div>
                                            < div className = "text-center" >
                                                <div className="text-4xl font-bold text-cyan-300 mb-2" > 3 </div>
                                                    < p className = "text-sm text-slate-300" > Modes </p>
                                                        </div>
                                                        </div>
                                                        </motion.div>

                                                        < div className = "p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20" >
                                                            <h3 className="text-lg font-semibold text-slate-200 mb-3" >
                                                                Format CubeSat
                                                                    </h3>
                                                                    < p className = "text-sm text-slate-400" >
                                                                        Normes standardisées pour les nano - satellites compatibles avec les lanceurs commerciaux
                                                                            </p>
                                                                            </div>
                                                                            </motion.div>
                                                                            </div>
                                                                            </div>
                                                                            </section>

{/* Features Section (ANIMATIONS RETIRÉES) */ }
<section className="py-20 px-6 relative" >
    <div className="max-w-6xl mx-auto" >
        <div className="mb-16" >
            <h2 className="text-5xl font-bold mb-4 text-blue-200" >
                Fonctionnalités Clés
                    </h2>
                    < div className = "h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                        </div>

                        < div className = "grid md:grid-cols-3 gap-6" >
                        {
                            [
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
                                desc: "Redémarrage automatique en cas de court-circuit",
                            },
                            {
                                icon: "🌡️",
                                title: "Multi-capteurs",
                                desc: "Température, pression, luminosité, gyroscope et plus",
                            },
            ].map((feature, i) => (
                                <div
                key= { i }
                className = "p-6 rounded-xl bg-slate-800/80 border border-slate-700/50 shadow-sm"
                                >
                                <div className="text-3xl mb-4" >
                                { feature.icon }
                                </div>
                            < h3 className = "text-lg font-semibold text-blue-300 mb-2" >
                            { feature.title }
                            </h3>
                            < p className = "text-sm text-slate-400" > { feature.desc } </p>
                            </div>
                            ))
                        }
                            </div>
                            </div>
                            </section>

{/* Architecture Section */ }
<section className="py-20 px-6 relative" >
    <div className="max-w-6xl mx-auto" >
        <motion.div
            initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.3 }}
className = "mb-16"
    >
    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent" >
        Architecture Système
            </h2>
            < div className = "h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </motion.div>

                < motion.div
initial = {{ opacity: 0, scale: 0.95 }}
whileInView = {{ opacity: 1, scale: 1 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.3 }}
className = "grid md:grid-cols-2 gap-8"
    >
    <div className="space-y-4" >
        <div className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20" >
            <h3 className="text-xl font-semibold text-blue-300 mb-3" >
                  🧠 Cerveau de Bord
    </h3>
    < p className = "text-slate-300" > Carte de développement STM32 Nucleo </p>
        </div>

        < div className = "p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20" >
            <h3 className="text-xl font-semibold text-cyan-300 mb-3" >
                  📊 Capteurs & Instrumentation
    </h3>
    < ul className = "text-sm text-slate-300 space-y-2" >
        <li>• Température(I2C) </li>
            <li>• Pression atmosphérique(I2C) </li>
                <li>• Gyroscope / IMU(I2C) </li>
                    <li>• Luminosité - Photodiodes(Analogique) </li>
                        </ul>
                        </div>

                        < div className = "p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20" >
                            <h3 className="text-xl font-semibold text-blue-300 mb-3" >
                  🎮 Actionneurs & Interfaces
    </h3>
    < ul className = "text-sm text-slate-300 space-y-2" >
        <li>• Roue de réaction(PWM, Brushless) </li>
            <li>• Servomoteur déploiement panneaux </li>
                <li>• Écran LCD & LEDs d'état</li>
                    </ul>
                    </div>
                    </div>

                    < div className = "space-y-4" >
                        <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 backdrop-blur-md" >
                            <h3 className="text-xl font-semibold text-cyan-300 mb-3" >
                  🛰️ Communication & Échanges
    </h3>
    < div className = "space-y-3" >
        <p className="text-sm text-slate-300" >
            <span className="font-semibold text-blue-300" > Liaison I2C: </span> Communication entre capteurs (100ms)
                </p>
                < p className = "text-sm text-slate-300" >
                    <span className="font-semibold text-cyan-300" > Liaison Série: </span> Débogage via PC (asynchrone)
                        </p>
                        < p className = "text-sm text-slate-300" >
                            <span className="font-semibold text-blue-300" > Liaison Radio: </span> Communications externes (2s)
                                </p>
                                </div>
                                </div>

                                < div className = "p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20" >
                                    <h3 className="text-xl font-semibold text-slate-200 mb-3" >
                  📋 Contraintes Mécaniques
    </h3>
    < ul className = "text-sm text-slate-300 space-y-2" >
        <li>✓ Format standardisé: 10×10×10 cm </li>
            <li>✓ Masse: & lt; 2 kg </li>
                <li>✓ Redémarrage automatique en cas de défaut </li>
                    </ul>
                    </div>
                    </div>
                    </motion.div>
                    </div>
                    </section>

{/* Operating Modes Section */ }
<section className="py-20 px-6 relative" >
    <div className="max-w-6xl mx-auto" >
        <motion.div
            initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.3 }}
className = "mb-16"
    >
    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent" >
        Modes de Fonctionnement
            </h2>
            < div className = "h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </motion.div>

                < div className = "space-y-6" >
                {
                    [
                    {
                        name: "Mode Manuel",
                        icon: "🕹️",
                        desc: "Contrôle direct des actionneurs avec affichage local sur écran LCD et télémétrie à distance",
                    },
                    {
                        name: "Mode Passif",
                        icon: "📡",
                        desc: "Émission continue des trames de télémétrie en temps réel sans actionnement mécanique",
                    },
                    {
                        name: "Mode Autonome",
                        icon: "🤖",
                        desc: "Asservissement complet avec orientation automatique et déploiement des panneaux solaires",
                    },
            ].map((mode, i) => (
                        <motion.div
                key= { i }
                initial = {{ opacity: 0, x: -20 }}
whileInView = {{ opacity: 1, x: 0 }}
transition = {{ duration: 0.5, delay: i * 0.1 }}
viewport = {{ once: false, amount: 0.3 }}
className = "group p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
whileHover = {{
    backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
              >
    <div className="flex items-start gap-6" >
        <div className="text-5xl flex-shrink-0" >
        { mode.icon }
            </div>
            < div >
            <h3 className="text-2xl font-semibold text-blue-300 mb-2 group-hover:text-cyan-300 transition-colors" >
            { mode.name }
                </h3>
                < p className = "text-slate-300" > { mode.desc } </p>
                    </div>
                    </div>
                    </motion.div>
            ))}
</div>
    </div>
    </section>

{/* Team Section */ }
<section id="team" className = "py-20 px-6 relative" >
    <div className="max-w-6xl mx-auto" >
        <motion.div
            initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.3 }}
className = "mb-16"
    >
    <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent" >
        L'Équipe Billy Space Team
            </h2>
            < div className = "h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </motion.div>

                < motion.div
className = "text-center mb-12"
initial = {{ opacity: 0 }}
whileInView = {{ opacity: 1 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.3 }}
          >
    <p className="text-xl text-slate-300 max-w-2xl mx-auto" >
        Projet développé en binôme par < span className = "text-blue-300 font-semibold" > Clément PILI </span> et{" "}
            < span className = "text-cyan-300 font-semibold" > Jérémie PERRIN </span>
                </p>
                < p className = "text-slate-400 mt-4" >
                    IUT d'Annecy — Université Savoie Mont Blanc (Promotion 2026/2027)
                        </p>
                        </motion.div>
                        </div>
                        </section>

{/* NOUVELLE SECTION CTA (Appel à l'action) */ }
<section className="py-20 px-6 relative" >
    <div className="max-w-4xl mx-auto" >
        <motion.div
            initial={ { opacity: 0, y: 20 } }
whileInView = {{ opacity: 1, y: 0 }}
transition = {{ duration: 0.6 }}
viewport = {{ once: false, amount: 0.5 }}
className = "text-center p-12 rounded-2xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-slate-900 border border-blue-400/30 backdrop-blur-md"
animate = { glowAnimation }
    >
    <h2 className="text-4xl font-bold mb-4 text-white" >
        Rejoignez l'Aventure
            </h2>
            < p className = "text-lg text-slate-300 mb-8 max-w-2xl mx-auto" >
                Intéressé par le projet Billy ? Contactez - nous pour plus d'informations sur notre équipe, nos objectifs et comment vous pouvez contribuer.
                    </p>
                    < Link
href = "/contact"
className = "inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 font-semibold text-white shadow-lg hover:shadow-blue-500/50 transition-all hover:-translate-y-1"
    >
    Nous Contacter
        </Link>
        </motion.div>
        </div>
        </section>

{/* Footer */ }
<Footer />
    </main>
  );
}
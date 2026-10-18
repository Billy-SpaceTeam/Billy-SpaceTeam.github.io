import Link from "next/link";

export function Footer() {
    return (
        <footer className= "bg-[#0f1115] border-t border-slate-800/60 pt-16 pb-8 text-slate-400" >
        <div className="max-w-6xl mx-auto px-6" >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16" >
            {/* Colonne 1 : Présentation */ }
                < div className = "md:col-span-2" >
                    <span className="text-xl font-bold text-white tracking-tight block mb-2 uppercase" >
                        BILLY SPACE TEAM
                            </span>
                            < p className = "text-sm mb-6 max-w-sm leading-relaxed" >
                                Projet de maquette de nanosatellite CubeSat développé par 2 étudiants en BUT GEII à l'IUT d'Annecy (Université Savoie Mont Blanc).
            </p>
                                    </div>

    {/* Colonne 2 : Navigation */ }
    <div>
        <h4 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest" >
              — Navigation
        </h4>
        < ul className = "space-y-3 text-sm" >
            <li>
            <Link href="/" className = "hover:text-white transition-colors" >
                Accueil
                </Link>
                </li>
                < li >
                <Link href="#about" className = "hover:text-white transition-colors" >
                    À propos
                        </Link>
                        </li>
                        < li >
                        <Link href="#team" className = "hover:text-white transition-colors" >
                            L'Équipe
                                </Link>
                                </li>
                                </ul>
                                </div>

    {/* Colonne 3 : Réseaux */ }
    <div>
        <h4 className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-widest" >
              — Réseaux
        </h4>
        < ul className = "space-y-3 text-sm" >
            <li>
            <a
                  href="https://github.com/Billy-SpaceTeam"
    target = "_blank"
    rel = "noopener noreferrer"
    className = "hover:text-white transition-colors"
        >
        GitHub
        </a>
        </li>
        </ul>
        </div>
        </div>

    {/* Copyright */ }
    <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500" >
        <p>© { new Date().getFullYear() } Billy Space Team — Tous droits réservés.</p>
            < p > Conçu avec Next.js & Tailwind CSS </p>
                </div>
                </div>
                </footer>
  );
}
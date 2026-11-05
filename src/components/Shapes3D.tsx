import { motion } from "framer-motion";

interface TechLogo {
  name: string;
  url: string;
}

export default function Shapes3D() {
  const innerRing: TechLogo[] = [
    { name: "TypeScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "Python", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "C++", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
    { name: "Java", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  ];

  const middleRing: TechLogo[] = [
    { name: "React", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
    { name: "Next.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { name: "NestJS", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg" },
    { name: "PostgreSQL", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
    { name: "Django", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" },
  ];

  const outerRing: TechLogo[] = [
    { name: "Three.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg" },
    { name: "Docker", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
    { name: "AWS", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Linux", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
    { name: "Node.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
    { name: "Git", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  ];

  const rings = [
    { radius: 140, speed: 38, logos: innerRing, reverse: false, border: "border-indigo-500/25" },
    { radius: 220, speed: 50, logos: middleRing, reverse: true, border: "border-sky-500/20" },
    { radius: 300, speed: 65, logos: outerRing, reverse: false, border: "border-zinc-700/30" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none opacity-40 lg:opacity-55">
      {/* Background radial fade */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#090a0f]/60 to-[#090a0f]" />

      {/* Orbiting rings */}
      {rings.map((ring, ringIdx) => {
        const diameter = ring.radius * 2;
        return (
          <motion.div
            key={ringIdx}
            className={`absolute rounded-full border border-dashed ${ring.border}`}
            style={{
              width: `${diameter}px`,
              height: `${diameter}px`,
            }}
            animate={{ rotate: ring.reverse ? -360 : 360 }}
            transition={{
              duration: ring.speed,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {ring.logos.map((logo, index) => {
              const angle = (index * (2 * Math.PI)) / ring.logos.length;
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);

              return (
                <div
                  key={logo.name}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  {/* Counter-rotate icon so it stays upright */}
                  <motion.div
                    animate={{ rotate: ring.reverse ? 360 : -360 }}
                    transition={{
                      duration: ring.speed,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-10 h-10 rounded-full bg-[#11131a] border border-white/10 p-2 shadow-sm flex items-center justify-center hover:border-indigo-500/50 transition-colors"
                  >
                    <img
                      src={logo.url}
                      alt={logo.name}
                      title={logo.name}
                      className="w-full h-full object-contain filter contrast-125"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                        if (target.parentElement) {
                          target.parentElement.innerHTML = `<span class="text-[9px] font-mono font-bold text-zinc-400">${logo.name.slice(0, 2)}</span>`;
                        }
                      }}
                    />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        );
      })}
    </div>
  );
}

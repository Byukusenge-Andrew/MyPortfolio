import { motion } from "framer-motion";

export default function Shapes3DWithRings() {
  const allLogos = [
    [
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      
 
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      "data:image/png;base64,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",
     

    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",

    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
      "data:image/png;base64,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",
      "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
      
  
    ],
    [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Tabler-icons_brand-nextjs.svg/640px-Tabler-icons_brand-nextjs.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIUZw67SSl6oRd5YuSCG_t3GVGFt1erdRhwQ&s",
    ]
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {allLogos.map((logos, ringIndex) => (
      <motion.div
          key={ringIndex}
          className={`absolute border border-dashed rounded-full ${
            ringIndex === 0 ? "border-purple-500" : ringIndex === 1 ? "border-indigo-500" : "border-blue-500"
          }`}
          style={{
            width: `${16 + ringIndex * 15}rem`,
            height: `${16 + ringIndex * 15}rem`,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25 + ringIndex * 5, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Logo ${index}`}
              className="absolute w-12 h-12 rounded-full bg-white p-2 shadow-md"
              style={{
                top: `${50 + 45 * Math.sin((index * Math.PI * 2) / logos.length)}%`,
                left: `${50 + 45 * Math.cos((index * Math.PI * 2) / logos.length)}%`,
                transform: "translate(-50%, -50%)"
              }}
              animate={{ rotate: [0, 360] }}
          transition={{ 
                rotate: {
                  duration: 4 + index * 2,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow-md"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

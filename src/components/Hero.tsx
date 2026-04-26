import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Animation timeline
  // Smooth the scroll input to make movements feel physical and heavy
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 60, mass: 1.5, restDelta: 0.001 });

  const wheelRotation = useTransform(smoothProgress, [0, 0.25], [0, -180]);
  const boltPosition = useTransform(smoothProgress, [0.15, 0.28, 0.35], [-16, 32, 28]); 
  
  // Smooth, heavy door swing
  const doorRotation = useTransform(smoothProgress, [0.35, 0.55], [0, -115]); 
  
  // Zoom through the hole into the next section
  const cameraScale = useTransform(smoothProgress, [0.55, 0.95], [1, 45]); 
  
  // Typography appearing as we zoom
  const textOpacity = useTransform(smoothProgress, [0.7, 0.85], [0, 1]);
  const textScale = useTransform(smoothProgress, [0.7, 0.85], [0.85, 1]);
  const textY = useTransform(smoothProgress, [0.7, 0.85], [60, 0]);

  // Fade out background light to reveal abyss
  const bgOpacity = useTransform(smoothProgress, [0.5, 0.8], [1, 0]);
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "20%"]);
  
  const doorOpacity = useTransform(smoothProgress, [0.85, 0.95], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[450vh] w-full bg-[#030303]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background Ambient Lighting with Parallax Layering */}
        <motion.div 
          style={{ opacity: bgOpacity, y: bgY }}
          className="absolute inset-[0] bg-[radial-gradient(circle_at_center,_rgba(140,61,255,0.15)_0%,_rgba(3,3,3,1)_50%)] z-0"
        />

        {/* Revealed Text (Placed far behind the vault) */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale, y: textY }}
          className="absolute z-0 flex flex-col items-center justify-center pointer-events-none text-center px-6 w-full max-w-[1200px]"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[140px] font-medium tracking-[-0.04em] text-[#ededed] mb-8 leading-[0.9]">
            Customers
          </h1>
          <p className="text-[17px] md:text-[22px] text-[#A1A1AA] max-w-[640px] mx-auto leading-[1.6]">
            Evervault is trusted by the world's most innovative companies to secure their most sensitive data.
          </p>
        </motion.div>

        {/* 3D Vault Scene Container */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            style={{ 
              scale: cameraScale, 
              transformStyle: "preserve-3d" 
            }}
            className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] flex items-center justify-center"
          >
            {/* The Wall with the Hole */}
            <div className={`absolute inset-0 rounded-full shadow-[0_0_0_3000px_#030303,inset_0_20px_50px_rgba(0,0,0,0.95)] bg-transparent`}>
               {/* Internal rim of the hole */}
               <div className="absolute inset-0 rounded-full border border-white/[0.03] shadow-[inset_0_0_40px_rgba(140,61,255,0.08)]"></div>
            </div>

            {/* The Door Container (Provides the hinge perspective) */}
            <div 
              className="absolute inset-1 md:inset-2"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* The Vault Door Details */}
              <motion.div
                style={{ 
                  rotateY: doorRotation,
                  opacity: doorOpacity,
                  transformOrigin: "center right", // Hinge is on the right
                  transformStyle: "preserve-3d"
                }}
                className="w-full h-full rounded-full bg-[#080808] border-[1px] border-white/10 shadow-[inset_0_0_60px_rgba(0,0,0,0.9),0_20px_100px_rgba(0,0,0,0.95)] flex items-center justify-center relative translate-x-[2%]" 
              >
                {/* Thick metallic look behind the inner rim */}
                <div className="absolute inset-1 rounded-full border-[8px] border-[#111] shadow-[inset_0_0_20px_rgba(0,0,0,1)]"></div>
                
                {/* Purple glowing rim inside the door */}
                <div className="absolute inset-0 rounded-full border-[1.5px] border-[#8C3DFF]/20 shadow-[inset_0_0_30px_rgba(140,61,255,0.1),0_0_20px_rgba(140,61,255,0.05)]"></div>
                
                {/* Locking Bolts Container */}
                <div className="absolute inset-0 z-0">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                    <div 
                      key={i} 
                      className="absolute inset-0 flex justify-center"
                      style={{ transform: `rotate(${angle}deg)` }}
                    >
                      {/* Individual Bolt */}
                      <motion.div 
                        style={{ y: boltPosition }}
                        className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] border-x border-t border-white/[0.15] rounded-t-xl shadow-[0_10px_20px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.1)] -translate-y-[8px] md:-translate-y-[12px] relative z-0"
                      >
                         <div className="absolute inset-x-2 top-2 h-[2px] bg-white/5 rounded-full"></div>
                      </motion.div>
                    </div>
                  ))}
                </div>

                {/* Inner Ring Details */}
                <div className="absolute w-[70%] h-[70%] rounded-full border border-white/[0.04] bg-[#050505] z-10 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"></div>
                <div className="absolute w-[62%] h-[62%] rounded-full border-[6px] md:border-[10px] border-[#131313] shadow-[inset_0_5px_15px_rgba(0,0,0,1)] bg-gradient-to-br from-[#121212] to-[#050505] z-10"></div>

                {/* Central Mechanism Container */}
                <div className="absolute w-[140px] h-[140px] md:w-[220px] md:h-[220px] flex items-center justify-center z-20">
                  
                  {/* Rotating Wheel */}
                  <motion.div 
                    style={{ rotate: wheelRotation }}
                    className="relative w-full h-full flex items-center justify-center drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                  >
                    {/* Spokes */}
                    <div className="absolute w-[110%] h-[12px] md:h-[18px] bg-gradient-to-r from-[#181818] via-[#2a2a2a] to-[#181818] border-y border-white/[0.08] shadow-[0_5px_15px_rgba(0,0,0,1)] rounded-sm"></div>
                    <div className="absolute w-[110%] h-[12px] md:h-[18px] bg-gradient-to-r from-[#181818] via-[#2a2a2a] to-[#181818] border-y border-white/[0.08] shadow-[0_5px_15px_rgba(0,0,0,1)] rotate-90 rounded-sm"></div>
                    <div className="absolute w-[110%] h-[12px] md:h-[18px] bg-gradient-to-r from-[#181818] via-[#2a2a2a] to-[#181818] border-y border-white/[0.08] shadow-[0_5px_15px_rgba(0,0,0,1)] rotate-45 rounded-sm"></div>
                    <div className="absolute w-[110%] h-[12px] md:h-[18px] bg-gradient-to-r from-[#181818] via-[#2a2a2a] to-[#181818] border-y border-white/[0.08] shadow-[0_5px_15px_rgba(0,0,0,1)] -rotate-45 rounded-sm"></div>
                    
                    {/* Outer Wheel Rim */}
                    <div className="absolute w-[100%] h-[100%] rounded-full border-[12px] md:border-[18px] border-[#161616] shadow-[0_10px_20px_rgba(0,0,0,0.9),inset_0_1px_3px_rgba(255,255,255,0.1)]"></div>
                    
                    {/* Center Cap */}
                    <div className="absolute w-[70px] h-[70px] md:w-[94px] md:h-[94px] rounded-full bg-gradient-to-br from-[#252525] to-[#0a0a0a] border-[1px] border-white/10 shadow-[0_10px_30px_rgba(0,0,0,1),inset_0_2px_4px_rgba(255,255,255,0.05)] flex items-center justify-center">
                       {/* Subtle inner detail */}
                       <div className="w-[45%] h-[45%] rounded-full border-[2px] border-white/5 bg-[#080808] shadow-[inset_0_2px_5px_rgba(0,0,0,0.8)] flex items-center justify-center">
                          <div className="w-[30%] h-[30%] bg-white/[0.15] rounded-full"></div>
                       </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* 3D Hinge representation (right side) */}
                <div className="absolute right-[-8px] md:right-[-12px] top-1/2 -translate-y-1/2 w-4 md:w-6 h-32 md:h-48 bg-gradient-to-r from-[#2a2a2a] to-[#0a0a0a] border border-white/[0.08] rounded-full shadow-2xl z-30"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

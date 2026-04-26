import { useMotionValue } from "motion/react";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "motion/react";
import { cn } from "../lib/utils";

export const EvervaultCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0 max-w-full flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card w-full h-full relative overflow-hidden bg-transparent"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 w-full h-full flex flex-col">
           {children}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* Darken the background slightly on hover to make text pop */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition duration-500"></div>
      
      {/* Subdued radial mask so edge text fades out cleanly */}
      <div className="absolute inset-0 [mask-image:radial-gradient(circle_at_center,white_30%,transparent_90%)] group-hover/card:opacity-100 opacity-0 transition duration-500"></div>
      
      {/* Background gradient color wash - tuned to Evervault brand */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#8C3DFF] via-[#4A00E0] to-transparent opacity-0 group-hover/card:opacity-[0.15] backdrop-blur-3xl transition duration-500"
        style={style}
      />
      
      {/* The actual random text matrix layer */}
      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-plus-lighter group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-[10px] sm:text-xs h-full break-words whitespace-pre-wrap text-[#c0a8fd] font-mono transition duration-500 text-opacity-[0.25] leading-tight select-none pointer-events-none">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

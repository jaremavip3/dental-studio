"use client";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function MovingLine() {
  const targettable = useRef(null);
  const textLine = useRef<(SVGTextPathElement | null)[]>([]);
  const { scrollYProgress } = useScroll({
    target: targettable,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      textLine.current.forEach((text, i) => {
        text?.setAttribute("startOffset", -35 + i * 40 + e * 50 + "%");
      });
    });
  }, [scrollYProgress]);

  return (
    <div ref={targettable}>
      <svg className="w-full mb-20" viewBox="0 0 250 90">
        <path
          fill="none"
          id="curve"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text
          className="text-[8px] font-medium sm:text-[6px] uppercase"
          style={{ fill: "#FACC15" }}
        >
          {[...Array(3)].map((_, i) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <textPath
                key={i}
                ref={(ref) => (textLine.current[i] = ref)}
                href="#curve"
                startOffset={i * 40 + "%"}
              >
                DZ dental studio
              </textPath>
            );
          })}
        </text>
      </svg>
    </div>
  );
}

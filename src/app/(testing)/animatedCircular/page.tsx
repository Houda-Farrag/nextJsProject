"use client";
import AnimatedCircularProgress from "@/components/Animated/AnimatedCircular";
import React, { useRef, useEffect } from "react";

const AnimatedCircular: React.FC = () => {
  const circleRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    let progress = 0;
    const radius = 160;
    const circumference = 2 * Math.PI * radius;

    const animate = () => {
      if (circleRef.current) {
        progress += 1;
        const offset = circumference - (progress / 100) * circumference;
        circleRef.current.style.strokeDashoffset = offset.toString();
        if (progress < 100) {
          requestAnimationFrame(animate);
        }
      }
    };

    if (circleRef.current) {
      circleRef.current.style.strokeDasharray = `${circumference}`;
      circleRef.current.style.strokeDashoffset = `${circumference}`;
      animate();
    }
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="flex justify-between items-center h-[80vh] px-20 ">
      <div className="relative border ">
        html
        <AnimatedCircularProgress
          customClass="border  animate-spin duration-100"
          percentage={20}
          size={160}
          strokeColor="red"
        />
      </div>
      <div className="border  ">
        <AnimatedCircularProgress
          percentage={20}
          size={160}
          strokeColor="#FB4534"
        />
      </div>
      <div className="border ">
        <AnimatedCircularProgress
          percentage={40}
          size={160}
          strokeColor="orange"
        />
      </div>
      <div className="border  ">
        <AnimatedCircularProgress
          percentage={20}
          size={160}
          strokeColor="#FB4534"
        />
      </div>
      <div className="border  ">
        <AnimatedCircularProgress
          percentage={20}
          size={160}
          strokeColor="#FB4534"
        />
      </div>
    </div>
  );
};

export default AnimatedCircular;

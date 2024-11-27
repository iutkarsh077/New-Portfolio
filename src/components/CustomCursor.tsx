"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 pointer-events-none h-0 w-0 lg:h-5 lg:w-5 bg-teal-500 rounded-full"
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 20,
      }}
    />
  );
};

export default CustomCursor;

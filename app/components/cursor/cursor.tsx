"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "./cursor.css";

type MousePosition = {
  x: number;
  y: number;
};

interface Variant {
  x: number;
  y: number;
  height: number;
  width: number;
  offset: number;
  transition?: {
    duration: number;
    ease: string;
  };
}

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const variants: { default: Variant } = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      offset: 32,
      transition: {
        duration: 0,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const mouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={"default"}
      style={{ offset: 0 }}
    />
  );
};

export default Cursor;

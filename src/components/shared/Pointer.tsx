'use client'

import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";

export default function Pointer({ bodyRef }: any) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref, [bodyRef]);

  return (
    <motion.div
      ref={ref}
      className="box"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  );
}

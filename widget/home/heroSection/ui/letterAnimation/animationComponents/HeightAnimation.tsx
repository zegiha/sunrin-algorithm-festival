'use client'

import {motion} from "motion/react";

export default function HeightAnimation({
  id,
  strokeCount,
  duration,
}: {
  id: string
  strokeCount: number
  duration?: number
}) {
  return (
    <clipPath id={`${id}-${strokeCount}`}>
      <motion.rect
        initial={{height: 0, opacity: 0}}
        animate={{height: 95, opacity: 1}}
        transition={{
          delay: 0.32,
          duration: duration ?? 0.64 + (strokeCount > 7 ? 0.16 : 0.32) * (strokeCount-1),
          ease: "easeInOut"
        }}
        width="75"
        x="0"
        y="0"
      />
    </clipPath>
  )
}
